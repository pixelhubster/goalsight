const hre = require("hardhat");
async function main() {
    const totalSupply = 2000000;
    const goalSight = await hre.ethers.getContractFactory('GoalSight');
    const goal = await goalSight.deploy(totalSupply);
    console.log("GoalSight deployed to: ", await goal.getAddress());
}
main().catch((err) => {
    console.log(err);
    process.exit(1);
})