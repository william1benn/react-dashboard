import React, { useEffect } from 'react';
import axios from './axios';

const main = (props) => {

    //const [count] = useState();

    useEffect(() => {

axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response)=>{
        console.log(response);
    })


    })

    return (
        <div>
            <h1>Hi</h1>
        </div>
    )
}

export default main;
