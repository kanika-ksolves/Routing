import { useState,useEffect } from "react";
import { createConnection } from "./chat.js";


export default function ChatRoom({roomId}){
    console.log('mount') 
    const [serverUrl, setServerUrl] = useState('https://google.com')

useEffect(()=>{
    const connection = createConnection(serverUrl,roomId);
       
    connection.connect();
        console.log('connection')
        return () => {
            connection.disconnect();
            console.log('unmount')
        };
    
},[roomId, serverUrl]);

    return(
        
        <>
        
        <label>
        server Url : {' '}
        <input
        value={serverUrl}
        onChange={e => setServerUrl(e.target.value)}
        />
        </label>
        <h1>Welcome to the {roomId} room!</h1>
        </>
    )
}
