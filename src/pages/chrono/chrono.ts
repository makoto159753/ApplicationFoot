import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {TimerComponent} from '../timer/timer';
import {AlertController} from 'ionic-angular';
import { TimerService } from '../../app/services/timer.service';
import { BddService} from '../../app/services/bdd.service';



@Component ({
    selector : "page-chrono",
    templateUrl : "chrono.html"
})

export class ChronoPage {
    score:any;

    constructor(private timerService: TimerService,private alertCtrl: AlertController,private bddService : BddService) {} 

  setScores(){
    localStorage.setItem('score', this.score);
}

 showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Fin du match',
      message: 'Arrêter le match?',
      buttons: [
        {
          text: 'Non',
          handler: () => {
            
          }
        },
        {
          text: 'Oui',
          handler: () => {
         //  this.setDefaults();
           this.showPrompt();
           this.timerService.initTimer(0);

          }
        }
      ]
    });
    confirm.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Enregistrement du score',
      inputs: [
        {
          name: 'score',
          placeholder: '? - ?   ? - ?'
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            
          }
        },
        {
          text: 'Sauvegarder',
          handler: data => {
            var a=JSON.stringify(data);
            var parsedbody=JSON.parse(a);
            this.score=(parsedbody.score);
            this.newScore();
          }
        }
      ]
    });
    prompt.present();
  }




  newScore() {
    let postParams = {
    id_match:localStorage.getItem('id_match'),
    id_type_match :' ',
    id_duree: ' ',
    id_meteo:' ',
    id_equipe:' ',
    id_equipe2:' ',
    lieu:' ',
    date_match:' ',
    score:this.score
  }
  this.bddService.newScore(postParams);
}
}
