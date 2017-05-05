import {Component} from '@angular/core';
import { TimerService } from '../../app/services/timer.service';

@Component({
    selector: 'timer',
    templateUrl: 'timer.html'
})
export class TimerComponent {

    timeInSeconds: any;

    constructor(private timerService: TimerService
    ) {
      this.timeInSeconds = "00"; // TODO a modifier pour recuperer la valeur du localStorage
      this.timerService.initTimer(this.timeInSeconds);
    }

    /*
     Control Timer functions
    */

    initTimer() {
      this.timerService.initTimer(this.timeInSeconds);
    }

    startTimer() {
        this.timerService.startTimer();
    }

    pauseTimer() {
        this.timerService.pauseTimer();
    }

    resumeTimer() {
        this.timerService.startTimer();
    }

    /*
      Display State Timer functions
    */

    doesTimerExist() {
      return this.timerService.doesTimerExist();
    }

    hasFinished() {
        return this.timerService.hasFinished();
    }

    getDisplayTime() {
      return this.timerService.getDisplayTime();
    }


    canInitTimer() {
      return this.timerService.canInitTimer();
    }

    canPauseTimer() {
      return this.timerService.canPauseTimer();
    }

    canResumeTimer() {
      return this.timerService.canResumeTimer();
    }

    canStartTimer() {
      return this.timerService.canStartTimer();
    }

}
