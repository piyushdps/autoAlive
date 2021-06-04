import { useEffect, useState } from "react";
import axios from 'axios'
import Form from "react-bootstrap/Form";
import {Button,ButtonGroup} from "react-bootstrap";
import "./index.css";
import ClassList from "./ClassList";
import Container from "react-bootstrap/esm/Container";
import Cookies from 'universal-cookie';
import { useToasts } from "react-toast-notifications";



function App() {
// states
const cookies = new Cookies();
const [auid, setAuid] = useState("");
const [password, setPassword] = useState("");
const [token, setToken] = useState('');
const [userData , setUserData] = useState({});
const [intervalID, setIntervalID] = useState("");

const { addToast } = useToasts();
const [classListArray , setClassListArray] = useState([]);

const [starter , setStarter]=useState(false)

const [status,setStatus] = useState(false)
  const auth = {
    headers: {
      'Authorization': `Bearer ${token}`
    }}


// FUNCTIONS

//  LOGIN FUNCTION 
const login = async () =>
{
 
const url = 'https://api.alive.university/api/v1/login/erp'
const data = {username: auid.toLowerCase(), password: password, usertype: "STUDENT"}
try {
  const res =  await axios.post(url , data)
 if(res.data.status){
   setStatus(true)
   setCookie(res.data.token, 'token', 365);
   setToken(res.data.token)
 }else{
   setStatus(false)
  addToast("Login Error :  Wrong AUID or Password", { appearance: 'error'  , autoDismiss:true });

 }


} catch (error) {
  addToast("Login Error : "+error, { appearance: 'error'  , autoDismiss:true });

}

}



function setCookie(cname, cvalue, exdays) {
  cookies.set( cvalue,cname, { path: '/' });
}




// 






function getCookie(cname) {
if( cookies.get(cname)){
  return cookies.get(cname)
}else 
  return""
} 







function checkCookie() {
  let token = getCookie("token");
  
  if (token !== "") {
  setStatus(true);
  setToken(token);
return
  } else {
   setStatus(false)
   
    }

    getUser();
  }



useEffect(() => {
 checkCookie()

}, [])




//  GET USER FUNCTION
const getUser = async() => {
const url = 'https://api.alive.university/api/v1/user'


if(token){
try {
  const res = await  axios.get(url,auth )

  console.log(res.data.data)
  setUserData(res.data.data)
} catch (error) {
  console.log()
  addToast("GET USER DATA ERROR"+error, { appearance: 'error'  , autoDismiss:true });

}
}
else return 

}
// GET ROOMS FUNCTION
const getRooms = async () =>{

const url = 'https://api.alive.university/api/v1/getrooms';
const data ={org_code: userData?.institute_name_short|| ''} 
try {
  const res = await axios.post(url,data,auth)
  console.log(res.data.data)
  let classArray = res.data.data
  setClassListArray(classArray)

} catch (error) {
  addToast("Error while Fetching The Rooms"+error, { appearance: 'error'  , autoDismiss:true });

}

}









/////////////////////////////////////////////////
// 
// Callers 

useEffect(() => {
 
  return () => {
  }
}, [])


useEffect(() => {
getUser();
  return () => {  

  }
}, [token])

useEffect(() => {
  getRooms()
  return () => {
  }
}, [userData,starter])







function validateForm() {
  return auid.length > 0 && password.length > 0;
}

function handleSubmit(event) {
  event.preventDefault();
  login()
}


  return (
   
        <Container > <div style={{border:"1px solid black" , padding:50}}>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>   <img src='/logo.png' width={250}/></div>
    <div className="Login">
    <Form onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="email">
        <Form.Label>AUID</Form.Label>
        <Form.Control
          disabled={ status}
          autoFocus
          type="text"
          value={auid}
          onChange={(e) => setAuid(e.target.value)}
        />
      </Form.Group>
      <Form.Group size="lg" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
        disabled={ status}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button block size="lg" variant={!status?"primary" : "light"}  type="submit" disabled={!validateForm() || status}>
        Login
      </Button>
      <Button block size="lg" variant={status?"danger" : "light"} onClick={e=>{ cookies.remove('token') ; setStatus(false);clearInterval(intervalID) ;setUserData({}); setStarter(false);}} type="reset" disabled={!status}>
      Logout
      </Button>
    </Form>
  </div>

   
    <div style={{display:'flex' , justifyContent:'space-between'}} className='Login'>
  <h3>Logged In : {status? '✔' : '❌'} </h3>
 {status&&<ButtonGroup aria-label="Basic example">


  <Button variant="light" disabled> Start Auto Class Join</Button>
  <Button variant={!starter?"secondary":"primary"}  disabled={starter?true:false} onClick={e=>{setStarter(true)}}>ON</Button>
  <Button variant={starter?"secondary":"primary"} disabled={!starter?true:false} onClick={e=>{setStarter(false); 
  clearInterval(intervalID)
  }}>OFF</Button>
  </ButtonGroup>}
  </div>
  <h5>{userData?.session_data?.student_name && 'Hi,' + userData?.session_data?.student_name}</h5>
  {userData?.session_data?.student_name && <h5>FEE PAYMENT : {userData?.session_data?.due_status ? "Fees Not Paid " : "Fees Paid " }</h5>}
  {userData?.session_data?.student_name && <h5>ELIGIBLITY : {userData?.session_data?.eligible_status ? "Eligible to attend Classes" : "Not Eligible to attend Classes " }</h5>}


 <br/>
 <br/>
 {starter?<ClassList classListArray = {classListArray }  auth={auth} intervalID={intervalID} setIntervalID={setIntervalID} />: <h5>AutoAlive is disabled. Login and Toggle on the switch to search for classes </h5>}
 <br/>
 <p>

<h5>
DESCRIPTION:
</h5>
1.Use ALIVE AUID and Password to login<br/>
2.Login and Toggle switch to ON to start AutoAlive<br/>
3.It will automatically Join Ongoing Class every 10 minutes i.e even if teacher restarts the session you ll be able to join it within 10 minutes of restart<br/>
4.Its still an apha version of the app so don't completly rely on this<br/>
5.Keep this tab running in  chrome browser <br/>
6.Turn off auto sleep timer in your device settings <br/>
7.You ll have to select the join audio option!! Its just a webpage after all.<br/>


 </p>

<h3>
  Not Charging any thing for the service.. Any generous donation will get me a cup of coffee! ❤
</h3>

<div style={{display:'flex',justifyContent:'space-evenly'}}>   <img src='/payment.jpeg' width={400}/></div>


 </div>
 
 </Container>
  );
}

export default App;
