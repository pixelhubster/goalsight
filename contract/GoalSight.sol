//SPDX-License-Identifier: MIT

pragma solidity ^0.8.23;

contract GoalSight{
    struct IGoal {
        string aim;
        address owner;
        string email;
        ILocation location;
        string description;
        string goal;
        uint256[] partners;
        string createdAt;
        uint256 balance;
        bool approved;
        // mapping(address => uint256) contributors;
    }

    struct ILocation {
        string country;
        string state;
        string city;
        string locationAddress;
        string locationAddress2;
    }
    struct IPartner {
        string name;
        address owner;
        string email;
        uint256 number;
        ILocation location;
        string description;
        string goal;
        string createdAt;
        bool approved;
    }
    struct IPow {
        string description;
        string createdAt;
    }
    struct IApprover {
        string name;
        address owner;
    }
    struct IContributor { 
        uint256 balance;
        address owner;
        mapping(uint => string) contributor;
    }
    IGoal[] public goals;
    IPartner[] public partners;
    mapping(address => uint256) public reputation;
    mapping(uint256 => mapping(address => uint256)) contributors;

    function createGoal(
        string memory _aim,
        string memory _email,
        ILocation memory _location,
        string memory _description,
        string memory _goal,
        string memory _createdAt,
        uint256[] memory _partners
    ) public   {
        IGoal memory _newGoal = IGoal({
            aim: _aim,
            owner: msg.sender,
            email: _email,
            location: _location,
            description: _description,
            goal: _goal,
            createdAt: _createdAt,
            balance: 0,
            partners: _partners,
            approved: false
        });
        goals.push(_newGoal);
    }

    function contribute(uint256 _id) public payable  {
        uint256 balance = contributors[_id][msg.sender];
        contributors[_id][msg.sender] += msg.value;
        if (balance <= 200) {
            if (contributors[_id][msg.sender] >= 200) {
                reputation[msg.sender] += 1;
            }
        }
        //earn_token function
    }
    
    modifier hasToken {
        _;
    }

    function becomePartner(
        string memory name,
        string memory email,
        uint256 number,
        ILocation memory location,
        string memory description,
        string memory goal,
        string memory createdAt
    ) public {
        IPartner memory _newPartner = IPartner({
            name: name,
            owner: msg.sender,
            email: email,
            number: number,
            location: location,
            description: description,
            goal: goal,
            createdAt: createdAt,
            approved: false
        });
        partners.push(_newPartner);
    }

    struct IVote{
        uint approve;
        uint reject;
    }
    mapping(uint => IVote) public vote;
    mapping(uint => mapping(address => bool)) public voted;
    mapping(uint => IVote) public partnerVote;
    mapping(uint => mapping(address => bool)) public partnerVoted;

    modifier hasVoted(uint _id) {
        require(voted[_id][msg.sender] == false, "User has voted already");
        _;
    }
    modifier hasVotedPartner(uint _id) {
        require(partnerVoted[_id][msg.sender] == false, "User has voted already");
        _;
    }
    modifier isReputatable {
        require(reputation[msg.sender] > 2, "User doesnot have enough reputation");
        _;
    }
    function approveGoal(uint256 _id) public hasToken hasVoted(_id) {
        vote[_id].approve += 1;
        voted[_id][msg.sender] = true;
    }
    function rejectGoal(uint256 _id) public hasToken hasVoted(_id) {
        vote[_id].reject += 1;
        voted[_id][msg.sender] = true;
    }
    function approvePartner(uint _id) public hasToken hasVotedPartner(_id) isReputatable {
        partnerVote[_id].approve += 1;
        partnerVoted[_id][msg.sender] = true;
    }
    function rejectPartner(uint256 _id) public hasToken hasVotedPartner(_id) isReputatable {
        vote[_id].reject += 1;
        voted[_id][msg.sender] = true;
    }
    function endGoal(uint _id) public {
        require(goals[_id].owner == msg.sender, "Must be Owner");
        //distribute
        //reward user
    }

}