import {Component} from 'react'
import Loader from 'react-loader-spinner'

import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()
    console.log(fetchedData)
    const formattedData = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMatchDetails: this.getFormattedData(
        fetchedData.latest_match_details,
      ),
      recentMatches: fetchedData.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }
    this.setState({teamMatchesData: formattedData, isLoading: false})
  }

  renderRecentMatchDetails = () => {
    const {teamMatchesData} = this.state
    const {recentMatches} = teamMatchesData

    return (
      <ul className="recentMatchesContainer">
        {recentMatches.map(eachMatch => (
          <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
        ))}
      </ul>
    )
  }

  renderLatestMatches = () => {
    const {teamMatchesData} = this.state
    const {latestMatchDetails, teamBannerUrl} = teamMatchesData

    return (
      <div className="latestMatchContainer">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <LatestMatch latestMatchData={latestMatchDetails} />
        {this.renderRecentMatchDetails()}
      </div>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SHR':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state
    const className = `team-bg-container ${this.getRouteClassName()}`

    return (
      <div className={className}>
        <div className="dashboardContainer">
          {isLoading ? this.renderLoader() : this.renderLatestMatches()}
        </div>
      </div>
    )
  }
}

export default TeamMatches
