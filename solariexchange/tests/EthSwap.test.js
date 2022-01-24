const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

// Chai
require('chai')
  .use(require('chai-as-promised'))
  .should()

// convert total value of tokens into human-readable,
// only full units count, no decimals
function tokens(n) {
  return web3.utils.toWei(n, 'ether';)
}

// tests
contract('EthSwap', (accounts) => {

  let token, ethSwap;

  before(async () => {
    let token = await Token.new()
    let ethSwap = await EthSwap.new(token.address)
      await token.transfer(ethSwap.address, tokens('1000000'));
  })

  discribe('Token deployment', async () => {
    it('contract has a name', async() => {
      const name = await token.name()
      assert.equal(name , 'Solari Token');
    })
  })


  discribe('EthSwap deployment', async () => {
    it('contract has a name', async() => {
      const name = await ethSwap.name()
      assert.equal(name , 'Solari Echange Working');
    })

    it('contract has tokens', async () => {
      let balance = await token.balanceOf(ethSwap.address)
      asset.equal(balance.toString(), tokens('1000000'));
    })
  })

});
