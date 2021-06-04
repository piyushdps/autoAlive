import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { ToastProvider, useToasts } from 'react-toast-notifications';
const ClassList = ({ classListArray, auth }) => {
  
  const [TimeLimitInMS, setTimeLimitInMS] = useState(10 * 60 * 1000);

  const { addToast } = useToasts();
  const [List, setList] = useState(<></>);
  const [activeClass, setActiveClass] = useState("");
  const [isClassActive, setIsClassActive] = useState(false);
  const [trigger, setTrigger] = useState(false);

  var list = () => {
    if (classListArray && classListArray !== []) {
      var lis = classListArray?.map((classes, i) => (
        <ListGroup.Item
          key={i}
          variant={classes.subject_name_short === activeClass ? "success" : ""}
        >
          {`${classes?.subject_name_short} |  Time : ${classes.interval} `}
        </ListGroup.Item>
      ));
    } else {
      return "NO CLASSES FOUND";
    }

    return lis;
  };

  // class check and Join

  const checkAndGetClassUrl = async () => {
    const url = "https://api.alive.university/api/v1/join-session";
    classListArray?.forEach(async (classToJoin) => {
      let currentDate = new Date();
      let currentHour = currentDate.getHours();
      let currentMinute = currentDate.getMinutes();
      
      if( parseInt(classToJoin.eTime.split(":")[0]) === parseInt( currentHour) )
{

      try {
        const res = await axios.post(url, classToJoin, auth);

        console.log(res.data);

        if (res.data.status === true) {
          window.open(res.data.data, "_blank");
          setActiveClass(classToJoin.subject_name_short);
          setIsClassActive(true);
          setTrigger(true);
        } else {

          addToast(`${classToJoin.subject_name_short} has not yet started `, { appearance: 'info'  , autoDismiss:true });
        }
      } catch (error) {
        console.log(error);
        return;
      }

}else{
  addToast(`No Class Available in this Hour Take a break`, { appearance: 'info'  , autoDismiss:true });
}
    });
  };

  const [intervalID,setIntervalID] = useState('')

  useEffect(() => {
    setList(list());
  }, [classListArray, activeClass]);

  useEffect(() => {
    if(classListArray){ checkAndGetClassUrl();}
    
  }, [])

  // TImer and CLass join code
  useEffect(() => {
    let id = ''
    if (classListArray) {
       id  = setInterval(function () {
        checkAndGetClassUrl();
      }, TimeLimitInMS);
    }
    setIntervalID(id)

    return () => {
      console.log("Interval Disabled", intervalID);
      clearInterval(intervalID);
    };
  }, [classListArray]);

  return <div><ListGroup>{List}</ListGroup>
  
  <br/>
  {/* <iframe src={classUrlFetched}  width={'100%'} ></iframe> */}
  
  </div>;
};

export default ClassList;
