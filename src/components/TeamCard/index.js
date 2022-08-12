import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <li className="list-container">
      <Link to={`/team-matches/${id}`} className="link-route">
        <img src={teamImageUrl} alt={name} className="image-url" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
