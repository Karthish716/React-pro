import { useContext, useEffect, useState } from "react";
import { dataConstext } from "./Home";

function Counter (){
    const [count, setCount] = useState(0);

    const data = useContext(dataConstext);

    function inc(){
        setCount(preCount => preCount+1);
        //setCount(preCount => preCount+1);
    }
    useEffect(()=>{
        console.log(count);
    },[count]);
    return (
        <>
        <h2>{data}</h2>
        <h2 className="m-5">{count}</h2>
        <button className='mx-5' onClick={inc}>UP</button>
        </>
    );
}

export default Counter;