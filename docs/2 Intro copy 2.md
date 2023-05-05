The Uniswap Protocol
Introduction
The Uniswap protocol is a decentralized, peer-to-peer system designed for exchanging cryptocurrencies (ERC-20 Tokens) on the Ethereum blockchain. The protocol is implemented as a set of persistent, non-upgradable smart contracts, prioritizing censorship resistance, security, self-custody, and functioning without any trusted intermediaries who may selectively restrict access.

There are three versions of the Uniswap protocol. V1 and V2 are open source and licensed under GPL. V3 is open source with minor modifications, which can be viewed here. Each version of Uniswap, once deployed, will function indefinitely with 100% uptime, provided the continued existence of the Ethereum blockchain.

How does the Uniswap protocol compare to a typical market?
To understand how the Uniswap protocol differs from a traditional exchange, it is essential to examine two aspects: how the Automated Market Maker (AMM) design deviates from traditional central limit order book-based exchanges, and how permissionless systems differ from conventional permissioned systems.

Order Book vs. AMM
Most publicly accessible markets use a central limit order book style of exchange, where buyers and sellers create orders organized by price level that are progressively filled as demand shifts. Anyone who has traded stocks through brokerage firms will be familiar with an order book system.

The Uniswap protocol takes a different approach, using an Automated Market Maker (AMM), sometimes referred to as a Constant Function Market Maker, in place of an order book.

In simple terms, an AMM replaces the buy and sell orders in an order book market with a liquidity pool of two assets, both valued relative to each other. As one asset is traded for the other, the relative prices of the two assets shift, and a new market rate for both is determined. In this dynamic, a buyer or seller trades directly with the pool, rather than with specific orders left by other parties. The advantages and disadvantages of Automated Market Makers versus their traditional order book counterparts are under active research by a growing number of parties. We have collected some notable examples on our research page.

Permissionless Systems
The second departure from traditional markets is the permissionless and immutable design of the Uniswap protocol. These design decisions were inspired by Ethereum's core tenets and our commitment to the ideals of permissionless access and immutability as indispensable components of a future where anyone in the world can access financial services without fear of discrimination or counterparty risk.

Permissionless design means that the protocol's services are entirely open for public use, with no ability to selectively restrict who can or cannot use them. Anyone can swap, provide liquidity, or create new markets at will. This is a departure from traditional financial services, which typically restrict access based on geography, wealth status, and age.

The protocol is also immutable, meaning it is not upgradeable. No party can pause the contracts, reverse trade execution, or change the behavior of the protocol in any way. It is worth noting that Uniswap Governance has the right (but no obligation) to divert a percentage of swap fees on any pool to a specified address. However, this capability is known to all participants in advance, and to prevent abuse, the percentage is constrained between 10% and 25%.