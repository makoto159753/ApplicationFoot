import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { TimerService } from '../../app/services/timer.service';
import { AlertController } from 'ionic-angular';
import { BddService} from '../../app/services/bdd.service';



@Component({
    selector : 'page-action',
    templateUrl : 'action.html'
})

export class ActionPage {

id_joueur:any;
id_type_stats:any;
id_stats_zone:any;
minutes:any;
savedDisplayTime: string="00";
joueurs:any;
actions:any;
zones:any;



    
   constructor(public navCtrl: NavController,private timerService: TimerService, private alertCtrl: AlertController,private bddService : BddService) {
    this.getListeJoueur();
    this.getListeAction();
    this.getListeZone();
  }

  getDefaults(){
   /* if(localStorage.getItem('joueur') != null){
      this.joueur = localStorage.getItem('joueur');
    } else {
      this.joueur = 1;
    }
    if(localStorage.getItem('action') != null){
      this.action = localStorage.getItem('action');
    } else {
      this.action = 1;
    }
    if(localStorage.getItem('zone') != null){
      this.zone = localStorage.getItem('zone');
    } else {
      this.zone = 4;
    }*/
  }

getDisplayTime() {
    return this.timerService.getDisplayTime();
  }
   pickTimer() {
    this.savedDisplayTime = this.getDisplayTime();
  }

  getSavedDisplayTime() {
    return this.savedDisplayTime;
  }

getId_match() {
  localStorage.getItem('id_match');
}

   setDefaults(){
 /*   localStorage.setItem('joueur', this.joueur);
    localStorage.setItem('action', this.action);
    localStorage.setItem('zone', this.zone);
    localStorage.setItem('temps', this.temps=this.getDisplayTime());

   // this.navCtrl.push(RedditsPage);*/
  }

 showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Etes-vous sûr?',
      message: 'Vérifier et confirmer votre choix',
      buttons: [
        {
          text: 'Modifier',
          handler: () => {
          }
        },
        {
          text: 'Accepter',
          handler: () => {
           this.setDefaults();
           this.newAction();
          }
        }
      ]
    });
    confirm.present();
  }

newAction() {
     let postParams = {
      id_match:localStorage.getItem('id_match'),
      id_joueur:this.id_joueur,
      id_type_stats:this.id_type_stats,
      id_stats_zone:this.id_stats_zone,
      minutes:this.getDisplayTime()
    }
    this.bddService.newAction(postParams);
  }

  getListeJoueur() {
    let getParams = {
    id_equipe:localStorage.getItem('id_equipe'),
    id_equipe2:localStorage.getItem('id_equipe2')
    }
    
     this.bddService.listeJoueur().subscribe(response => {
        this.joueurs = response;
      });
}

  getListeAction() {
    this.bddService.listeAction().subscribe(response => {
      this.actions = response;
    });
  }

  getListeZone() {
    this.bddService.listeZone().subscribe(response => {
      this.zones = response;
    });
  }
}



