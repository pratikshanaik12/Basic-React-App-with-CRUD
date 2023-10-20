import React, { useState }from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    //useState keeps track of what user is typing
    const [value, setValue] = useState(task.task)
    // takes argument as an event
    // prevent auto reload by preventDefault
    // setValue clears the space for new entry
    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id)
        setValue('')
    }
  return (
    // handleSubmit is a function that captures the value of the state when we submit the form, create the function above
    <form className='TodoForm' onSubmit={handleSubmit}>
        {/* Get the user input by onChange event, and use setValue to save it to the state. */}
        <input type="text" className='todo-input' value={value} placeholder='Update Task' onChange={(e)=> setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
