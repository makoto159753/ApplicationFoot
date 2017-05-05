import { Component } from '@angular/core';
//import {Http, Headers, RequestOptions} from '@angular/http';
import { NavController,Platform } from 'ionic-angular';
import {ChronoPage } from '../chrono/chrono';
import {HomePage } from '../home/home';
import {AlertController} from 'ionic-angular';
import { BddService} from '../../app/services/bdd.service';



@Component({
  selector: 'page-match',
  templateUrl: 'match.html'
})
export class MatchPage {
  id_match:any;
  id_type_match:any;
  id_duree:any;
  id_meteo:any;
  id_equipe:any;
  id_equipe2:any;
  lieu:any;
  date_match:any;
  score:any;
  equipes:any;
  equipes2:any;
  durees:any;
  meteos:any;
  types:any;

  constructor(public navCtrl: NavController,private alertCtrl: AlertController,private bddService : BddService) {
    this.getListeType();
    this.getListeEquipe();
    this.getListeEquipe2();
    this.getListeDuree();
    this.getListeMeteo();
    
  }

  getDefaults(){
  /*  if(localStorage.getItem('type') != null){
      this.id_type = localStorage.getItem('type');
    } else {
      this.id_type = 'amical';
    }
    if(localStorage.getItem('duree') != null){
      this.id_duree = localStorage.getItem('duree');
    } else {
      this.id_duree = 60;
    }
    if(localStorage.getItem('meteo') != null){
      this.id_meteo = localStorage.getItem('meteo');
    } else {
      this.id_meteo = 'soleil';
    }
    if(localStorage.getItem('equipe') != null){
      this.id_equipe = localStorage.getItem('equipe');
    } else {
      this.id_equipe = 'toucan';
    }
    if(localStorage.getItem('equipe2') != null){
      this.id_equipe2 = localStorage.getItem('equipe2');
    } else {
      this.id_equipe2 = 1;
    }*/
  }


  setDate (e:Event) {
    var a=new Date(e.toString());
    console.log(e);
    console.log(e.toString());
  } 

  setScore() {
    localStorage.setItem('score', this.score);
  }

  showConfirm2() {
    let confirm = this.alertCtrl.create({
      title: 'Etes-vous sûr?',
      message: 'Vérifier et confirmer votre choix',
      buttons: [
        {
          text: 'Modifier',
          handler: () => {
            localStorage.clear();
          }
        },
        {
          text: 'Accepter',
          handler: () => {
           this.newMatch();
          }
        }
      ]
    });
    confirm.present();
  }
  
  
  newMatch() {
     let postParams = {
    id_type_match:'1',
    id_duree: this.id_duree,
    id_meteo:this.id_meteo,
    id_equipe:this.id_equipe,
    id_equipe2:this.id_equipe2,
    lieu:this.lieu,
    date_match:this.date_match,
    score:''
    }
    this.id_match=this.bddService.newMatch(postParams);
    localStorage.setItem('id_equipe',this.id_equipe);
    localStorage.setItem('id_equipe2',this.id_equipe2);

  }

getListeType() {
   this.bddService.listeType().subscribe(response => {
    this.types = response;
    });
 }

getListeEquipe() {
    this.bddService.listeEquipe().subscribe(response => {
        this.equipes = response;
      });
}

getListeEquipe2() {
    this.bddService.listeEquipe().subscribe(response => {
        this.equipes2 = response;
      });
}

getListeDuree() {
  this.bddService.listeDuree().subscribe(response => {
    this.durees = response;
    });
}

getListeMeteo() {
  this.bddService.listeMeteo().subscribe(response => {
    this.meteos = response;
    });
  }
 
}

