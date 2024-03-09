import React, { Component } from 'react'
import TodoHeader from './components/todoHeader/todoHeader'
import TodoList from './components/todoList/todoList'
import Todolistitem from './components/todoListtem/todolistitem'
import TodoClear from './components/todoclear/todoClear'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
 
 class App extends Component {
  state = {
    tasks : [
      {
        id: 1,
        text: "Learn React JS basies",
        isDone: true
      },
      {
        id: 2,
        text: "Practice React JS",
        isDone: false
      },
      
      {
        id: 3,
        text: "Learn React",
        isDone: false
      },
      {
        id: 4,
        text: "Learn Redux",
        isDone: false
      },
      {
        id: 5,
        text: "Code portfolio in React",
        isDone: false
      },
      {
        id: 6,
        text: "Learn React Native",
        isDone: false
      },
      
    ]
  }
  //method 
  deleteTodo = (tasksid) => {
    console.log(tasksid);
    const filteredTasks = this.state.tasks.filter(t => t.id !== tasksid)
    this.setState({tasks : filteredTasks})
    toast.error("item deleted")
  }
  addNewTask = (text) => {
    const newTask = {
      id: Math.random(),
      text,
      isDone: false
    }
    this.setState({tasks: [...this.state.tasks, newTask]})
    toast.info("Item Added")
  }
  doneTask = (taskid) => {
    const updateTasks =  this.state.tasks.map(t => {
      if(t.id === taskid){
        return{
          ...t,
          isDone: !t.isDone
        }
      }else {
        return t
      }
    })
    this.setState({tasks: updateTasks})
    toast.info("Task Completed")
  }
  clearAllTasks = () => {
    this.setState({ tasks: [] });
    toast.error("All tasks cleared");
  }
  render(){
    return (
      <div style={{width:800}} className='mx-auto'>
       <ToastContainer/>
       <TodoHeader addNewTask={this.addNewTask}/>
       <TodoList></TodoList>
       {this.state.tasks.map(t =>  <Todolistitem deleteTodo={this.deleteTodo}
        doneTask={this.doneTask} key={t.id} {...t}/>)}
       <TodoClear clearAll={this.clearAllTasks}/>
      </div>
    )
  }
  }
 
 export default App

 //rafce 
// зачем нам любовь песня 
