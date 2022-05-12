require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note sad protect hockey inflict swing genuine'; 
let testAccounts = [
"0x6e18ad04c19870c5ca67df4b73a5f1fdc38fd2cf7467fe7af8a89c399cfa074d",
"0xc0712b9fdf8d34714d7dc05501bb5801afaa0d3adc704dd7e5067d1cb8206443",
"0x9165accd1b778f0a1b97c08b18b691cc549985fbf0a7cecb8f8b1440da8a856f",
"0x6a554a7bf48f0273d86138f08c7d4a364129f72b59fac66f067b4cf9e0a2f75c",
"0x78646ef988748f1578b7f18b14a60c0d229241e2220228e63adc4bdd3a033a48",
"0x14e5d3f2fc499a9334db99cb55682397bff5a98c08150b8387e605bfc189bd03",
"0xf3469ce924902375e3767a8bb9a40296a47e2cf885132414feace9bb83b1b6f2",
"0x9e3942f36eb38d40965b293da40b8161b5f4299c1f4e486a9bae2cdead7d5e85",
"0x38ca1cb14e63d6ce9573ed8b1435d22010ee305eae9404d427e23322e1805a98",
"0xfb11d2eb60a78bfb30454216b6231a4f1a08b1831e7646964aba4cb56ac88d59"
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
            version: '^0.8.0'
        }
    }
};

