// utils/ticketNFTAbi.js
export const ticketNFTAbi = [
  {
    "inputs": [
      { "name": "to", "type": "address" },
      { "name": "_from", "type": "string" },
      { "name": "_to", "type": "string" },
      { "name": "_departureDate", "type": "uint256" },
      { "name": "_returnDate", "type": "uint256" }
    ],
    "name": "mintFlightTicket",
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCurrentTicketId",
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "name": "ticketId", "type": "uint256" },
      { "indexed": true, "name": "owner", "type": "address" },
      { "indexed": false, "name": "from", "type": "string" },
      { "indexed": false, "name": "to", "type": "string" }
    ],
    "name": "TicketMinted",
    "type": "event"
  }
] as const;