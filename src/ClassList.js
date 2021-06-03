import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
const ClassList = ({ classListArray, auth }) => {
  const TimeLimitInMS = 10 * 60 * 1000;
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
      try {
        const res = await axios.post(url, classToJoin, auth);

        console.log(res.data);

        if (res.data.status === true) {
          window.open(res.data.data, "_blank");
          setActiveClass(classToJoin.subject_name_short);
          setIsClassActive(true);
          setTrigger(true);
        } else {
          console.log(`${classToJoin.subject_name_short} has not yet started `);
        }
      } catch (error) {
        console.log(error);
        return;
      }
    });
  };

  const [intervalID,setIntervalID] = useState('')

  useEffect(() => {
    setList(list());
  }, [classListArray, activeClass]);


  // TImer and CLass join code
  useEffect(() => {
    let id = ''
    if (classListArray) {
    
      checkAndGetClassUrl();
    
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

  return <ListGroup>{List}</ListGroup>;
};

export default ClassList;
