import {Injectable} from '@angular/core';

@Injectable()
export class TimerService {
  private timer: ITimer;
  private period: any="00:00:00";
  

  constructor() {
  }

  /*
    Control Timer functions
  */

  initTimer(period:any) {
      this.period = period;
      if(!this.period) { this.period = 0; }

      this.timer = <ITimer>{
          seconds: this.period,
          runTimer: false,
          hasStarted: false,
          hasFinished: false,
          secondsRemaining: this.period
          
      };

      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
  }

  startTimer() {
      this.timer.hasStarted = true;
      this.timer.runTimer = true;
      this.timerTick();
  }

  pauseTimer() {
      this.timer.runTimer = false;
  }

  resumeTimer() {
      this.startTimer();
  }

  timerTick() {
      setTimeout(() => {
          if (!this.timer.runTimer) { return; }
          this.timer.secondsRemaining++;
          this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
          if (this.timer.secondsRemaining > 0) {
              this.timerTick();
          }
          else {
              this.timer.hasFinished = true;
          }
      }, 1000);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
      var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
      var hours   = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      var seconds = sec_num - (hours * 3600) - (minutes * 60);
      var hoursString = '';
      var minutesString = '';
      var secondsString = '';
      hoursString = (hours < 10) ? "0" + hours : hours.toString();
      minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
      secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
      return hoursString + ':' + minutesString + ':' + secondsString;
  }

  /*
    Display State Timer functions
  */

  hasFinished() {
      return this.timer.hasFinished;
  }

  getDisplayTime() {
    if (!this.doesTimerExist()){
      return String(this.period);
    }
    return this.timer.displayTime;
  }

  doesTimerExist() {
    return this.timer != null;
  }

  canInitTimer() {
    return !this.timer.runTimer && (this.timer.hasStarted || this.timer.hasFinished) || this.timer.hasFinished;
  }

  canPauseTimer() {
    return this.timer.runTimer && this.timer.hasStarted && !this.timer.hasFinished;
  }

  canResumeTimer() {
    return !this.timer.runTimer && this.timer.hasStarted && !this.timer.hasFinished;
  }

  canStartTimer() {
    return !this.timer.hasStarted;
  }

}

interface ITimer {
  seconds: number;
  secondsRemaining: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string ;
}
