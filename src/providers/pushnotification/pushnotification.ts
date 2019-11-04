import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular';

@Injectable()
export class PushnotificationProvider {

  constructor(private oneSignal: OneSignal,
  				public platform:Platform) {
  }

  init_notifications(){
  	if(this.platform.is('cordova')){
  		console.log("*****>Comenzo");
  		this.oneSignal.startInit('9f9c0d43-cd57-4dcb-8fdc-74810ac2f055', '769699083487');
  		//this.oneSignal.setLogLevel(OneSignal.LOG_LEVEL.DEBUG, OneSignal.LOG_LEVEL.DEBUG);
		this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

		this.oneSignal.handleNotificationReceived().subscribe(() => {
		 	console.log("******> Notificacion recibida");
		});

		this.oneSignal.handleNotificationOpened().subscribe(() => {
			console.log("******> Notificacion abierta");
		});

		this.oneSignal.endInit();
  	}
	  	
  }
}
