import { useEffect, useState } from "react"

export default function User (){
    const [users,setuser]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setuser(data))
    },[])
    return(
        <div>
            <h3>user: {users.length}</h3>
        </div>
    )
}