import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchDetails

  const getMatchStatusClassName = status =>
    status === 'Won' ? 'match-won' : 'match-lost'

  const matchStatusClassName = `status ${getMatchStatusClassName(matchStatus)}`

  return (
    <li className="match-list-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-logo"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
