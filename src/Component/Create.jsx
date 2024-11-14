import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create =()=>{
    const [name,setName]=useState("")
    const [age,setAge]=useState("")

    const navigate=useNavigate();
    const addData=(e)=>{
        e.preventDefault()
        console.log(name,age)
        axios.post('https://66b2f6ac7fba54a5b7eaeee4.mockapi.io/yes/post',{name:name,age:age}).then(()=>{navigate('/')})
        setName("")
        setAge("")
       

    }
    return(
        <>
         <div>
            <form onSubmit={addData}>
                <input type="text" value={name} placeholder="Enter Your Name.." onChange={(e)=>{setName(e.target.value)}}/>
                <input type="text" value={age} placeholder="Enter Age.." onChange={(e)=>{setAge(e.target.value)}}/>
                <input type="submit" value={"Submit"}/>
            </form>
        </div>
       
        
        </>
    )
}
export default Create;