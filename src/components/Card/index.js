// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'

// Redux
import { useSelector } from 'react-redux'


function Card ({url, alt, title, subtitle}) {
  
  const { nightMode } = useSelector((state) => state.display)
  
  return (
    <article className={nightMode?"card card_nightmode":"card card_lightmode"}>
      <img className='card_image' src={url} alt={alt} loading="lasy"></img>
      {nightMode && <div className='card_gradient'></div>}
      <h1 className='card_title'>{title}</h1>
      <h2 className='card_subtitle'>{subtitle}</h2>
    </article>
  )
}

Card.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string
}
  
export default Card