const { expect } = require("chai")
const { BigNumber } = require("ethers")
const { ethers } = require("hardhat")

describe("Ticket", function () {
  let ticket, deployer
  beforeEach(async () => {
    deployer = await ethers.getSigner()
    const Ticket = await ethers.getContractFactory("Ticket")
    ticket = await Ticket.deploy()

    await ticket.deployed()
  })

  it("Increases the counter", async () => {
    const counter = await ticket.mintNFT("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "uri")
    console.log(counter)
    // expect(counter).to.equal(BigNumber.from(22))
  })

})