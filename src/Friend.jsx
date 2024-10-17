import { useEffect, useState } from "react"
import Friend from "./Friends";
import './Friend.css'

export default function Friends(){

    const [friends,setFriends]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])

    return(
        <div className="box">
            <h2>Friend: {friends.length}</h2>
            {
                friends.map((friend)=><Friend friend={friend}></Friend>)
            }
            
        </div>
       
    )
}