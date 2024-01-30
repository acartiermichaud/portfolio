// React component
import {Link} from 'react-router-dom'

// Components
import Header from '../../components/Header'
import FormationLabel from '../../components/FormationLabel'
import Competence from '../../components/Competence'

// Style
import './style.scss'

// Images
import photoProfile from '../../images/photo_profile.webp'
import openClassrooms from '../../images/openClassrooms.webp'
import imgFormation from '../../images/integrateurWeb.webp'
import logoHTML from '../../images/competences/HTML.webp'
import logoCSS from '../../images/competences/CSS.webp'
import logoJS from '../../images/competences/JS.webp'
import logoResponsive from '../../images/competences/responsive.webp'
import logoReact from '../../images/competences/react.webp'
import logoRedux from '../../images/competences/redux.webp'
import logoSEO from '../../images/competences/seo.webp'
import logoGestion from '../../images/competences/gestion.webp'

// Redux
import { useSelector } from 'react-redux'


function Home () {

  const { nightMode } = useSelector((state) => state.display)
  
  return (
    <div>
      <Header activeTab="profile"/>
      <main>
        <article className={nightMode?"description description_nightmode":"description description_lightmode"}>
          <img src={photoProfile} alt="Amandine Cartier-Michaud" className="description_photo" loading="lasy"/>
          <div className="description_text">
            <div className="description_title">
              <h1>AMANDINE</h1>
              <h1>CARTIER-MICHAUD</h1>
            </div>
            <p>Développeuse web rigoureuse, créative et motivée !</p>
          </div>
        </article>

        <section className={nightMode?"formation home_nightmode":"formation home_lightmode"}>
          <h1>Formation</h1>
          <div className='formation_container'>
            <div className='formation_card'>
              <div className="formation_title">
                <Link className={nightMode?"formation_link text_nightmode":"formation_link text_lightmode"}
                  target="_blank" to="https://openclassrooms.com/fr/paths/594-integrateur-web">
                  <h2>Intégrateur Web</h2>
                </Link>
                <img src={openClassrooms} alt="OpenClassrooms" className="formation_logo" loading="lasy"/>
                <h3>AVRIL 2023 - DÉCEMBRE 2023</h3>
              </div>
              <FormationLabel 
                icon="formation_icon fa-solid fa-graduation-cap" 
                title="CERTIFICATION" 
                text="Diplôme de niveau 5 (bac +2)"
              />
              <FormationLabel 
                icon="formation_icon fa-regular fa-calendar" 
                title="PÉRIODE DE FORMATION" 
                text="9 mois à temps plein"
              />
              <FormationLabel 
                icon="formation_icon fa-regular fa-clock" 
                title="DURÉE DE LA FORMATION" 
                text="600 heures supervisées"
              />
            </div>
            <div className="formation_img-container">
              <img src={imgFormation} alt="Intégrateur Web" className="formation_img" loading="lasy"/>
            </div>
          </div>
        </section>

        <section className={nightMode?"competences home_nightmode":"competences home_lightmode"}>
          <h1>Compétences</h1>
          <div className="competences_container">
            <Competence 
              img={[{src: logoHTML, alt: "HTML"}, {src: logoCSS, alt: "CSS"}, {src: logoJS, alt: "JavaScript"}]}
              title="Html / Css / Javascript" 
              text="Maîtrise des technologies et des langages techniques les plus demandés."
            />
            <Competence 
              img={[{src: logoResponsive, alt: "Responsive Design"}]}
              title="Responsive Design" 
              text="Mise en place d'un design compatible avec tous les types de navigateurs et toutes les tailles d’écrans."
            />
            <Competence 
              img={[{src: logoReact, alt: "React"}, {src: logoRedux, alt: "Redux"}]}
              title="React & Redux" 
              text="Utilisation des technologies React & Redux pour les sites plus complexes (authentification de l'utilisateur, gestion de données, ...)."
            />
            <Competence 
              img={[{src: logoSEO, alt: "SEO"}]}
              title="Optimisation SEO" 
              text="Pour un fonctionnement optimal et une bonne visibilité sur les moteurs de recherche."
            />
            <Competence 
              img={[{src: logoGestion, alt: "Gestion de Projet"}]}
              title="Gestion de Projet" 
              text="Du découpage des tâches du projet à la présentation de la solution, en passant par la rédaction des spécifications techniques."
            />
          </div>
        </section>
      </main>
    </div>
  )
}
  
export default Home