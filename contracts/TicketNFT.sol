// contracts/TicketNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TicketNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _ticketIds;

    struct FlightTicket {
        uint256 id;
        string from;
        string to;
        uint256 departureDate;
        uint256 returnDate;
        address payable owner;
        bool used;
    }

    mapping(uint256 => FlightTicket) public flightTickets;

    event TicketMinted(
        uint256 indexed ticketId,
        address indexed owner,
        string from,
        string to
    );

    constructor() ERC721("Flight Ticket", "FLIGHT") {}

    function mintFlightTicket(
        address to,
        string memory _from,
        string memory _to,
        uint256 _departureDate,
        uint256 _returnDate
    ) public returns (uint256) {
        _ticketIds.increment();
        uint256 newTicketId = _ticketIds.current();

        flightTickets[newTicketId] = FlightTicket({
            id: newTicketId,
            from: _from,
            to: _to,
            departureDate: _departureDate,
            returnDate: _returnDate,
            owner: payable(to),
            used: false
        });

        _safeMint(to, newTicketId);

        emit TicketMinted(newTicketId, to, _from, _to);
        return newTicketId;
    }
}