import User from "./User";

function App(){
  const userData = {
    name: "karthish",
    age:23,
    phone: "1234456777",
    email: "karthish2001@gmail.com",
  }
 

 return (<><h1>Apps</h1>
    <User 
    // name={userData.name}
    // age={userData.age}
    // phoneno={userData.phone}
    {...userData}
    /></>
  )
}
function Hello(){
  return <h1>Hello World</h1>
  
}

export { Hello, App };