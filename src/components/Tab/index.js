// React component
import {Link} from 'react-router-dom'

// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'

// Redux
import { useSelector } from 'react-redux'


function Tab ({isActive, path, text}) {

  const { nightMode } = useSelector((state) => state.display)
  let tabClass
  if (nightMode) {
    if (!isActive) {
      tabClass = "tab tab_nightmode"
    }
    else {
      tabClass = "tab tab_active_nightmode"
    }
  }
  else {
    if (!isActive) {
      tabClass = "tab tab_lightmode"
    }
    else {
      tabClass = "tab tab_active_lightmode"
    }
  }
  
  return (
    <Link className={tabClass} to={path}>{text}</Link>
  )
}

Tab.propTypes = {
  isActive: PropTypes.bool,
  path: PropTypes.string,
  text: PropTypes.string
}
  
export default Tab