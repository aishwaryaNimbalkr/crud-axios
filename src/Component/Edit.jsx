import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Edit=()=>{
    const [id,setId]=useState(0);
    const [name,setName]=useState("");
    const [age,setAge]=useState("");

    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
    },[])
   

    const navigate=useNavigate();

    const updateData=(e)=>{
        e.preventDefault();
        axios.put(`https://66b2f6ac7fba54a5b7eaeee4.mockapi.io/yes/post/${id}`,{name:name,age:age}).then(()=>{ navigate('/')})
       
    }

    return(
       
        <>
         <div>
            <form onSubmit={updateData}>
                <input type="text" value={name} placeholder="Enter Your Name.." onChange={(e)=>{setName(e.target.value)}}/>
                <input type="text" value={age} placeholder="Enter Age.." onChange={(e)=>{setAge(e.target.value)}}/>
                <input type="submit" value={"Update"}/>
            </form>
        </div>
        </>
    )
}
export default Edit;