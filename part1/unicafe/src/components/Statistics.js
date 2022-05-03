import StatisticsLine from "./StatisticsLine"

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const avgScore = (good - bad) / all
  return (all > 0) ? <table><tbody>
    <StatisticsLine text="good" value={good} />
    <StatisticsLine text="neutral" value={neutral} />
    <StatisticsLine text="bad" value={bad} />
    <StatisticsLine text="all" value={all} />
    <StatisticsLine text="average" value={avgScore} />
    <StatisticsLine text="positive" value={good / all} />
  </tbody></table >
    : <div>No feedback given</div>
}

export default Statistics
