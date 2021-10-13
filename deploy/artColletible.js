


async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Artcoll = await ethers.getContractFactory("ArtCollectible");
    const art = await Artcoll.deploy();

    console.log( " art data ", art);
  
    console.log(" NFT minted address:", art.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

    // to deploy this contract use command :

    // npx hardhat run scripts/deploy.js --network <network-name>