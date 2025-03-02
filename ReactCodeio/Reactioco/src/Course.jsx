
import PropTypes from 'prop-types';
const course1 = "HTML"


// const styless = {
//     backgroundColor : "green",
// }


function Course(props){

        return (

           props.name && <div className="card">
                <img src={props.image} alt=""/>
                <h2>{props.name}</h2>
                <p>{props.price}</p>
                <span>{props.rating}</span>
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