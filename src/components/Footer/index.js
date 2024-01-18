// React component
import {Link} from 'react-router-dom'

// Style
import './style.scss'


function Footer () {
  
  return (
    <footer>
      <Link className="link" to="/contact">
        <i className="fa-regular fa-envelope"></i>
        <p>Contactez moi</p>
      </Link>
    </footer>
  )
}
  
export default Footer