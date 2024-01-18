// React component
import {Link} from 'react-router-dom'

// Component
import Header from '../../components/Header'

// Style
import './style.scss'

// Redux
import { useSelector } from 'react-redux'


function Error () {
  
  const { nightMode } = useSelector((state) => state.display)
  
  return (
    <div>
      <Header activeTab=""/>
      <main>
        <section className={nightMode?"error error_nightmode":"error error_lightmode"}>
          <h1>404</h1>
          <h2>Page non trouvée.</h2>
          <Link className={nightMode?"error_link text_nightmode":"error_link text_lightmode"} to="/">Retour à la page d'accueil</Link>
        </section>
      </main>
    </div>
  )
}
  
export default Error