// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
const course1 = "HTML"
 
 
// const styless = {
//     backgroundColor : "green",
// }
 
 
function Course(props){
   // let purchase = false;
    const [purchase, setPurchased] = useState('false');
    const [discount,setDiscont] = useState(props.price);
 
    function BuyCourse(amt){
        console.log(props.name,"purchased with",discount,"% discount");
        //purchase = true;
        setPurchased('true');
        setDiscont(discount-amt);
        console.log(purchase)
 
    }

    useEffect(()=>{
        console.log('inside course use effect')
        console.log(purchase);
    })
 
    return (
        props.name && <div className="card">
            <img src={props.image} alt=""/>
            <h2>{props.name}</h2>
            <p>{discount}</p>
            <button onClick={() => BuyCourse(20)}>Discount</button>
            <button onClick={() => props.delete(props.id)}>Delete</button>
            <p>{purchase}</p>
            
            
            </div>
    );
 
 
}    
 
 
// Course.propTypes = {
//     name : PropTypes.string,
//     rating : PropTypes.number,
//     show : PropTypes.bool
// } 
 
// Course.defaultProps={
 
//     image:pic,
//     name:"Codes",
//     price:"$193",
//     rating:5,
      
// }
 
export default Course