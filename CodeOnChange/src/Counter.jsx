import { useContext, useEffect, useState, useRef } from "react";
import { dataConstext } from "./Home";

function Counter (){
    const [count, setCount] = useState(0);

    let refCount = useRef(0);

    const data = useContext(dataConstext);

    function inc(){
       // setCount(preCount => preCount+1);
        //setCount(preCount => preCount+1);
        setCount(count+1);
        refCount.current ++;
        console.log('count:'+count);
        console.log('refcount:'+refCount.current);
    }
    useEffect(()=>{
        //console.log(count);
        //console.log(refCount);
    });
    return (
        <>
        <h2>{data}</h2>
        <h2 className="m-5">{refCount.current}</h2>
        <button className='mx-5 btn btn-primary' onClick={inc}>UP</button>
        <button className='btn btn-secondary' onClick={()=>{setCount(refCount.current)}}>UPdate</button>
        </>
    );
}

export default Counter;