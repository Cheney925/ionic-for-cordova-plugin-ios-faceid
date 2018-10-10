import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var CID: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  checkAuth(reason: string) {
  	CID.checkAuth(reason, function(res) {
      if (res == 'success') {
        alert('success');
      } else {
        console.log(res);
      }
  	}, function(err) {
  		console.log(err);
  	});
  }

}
