const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic =fs.readFileSync(".secret").toString().trim();

module.exports = {
  compilers:{
    solc:{
      version:"0.8.9",
    }
  },
  networks: {
   development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"
   },
   test: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"
   },
   oktest:{
     provider:()=> new HDWalletProvider(mnemonic,"https://exchaintestrpc.okex.org"),
      network_id: 65,
      gas: 5500000,
      confirmation:2,
      timeoutBlocks: 200,
      skipDryRun: true

   }
  },
  //
  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows: 
  // $ truffle migrate --reset --compile-all
  //
  // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
  // }
};
