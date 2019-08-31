import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = (props) => {

    const[theData, settheData] = useState({
        id:'',
        title:'',
    });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response)=>{
         console.log(response.data)
          settheData({
              id: response.data.id,
              title:response.data.title,
          })
      });
  });
  return (
    <div>
        <h5>{theData.title}</h5>
        <h5>{theData.id}</h5>
    </div>
) 
};

export default Main;

