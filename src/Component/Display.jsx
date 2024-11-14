import axios from "axios";
import {useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Display =()=>{
    const [state,setState]=useState([])
    const navigate= useNavigate()
    async function getData(){
        try{
          const a= await axios.get('https://66b2f6ac7fba54a5b7eaeee4.mockapi.io/yes/post')
         
          setState(a.data)
  
        }catch(error){
          console.log(error)
        }
      }

    useEffect(()=>{
       
        getData()
      },[])

console.log(state)
function Edited(id,name,age){
    localStorage.setItem('id',id);
    localStorage.setItem('name',name);
    localStorage.setItem('age',age);
    navigate('/edit');
}

function Deleted(id){
    axios.delete(`https://66b2f6ac7fba54a5b7eaeee4.mockapi.io/yes/post/${id}`).then(()=>{getData()})
    }


    if(state.length === 0){
        return(
            <>
            <h5 style={{textAlign:"center"}}> Loading...</h5>
            </>
        )
    }
return(
    <>
    
        <table >
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            {
                state.map((item)=>{
                    console.log(item)
                    const {id,name,age}= item
                    return(
                        <>
                        <tr key={item.id}>
                            <td >{id}</td>
                            <td >{name}</td>
                            <td >{age}</td>
                            <td><CiEdit size="40px" color="blue" onClick={()=>{Edited(id,name,age)}}/></td>
                            <td><MdDelete size="40px" color="red" onClick={()=>{Deleted(id)}}/></td>
                        </tr>
                        </>
                    )
                })
            }
        </table>
    
    </>
)
    
       
        
    
}
export default Display;