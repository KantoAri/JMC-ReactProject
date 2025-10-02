import React from 'react'
import "../components/connexion/connexion.css"
import "../components/Contact/contact.css"
import fond_expertise from '../assets/header-contact-scaled-1-2048x1366.webp'
import {useState, useEffect} from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
//import HeroSection from "../components/Accueil/HeroSection/HeroSection";

  
const Connexion =() =>{
    const navigate = useNavigate();
  const[name,setName] =useState();
  const[mdp,setMdp] =useState();
    const users ={
        name:"admin",
        mdp:"123",
        telephone:"00000",
        email:"admin@gmail.com"
       
    };
    const[user,setUser] = useState(users);
    //const navigate = useNavigate();

    const inputHandler = (e)=>{
        const {name,value} = e.target;
        
        console.log(name,value);
       
        switch(name) {
          
          case "mdp":
            setMdp(value);
            setUser({ ...user, [name]: value });
            break;
          case "name":
            setName(value);
            setUser({ ...user, [name]: value });
            break;
           
          default:
            setUser({ ...user, [name]: value });
        }        
    };

    const submitForm = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/login",user)
        .then((response)=>{
           // console.log("User created successfull");
            navigate("/listContact");
        })
        .catch((error)=>{
            const tagmsg =  document.getElementById("tagMessage");
           tagmsg.style.display="block";
           tagmsg.innerText ="Login ou mot de passe invalide";
        })
    };

    const createDefaultUser = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/user/default",user)
        .then((response)=>{
            console.log(" DEFAULT User created successfull");
            //navigate("/listContact");
        })
        .catch((error)=>{
            console.log("erreur lor de création d'utilisateur par défaut")
        //     const tagmsg =  document.getElementById("tagMessage");
        //    tagmsg.style.display="block";
        //    tagmsg.innerText ="Login ou mot de passe invalide";
        })
    };
  return (
    <div  onLoad={createDefaultUser}>
        <div className='formCOnnex'>
            <section   style={{ margin: " auto auto", maxWidth:500}}>
            
              <form onSubmit={submitForm} >
                <div className="form-group" style={{fontSize:"40px", textAlign:"center"}}>
                    <label style={{fontSize:"40px", textAlign:"center"}}>AUTHENTIFICATION</label>
                    
                    
                </div>
                <div className="form-group">
                    <label htmlFor="name">Login</label>
                    <input type="text" className="form-control" 
                    onChange={inputHandler}
                    required id="name" name="name" aria-describedby="emailHelp" />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="mdp">Mot de passe</label>
                    <input type="password" className="form-control" 
                    onChange={inputHandler}
                    required id="mdp" name="mdp" aria-describedby="emailHelp" />
                </div>
               
                <button type="submit" 
                style={{margin:"5px"}}
                className="btn btn-primary">Connexion</button>
                <p id='tagMessage' style={{display:"block", color:"red",margin:"5px"}}>coucouc</p>
            </form>
          </section>
        </div>
      
    </div>
  )
}

export default Connexion
