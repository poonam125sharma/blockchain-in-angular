import { Transaction } from '../../classes/transaction.class';
import { Injectable } from '@angular/core';
import { Block } from '../../classes/block.class';
import { Blockchain } from '../../classes/blockchain.class';

@Injectable({
  	providedIn: 'root'
})
export class CryptoService {

	  cryptoChain = new Blockchain();
	  unminedTxns: Transaction[] = [];

  	constructor() {
		this.unminedTxns.push( new Transaction( Date.now(), 'wallet-Alice', 'wallet-Bob', 50 ) );
		this.unminedTxns.push( new Transaction( Date.now(), 'wallet-Bob', 'wallet-Alice', 25 ) );

		console.log('\nMining a block...');
		this.cryptoChain.mineCurrentBlock( 'wallet-Miner49r', this.unminedTxns ).then( () => {
			console.log( '\nBalance Alice' + this.cryptoChain.getAddressBalance( 'wallet-Alice') );
			console.log( '\nBalance Bob' + this.cryptoChain.getAddressBalance( 'wallet-Bob') );
			console.log( '\nBalance Miner49r' + this.cryptoChain.getAddressBalance( 'wallet-Miner49r') );
		});
  	}
}
