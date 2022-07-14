import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/ToDoList.module.css'
import { useEffect, useState } from 'react'
import { useId } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList() {
    const [tasks, setTasks] = useState([
        {
            text: "Example Text",
            status: false,
            id: uuidv4(),
            finalDate: "Today"
        }
    ])
    const handleAddTask = (e) => {
        e.preventDefault()
        let text = e.target.todoinput.value;
        let status = false
        let id = uuidv4();
        let uneditedDate = e.target.dateinput.value;
        let hour = new Date().getHours();
        console.log(hour)
        let date = Date(uneditedDate);
        console.log(date)
        let finalDate = ""
        hour < 10 ? finalDate = date.split(`0${hour}:`)[0] : finalDate = date.split(`${hour}:`)[0];
        console.log(finalDate)
        const todos = [...tasks, {text, status, id, finalDate}]
        setTasks(todos)
        e.target.todoinput.value = "";
        e.target.dateinput.value = ""
    }

    const handleCompleted = (id) => {
        //const newTodos = [...tasks];
        //newTodos[id].status = true;
        //setTasks(newTodos);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>To Do List</h1>
            <div className={styles.main}>
                <form className={styles.formcontainer} onSubmit={handleAddTask}>
                    <input className={styles.inputform} type="text" id="todoinput" placeholder="+ Enter Task"/>
                    <input className={styles.dateinput} type="date" id="dateinput"/>
                </form>
                {tasks.map(task => 
                    <div className={styles.taskcontainer}>
                        {task.status === false ? 
                        <input type="checkbox" onChange={handleCompleted} onChange={() => {
                            if (task.status === false) {
                                const newTodos = [...tasks];
                                let index = newTodos.findIndex(x => x.id === task.id);
                                console.log(index)
                                newTodos[index].status = true;
                                setTasks(newTodos); 
                            } else {
                                const newTodos = [...tasks];
                                let index = newTodos.findIndex(x => x.id === task.id);
                                console.log(index)
                                newTodos[index].status = false;
                                setTasks(newTodos); 
                            }
                            
                        }}/> : null}
                        
                        {task.status === true ? null : <p style={task.status === true ? {textDecoration: "line-through"} : null}>{task.text}</p>}
                        {task.status === false ? <p>📅 {task.finalDate}</p> : null}
                        
                    </div>
                )}
                <p>Completed: </p>
                {tasks.map(task => 
                    task.status === true ? 
                    <div className={styles.taskcontainer}>
                        <input checked="true" type="checkbox" onChange={handleCompleted} onChange={() => {
                            if (task.status === false) {
                                const newTodos = [...tasks];
                                let index = newTodos.findIndex(x => x.id === task.id);
                                console.log(index)
                                newTodos[index].status = true;
                                setTasks(newTodos); 
                            } else {
                                const newTodos = [...tasks];
                                let index = newTodos.findIndex(x => x.id === task.id);
                                console.log(index)
                                newTodos[index].status = false;
                                setTasks(newTodos); 
                            }
                            
                        }}/>
                        <p className={styles.completedtask}>{task.text}</p>
                    </div> : null
                )}
            </div>
        </div>
    )
}