import { useState, useContext } from "react";
import { dataConstext } from "./Home";
import Counter from "./Counter";

function Login (){

    const [pwd1,setPwd1] = useState("");
    const [pwd2,setPwd2] = useState("");
    const [same,setSame] = useState(true);

    function handlePwd1Change (event){
        setPwd1(event.target.value)
    }
    function handlePwd2Change (event){
        setPwd2(event.target.value)
        console.log(pwd1,pwd2);
        if(pwd1== event.target.value){
            console.log("same");
            setSame(true);
        }
        else{
            console.log("Not Same");
            setSame(false);
        }
    }

    function handlePasswordCheck(){

    }
    const data = useContext(dataConstext);

    return(
        <>
        <h2>{data}</h2>
        <Counter />
        <form className="my-5" style={{width:"50%", margin:"auto"}}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" />
   
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input value={pwd1} onChange={handlePwd1Change} type="password" className="form-control" />
  </div>
  <div className="mb-3">
    <label className="form-label">Re-enter Password</label>
    <input value={pwd2} onChange={handlePwd2Change}type="password" className="form-control" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" />
    <label className="form-check-label" for="exampleCheck1">I Agree</label>
  </div>
  {/* {same && <p>Passwords Match</p>} */}
  {!same && <p>Passwords is Not Match</p>}
  <button type="submit" className="btn btn-primary">Create Account</button>
</form>
        </>
    )
}

export default Login;