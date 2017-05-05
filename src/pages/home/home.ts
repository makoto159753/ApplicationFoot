import { Component } from '@angular/core';
import { SQLite} from 'ionic-native';
import { NavController,Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
 /*id_equipe:number;
 id_equipe2:number;
 id_duree: any;
 id_meteo: any;
 id_type: any;
 date: any;
 lieu:any;
 matches:any;

 public database: SQLite;
  constructor(public navCtrl: NavController,platform: Platform) {
            platform.ready().then(() => {
            this.database = new SQLite();
            this.database.openDatabase({
                name: "foot.db",
                location: "default"
            }).then(() => {
                this.database.executeSql("CREATE TABLE IF NOT EXISTS match (id_match INTEGER PRIMARY KEY AUTOINCREMENT, id_equipe INTEGER, id_equipe2 INTEGER, id_duree INTEGER, id_meteo INTEGER, id_type INT,date DATE,lieu TEXT)", {}).then((data) => {
                    console.log("TABLE CREATED: ", data);
                    this.refresh();
                }, (error) => {
                    console.error("Unable to execute sql", error);
                })
            }, (error) => {
                console.error("Unable to open database", error);
            });
        });
  }

   public add() {
        this.database.executeSql("INSERT INTO match (id_equipe, id_equipe2, id_duree, id_meteo, id_type,date,lieu) VALUES (?, ?, ?, ?, ?, ?, ?)", [this.id_equipe,this.id_equipe2,this.id_duree,this.id_meteo,this.id_type,this.date,this.lieu]).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
    }

    public refresh(){
       this.database.executeSql("SELECT * FROM match", []).then((data) => {
        let match = [];
        if (data.rows.length > 0) {
          for (let i = 0; i < data.rows.length; i++) {
            match.push({
              id_equipe: data.rows.item(i).id_equipe,
              id_equipe2: data.rows.item(i).id_equipe2,
              id_duree: data.rows.item(i).id_duree,
              id_meteo: data.rows.item(i).id_meteo,
              id_type: data.rows.item(i).id_type,
              date:data.rows.item(i).date,
              lieu: data.rows.item(i).lieu
            });
          }
          this.matches=match;
          console.log(this.matches);
        }
      });
    }

    public reset(){
      this.database.executeSql("DROP TABLE match;",[]);
    }*/

}