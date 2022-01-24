const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function(deployer) {
  await deployer.deploy(Token);
  const token = await Token.deployed();

  // create Token coins
  await deployer.deploy(EthSwap);
  const ethSwap = await EthSwap.deployed();

  // transfer all tokens to EthSwap (1 million)
  await token.transfer(ethSwap.address, '1000000000000000000000000');
};
