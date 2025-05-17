import { countdownTitle } from '../config/countdown.config'
import './CountdownDisplay.css'

const CountdownDisplay = ({ timeLeft }) => {
  const { days, hours, minutes, seconds } = timeLeft

  // Ensure two digits for time units
  const formatNumber = (num) => String(num).padStart(2, '0')

  return (
    <div className="countdown">
      <h1 className="countdown-title">{countdownTitle}</h1>
      <div className="countdown-values">
        <div className="countdown-row days-row">
          <div className="countdown-item days">
            <span className="countdown-number">{days}</span>
            <span className="countdown-label">Days</span>
          </div>
        </div>
        <div className="countdown-row time-row">
          <div className="countdown-item time-group">
            <div className="time-numbers">
              <span className="time-unit">{formatNumber(hours)}</span>
              <span className="time-separator">:</span>
              <span className="time-unit">{formatNumber(minutes)}</span>
              <span className="time-separator">:</span>
              <span className="time-unit">{formatNumber(seconds)}</span>
            </div>
            <div className="time-labels">
              <span className="time-label">Hours</span>
              <span className="time-label">Minutes</span>
              <span className="time-label">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountdownDisplay