import React from 'react'
import './First.css'
import { Transition, animated } from 'react-spring'
function Intro() {
  return (
    <div  className="wi" id='next'>
        <h1 className='gp'>What Is a Blockchain?</h1>
        <p className='gq'>
          A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.
        </p>
        <p className='gq'>
        One key difference between a typical database and a blockchain is how the data is structured. A blockchain collects information together in groups, known as blocks, that hold sets of information. Blocks have certain storage capacities and, when filled, are closed and linked to the previously filled block, forming a chain of data known as the blockchain. All new information that follows that freshly added block is compiled into a newly formed block that will then also be added to the chain once filled.
        </p>
        <p className='gq'>
        A database usually structures its data into tables, whereas a blockchain, like its name implies, structures its data into chunks (blocks) that are strung together. This data structure inherently makes an irreversible time line of data when implemented in a decentralized nature. When a block is filled, it is set in stone and becomes a part of this time line. Each block in the chain is given an exact time stamp when it is added to the chain. 
        </p>
        <p className='gq'>
        The goal of blockchain is to allow digital information to be recorded and distributed, but not edited. In this way, a blockchain is the foundation for immutable ledgers, or records of transactions that cannot be altered, deleted, or destroyed. This is why blockchains are also known as a distributed ledger technology (DLT).
        First proposed as a research project in 1991, the blockchain concept predated its first widespread application in use: Bitcoin, in 2009. In the years since, the use of blockchains has exploded via the creation of various cryptocurrencies, decentralized finance (DeFi) applications, non-fungible tokens (NFTs), and smart contracts.
        </p>
        <p className='gq'>
        Blockchains have been heralded as being a disruptive force to the finance sector, and especially with the functions of payments and banking. However, banks and decentralized blockchains are vastly different.

To see how a bank differs from blockchain, let’s compare the banking system to Bitcoin’s implementation of blockchain.


        </p>
    </div>
  )
}

export default Intro