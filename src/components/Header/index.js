// React
import { useState } from 'react'

// React component
import {Link} from 'react-router-dom'

// PropTypes
import PropTypes from 'prop-types'

// Component
import Tab from '../../components/Tab'

// Style
import './style.scss'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { displaySelect, displayUnselect } from '../../redux/displayActions'


function Header ({activeTab}) {
  
  const { nightMode } = useSelector((state) => state.display)
  const initialMode = nightMode ? 'header_sun fa-solid fa-sun' : 'header_moon fa-solid fa-moon'
  const [displayIconValue, setdisplayIconValue] = useState(initialMode)
  const dispatch = useDispatch()

  function selectDisplay () {
    if (displayIconValue !== "header_sun fa-solid fa-sun") {
      setdisplayIconValue("header_sun fa-solid fa-sun")
      dispatch(displaySelect())
    }  
    else {
      setdisplayIconValue("header_moon fa-solid fa-moon")
      dispatch(displayUnselect())
    } 
    
  }
  
  return (
    <header className='header'>
      <div className={nightMode?'header_container header_container_nightmode':'header_container header_container_lightmode'}>
        <div className='header_button' onClick={() => selectDisplay()} value="nightmode_switch"><i className={displayIconValue}></i></div>
        <nav className='header_nav'>
          <Tab isActive={activeTab==="profile"} path="/" text="ACCUEIL"/>
          <Tab isActive={activeTab==="projects"} path="/projects" text="PROJETS"/>
          
          <Link className="linkedIn_link" target="_blank" to="https:www.linkedin.com/in/acartiermichaud">
            <i className={nightMode?'linkedIn_logo linkedIn_logo_nightmode fa-brands fa-linkedin':'linkedIn_logo linkedIn_logo_lightmode fa-brands fa-linkedin'}></i>
          </Link>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  activeTab: PropTypes.string
}
  
export default Header