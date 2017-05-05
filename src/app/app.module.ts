import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ActionPage} from '../pages/action/action';
import { ChronoPage} from '../pages/chrono/chrono';
import { MatchPage } from '../pages/match/match';
import { TimerService } from './services/timer.service';
import { BddService } from './services/bdd.service';

import {TimerComponent } from '../pages/timer/timer';
import { DatePickerModule } from 'datepicker-ionic2';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ActionPage,
    ChronoPage,
    MatchPage,TimerComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),DatePickerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ActionPage,
    ChronoPage,
    MatchPage
    
  ],
  providers: [{provide: {ErrorHandler}, useClass: IonicErrorHandler}
  ,TimerService,BddService]
})
export class AppModule {}
