import { CryptoService } from './services/crypto.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-crypto';
  blockchain = '';

  constructor( private cryptoSvc: CryptoService ) {
    this.blockchain = JSON.stringify( this.cryptoSvc.cryptoChain );
  }
}
