// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'


function FormationLabel ({icon, title, text}) {
  
  return (
    <div className='formation_label'>
      <i className={icon}></i>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

FormationLabel.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}
  
export default FormationLabel