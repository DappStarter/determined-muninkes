require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close bone tooth story rescue night mad hope problem olympic talk'; 
let testAccounts = [
"0xdde941fb2694354f9b5ba29f98d3e9073ae4406e753a38b9439309661b6e5b0b",
"0x68c415d7c1c5dc338e3bbc8f1cd0a3412fbf90daa144b7af07a52643d6a23eaf",
"0x4caecf0896d400ead0045165a1c38c1f5cfe36935ee1b120e3032709d49565b7",
"0x5b0053aac998e6b9258fa09c8af7fec98ea143a53f33a568a413b4eb275181c9",
"0xa38b4afdac9667fa51a247dfcc9fa92ee2d899a37f124b8d66d5aa93894c1724",
"0x5013f8bc991d1721ee3b0481ede390439cf09859d3cc2585d28e3ae0c50a999c",
"0x7a86e6c8a2c7d9ffb0a3ef129b634dd380cccf11b67c587e0f465e7ec3c6ef27",
"0x05626465ecddc41307886f1740d20a62796e634533aeab4841ceb1b0f5be8067",
"0xc485085b98e8ae13f2699249e8091c4222758a8f8ed8d5dba9ce6e84827a150c",
"0x46f74eafe9a2a28a12cc0e31d2081102beeb636b86cdefbb427e3316d98b0993"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
