const { version } = require("chai");

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('hardhat-abi-exporter');
// require("./task/counter.js");
const fs = require('fs');
const mnemonic =fs.readFileSync("/home/ubuntu/zwj-learn/.secret").toString().trim();
const infrakey='';
const scankey='';

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity:{
    compilers:[
      {
        version: "0.8.15",
        settings:{
          optimizer:{
            enable:true,
            runs:200
          }
        }
      }
    ]
  },
  networks:{
    dev:{
      url:"http://127.0.0.1:8545",
      chainId:31337,
    },
    oktest:{
      url:"https://exchaintestrpc.okex.org",
      chainId:65,
      accounts:{
        mnemonic:mnemonic,
      },
    },
    bnbtest:{
      url:"https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId:97,
      accounts:{
        mnemonic:mnemonic,
      },
    },
    ropsten:{
      url:"https://ropsten.infura.io/v3/8cccc98026714be18a4052434bb4ae77",
      chainId:3,
      accounts:{
        mnemonic:mnemonic,
      },
    },
    mumbai:{
      url:"https://matic-mumbai.chainstacklabs.com",
      chainId:80001,
      accounts:{
        mnemonic:mnemonic,
      },
    }
  },
  etherscan:{
    apiKey:{
      bscTestnet: 'AXUTCF27F9PY5VJHE25J6Q4HB6DIG9DQWH',
      ropsten:"7B8S6DPCHKEE5FGWX9JPR7Z9KNB44Q9CIS",
      polygonMumbai:"3CSJBYTBG52PFVXN4EX4JBIH5YY4X5SHEH"
    }
  }
};
