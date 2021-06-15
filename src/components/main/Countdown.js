import React from 'react';

// Images 
import img3 from "../../img/img3.png";

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: 0,
      daysSpan: 0,
      hoursSpan: 0,
      minutesSpan: 0,
      secondsSpan: 0,
    };
  }

  getTimeRemaining = endtime => {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor(t / 1000 % 60);
    var minutes = Math.floor(t / 1000 / 60 % 60);
    var hours = Math.floor(t / (1000 * 60 * 60) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  initializeClock = deadline => {
    const updateClock = () => {
      var t = this.getTimeRemaining(deadline);

      this.setState({
        daysSpan: t.days,
        hoursSpan: ('0' + t.hours).slice(-2),
        minutesSpan: ('0' + t.minutes).slice(-2),
        secondsSpan: ('0' + t.seconds).slice(-2),
      });

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    };

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  };

  componentDidMount = () => {
    var deadline = new Date(Date.parse(new Date()) + 5 * 20 * 60 * 60 * 1000);
    this.initializeClock(deadline);
  };

  render() {
    return (
      <div className="container countdown text-center">

        <h2>Countdown Presale !</h2>
        <p className="text-small">Presale Starts in:</p>
        <div id="clockdiv">
          <ul>
            <li className="days">{this.state.daysSpan} <span>Days</span></li>
            <li className="hours">{this.state.hoursSpan}<span>Hours</span></li>
            <li  className="minutes">{this.state.minutesSpan}<span>Minutes</span></li>
            <li className="seconds">{this.state.secondsSpan}<span>Seconds</span></li>
        </ul>
        </div>

        <button type="button" className="btn btn-danger  btn-lg" ahref="https://dxsale.app/">DxSale</button>

      </div>
    );
  }
}

export default Countdown;