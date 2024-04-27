//SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract Dao {
    struct IVote{
        uint approve;
        uint reject;
        uint256 expire;
        bool checked;
    }
    mapping(uint => IVote) public vote;
    mapping(uint => mapping(address => bool)) public voted;
    mapping(uint => IVote) public partnerVote;
    mapping(uint => mapping(address => bool)) public partnerVoted;
    mapping(address => uint256) public reputation;

    function getGoalVote(uint _id) public view returns(IVote memory) {
        return vote[_id];
    }
    function getPartnerVote(uint _id) public view returns(IVote memory) {
        return partnerVote[_id];
    }
    function hasVotedOnGoal(uint _id) public view returns(bool) {
        return voted[_id][msg.sender];
    }
    function hasVotedOnPartner(uint _id) public view returns(bool) {
        return partnerVoted[_id][msg.sender];
    }
    modifier hasVoted(uint _id) {
        require(voted[_id][msg.sender] == false, "User has voted already");
        _;
    }
    modifier hasVotedPartner(uint _id) {
        require(partnerVoted[_id][msg.sender] == false, "User has voted already");
        _;
    }
    modifier isReputatable {
        require(reputation[msg.sender] > 2, "User does not have enough reputation");
        _;
    }
    modifier hasGoalVoteExpired(uint256 _id) {
        require(block.timestamp < vote[_id].expire, "Goal Vote has expired");
        _;
    }
    modifier hasPartnerVoteExpired(uint256 _id) {
        require(block.timestamp < vote[_id].expire, "Partner Vote has expired");
        _;
    }
    modifier hasToken {
        _;
    }
    function approveGoal(uint256 _id) public hasToken hasVoted(_id) hasGoalVoteExpired(_id) {
        vote[_id].approve += 1;
        voted[_id][msg.sender] = true;
    }
    function rejectGoal(uint256 _id) public hasToken hasVoted(_id) hasGoalVoteExpired(_id) {
        vote[_id].reject += 1;
        voted[_id][msg.sender] = true;
    }
    function approvePartner(uint _id) public hasToken hasVotedPartner(_id) isReputatable hasPartnerVoteExpired(_id) {
        partnerVote[_id].approve += 1;
        partnerVoted[_id][msg.sender] = true;
    }
    function rejectPartner(uint256 _id) public hasToken hasVotedPartner(_id) isReputatable hasPartnerVoteExpired(_id) {
        vote[_id].reject += 1;
        voted[_id][msg.sender] = true;
    }
    function setGoalExpire(uint _id, uint time) public {
        vote[_id].expire = time;
    }
    function setPartnerExpire(uint _id, uint time) public {
        partnerVote[_id].expire = time;
    }
    function setPartnerCheck(uint _id, bool boolean) public {
        partnerVote[_id].checked = boolean;
    }
    function setGoalCheck(uint _id, bool boolean) public {
        vote[_id].checked = boolean;
    }
    function setReputation(address caller, uint number) public {
        reputation[caller] += number;
    }
}
