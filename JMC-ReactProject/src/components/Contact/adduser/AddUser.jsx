import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';
import "../updateuser/update.css";
const AddUser =()=> {
    const users ={
        name:"",
        email:"",
         telephone:"",
        mdp:"",
    };
    const[user,setUser] = useState(users);
    const navigate = useNavigate();

    const inputHandler = (e)=>{
        const {name,value} = e.target;
        //console.log(name,value);
        setUser({ ...user, [name]: value });
    };

    const submitForm = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/contact",user)
        .then((response)=>{
          
          toast.success(response.data.message,{position:"top-right"});
            console.log("User created successfully");
            navigate("/listContact");
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div>
       <div className='divContent'>
      <p style={{fontSize:"40px"}}>Nouvel utilisateur</p>
      <Link to="/listContact" type="button" class="btn btn-secondary">
        <i class="fa-solid fa-backward"></i>
        Retour
      </Link>
       <form onSubmit={submitForm}>
              <div className="form-group">
                <label htmlFor="name">Prénom et nom</label>
                <input type="text" className="form-control" 
                onChange={inputHandler}
                required id="name" name='name' aria-describedby="emailHelp" placeholder="Prénom et nom"/>
                
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" className="form-control" name='email' required id="email"
                onChange={inputHandler}
                aria-describedby="emailHelp" placeholder="E-mail"/>
                
              </div>
              <div className="form-group">
                <label htmlFor="telephone">Téléphone</label>
                <input type="text" className="form-control" 
                onChange={inputHandler} 
                required id="telephone" name="telephone" aria-describedby="emailHelp" />
      {/* onChange={(e)=>setEmail(e.target.value)} */}
              </div>
              <div className="form-group">
                <label htmlFor="mdp">Mot de passe</label>
                <input type="text" className="form-control" 
                onChange={inputHandler} 
                required id="mdp" name="mdp" aria-describedby="emailHelp" />
      {/* onChange={(e)=>setEmail(e.target.value)} */}
              </div>              
              <div className="form-group form-check">
                
              </div>
              <button type="submit"  className="btn btn-primary">Enregistrer</button>
            </form>
            </div>
    </div>
  )
}

export default AddUser;
