//SPDX-License-Identifier: MIT

pragma solidity ^0.8.23;
import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import "./Goal.sol";

contract GoalSight{
    //declare contructor where owner can withdraw fund
    AggregatorV3Interface internal priceFeed;
    constructor() {
        priceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        Dao daoLibrary = new Dao();
    }
    struct IGoal {
        string aim;
        address owner;
        string email;
        ILocation location;
        string description;
        string goal;
        uint256[] partners;
        uint256[] onWait;
        uint256 createdAt;
        uint256 balance;
        bool approved;
        bool hasEnded;
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
        uint256 createdAt;
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
    uint public balance;

    function getPrice() internal view returns(uint256) {
        (,int price,,,) = priceFeed.latestRoundData();
        return uint256(price * 1e10);
    }
    function getConversion(uint256 _amount) public view returns(uint256) {
        uint256 eth = getPrice();
        uint256 amountInUsd = (eth * _amount) / 1e18;
        return amountInUsd;
    }
    function createGoal(
        string memory _aim,
        string memory _email,
        ILocation memory _location,
        string memory _description,
        string memory _goal,
        uint256[] memory _partners
    ) public   {
        uint256[] memory _part;
        IGoal memory _newGoal = IGoal({
            aim: _aim,
            owner: msg.sender,
            email: _email,
            location: _location,
            description: _description,
            goal: _goal,
            createdAt: block.timestamp,
            balance: 0,
            onWait: _partners,
            partners: _part,
            approved: false,
            hasEnded: false
        });
        goals.push(_newGoal);
        // vote[goals.length - 1].expire = block.timestamp + 60;
        // daoLibrary.vote[goals.length - 1].expire = block.timestamp + 60;
        // uint256 exp = daoLibrary.vote[0].expire;
    }
    modifier wasInvited() {
        _;
    }

    function acceptPartnership(uint256 _id) public {
        for (uint i =0; i<goals[_id].onWait.length; i++) 
        {
            uint id = goals[_id].onWait[i];
            if (msg.sender == partners[id].owner) {
                delete goals[_id].onWait[i];
                goals[_id].partners.push(id);
            }
        }
    }

    modifier isActive(uint _id) {
        require(goals[_id].hasEnded == false, "Goal has ended");
        _;
    }
    modifier  isApproved(uint _id) {
        require(goals[_id].approved == true, "Goal is not approved");
        _;
    }

    //validate goal existence
    function contribute(uint256 _id) public payable isActive(_id) isApproved(_id) {
        uint256 _balance = getConversion(contributors[_id][msg.sender]);
        contributors[_id][msg.sender] += msg.value;
        if (_balance <= 200) {
            if (contributors[_id][msg.sender] >= 200) {
                reputation[msg.sender] += 1;
            }
        }
        goals[_id].balance += msg.value;
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
        string memory goal
    ) public {
        IPartner memory _newPartner = IPartner({
            name: name,
            owner: msg.sender,
            email: email,
            number: number,
            location: location,
            description: description,
            goal: goal,
            createdAt: block.timestamp,
            approved: false
        });
        partners.push(_newPartner);
        //duration is 60sec, for sake of the hackathon
        partnerVote[partners.length - 1].expire = block.timestamp + 60;
    }

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

    // function getGoalVote(uint _id) public view returns(IVote memory) {
    //     return vote[_id];
    // }
    // function getPartnerVote(uint _id) public view returns(IVote memory) {
    //     return partnerVote[_id];
    // }
    // function hasVotedOnGoal(uint _id) public view returns(bool) {
    //     return voted[_id][msg.sender];
    // }
    // function hasVotedOnPartner(uint _id) public view returns(bool) {
    //     return partnerVoted[_id][msg.sender];
    // }
    // modifier hasVoted(uint _id) {
    //     require(voted[_id][msg.sender] == false, "User has voted already");
    //     _;
    // }
    // modifier hasVotedPartner(uint _id) {
    //     require(partnerVoted[_id][msg.sender] == false, "User has voted already");
    //     _;
    // }
    // modifier isReputatable {
    //     require(reputation[msg.sender] > 2, "User doesnot have enough reputation");
    //     _;
    // }
    // modifier hasGoalVoteExpired(uint256 _id) {
    //     require(block.timestamp < vote[_id].expire, "Goal has expired");
    //     _;
    // }
    // modifier hasPartnerVoteExpired(uint256 _id) {
    //     require(block.timestamp < vote[_id].expire, "Goal has expired");
    //     _;
    // }
    // function approveGoal(uint256 _id) public hasToken hasVoted(_id) hasGoalVoteExpired(_id) {
    //     vote[_id].approve += 1;
    //     voted[_id][msg.sender] = true;
    // }
    // function rejectGoal(uint256 _id) public hasToken hasVoted(_id) hasGoalVoteExpired(_id) {
    //     vote[_id].reject += 1;
    //     voted[_id][msg.sender] = true;
    // }
    // function approvePartner(uint _id) public hasToken hasVotedPartner(_id) isReputatable hasPartnerVoteExpired(_id) {
    //     partnerVote[_id].approve += 1;
    //     partnerVoted[_id][msg.sender] = true;
    // }
    // function rejectPartner(uint256 _id) public hasToken hasVotedPartner(_id) isReputatable hasPartnerVoteExpired(_id) {
    //     vote[_id].reject += 1;
    //     voted[_id][msg.sender] = true;
    // }
    function endGoal(uint _id) public isActive(_id) {
        require(goals[_id].owner == msg.sender, "Must be Owner");
        //distribute
        balance += goals[_id].balance;
        goals[_id].balance = 0;
        //reward user
        //earn token function
        reputation[msg.sender] += 2;

        //end goal
        goals[_id].hasEnded = true;
    }
    function getReputation() public view returns(uint256) {
        return reputation[msg.sender];
    }
    function getGoals() public view returns(IGoal[] memory) {
        return goals;
    }
    function getPartners() public view returns(IPartner[] memory) {
        return partners;
    }
    function getGoal(uint _id) public view returns(IGoal memory) {
        return goals[_id];
    }
    function getPartner(uint _id) public view returns(IPartner memory) {
        return partners[_id];
    }
    modifier goalChecked(uint _id) {
        require(vote[_id].checked == false, "Goal Vote has being checked");
        _;
    }
    modifier partnerChecked(uint _id) {
        require(partnerVote[_id].checked == false, "Partner Vote has being checked");
        _;
    }
    // function endGoalVote(uint256 _id) public goalChecked(_id) { 
    //     require(block.timestamp >= vote[_id].expire, "Vote not expired");
    //     if (vote[_id].approve > vote[_id].reject) {
    //         goals[_id].approved = true;
    //         vote[_id].checked = true;
    //     }
    //     else if (vote[_id].approve == vote[_id].reject) {
    //         //extends expire to 1min for the sake of hackathon
    //         vote[_id].expire += 60;
    //     }
    //     else {
    //         goals[_id].approved = false;
    //         vote[_id].checked = true;
    //     }
    // }
    function endPartnerVote(uint256 _id) public goalChecked(_id) { 
        require(block.timestamp >= partnerVote[_id].expire, "Vote not expired");
        if (partnerVote[_id].approve > partnerVote[_id].reject) {
            partners[_id].approved = true;
            partnerVote[_id].checked = true;
        }
        else if (partnerVote[_id].approve == partnerVote[_id].reject) {
            //extends expire to 1min for the sake of hackathon
            partnerVote[_id].expire += 60;
        }
        else {
            partners[_id].approved = false;
            partnerVote[_id].checked = true;
        }
    }

}