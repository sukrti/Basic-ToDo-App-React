import React, { useState } from 'react';
import ToDoLists from "./ToDoLists";
import './App.css';
import Calendar from 'react-calendar'


const  App=()=> {

  const getCalendar=()=>{
    return
    <><Calendar/></> 
 };

  const[inputList,setInputList]= useState("");
  const[Item,setItem]= useState([]);
  const [value, onChange] = useState(new Date());

  

  const deleteItems=(id)=>{

    setItem((oldItems)=>{
     return oldItems.filter((arrayEle,index)=>{
       return id!== index;
     });
   });
 };
  const TextChange=(e)=>{
    setInputList(e.target.value);
  }
  const ListOfItem=()=>{
    setItem((oldItems)=>{
      return [...oldItems,inputList];
      
    })
    setInputList("");
  };
 
  return (
    <div className="main-div">
      <div className='center-div'>
        <br/>
        <h1>To-Do List</h1>
        <br/>
        <input type="text" value={inputList} placeholder='Add an item' onChange={TextChange}></input>
        <button className="addbtn" onClick={ListOfItem}>+</button>

        <ol>
          {
           Item.map((itemvalues,index) =>{
            return (
            <>
            <ToDoLists
            key={index}
            id={index}
            text={itemvalues}
            selectDate={getCalendar}
            onSelect ={deleteItems}
             ></ToDoLists>
             </>
             )
            
          
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
