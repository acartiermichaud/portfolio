// Component
import Header from '../../components/Header'

// Style
import './style.scss'

// Redux
import { useSelector } from 'react-redux'


function Contact () {

  const { nightMode } = useSelector((state) => state.display)
  
  return (
    <div>
      <Header activeTab="contact"/>
      <main>
        <section className="contact">
          <h1 className={nightMode?"contact_title text_nightmode":"contact_title text_lightmode"}>Contact</h1>
          <form className='contact_form' action="#" method="post">
            <label className={nightMode?"contact_label text_nightmode":"contact_label text_lightmode"} htmlFor="name">Nom</label>
            <input className={nightMode?"contact_input contact_input_nightmode":"contact_input contact_input_lightmode"} type="text" name="name" id="name"/>
            <label className={nightMode?"contact_label text_nightmode":"contact_label text_lightmode"} htmlFor="email">Email</label>
            <input className={nightMode?"contact_input contact_input_nightmode":"contact_input contact_input_lightmode"} type="email" name="email" id="email"/>
            <label className={nightMode?"contact_label text_nightmode":"contact_label text_lightmode"} htmlFor="message">Message</label>
            <textarea className={nightMode?"contact_textarea contact_textarea_nightmode":"contact_textarea contact_textarea_lightmode"} name="message" id="message" cols="60" rows="10"></textarea>
            <div className='contact_button-container'>
              <div className={nightMode?"contact_button contact_button_nightmode":"contact_button contact_button_lightmode"}>ENVOYER</div>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}
  
export default Contact