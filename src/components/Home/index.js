import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

const apiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {teamMatches: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    const formattedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamMatches: formattedData, isLoading: false})
  }

  renderTeamList = () => {
    const {teamMatches} = this.state

    return (
      <ul className="teams-list">
        {teamMatches.map(eachTeam => (
          <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
        ))}
      </ul>
    )
  }

  renderLoaderDetails = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="dashboard-container">
        <div className="teams-list-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoaderDetails() : this.renderTeamList()}
        </div>
      </div>
    )
  }
}

export default Home
