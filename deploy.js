const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');


const provider = new HDWalletProvider(
  'lift onion adult become ethics arena virus city bean punch resist casual',
  'https://rinkeby.infura.io/v3/a652313768a14fcea79a6b709cca2b71'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from accounts',accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode , arguments: ['Hi there!'] })
    .send({gas: '11000000', from: accounts[0]});

  console.log('Contract deployed to', result.options.address);
};
deploy();
