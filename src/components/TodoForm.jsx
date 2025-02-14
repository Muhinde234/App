import React, { useState } from 'react';

function TodoForm()
{
    const[todos,setTodos]=useState([]);
    const[input,setInput]=useState("");
    
    const addTodo =() =>{
        if(input.trim()){
           setTodos([...todos,{id:Date.now(),text:input,completed:false}])
           setInput("") ;
        }
    }
    return ( 
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-r
        from-green-600 to-emerald-400'>
<div className="bg-white w-150 shadow-lg rounded-3xl p-16">
    <h1 className='text-3xl font-bold text-center text-green-900
    mb-6' >Get things done!</h1>
      <p className='text-center text-gray-600 mb-8'>
     stay organized and productive.
        </p>

<div className='mb-4 flex'>
    <input 
    value={input}
    onChange={(e) => setInput(e.target.value)}
    type="text" placeholder='add a new todo'
    className='flex-grow px-3 py-2
    border-none  rounded-l-lg focus:outline-none focus:ring-2 focus:ring-black-100' />
    <button onClick={addTodo }
    className='bg-green-500 text-white px-4 py-2
    rounded-r-lg hover:bg-white-600'>Add</button>
      </div>
      <ul className='space-y-2'>
     {
    todos.map((todo) =>(
    <li 
     key={todo.id}
     className='flex items-center p-3 rounded-lg bg-slate-100
     border-gray-200'
     >
        <input type="checkbox"
        checked={todo.completed}
        onChange={() => setTodos(
            todos.map((t) =>(
                t.id===todo.id?  {...t,
                completed:!t.completed} :t 
            ))
        )}
        className='mr-2-h-5 w-5 text-green-600'
         />
         <span
className={`flex-grow ${todo.completed ? "line-through text-gray-500"
     : "text-gray-800"}`}
         >{todo.text}</span>
         <button
         onClick={() =>setTodos(todos.filter((t) =>t.id !==todo.id))}
         className='ml-2 border-none p-2 rounded-lg bg-red-500 text-white
         hover:bg-red-600 ' 
         >Delete</button>
     </li>  
    ))
     }
      </ul>
      <div className='mt-8 text-center text-gray-500'>
                    &copy; {new Date().getFullYear()} Muhinde. All rights reserved.
                </div>
       </div>
        </div>
    );
}
export default TodoForm;