
import "../components/Contact/contact.css"
import fond_expertise from '../assets/header-contact-scaled-1-2048x1366.webp'
import {useState, useEffect} from "react"
import axios from "axios";
import { Link } from 'react-router-dom';
//import HeroSection from "../components/Accueil/HeroSection/HeroSection";
const Contact = () => {
  const[email,setEmail] =useState();
  const[subject,setSubject] =useState();
  const[message,setMessage] =useState();
  const[name,setName] =useState();
  const[telephone,setTelephone] =useState();
  
const sendMail=()=>{
 
  //console.log(`mail reçu : ${email}`);

  axios.get("http://localhost:4000/",{
    params:{
      email,
      subject,
      message,
      name,
      telephone,
    }
    
  })
  .then(()=>{
    const tagmsg =  document.getElementById("tagMessage");
           tagmsg.style.display="block";
           tagmsg.innerText ="Merci pour votre message. Il a été envoyé.";
    //console.log(`Success`)
  })
  .catch((error)=>{
    const tagmsg =  document.getElementById("tagMessage");
           tagmsg.style.display="block";
           tagmsg.innerText =error.message;
    console.log(`Failure`)
  })
};

const users ={
        name:"",
        email:"",
        telephone:"",
        abonner: false,
        isExterne:true,
    };
    const[user,setUser] = useState(users);
    //const navigate = useNavigate();

    const inputHandler = (e)=>{
        const {name,value} = e.target;
        
        //console.log(name,value);
       
        switch(name) {
          case "abonner":
            let isChecked = e.target.checked;
            setUser({ ...user, [name]: isChecked }); 
            break;
          case "email":
            setEmail(value);
            setUser({ ...user, [name]: value });
            break;
          case "name":
            setName(value);
            setUser({ ...user, [name]: value });
            break;
            case "telephone":
            setTelephone(value);
            setUser({ ...user, [name]: value });
            break;
          default:
            setUser({ ...user, [name]: value });
        }        
    };

    const submitForm = async(e)=>{
      // console.log(`USER name : ${user.name}`);
      // console.log(`USER mail : ${user.email}`);
      // console.log(`USER teléphone : ${user.telephone}`);
      // console.log(`USER abonner: ${user.abonner}`);
       

      //  console.log(`contact name : ${name}`);
      // console.log(`contact mail : ${email}`);
      // console.log(`contact teléphone : ${telephone}`);
      

        e.preventDefault();
        await axios.post("http://localhost:8000/api/contact",user)
        .then((response)=>{
            console.log("User created successfully");
            window.formUser.reset();
        })
        .catch((error)=>{
            console.log(error)
        })
    };

  return (
    <div>
     
      <section className="expertises-section" style={{ backgroundImage: `url(${fond_expertise})`} }>
        <div className="expertises-overlay"></div>
         <div class="lines">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  </div>
        {/* container-fluid hello position-relative pt-3 */}
        <div style={{width:"100%", height:"100%", zIndex:"2"}} >
          <div style={{color: "white", padding: "10%", fontSize:"2.5rem", fontWeight:"bold"}}>
            <h1 style={{fontSize:"60px"}}>JM-Contacts</h1>
            <h1 style={{fontSize:"60px"}}>A Votre Ecoute</h1>
            <div className="expertises-button-container">
              {/* <Link to="#idContact" className="expertises-button"> */}
              <a className="expertises-button" href="#idContact">
                <i className="fa-solid fa-chevron-right"></i> Parlons de votre projet
                </a>
                
              {/* </Link> */}
            </div>
          </div>
          
          {/* <img src={`${fond_expertise}`} style={{width:"100%"}} class="img-fluid" alt="Responsive image"></img> */}
        </div>
      </section>
        
        <div id="idContact" className="div_contact_main">
          <h1 style={{textAlign: "center", fontSize:"50px"}}>Nous contacter</h1>
          <p style={{width: "200px",margin: "auto auto ", borderBottom:"5px solid #ecba44ff"}}></p>
          <div style={{textAlign: "center", margin: "50px 10px "}}>
            
            <p>
              Vous souhaitez nous contacter pour mieux nous connaitre ? Vous avez besoin d'informations sur nos activités et nos services? Vous souhaitez un accompagnement et un devis ?
            </p>
            <p>
              N'hésitez pas à nous laisser un message en remplissant notre formulaire de contact. Nous nous engageons à vous répondre dans les plus brefs délais afin de répondre à toutes vos questions.
            </p>
          </div>
          
          <section  style={{ margin: " auto auto", maxWidth:500}}>
            
              <form id="formUser" onSubmit={submitForm}>
              <div className="form-group">
                <label htmlFor="name">Prénom et nom</label>
                <input type="text" className="form-control" 
                onChange={inputHandler}
                required id="name" name="name" aria-describedby="emailHelp" />
                
              </div>
              <div className="form-group">
                <label htmlFor="telephone">Téléphone</label>
                <input type="text" className="form-control" 
                onChange={inputHandler}
                required id="telephone" name="telephone" aria-describedby="emailHelp" />
      {/* onChange={(e)=>setEmail(e.target.value)} */}
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" className="form-control" required id="email" name="email"
               onChange={inputHandler}
                aria-describedby="emailHelp" />
                
              </div>
              <div className="form-group">
                <label htmlFor="Objet">Objet</label>
                <input type="text" className="form-control" required id="Objet"
                 onChange={(e)=>setSubject(e.target.value)}
                aria-describedby="emailHelp" />
                
              </div>
              <div className="form-group">
                <label htmlFor="Message">Message</label>
                <textarea className="form-control" required id="Message"
                onChange={(e)=>setMessage(e.target.value)}
                rows="5" cols="50" ></textarea>
                
              </div>
              
              <div className="form-group form-check">
                <input type="checkbox" name="abonner" onChange={inputHandler} className="form-check-input" id="abonner"/>
                <label className="form-check-label" htmlFor="abonner">Abonnez-vous à notre newsletter</label>
              </div>
              <button type="submit" onClick={sendMail}  className="btn btn-primary">Envoyer</button>
              <p id="tagMessage" style={{margin:"5px", border:"solid 2px green", padding:"3px",display:"none"}}>Merci pour votre message. Il a été envoyé</p>
            </form>
          </section>
      </div>
    </div>
    // 
  )
}
export default Contact