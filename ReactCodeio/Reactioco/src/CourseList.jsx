import pic from './assets/tower.jpg'
import day from './assets/dayla.jpg'
import night from './assets/nightVag.jpg'
import Course from './Course';
import { useEffect, useState } from 'react';
function CourseList(){
    const [Courses, setCourses]= useState([
        {
            id : 1,    
        name :"HTML Full Course",
        price: 299,
        image: pic,
        rating :5
        },
        {
            id : 2,
            name :"Css Full Course",
            price: 199,
            image: day,
            rating :4
            },
            {
                id : 3,
                name :"JS Full Course",
                price: 199,
                image: night,
                rating :5
                },
                {
                    id : 4,
                    name:"React Full",
                    price: 599,
                    image: day,
                    rating: 5,
                }
    ]);
 
    const [dummy, setDummy] = useState(true);
 
 
    useEffect(()=>{
        console.log('use effect called');
        console.log(dummy);
    },[]);
 
 
    function handleDelete(id){
        const newCourse = Courses.filter((course)=> course.id !=id)
        setCourses(newCourse);

    }
 
  // Courses.sort((x,y) => x.price-y.price)
 
  // const vfmCourse = Courses.filter((course)=> course.price<200)
 
    const coursesList = Courses.map( 
 
        (course) => 
        <Course key={course.id} name={course.name} 
        image={course.image} 
        price={course.price} 
        rating={course.rating}
        delete={handleDelete} 
        id={course.id}/>)
 
    return(
        <>
        {coursesList}
        <button onClick={()=> {setDummy(false)}}>Dummy Button</button>
        </>
    );
}
 
export default CourseList