import React from 'react'
import './MainPage.css'
import axios from 'axios'
import { useEffect, useState } from 'react'



const MainPage = () => {
    const[todos,setTodo]=useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/todos/').then((response)=>{
            console.log(response)
            setTodo(response.data)
        },(error)=>{
            console.log(error)
        })
    },[])
  return (
    <div className='main'>
        
        {todos.map((todo)=>{
            return(
                <div className="box">
            <p>Case No: {todo.id}</p>
            <p>Name: {todo.title} </p>
            <p>Status: {todo.iscompleted?<p>Completed</p>:<p>Not Completed</p>}</p>
            <p> </p>
            <p>Place: Kochi</p>
        </div>
            )
        })}
        
        <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
    </div>
  )
}

export default MainPage