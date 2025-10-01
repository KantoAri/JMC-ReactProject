
import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import "../components/Contact/contact.css"
const ContactList =()=> {
   const [users,setUsers] = useState([])
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data)
      }
      catch(error)
      {
        console.log("Error while fetching data",error)
      }
      
    };
    fetchData()
  },[]);

const deleteUser = async(userId) =>{
    await axios.delete(`http://localhost:8000/api/delete/user/${userId}`)
    .then((response)=>{
      setUsers((prevUser)=>prevUser.filter((user)=>user._id !== userId));
      toast.success(response.data.message,{position:"top-right"});
    })   
    .catch((error)=>{
      console.log(error);
    })
  }

  return (
    <div className="table-responsive">
      {/* <Link to="/add" type="button" className="btn btn-primary">
          <i class="fa-regular fa-plus"></i>
      </Link> */}
      <table className="table table-striped table-dark">
            <thead className='thead-dark' style={{backgroundColor:"gray"}}>
                <tr style={{backgroundColor:"gray"}}>
                    <th scope="col" style={{backgroundColor:"gray"}}>S.N°</th>
                    <th scope="col" style={{backgroundColor:"gray"}}>Nom</th>
                    <th scope="col" style={{backgroundColor:"gray"}}>Email</th>
                    <th scope="col" style={{backgroundColor:"gray"}}>Téléphone</th>
                    <th scope="col" style={{backgroundColor:"gray"}}>Mot de passe</th>
                    <th scope="col" style={{backgroundColor:"gray"}}>Abonné à newsletter</th>
                    <th scope="col" style={{backgroundColor:"gray"}}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index) =>
                {
                  let abn = user.abonner;
                  if(user.abonner)
                  {
                      abn= "Oui";
                  }
                  else abn= "Non";
                  return(
                    
                   
                    <tr>
                      <td>{index+1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.telephone}</td>
                      <td>{user.mdp}</td>
                      <td style={{color:"green"}}>{abn}</td>
                      <td>
                        <Link to={`/update/`+user._id} type="button" className="btn btn-success">
                          <i class="fa-solid fa-pencil"></i>
                        </Link>
                        <button onClick={()=>deleteUser(user._id)}
                        style={{margin:"2px"}}
                         type="button" className="btn btn-danger">
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                  </tr>
                  )
                    
                }
                )}
                
            </tbody>
      </table>
      
    </div>
  )
}

export default ContactList
