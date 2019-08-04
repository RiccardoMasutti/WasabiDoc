# Use of Wasabi

[[toc]]

---

## Wallet Manager


## Synchronization


## Receive
### Why is it bad to re-use addresses?
Bitcoin is designed so that for every payment You can use a new address that is not tied to any of Your previous addresses.
When You use a new address for every coin, then it becomes much much more difficult to find out that these coins are from You.
However, when You use the same address for every coin, then everyone knows that they all can be spend by one individual who has knowledge of the private key - You!
Thus, when someone finds out that You have that address, maybe You published it in Your social media profile for donations, or You send a coin to another peer who knows You, then they know also how many bitcoin You have in the other coins with that same address.
Take good care to whom You tell Your addresses, and every time, tell someone a different address.

Because You have all the private keys, for all these addresses, You can produce a valid signature for any of them.
So You can proof that these are Your bitcoin, without relying on reputation that You have any other coins.
You can easily generate and store many billions of private keys and addresses in a convenient [BIP 44 multi-account hierarchy for deterministic wallets](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) so that You can backup everything in Your 12 word mnemonic phrase. 

This is what is used in Wasabi, You have on mnemonic backup, and unlimited numbers of new addresses.
Everytime You a coin is received, then the address is removed from the GUI so that You are not tempted to use it again.

Remember: ***NEVER RE-USE ADDRESSES***

### Why does Wasabi only use SegWit bech32 addresses?
Wasabi generates Bech32 addresses only, also known as bc1 addresses or native SegWit addresses.
These addresses start with the characters `bc1...` Some wallets/exchanges do not yet support this type of address and may give an error message (e.g. "unknown bitcoin address").
The solution is to manage Your funds with a wallet which does support Bech32, [see list](https://en.bitcoin.it/wiki/Bech32_adoption).

Be careful, if You send all Your coins from an old wallet to a new wallet (from the table above) in one transaction then You will merge all Your coins which is bad for privacy - instead, **send the coins individually** or if possible **import the seed in the new wallet**.


## Send

### Why does Wasabi choose a new random node every time I send a transaction?

When You broadcast a transaction from a full node, that transaction is flooded into the network.
Essentially, all nearby nodes are passed Your transaction, and those nodes will pass to all of their nearby nodes, etc.
However, if a malicious adversary were to get enough relay nodes in the network, they could pretty easily connect the initial location of a transaction by simply observing from which node the transaction appeared first.
For this reason, broadcasting transaction through Your own node may reveal Your IP address.

So to fix this Wasabi broadcasts Your transactions to a random node, and messages that node through TOR, so the node cannot detect Your IP address.
When You want to subsequently send another transaction on the network, Wasabi destroys the original TOR bridge and connection to the node and established a new TOR bridge and connection with a brand new node.
This reduces the risk of a passive bystander being able to link two transactions together that appear from the same location.


## History


## CoinJoin
### What are the fees for the CoinJoin?
You currently pay a fee of 0.003% * anonymity set.
If the anonymity set of a coin is 50 then You pay 0.003% * 50 (=0.15%).
If You set the target anonymity set to 53 then Wasabi will continue mixing until this is reached, so You may end up with an anonymity set of say 60, and You will pay 0.003% * 60 (=0.18%).

There are also edge cases where You do not pay the full fee or where You pay more.
For example if You're the smallest registrant to a round, You will never pay a fee.
Also when You are remixing and You cannot pay the full fee with Your input, then You only pay as much as You have, but if the change amount leftover would be too small, then that is also added to the fee.
Currently the minimum change amount to be paid out is 0.7% of the base denomination (~0.1BTC.)

It is also possible that You get more back from mixing than You put in.
This happens when network fees go down between the start of the round and its end.
In this case, the difference is split between the active outputs of the mix.

### What is the anonymity set?
The anonymity set is effectively the size of the group You are hiding in. 

If 3 people take part in a CoinJoin (with equal size inputs) and there are 3 outputs then each of those output coins has an anonymity set of 3.

```
0.1 BTC (Alice)       0.1 BTC (Anon set 3)
0.3 BTC (Bob) 	  ->  0.1 BTC (Anon set 3)
0.4 BTC (Charlie)     0.1 BTC (Anon set 3)
                      0.2 BTC (Change Coin Bob)
                      0.3 BTC (Change Coin Charlie)
```

There is no way to know which of the anon set output coins are owned by which of the input owners.

All an observer knows is that a specific anon set output coin is owned by one of the owners of one of the input Coins i.e. 3 people - hence an anonymity set of 3.

Your Wasabi software has limited information on what the anonymity set should be, so the anonymity set that the software presents You is just an estimation, not an accurate value.
With Wasabi we are trying to do lower estimations, rather than higher ones.

### Can I mix more than the round's minimum?

Yes.

In a round with a ~0.1 BTC minimum, You could mix ~0.3 BTC and get a ~0.1 BTC output & a ~ 0.2 BTC output.

Similarly, with a 0.7 BTC input You would expect the following outputs: ~0.1, ~0.2, ~0.4 BTC.
The possible values of equal output that can be created are 0.1 x 2^n where n is a positive integer (or zero).  [See more here](https://Youtu.be/PKtxzSLPWFU) and [here](https://Youtu.be/3Ezru07J674).

### Why are the denominations such an odd number?

The output value changes each round to ensure that You can enqueue a coin and have it remix (mix over and over again - increasing the anonymity set, improving privacy).
As a result the round mixing amount will often be a specific number which generally decreases as the rounds proceed, with a reset once a lower bound is reached. 


### What is happening in the input registration phase?
During the [input registration](https://github.com/nopara73/zerolink#1-input-registration-phase), You select which coins You want to register for CoinJoin.
These coins need to be confirmed on the Bitcoin timechain, unless they are from a Wasabi CoinJoin and You re-register them.
In the background, Wasabi generates an input proof so that the coordinator can verify that You actually own this coin.
Then Wasabi generates several addresses, depending on the value of inputs registered.
The address of the anonset CoinJoin output must not be linked to Your input, and thus it is [cryptographically blinded](https://en.wikipedia.org/wiki/Blind_signature) to incomprehensible cypher-text.
Since the change output can be easily linked to Your input with CoinJoin sudoku [reference missing], this address is not blinded, but send in clear-text.

Wasabi wallet generates a new tor identity [reference missing] called Alice, she is like a separate entity, and for every round You use a new Alice who is not linked to any previous connection.
With Alice, You send some information to the Wasabi coordinator server: [i] the input coin that You want to register, together with the input proof signature; [ii] the clear text change address; and [iii] the blinded anonset CoinJoin output.

The Wasabi coordinator now verifies that: [i] there is still room for more peers on this CoinJoin; [ii] the blinded output has never been registered before; [iii] each input has not been registered before, is not banned, is unspent, and that the input proof is valid; and [iv] that the sum value of inputs is higher than the minimum required value of 0.1 bitcoin.
Only when all these checks are valid does the coordinator sign the blinded output.
He does not know the address that he is signing, because it is blinded.
This signature is proof that the coordinator has verified that Alice is not cheating.
The coordinator sends the signed blinded output back to Alice.

Alice has the private key to unblind the signed blinded output.
With the magic of cryptography, she can reveal the clear-text address of the anonset CoinJoin output, however, the coordinator signature is still attached to this address.

The input registration phase ends when either, the number of registered inputs exceeds the number of required inputs [meaning anonymity set of 100 peers]; or when the last round was two hours ago.

[missing: explanation of uniqueld]

### What is happening in the connection confirmation phase?
There are many Alice's registering their inputs in the first phase, and the connection confirmation phase makes sure that all of them are still online.
The coordinator verifies the uniqueld from all the Alice's, and when everyone is still communicating, then he returns the round hash of all the registered inputs.
The round is abandoned and re-started if too many Alice's have dropped, for example when Wasabi is shut down, or when the tor connection is temporarily broken.

The connection confirmation phase ends when all Alice's have provided their inputs, or after a timeout when the online Alice's are still larger than the required number of peers.

[missing: explanation of uniqueld]

### What is happening in the output registration phase?
Now that all peers are online, we are ready to proceed with the [output registration phase](https://github.com/nopara73/zerolink#2-output-registration-phase) of the round.
Wasabi generates a completely new tor identity Bob, he is in no way tied to Alice.
Bob sends to the Wasabi coordinator: [i] the clear-text address for the anonset CoinJoin output; [ii] the coordinator signature over that output; and [iii] the round Hash of all the inputs.
Because the coordinator can verify his own signature, he knows that this output was initially sent by any Alice [he cannot know which Alice exactly] and that he has verified that everything was in order.

It is very important that the coordinator cannot link Alice to Bob.
Because Alice has send the clear-text input, and Bob sends the clear-text output.
So, if the two were to be linked, then the coordinator can specifically link the input to the output, meaning that the anonymity set is 1.
Because Alice commits to the output by sending it blinded, and because Bob is a new tor identity not linked to Alice, the coordinator can verify that nobody is cheating, but he cannot deanonymize the peers.

The output registration phase ends when the value of clear-text outputs plus change outputs is equal to the the value of inputs.
If after a timeout not all outputs are registered, then this round is abandoned, the missing peers are banned, and a new round is started.


### What is happening in the signing phase?
Now that all inputs and outputs are registered, the Wasabi coordinator can start the [signing phase](https://github.com/nopara73/zerolink#3-signing-phase) by building the CoinJoin transaction with all the registered inputs, the anonset outputs, and the change outputs.
He sends this transaction to all the Alice's of this round.
Each Alice verifies that: [i] the committed round Hash is equal to the hash of all the inputs in the proposed transaction; and [ii] her inputs and outputs are correctly included.
Then she signs the transaction with the private keys of her inputs.
Alice sends the uniqueld, the signature and the input index to the coordinator, who then verifies this information. 

The signing phase ends when the coordinator has all the valid signatures for all the registered inputs.

### What is happening in the broadcasting phase?
The CoinJoin transaction is successfully built and signed, and it is now ready to be [broadcasted](https://github.com/nopara73/zerolink#transaction-broadcasting) to the peers of the Bitcoin network.
The coordinator sends this transaction over the tor network to a random full node, and from there it is gossiped to other nodes and miners.
Wasabi is saving on mining fees by setting a confirmation target of roughly 12 hours, but You can re-register unconfirmed anonset outputs for the next round of CoinJoin.

## Hardware Wallet
### How can I generate a Wasabi skeleton wallet file in ColdCard?
On the ColdCard (Mk2, firmware 2.1.1 and up) You go to ```>Advanced>MicrcoSD Card>Wasabi Wallet``` and it will save a skeleton json-file to the MicroSD card in the hardware wallet.

### How can I import the Wasabi skeleton wallet file?
Take the MicroSD card from the ColdCard and plug it in the computer with the Wasabi Wallet software.
In Wasabi Wallet go to the Wallet Manager, select Hardware Wallet option and in the bottom right corner click ```Import Coldcard```.
Now select the Wasabi skeleton json-file from the MicroSD card, if this fails You can manually enter the file location in Wasabi Wallet window and load the file.

### How can I generate a receiving address of my hardware wallet?
In Wasabi Wallet You load Your previously imported wallet (from Wasabi skeleton, or USB detection) and go to the ```Receive``` tab, here You enter a label for the incoming transaction and click ```Generate Receive Address```.
In the tab below the newly generated receive address can be viewd/copied.

### How can I sign a transaction with a USB connected hardware wallet?
To send a transaction You will need to connect Your Hardware wallet and unlock the device (using PIN or password), in Wasabi Wallet You go to the ```Send``` tab where You can specify the address to send to, amount of bitcoin to send and which coins to use as input (only use green/private coins here!).
After filling in all transaction details You click ```Send Transaction``` to sign it with the connected hardware wallet and broadcast on the network.

### How can I build and export a transaction to ColdCard?
In the Wallet Explorer on the right side of the GUI, select ```YourWallet>Advanced>Build Transaction```.
This brings up the ```Build Transaction``` tab where You can specify the address, amount of bitcoin and coins to use.
Then by clicking ```Build Transaction``` a new tab will open containing the raw transaction data, here You click ```Export Binary PSBT``` to save the partially signed bitcoin transaction (PSBT) to a file.
This file should be moved to the MicroSD card that You can then insert in the ColdCard for manual verification and signing.

### How can I sign a transaction on the ColdCard?
On the ColdCard (Mk2, firmware 2.1.1 and up) You enter the PIN code to unlock the hardware wallet and press ```>Ready To Sign``` with the MicroSD card containing the previously generated transaction or PSBT-file.
Verify the address and amount and the ColdCard will then create a signed.psbt and final.txn file on the MicroSD card.
The finalized transaction (xxx-final.txn) can now be broadcasted by Wasabi Wallet or even a radio or satelite dish if someone is listening!

### How can I import and broadcast a final transaction from ColdCard?
In the Wallet Explorer You go to ```YourWallet>Advanced>Broadcast Transaction``` and click ```Import Transaction```, now You can select the previously finalized (and signed) transaction file from the MicroSD card.
If this fails You can manually type the path to this file in Wasabi Wallet to load the transaction.
Now click ```Broadcast Transaction``` to send it off over Tor to a random Bitcoin node so it can flood over to the miners for confirmation in a block. 

### Can I CoinJoin the bitcoin on my hardware wallet?
You can't do that directly, so send them (in small portions >0.1BTC if needed) to a ''hot'' Wasabi Wallet for CoinJoin and then send them back to a new address on the Hardware wallet for cold-storage. 

## Settings
### How do I connect my own full node to Wasabi?
There is currently a basic implementation of connecting Your full node to Wasabi.
The server will still send You [BIP 158 block filters](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki), and when You realize that a block contains a transaction of Yours, then You pull this block from Your own full node, instead of a random P2P node, thus You can verify that this is actually a valid block including Your transaction.
One attack vector could be that Wasabi lies to You and gives You wrong filters that exclude Your transaction, thus You would see in the wallet less coins than You actually control. [BIP 157 solves this](https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki).

When Your full node is on the same hardware [computer, laptop] as Your Wasabi Wallet, then it will automatically recognize it and pull blocks from there.
If Your node is on a remote device [raspberry pi, nodl, server], then You can specify Your local IP in the Settings tab, or in line 11 of the config file. [See more here](https://Youtu.be/gWo2RAkIVrE).

### How can I turn off Tor?
You can turn off Tor in the Settings.
Note that in this case You are still private, except when You CoinJoin and when You broadcast a transaction.
In the first case, the coordinator would know the links between Your inputs and outputs based on Your IP address.
In the second case, if You happen to broadcast a transaction of Yours to a full node that is spying on You, it will know the link between Your transaction and Your IP address.

### How can I change the anonset target?
In the Settings tab at the bottom You can change the three `PrivacyLevelX` values of the desired anon set of the yellow, green, and checkmark shield button in the GUI.
The `MixUntilAnonymitySet` is the last selected value from previous use. 

In the wallet GUI, go to `File`>`Open`>`Config File` and in the last 4 lines You see:

```json
"MixUntilAnonymitySet": 50,
"PrivacyLevelSome": 2,
"PrivacyLevelFine": 21,
"PrivacyLevelStrong": 50
```

Remember that You pay a fee proportional to the Anonymity Set.
[See more here](https://Youtu.be/gWo2RAkIVrE?t=191).


## Coin Control Best Practices 
### Can I consolidate anonset coins?
It is advisable to limit the recombining of mixed coins because it can only decrease the privacy of said coins.
This links all the consolidated UTXOs in one transaction, creating only one output, which then clearly controls all these funds.
That said, if You combine less than 1 BTC it is less likely to reveal Your pre-CoinJoin transaction history.
The potential issue comes when You spend that coin. Depending on what You do with the coin You might reduce the privacy of the resulting change (if You send half Your coin to an exchange for example, as they will know that You own the coin change).
As a result it is best not to recombine ALL Your mixed change, though You may wish to recombine some coins if You are planning on hodling for many years as this will reduce the fees required to spend the coins later.

If You would like to dive into the details of this topic, You can [read more here](https://old.reddit.com/r/WasabiWallet/comments/avxbjy/combining_mixed_coins_privacy_megathread/) and [see more here](https://www.youtube.com/watch?v=Tk8-N1kHa4g).

### How can I send my anonset coins to my hardware wallet?
Most hardware wallets communicate with servers to provide You with Your balance.
This reveals Your public key to the server, which damages Your privacy - the hardware company can now theoretically link together all Your addresses.
As a result **it is not recommended** that You send Your mixed coins to an address associated with Your hardware wallet unless You are confident that You have set up Your hardware wallet in a way that it does not communicate with a 3rd party server (see below). 

You can, however, manage Your hardware wallet with the Wasabi interface.
Alternatively, You can use Your hardware wallet with Electrum, which connects to Your Bitcoin Core full node through [Electrum Personal Server](https://github.com/chris-belcher/electrum-personal-server).

### What can I do with small change?
There are no hard and fast rules for what to do with the change.
Generally try to avoid the change and use the `Max` button extensively to send whole coins.
The most problematic type of change is what has `anonymity set 1` [red shield] You should treat it as a kind of toxic waste [handled with great care].

**Warning**

You want to avoid merging `anonymity set 1 coins` with `anonymity set > 1 coins` wherever possible, because this will link Your `anonymity set > 1 coin` to the coin You merge it with.
Note that, this is also true if You merge them in a mix, however that is slightly less problematic, because some blockchain analysis techniques become [computationally infeasible](https://www.comsys.rwth-aachen.de/fileadmin/papers/2017/2017-maurer-trustcom-coinjoin.pdf).

It is also important that You do not send different coins to the same receiving address (even if performed as separate transactions) as this will also link the coins together, damaging Your privacy.

There are two different types of zero link change:

When You have a KYC coin with red anonset 1 and You register it for CoinJoin, then You get one anonset 100 green coin and one red anonset 1 change.
This change is very clearly tied to Your KYC input coin, but the CoinJoin output is pretty good with anonset 100.
If You combine that red coin with the green, then it's clear that both of them belong to You, and thus the anonset of the output in this transactioin becomes the lowest common denominator, in this case anonset 1.

When You take a 100 anonset coin, and You register it again for CoinJoin, then You get one coin with anonset 200, and one change with anonset 100.
This change has anonset 100 because it can be linked to the input of the second CoinJoin, but this coin has anonset 100 already.
So, although this change can still reveal pre-mix history, because the pr-mix history is another CoinJoin, You cannot go farther back.
So, it might be ok to send this second change output to some place, or even consolidate it, because it still has anonset.

When You consolidate several small change coins in a regular transaction, then every outside observer knows that they belong to the same cluster.
However, You can consolidate within a CoinJoin by simply selecting all these coins in the CoinJoin tab.
Because the Wasabi CoinJoin transaction shuffles inputs, for an outside observer it is not clear which inputs belong to the same Alice.
However, the coordinator gets the input proof of **ALL** the coins that Alice has provided during the input registration phase.
Thus the coordinator knows that this is a consolidation transaction.
It is wise to assume that every one knows what the coordinator knows.
So consolidating in a CoinJoin is better, but it might still reveal the common ownership of the coins.

**Your Options**
- If You do not care about linking the history of the coins because they are all from the same source then You could combine them in a mix (queue all the change from the same source until You reach the minimum input required to mix, currently ~ 0.1 BTC).
- Mix with [Joinmarket](https://github.com/JoinMarket-Org/joinmarket-clientserver).
- Donate them (e.g. [to the EFF](https://www.eff.org/))
- Spend them on something that is not a particular privacy risk (eg. gift cards).
- Open a lightning channel. 
- The ultimate solution is to 'close the loop' i.e. spend a change coin without merging it with other coins, do not generate it in the first place by sending whole coins. 

---

#### Further Questions


Wallet Manager
- How do I generate a new wallet?
- How do I back up my mnemonic seed?
- What password should I use?
- Can I spend my bitcoin without the password?
- How do I backup my wallet?
- What's up with the Chinese characters?

Synchronization
- What are BIP-158 block filters?
- How does Wasabi download a relevant block?
- How long does the initial, and a subsequent synchronization take?
- How do I know if the synchronization is finished?

Receive
- How do I generate a new receiving address?
- Why do I have to label my address?
- How can I change the label of my address?
- Where can I find my public key?
- Where can I find a QR code of the address?
- Are there privacy concerns regarding whom I send my address?

Send
- What are coins?
- Why is coin control so important?
- How do I select coins for spending?
- What is the cluster history?
- How do I set a destination address?
- Can I send to many addresses?
- What fee should I select?
- Can I see the fee in Satoshis per byte?
- How is the tansaction broadcasted?


History
- How can I check the history of transactions?
- Can I export a list of transaction?

CoinJoin
- How can I select UTXOs for CoinJoin?
- What are the denominations created in one round?
- How much anonymity set do I need?
- How many rounds should I CoinJoin?
- What is happening in the input registration phase?
- What is happening in the connection confirmation phase?
- What is happening in the output registration phase?
- What is happening in the signing phase phase?
- What is happening in the broadcasting phase?
- How does my wallet communicate with the Wasabi coordinator server?
- Why are the denominations such an odd number?

Hardware Wallet
- Why does Wasabi use the Hardware Wallet Interface?
- What specific hardware wallets does Wasabi support?
- How can I type in the PIN of my Trezor One?
- How can I manage the passphrase of my Trezor T?
- Can I use the passphrase of my Trezor One?
- How can I generate a Wasabi skeleton wallet file in ColdCard?
- How can I import the Wasabi skeleton wallet file?
- How can I generate a receiving address of my hardware wallet?
- How can I sign a transaction with a USB connected hardware wallet?
- How can I build and export a transaction to ColdCard?
- How can I sign a transaction on the ColdCard?
- How can I import and broadcast a final transaction from ColdCard?
- Can I CoinJoin the bitcoin on my hardware wallet?


Coin Control Best Practices
- Which coins can I select for CoinJoins?
- How can I mix large amounts?
