const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Ticket", function () {
  let tickETH, deployer
  beforeEach(async () => {
    deployer = await ethers.getSigner()
    const TickETH = await ethers.getContractFactory("TickETH")
    tickETH = await TickETH.deploy()

  })

  it("Ticket minted", async () => {
    const itemId = await tickETH.mintNFT("0x71bE63f3384f5fb98995898A86B02Fb2426c5788", "http://bafybeiczrkmoa3bt6u5sn7b6doi5fz3yrnlhb36mdrx5lp6wfyf4behb4a.ipfs.localhost:8080/")
    expect(tickETH).to.emit(tickETH, "NewNFTMinted")
    // expect(counter).to.equal(BigNumber.from(22))
  })

})