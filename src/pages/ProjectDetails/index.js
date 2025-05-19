// React
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

// Components
import Header from '../../components/Header'
import Carousel from '../../components/Carousel'

// Style
import './style.scss'

// Data
import projectsperso from '../../data/projetsperso.json'
import projects from '../../data/projets.json'

// Redux
import { useSelector } from 'react-redux'


function ProjectDetails () {

  const { nightMode } = useSelector((state) => state.display)

  const selectedId = useParams().id
  let selectedProject = projectsperso.filter((project) => project.id === selectedId)[0]
  if (selectedProject === undefined) {
    selectedProject = projects.filter((project) => project.id === selectedId)[0]
  }
  
  
  return (
    <div>
      <Header activeTab=""/>
        <main className="project_container">
          <section className={nightMode?"project project_nightmode":"project project_lightmode"}>
            <Link to="/projects" value="back">
              <i className={nightMode?"back-arrow text_nightmode fa-solid fa-arrow-left":"back-arrow text_lightmode fa-solid fa-arrow-left"}></i>
            </Link>
            <h1 className={nightMode?"text_nightmode":"text_lightmode"}>{selectedProject.title}</h1>
            <h2 className={nightMode?"project_subtitle text_nightmode":"project_subtitle text_lightmode"}>{selectedProject.subtitle}</h2>
            <div className='project_carousel'><Carousel pictures={selectedProject.pictures}/></div>
            <div className={nightMode?"project_infos project_infos_nightmode":"project_infos project_infos_lightmode"}>
              <div className="project_description">
                  <h3>DESCRIPTION</h3>
                  <p>{selectedProject.description}</p>
              </div>
              <div className='project_details'>
                <div className="project_competences">
                  <h3>COMPÉTENCES</h3>
                  <div className='project_icons-container'>
                    {selectedProject.competences.map(icon => <img className='project_icon' src={icon} alt={icon} key={icon} loading="lasy"></img>)}
                  </div>
                </div>
                <div className='project_links-container'>
                  {selectedProject.githubpage!=="" && <Link className={nightMode?"project_link text_nightmode2":"project_link text_lightmode"} to={selectedProject.githubpage} target="_blank">
                    <i className="project_logo fa-brands fa-github"></i>
                    <h3>Lien GitHub Pages</h3>
                  </Link>}
                  {selectedProject.github!=="" && <Link className={nightMode?"project_link text_nightmode2":"project_link text_lightmode"} to={selectedProject.github} target="_blank">
                    <i className="project_logo fa-brands fa-github"></i>
                    <h3>Lien GitHub</h3>
                  </Link>}

                  {selectedProject.siteweb!=="" && <Link className={nightMode?"project_link text_nightmode2":"project_link text_lightmode"} to={selectedProject.siteweb} target="_blank">
                    <i className="project_logo fa-solid fa-earth-americas"></i>
                    <h3>Lien site web</h3>
                  </Link>}
                </div>
              </div>
            </div>
          </section>
        </main>
    </div>
  )
}
  
export default ProjectDetails