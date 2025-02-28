import pic from './assets/tower.jpg'
import React from "react";
const course1 = "HTML"


// const styless = {
//     backgroundColor : "green",
// }


function Course(props){
    return (
        <div className="card">
            <img src={props.image} alt=""/>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <span>{props.rating}</span>
        </div>
    );
}


Course.defaultProps={

    image:pic,
    name:"Codes",
    price:"$193",
    rating:5,
    
}

export default Course