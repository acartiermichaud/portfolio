// React component
import {Link} from 'react-router-dom'

// Components
import Header from '../../components/Header'
import Card from '../../components/Card'

// Style
import './style.scss'

// Data
import projectsperso from '../../data/projetsperso.json'
import projects from '../../data/projets.json'

// Redux
import { useSelector } from 'react-redux'


function Projects () {

  const { nightMode } = useSelector((state) => state.display)
  
  return (
    <div>
      <Header activeTab="projects"/>
      <main>
      <section className="projects">
          <h1 className={nightMode?"projects_title text_nightmode":"projects_title text_lightmode"}>Projet personnel</h1>
          <div className='projects_container'>
            {projectsperso.map(({id, title, subtitle, cover}) =>
              <Link className="projects_link" key={id} to={`/project/${id}`}>
                <Card url={cover} alt={title} title={title} subtitle={subtitle}/>
              </Link>
            )}
          </div>
        </section>

        <section className="projects">
          <h1 className={nightMode?"projects_title text_nightmode":"projects_title text_lightmode"}>Projets réalisés au cours de ma formation</h1>
          <div className='projects_container'>
            {projects.map(({id, title, subtitle, cover}) =>
              <Link className="projects_link" key={id} to={`/project/${id}`}>
                <Card url={cover} alt={title} title={title} subtitle={subtitle}/>
              </Link>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
  
export default Projects