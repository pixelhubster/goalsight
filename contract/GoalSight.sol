//SPDX-License-Identifier: MIT

pragma solidity ^0.8.23;
import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "./Dao.sol";
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
    struct IContributor {
        uint balance;
        bool rewarded;
    }

contract GoalSight is ERC20 {
    //declare contructor where owner can withdraw fund
    Dao public daoLibrary;
    AggregatorV3Interface internal priceFeed;
    address public owner;

    constructor(uint initialSupply) ERC20("Goal", "G") {
        owner = msg.sender;
        daoLibrary = new Dao();
        priceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        _mint(msg.sender, initialSupply * 1e18);
    }


    IGoal[] private goals;
    IPartner[] private partners;
    mapping(uint256 => mapping(address => IContributor)) private contributors;
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
        daoLibrary.setGoalExpire(goals.length-1, block.timestamp+60);
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

    event Ledger (
        uint indexed id,
        address indexed to,
        uint256 partnerID,
        uint256 amount,
        string purpose
    );

    function withdraw(uint _id, string memory _purpose) public payable {
        for (uint i=0; i<goals[_id].partners.length; i++) 
        {
            uint id = goals[_id].partners[i];
            if (partners[id].owner == msg.sender) {
                require(msg.value > 0 && msg.value < goals[_id].balance, "Withdrawal amount must be between 0 and balance");
                payable(msg.sender).transfer(msg.value);
                emit Ledger(_id,msg.sender,id,msg.value,_purpose);
                goals[_id].balance -= msg.value;
            }
        }
        revert("Sender is not partner for the specified goal");
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
        uint256 _balance = getConversion(contributors[_id][msg.sender].balance);
        contributors[_id][msg.sender].balance += msg.value;
        if (_balance <= 200) {
            if (contributors[_id][msg.sender].balance >= 200) {
                daoLibrary.setReputation(msg.sender,1);
            }
        }
        goals[_id].balance += msg.value;
        //earn_token function
    }

    function reward(uint _id) public {
        require(contributors[_id][msg.sender].rewarded == false, "Sender has already being rewarded");
        require(goals[_id].hasEnded == true, "Goal has not ended yet");
        uint _balance = contributors[_id][msg.sender].balance;
        require(_balance >0,"No contributions made to this goal");
        transfer(msg.sender, _balance * (3 * 1e17));
    }
    
    modifier hasToken {
        require(balanceOf(msg.sender)>0, "User has no token");
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
        // partnerVote[partners.length - 1].expire = block.timestamp + 60;
        daoLibrary.setPartnerExpire(partners.length -1, block.timestamp + 60);
    }

    struct IVote{
        uint approve;
        uint reject;
        uint256 expire;
        bool checked;
    }
    function endGoal(uint _id) public isActive(_id) {
        require(goals[_id].owner == msg.sender, "Must be Owner");
        //distribute
        balance += goals[_id].balance;
        goals[_id].balance = 0;
        //reward owenr, partner
        //earn token function
        daoLibrary.setReputation(msg.sender,2);
        transfer(msg.sender, 2);
        for (uint i = 0; i < goals[_id].partners.length; i++) 
        {
            uint id = goals[_id].partners[i];
            daoLibrary.setReputation(partners[id].owner, 2);
            transfer(partners[id].owner, 2);
        }
        //reward contributors
        //end goal
        goals[_id].hasEnded = true;
    }
    function getReputation() public view returns(uint256) {
        return daoLibrary.reputation(msg.sender);
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
        (,,,bool checked) = daoLibrary.vote(_id);
        require(checked == false, "Goal Vote has ended");
        _;
    }
    modifier partnerChecked(uint _id) {
        (,,,bool checked) = daoLibrary.partnerVote(_id);
        require(checked == false, "Partner Vote has ended");
        _;
    }
    function endGoalVote(uint256 _id) public goalChecked(_id) { 
        (uint approve,uint reject,uint expire,) = daoLibrary.vote(_id);
        require(block.timestamp >= expire, "Vote not expired");
        if (approve > reject) {
            goals[_id].approved = true;
            daoLibrary.setGoalCheck(_id,true);
        }
        else if (approve == reject) {
            //extends expire to 1min for the sake of hackathon
            daoLibrary.setGoalExpire(_id,60);
        }
        else {
            goals[_id].approved = false;
            daoLibrary.setGoalCheck(_id,true);
        }
    }
    function endPartnerVote(uint256 _id) public partnerChecked(_id) {
        (uint approve,uint reject,uint expire,) = daoLibrary.partnerVote(_id);
        require(block.timestamp >= expire, "Vote not expired");
        if (approve > reject) {
            partners[_id].approved = true;
            daoLibrary.setPartnerCheck(_id,true);
        }
        else if (approve == reject) {
            //extends expire to 1min for the sake of hackathon
            daoLibrary.setPartnerExpire(_id,60);
        }
        else {
            partners[_id].approved = false;
            daoLibrary.setPartnerCheck(_id,true);
        }
    }
}