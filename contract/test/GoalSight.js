const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const BN = require('bn.js');
const { anyValue} = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GoalSight", function () {
    async function initial() {
        const totalSupply = 2;
        const {owner, otherAccount} = await ethers.getSigners();
        const GoalSight = await ethers.getContractFactory("GoalSight");
        const goalSight = await GoalSight.deploy(totalSupply);
        return {goalSight, owner, otherAccount};
    };
    describe("Deployment", function () {
        it("Should check totalSupply", async function() {
            const {goalSight, totalSupply} = await loadFixture(initial);
            // expect(await goalSight.totalSupply().toNumber).to.equal(totalSupply * 10 ** 18);
            // const total = BN("new",await goalSight.totalSupply());
            // console.log(total)
        })

        it("Should check the owner", async function () {
            const {goalSight, owner} = await loadFixture(initial);
            // expect(await goalSight.owner()).to.equal(owner);
            // console.log(await goalSight.getAddress(), await goalSight.owner())
        })
    })
    initial();

 
})
