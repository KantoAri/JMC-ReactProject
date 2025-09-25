
import { BsAlignCenter } from "react-icons/bs"
import "../components/Contact/contact.css"
import { ImTextColor } from "react-icons/im"
const Contact = () => {
  return (
    <div className="div_contact_main">
        <h1 style={{textAlign: "center"}}>Nous contacter</h1>
        <hr style={{width: "200px", color:"orange", margin:"auto", fontSize:"60px",lineHeight:"10px"}} />
        <div style={{textAlign: "center", margin: "50px 10px "}}>
          
          <p>
            Vous souhaitez nous contacter pour mieux nous connaitre ? Vous avez besoin d'informations sur nos activités et nos services? Vous souhaitez un accompagnement et un devis ?
          </p>
          <p>
            N'hésitez pas à nous laisser un message en remplissant notre formulaire de contact. Nous nous engageons à vous répondre dans les plus brefs délais afin de répondre à toutes vos questions.
          </p>
        </div>
        
        <div>
          
            <form>
            <div class="form-group">
              <label for="NomPrenom">Prénom et nom</label>
              <input type="text" class="form-control" id="NomPrenom" aria-describedby="emailHelp" placeholder="Prénom et nom"/>
              <small id="emailHelp" class="form-text text-muted">Veuillez renseigner ce champ.</small>
            </div>
            <div class="form-group">
              <label for="telephone">Téléphone</label>
              <input type="text" class="form-control" id="telephone" aria-describedby="emailHelp" placeholder="Téléphone"/>
              <small id="emailHelp" class="form-text text-muted">Veuillez renseigner ce champ.</small>
            </div>
            <div class="form-group">
              <label for="Email">E-mail</label>
              <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="E-mail"/>
              <small id="emailHelp" class="form-text text-muted">Veuillez renseigner ce champ.</small>
            </div>
            <div class="form-group">
              <label for="Objet">Objet</label>
              <input type="text" class="form-control" id="Objet" aria-describedby="emailHelp" placeholder="Objet"/>
              <small id="emailHelp" class="form-text text-muted">Veuillez renseigner ce champ.</small>
            </div>
            <div class="form-group">
              <label for="Message">Message</label>
              <textarea class="form-control" id="Message" rows="5" cols="50" placeholder="Message"></textarea>
              <small id="emailHelp" class="form-text text-muted">Veuillez renseigner ce champ.</small>
            </div>
            
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Abonnez-vous à notre newsletter</label>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
          </form>
        </div>
    </div>
  )
}
export default Contact