// React
import {useState, useEffect} from 'react'

// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'

// Redux
import { useSelector } from 'react-redux'


function Carousel ({pictures}) {
  
  const { nightMode } = useSelector((state) => state.display)
  const total = pictures.length
  let [position, setPosition] = useState(0)
  const [oldPosition, setOldPosition] = useState(0)
  const [mvt, setMvt] = useState("none")

  // Function that calculates the new position in carousel
  function calcPosition (direction) {
    if (direction === "forward") {
      if (position === total - 1) {
        position = 0
        setOldPosition(total - 1)
      }
      else {
        position += 1
        setOldPosition(position - 1)
      }
    }
    if (direction === "back") {
      if (position === 0) {
        position = total - 1
        setOldPosition(0)
      }
      else {
        position -= 1
        setOldPosition(position + 1)
      }
    }
    return position
  }

  // Function that displays sliding then initializes mvt variable
  function sliding (direction) {
    setMvt(direction)
    setTimeout(() => {setMvt('none')}, 700)
  }
  
  // Function that triggers the carousel animation
  function handleArrowClick (direction) {
    setPosition(calcPosition(direction))
    sliding(direction)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleArrowClick("forward")
    }, 2000)
    return () => clearInterval(interval)
  }, [handleArrowClick]) 

  return (
    <div className='carousel'>
      {nightMode && <div className='carousel_gradient'></div>}

      <img className={`carousel_image carousel_image_current carousel_image_current_mvt-${mvt}`} src={pictures[position]} alt="Projet" loading="lasy"></img>
      <img className={`carousel_image carousel_image_previous carousel_image_previous_mvt-${mvt}`} src={pictures[oldPosition]} alt="Projet" loading="lasy"></img>

      {total > 1 && <div className='carousel_arrow carousel_arrow_forward' onClick={() => handleArrowClick("forward")}><i className="carousel_icon fa-solid fa-angle-right"></i></div>}
      {total > 1 && <div className='carousel_arrow carousel_arrow_back' onClick={() => handleArrowClick("back")}><i className="carousel_icon fa-solid fa-angle-left"></i></div>}

      {total > 1 && <div className={nightMode?"carousel_page-numbers text_nightmode2":"carousel_page-numbers text_lightmode"}><h3>{`${position+1}/${total}`}</h3></div>}
    </div>
  )
}

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string)
}

export default Carousel