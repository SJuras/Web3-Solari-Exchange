pragma solidity ^0.5.0;

import "./Token.sol";



contract EthSwap {

  string public name = "Solari Echange Working";

  // Keep track of Tokens in smart contract
  Token public token;
  uint public rate = 100;

  // events
  event TokenPurchased(
    address account,
    address token,
    uint amount,
    uint rate
    );

  constructor(Token _token) public {
    token = _token;
  }

  // buy Tokens functionality
  function buyTokens() public payable {
    // amount of Ether * Redemption rate (num of received tokens for 1 ether)
    // calc tokens to buy (100 tokens for 1 ether);
    uint tokenAmount = msg.value * rate;

    // require that exchange has enough tokens to sell
    require(token.balanceOf(address(this)) >= tokenAmount);

    // transfer tokens to user 
    token.transfer(msg.sender, tokenAmount);

    // emit event that tokens were purchased
    emit TokenPurchased(msg.sender, address(token), tokenAmount, rate);
  }

}
