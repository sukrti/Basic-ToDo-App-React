import React,{useState} from 'react'
import Calendar from 'react-calendar'

const ToDoLists =(props)=>{
    const [value, onChange] = useState(new Date());
    return ( 
    <>
    <div className='ToDoStyle'>
    <i className="fa-regular fa-circle-xmark" onClick={()=>{props.onSelect(props.id)}}></i>
    <li>{props.text}</li>
    </div>
    </>
    );
};

export default ToDoLists;