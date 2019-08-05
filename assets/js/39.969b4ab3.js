(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{302:function(e,t,a){"use strict";a.r(t);var n=a(22),s=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"privacy-in-bitcoin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#privacy-in-bitcoin","aria-hidden":"true"}},[e._v("#")]),e._v(" Privacy in Bitcoin")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#address-reuse"}},[e._v("Address Reuse")]),a("ul",[a("li",[a("a",{attrs:{href:"#problem"}},[e._v("Problem")])]),a("li",[a("a",{attrs:{href:"#wasabi-s-solution"}},[e._v("Wasabi's Solution")])])])]),a("li",[a("a",{attrs:{href:"#inputs-and-outputs"}},[e._v("Inputs and outputs")]),a("ul",[a("li",[a("a",{attrs:{href:"#problem"}},[e._v("Problem")])]),a("li",[a("a",{attrs:{href:"#wasabi-s-solution"}},[e._v("Wasabi's Solution")])])])]),a("li",[a("a",{attrs:{href:"#transaction-graph"}},[e._v("Transaction graph")]),a("ul",[a("li",[a("a",{attrs:{href:"#problem"}},[e._v("Problem")])]),a("li",[a("a",{attrs:{href:"#wasabi-s-solution"}},[e._v("Wasabi's Solution")])])])]),a("li",[a("a",{attrs:{href:"#network-snooping"}},[e._v("Network snooping")]),a("ul",[a("li",[a("a",{attrs:{href:"#problem"}},[e._v("Problem")])]),a("li",[a("a",{attrs:{href:"#wasabi-s-solution"}},[e._v("Wasabi's Solution")])])])])])]),a("p"),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"address-reuse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#address-reuse","aria-hidden":"true"}},[e._v("#")]),e._v(" Address Reuse")]),e._v(" "),a("p",[e._v("The first rule of Bitcoin privacy:")]),e._v(" "),a("blockquote",[a("p",[e._v("Never reuse addresses!")])]),e._v(" "),a("p",[e._v("The second rule of Bitcoin privacy:")]),e._v(" "),a("blockquote",[a("p",[e._v("NEVER reuse addresses!!")])]),e._v(" "),a("h3",{attrs:{id:"problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem","aria-hidden":"true"}},[e._v("#")]),e._v(" Problem")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Easy wallet clustering")])])]),e._v(" "),a("p",[e._v("A Bitcoin address commits to the spending condition of this UTXO.\nFor example in Wasabi, each address is a "),a("a",{attrs:{href:"https://programmingblockchain.gitbook.io/programmingblockchain/other_types_of_ownership/p2wpkh_pay_to_witness_public_key_hash",target:"_blank",rel:"noopener noreferrer"}},[e._v("native SegWit pay to witness public key hash P2WPKH"),a("OutboundLink")],1),e._v(", meaning that this coin can only be spend with a single valid signature of the corresponding private key.\nWhen the same address is used for several UTXOs, then this means that the same private key can spend all these coins.\nIt is very easy to find all the UTXOs with the same address, and thus to find out how many bitcoin this private key holds.")]),e._v(" "),a("p",[e._v("Further, when in a transaction one output has a reused address, then it is very likely that this output is the payment destination, and not the change.\nMost wallets automatically generate new change addresses for every transaction, but payment addresses are selected manually by the user.")]),e._v(" "),a("p",[e._v("Read more about the privacy concerns of address reuse in the "),a("a",{attrs:{href:"https://en.bitcoin.it/wiki/Address_reuse",target:"_blank",rel:"noopener noreferrer"}},[e._v("separate entry"),a("OutboundLink")],1),e._v(" and the "),a("a",{attrs:{href:"https://en.bitcoin.it/Privacy#Address_reuse",target:"_blank",rel:"noopener noreferrer"}},[e._v("privacy chapter"),a("OutboundLink")],1),e._v(" of the Bitcoin wiki.")]),e._v(" "),a("h3",{attrs:{id:"wasabi-s-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wasabi-s-solution","aria-hidden":"true"}},[e._v("#")]),e._v(" Wasabi's Solution")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Remove used address from GUI")])])]),e._v(" "),a("p",[e._v("Wasabi uses the industry best practice "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 44 hierarchical deterministic wallet"),a("OutboundLink")],1),e._v(", where out of one master secret a tree structure of child private keys are generated.\nIt is deterministic because the same parent secret always calculates the same child private keys. When given a hardened child private key, then the parent private key cannot be calculated.\nIn the "),a("code",[e._v("Receive")]),e._v(" tab, a new address is generated every time, and as soon as a coin is sent to it, this specific address is removed from the GUI.")]),e._v(" "),a("h2",{attrs:{id:"inputs-and-outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs-and-outputs","aria-hidden":"true"}},[e._v("#")]),e._v(" Inputs and outputs")]),e._v(" "),a("p",[e._v("Bitcoin has an accounting model of "),a("a",{attrs:{href:"https://bitcoin.org/en/blockchain-guide#introduction",target:"_blank",rel:"noopener noreferrer"}},[e._v("unspent transaction outputs [UTXO]"),a("OutboundLink")],1),e._v(".\nA transaction has inputs: the coins that are spent, and outputs: the coins that are received.\nThe input of one transaction has to be an output of a previous transaction that is not yet spent.\nEach UTXO is the tip of the chain of links between inputs and outputs, all the way back to a "),a("a",{attrs:{href:"https://en.bitcoin.it/wiki/Coinbase",target:"_blank",rel:"noopener noreferrer"}},[e._v("coin base transaction"),a("OutboundLink")],1),e._v(" that pays the miner.")]),e._v(" "),a("h3",{attrs:{id:"problem-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Problem")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("UTXOs are not fungible")])])]),e._v(" "),a("p",[e._v("Each UTXO is a unique snow flake with a public transaction history.\nFor example, when Alice sends a coin to Bob, then Bob does not just have any random UTXO, but he has specifically the coin that Alice has sent him.\nWhen Bob sends this coin to Charlie, than Charlie can look back two hops to see the transaction from Alice to Bob.\nIf Bob does not want Charlie to know that the transaction between Alice and Bob happened, then Bob needs to send Charlie a different coin.")]),e._v(" "),a("p",[e._v("Further, when Alice has one non-private coin and one private coin, and she selects both of them as the input of one transaction, then it might be clear that the previously private coin also belongs to Alice.\nThis means that coin consolidation can lead to an overall decrease of privacy, especially when using an automatic coin selection algorithm.")]),e._v(" "),a("h3",{attrs:{id:"wasabi-s-solution-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wasabi-s-solution-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Wasabi's Solution")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Manual coin labeling and selection")])])]),e._v(" "),a("p",[e._v("Contrarily to many other wallets, Wasabi does not show only the total value of bitcoins in the wallet. Rather, in the "),a("code",[e._v("Send")]),e._v(" and "),a("code",[e._v("Coin Join")]),e._v(" tab is a list of all the UTXOs individually.\nBecause it is required to label every receiving address, the history of this coin is clear at first glance.\nIn order to spend a specific coin, it is manually selected, which prevents the wrong coin being included in the transaction.")]),e._v(" "),a("h2",{attrs:{id:"transaction-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-graph","aria-hidden":"true"}},[e._v("#")]),e._v(" Transaction graph")]),e._v(" "),a("h3",{attrs:{id:"problem-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Problem")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Public transaction history")])])]),e._v(" "),a("p",[e._v("Because of the input and output model of Bitcoin, there is a chain of digital signatures all the way from the coinbase reward, to the current UTXO.\nThis transaction history can reveal sensitive information of the spending patterns of individuals.\nThe receiver of a coin can look back into the transaction history of the sender.\nAnd the sender can see the future spending of the receiver.")]),e._v(" "),a("h3",{attrs:{id:"wasabi-s-solution-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wasabi-s-solution-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Wasabi's Solution")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Zero Link CoinJoins")])])]),e._v(" "),a("p",[e._v("In order to obfuscate the link between outputs and inputs, Wasabi uses the "),a("a",{attrs:{href:"https://github.com/nopara73/zerolink",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zero Link"),a("OutboundLink")],1),e._v(" CoinJoin protocol.\nThe Wasabi central coordinator cannot steal and cannot spy, he simply helps many peers to build a huge transaction, with many inputs, and many outputs.\nThe non-private inputs can be linked to their previous transaction history.\nHowever, the equal value CoinJoin outputs with an anonymity set can not be tied to the inputs.")]),e._v(" "),a("p",[e._v("This means that when sending an anonset coin, the receiver does not know about the transaction history before the CoinJoin.\nAnd when the receiver does a CoinJoin himself, then the sender cannot spy on the later spending patterns.\nAn outside observer can only guess the correct link at a rate of 1 in the anonset, for example 1-in-100, or 1%.")]),e._v(" "),a("h2",{attrs:{id:"network-snooping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-snooping","aria-hidden":"true"}},[e._v("#")]),e._v(" Network snooping")]),e._v(" "),a("p",[e._v("Bitcoin is a peer to peer network of full nodes, who define, verify and enforce the Nakamoto consensus rules.\nThere is a lot of communication between them and metadata can be used to de-anonymize Bitcoin users.")]),e._v(" "),a("h3",{attrs:{id:"problem-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Problem")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Clear net light clients")])])]),e._v(" "),a("p",[e._v("When the communication to the network is unencrypted over clear net, then there is a easy correlation of the Bitcoin transactions to the IP address of the peer who sent it.\nThe IP address can be used to even find out about the physical location of the user!")]),e._v(" "),a("p",[e._v("A Bitcoin full node broadcasts not just the transaction of its user, but also it gossips all the other transactions it has received from its peers.\nThus it is very difficult to find out which transactions are sent from which full node.\nHowever, when a node or wallet does not gossip all transactions, but only the transactions of the user, then it is easier to find out which node has sent that specific transaction.")]),e._v(" "),a("h3",{attrs:{id:"wasabi-s-solution-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wasabi-s-solution-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Wasabi's Solution")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Full node by default & block filters over tor")])])]),e._v(" "),a("p",[e._v("Wasabi checks if there is a local Tor instance installed, and if so, it uses this to onion-route all the traffic to and from the network.\nIf Tor is not already installed, then it is installed automatically within Wasabi.\nThis means that by default, all network communication is secured from outside snooping and the IP address is hidden.")]),e._v(" "),a("p",[e._v("In order to fully verify everything, running a full node is essential.\nIf "),a("a",{attrs:{href:"https://github.com/bitcoin/bitcoin",target:"_blank",rel:"noopener noreferrer"}},[e._v("bitcoind"),a("OutboundLink")],1),e._v(" is installed on the same computer as Wasabi, then it will automatically and by default connect to the full node.\nIt is also possible to connect Wasabi to a remote full node on another computer by specifying the local IP address or Tor hidden service in the settings.\nNow Wasabi pulls the verified blocks from the full node, and it also broadcasts the transactions to the P2P network from this full node.")]),e._v(" "),a("p",[e._v("However, even if no full node is installed, Wasabi has a light client mode based on "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 158 block filters"),a("OutboundLink")],1),e._v(".\nWhen the user sends the extended public key, or a filter of all the addresses to the central server, then the server can "),a("strong",[e._v("COMPLETELY")]),e._v(" deanonymize the users.\nTherefore the Wasabi server sends a filter of all the transactions in each block to all the users.\nNow they check locally if the block contains a transaction with their address.\nIf not, then the filter is stored for later reference, and no block is downloaded. However, if there is a user transaction in that block, then Wasabi connects to a random Bitcoin P2P node over Tor, and asks for this entire block, not only one transaction.\nThis block request is indistinguishable from the regular P2P gossip, and thus nobody, neither the server nor the full node, know which addresses belong to the user.")]),e._v(" "),a("p",[e._v("Wasabi is per default "),a("a",{attrs:{href:"https://medium.com/@nopara73/bitcoin-core-vs-wasabi-wallet-network-level-privacy-bdca1d501387",target:"_blank",rel:"noopener noreferrer"}},[e._v("as private as a Bitcoin full node"),a("OutboundLink")],1),e._v(".")])])},[],!1,null,null,null);t.default=s.exports}}]);