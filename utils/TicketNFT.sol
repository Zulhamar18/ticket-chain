// contracts/TicketNFT.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TicketNFT is ERC721 {
  using Counters for Counters.Counter;
  Counters.Counter private _ticketIds;

  constructor() ERC721("TicketChain", "TICKET") {}

  function mintTicket(address to) public returns (uint256) {
    _ticketIds.increment();
    uint256 newTicketId = _ticketIds.current();
    _safeMint(to, newTicketId);
    return newTicketId;
  }
}