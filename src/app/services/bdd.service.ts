import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BddService {
  http: any;
  baseUrl: string;
  options: any;
  joueurs:any;
  equipes:any;
  equipes2:any;
  actions:any;
  durees:any;
  meteos:any;
  zones:any;
  types:any;
  

  constructor(http:Http) {
    this.http = http;
    this.baseUrl = 'http://localhost:8888/';
    var headers = new Headers();
    headers.append("Accept",'application/json');
    headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers : headers });
  }

getJoueurs() {
  if(this.joueurs ==null ) {
    this.listeJoueur();
  }
  return this.joueurs;
}

getEquipes() {
  if(this.equipes ==null) {
    this.listeEquipe();
  }
  return this.equipes;
}

getEquipes2() {
  if(this.equipes2 ==null) {
    this.listeEquipe();
  }
  return this.equipes2;
}
getActions() {
  if(this.actions ==null) {
    this.listeAction();
  }
  return this.actions;
}

getDurees() {
  if(this.durees ==null) {
    this.listeDuree();
  }
  return this.durees;
}

getMeteos() {
  if(this.meteos ==null) {
    this.listeMeteo();
  }
  return this.meteos;
}

getZones() {
  if(this.zones ==null) {
    this.listeZone();
  }
  return this.zones;
}

getTypes() {
  if(this.types == null) {
    this.listeType();
  }
  return this.types;
}

newMatch(postParams:any){
    var id_match:any;

 this.http.post(this.baseUrl+"match/new",postParams,this.options).subscribe(data=> {
    console.log(data['_body']);
    var parsedBody = JSON.parse(data['_body']);
   id_match=parsedBody.id_match;
   localStorage.setItem('id_match', id_match);
   
  });
  return id_match;
}

newAction(postParams:any) {
  this.http.post(this.baseUrl+"stat/new",postParams,this.options).subscribe(data=> {
    console.log(data['_body']);
  });
}

newScore(postParams:any) {
  this.http.post(this.baseUrl+"match/score",postParams,this.options).subscribe(data=> {
    console.log(data['_body']);
  });
}

listeJoueur() {
  var url:string = "http://localhost:8888/players"+"?id_equipe=" +localStorage.getItem('id_equipe')+
   "&id_equipe2="+localStorage.getItem('id_equipe2');
    return this.http.get(url)
      .map(res => res.json());
}

listeEquipe() {
  var url:string = "http://localhost:8888/equipe/liste";
    return this.http.get(url)
      .map(res => res.json());
}

listeAction() {
    var url:string = "http://localhost:8888/action/liste";
    return this.http.get(url)
      .map(res => res.json());
}

listeDuree() {
  var url:string = "http://localhost:8888/duree/liste";
    return this.http.get(url)
      .map(res => res.json());
}

listeMeteo() {
  var url:string = "http://localhost:8888/meteo/liste";
    return this.http.get(url)
      .map(res => res.json());
}

listeZone() {
  var url:string = "http://localhost:8888/zone/liste";
    return this.http.get(url)
      .map(res => res.json());
}
listeType() {
  var url:string = "http://localhost:8888/type/liste";
    return this.http.get(url)
      .map(res => res.json());
}
}
