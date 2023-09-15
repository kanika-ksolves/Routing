//import React, { Component } from 'react'

export function createConnection(serverUrl, roomId){
  
    return {
      connect(){
        console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...')
      },
      disconect(){
        console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
      }
    }
  
}
