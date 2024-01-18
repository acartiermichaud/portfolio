// React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Pages
import Home from '../../pages/Home'
import Projects from '../../pages/Projects'
import ProjectDetails from '../../pages/ProjectDetails'
import Contact from '../../pages/Contact'
import Error from '../../pages/Error'

// Component
import Footer from '../../components/Footer'

// Style
import './style.scss'

// Redux
import { useSelector } from 'react-redux'


function MyRouter () {
  
  const { nightMode } = useSelector((state) => state.display)
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={nightMode?"page-container page-container_nightmode":"page-container page-container_lightmode"}>
        <Routes>
          <Route path="/" element={<Home />} errorElement={<Error />}/>
          <Route path="/projects" element={<Projects />} errorElement={<Error />}/>
          <Route path="/project/:id" element={<ProjectDetails />} errorElement={<Error />}/>
          <Route path="/contact" element={<Contact />} errorElement={<Error />}/>
          <Route path="/error" element={<Error />} errorElement={<Error />}/>
          <Route path="*" element={<Error />} errorElement={<Error />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
  
export default MyRouter