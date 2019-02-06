import { Injectable } from '@angular/core';
import { Block } from '../../classes/block.class';
import { Blockchain } from '../../classes/blockchain.class';

@Injectable({
  	providedIn: 'root'
})
export class CryptoService {

  	cryptoChain = new Blockchain();

  	constructor() {
    	console.log('Starting to mine a new Block...');
		this.cryptoChain.addBlock( new Block ( '1', '05/02/2019', {amount: 10}, '' ) );

	   	console.log('Starting to mine a new Block...');
    	this.cryptoChain.addBlock( new Block ( '2', '05/02/2019', {amount: 25}, '' ) );
  	}
}
