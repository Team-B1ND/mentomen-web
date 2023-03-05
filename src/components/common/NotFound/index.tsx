import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound(){
    const navigate = useNavigate();

    useEffect(()=>{
        window.alert('알맞지 않는 페이지입니다!');
        navigate('/');
    },[navigate]);

    return(
        <></>
    );
}