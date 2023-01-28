
async function main() {

  const Ticket = await ethers.getContractFactory("TickETH")
  const ticket = await Ticket.deploy()

  await ticket.deployed()

  console.log("Deployed the Ticket contract")

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})