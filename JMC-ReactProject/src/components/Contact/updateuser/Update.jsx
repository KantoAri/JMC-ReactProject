import React, { useEffect, useState } from 'react'
import { Link , useNavigate,useParams } from 'react-router-dom';
import axios from "axios";
import "./update.css";
import toast from 'react-hot-toast';
const Update =()=> {
    const users ={
        name:"",
        email:"",
        telephone:"",
        mdp:"",
    };
    const[user,setUser] = useState(users);
    const navigate = useNavigate();
    const {id} = useParams(); 

    const inputHandler = (e)=>{
        const {name,value} = e.target;
        //console.log(name,value);
        setUser({ ...user, [name]: value });
    };

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/user/${id}`)
        .then((response)=>{
            setUser(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })

    },[id]);
    const submitForm = async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/update/user/${id}`,user)
        .then((response)=>{
          
          toast.success(response.data.message,{position:"top-right"});
            navigate("/listContact");
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div>
        <div className='divContent'>
     
       <section  style={{ margin: " auto auto", maxWidth:500}}>
            
              <form onSubmit={submitForm}>
                 <div className="form-group">
                    <p style={{fontSize:"40px"}}>Modification d'utilisateur</p>
                    <Link to="/listContact" type="button" class="btn btn-secondary">
                      <i class="fa-solid fa-backward"></i>
                      Retour
                    </Link>
                 </div>      
              <div className="form-group">
                <label htmlFor="name">Prénom et nom</label>
                <input type="text" className="form-control" 
                onChange={inputHandler}
                required id="name" name="name" value={user.name}
                 aria-describedby="emailHelp" />
                
              </div>
              <div className="form-group">
                <label htmlFor="telephone">Téléphone</label>
                <input type="text" className="form-control" 
                onChange={inputHandler} value={user.telephone}
                required id="telephone" name="telephone" aria-describedby="emailHelp" />
      {/* onChange={(e)=>setEmail(e.target.value)} */}
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" className="form-control" required id="email" name="email"
               onChange={inputHandler} value={user.email}
                aria-describedby="emailHelp" />
                
              </div>
              
              <button type="submit"  className="btn btn-primary">Enregistrer</button>
            </form>
          </section>
      </div>
    </div>
    
  )
}

export default Update;
