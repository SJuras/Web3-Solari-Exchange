pragma solidity ^0.5.0;

import "./Token.sol";



contract EthSwap {

  string public name = "Solari Echange Working";

  // Keep track of Tokens in smart contract
  Token public token;
  uint public rate = 100;

  constructor(Token _token) public {
    token = _token;
  }

  // buy Tokens functionality
  function buyTokens() public payable {
    // amount of Ether * Redemption rate (num of received tokens for 1 ether)
    // calc tokens to buy (100 tokens for 1 ether);
    uint tokenAmount = msg.value * rate;
    token.transfer(msg.sender, tokenAmount);
  }

}
