import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

function TitlePage(){
    const navigate=useNavigate();

    useEffect(()=>{
        navigate("/login");
    },[]);

    return (
        <>
        <h1>hi</h1>
        </>
    );
}

export default TitlePage