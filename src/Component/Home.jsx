import { useNavigate } from "react-router-dom";
import Display from "./Display";

const Home =()=>{
    const navigate=useNavigate()
    return(
        <>
        
       
        <h1 style={{textAlign:"center"}}>Data</h1>
       <Display/>

       <button style={{width:"20%",marginLeft:"600px",marginTop:"20px",height:"50px",backgroundColor:"darkgray",color:"black",fontSize:"30px",cursor:"pointer"}} onClick={()=>{navigate('/create')}}>Add New</button>
        </>
    )
}
export default Home;