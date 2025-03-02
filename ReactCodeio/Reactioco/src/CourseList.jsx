import pic from './assets/tower.jpg'
import day from './assets/dayla.jpg'
import night from './assets/nightVag.jpg'
import Course from './Course';
function CourseList(){
    const Courses=[
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
    ]
    Courses.sort((x,y) => x.price-y.price)

    const vfmCourse = Courses.filter((course)=> course.price<200)

    const coursesList = vfmCourse.map(

        
        (course, index) => 
        <Course key={index} name={course.name} 
        image={course.image} 
        price={course.price} 
        rating={course.rating}/>)

    return(
        <>
        {coursesList}
        </>
    );
}

export default CourseList