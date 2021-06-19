import React from 'react';

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

  componentDidMount = () => {
    var countDownDate = new Date("Jun 22, 2021 15:37:25").getTime();
    
    this.initializeClock(countDownDate);
  };


  getTimeRemaining = endtime => {
    var now = new Date().getTime();
    var distance = endtime - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return {
      total: distance,
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



 

  render() {
   
    return (
      <div className="container countdown text-center" id={this.props.id}>
        <h2 className="title_line">Countdown Presale !</h2>
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