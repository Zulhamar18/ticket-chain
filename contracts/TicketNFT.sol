// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TicketNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _ticketIds;

    struct Ticket {
        uint256 id;
        string from;
        string to;
        uint256 departureDate;
        uint256 returnDate;
        address payable owner;
    }

    mapping(uint256 => Ticket) public tickets;

    event TicketMinted(
        uint256 indexed ticketId,
        address indexed owner,
        string from,
        string to
    );

    constructor() ERC721("TicketChain Ticket", "TICKET") {}

    function mintTicket(
        address to,
        string memory _from,
        string memory _to,
        uint256 _departureDate,
        uint256 _returnDate
    ) public returns (uint256) {
        _ticketIds.increment();
        uint256 newTicketId = _ticketIds.current();

        tickets[newTicketId] = Ticket({
            id: newTicketId,
            from: _from,
            to: _to,
            departureDate: _departureDate,
            returnDate: _returnDate,
            owner: payable(to)
        });

        _safeMint(to, newTicketId);

        emit TicketMinted(newTicketId, to, _from, _to);
        return newTicketId;
    }
}