import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    competingTeam,
    firstInnings,
    secondInnings,
    competingTeamLogo,
    date,
    venue,
  } = latestMatchData

  return (
    <div>
      <h1 className="latest-match">Latest Matches</h1>
      <div className="latest-match-container">
        <div className="latestMatchLogoContainer">
          <div>
            <p className="team-competing">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="match-details">{venue}</p>
            <p className="match-details">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-team-logo"
          />
        </div>
        <hr className="horizontal-line" />
        <div>
          <p className="innings">First Innings</p>
          <p className="latest-match-innings">{firstInnings}</p>
          <p className="innings">Second Innings</p>
          <p className="latest-match-innings">{secondInnings}</p>
          <p className="innings">Man Of The Match</p>
          <p className="latest-match-innings">{manOfTheMatch}</p>
          <p className="innings">Umpires</p>
          <p className="latest-match-innings">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
