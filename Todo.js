import React, { Component } from 'react'

class Todo extends Component {
    constructor(){
        super();
        this.state = {
            tasks:[{task: 'check mails', id:1}, {task: 'Read article',id:2},{task: 'Complete Hw', id:3 }],
            currTask:''
        }
    }
    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            currTask:e.target.value
        })
        
       }
       handleSubmit=()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
            currTask:''
        })
       }
       handleDelete=(id)=>{
        let narr=this.state.tasks.filter((taskObj)=>{
            return taskObj.id!=id
        })
        this.setState({
            tasks : [...narr]
        })
       }
  render() {
      console.log('render')
    return (
        <div>
            <input type = "text" value={this.state.currTask} onChange={this.handleChange}/>
            <button onClick={this.handleSubmit} >Submit </button>
            <ul>
            {
                this.state.tasks.map((taskObj)=>(
                    <li key={taskObj.id}>
                        <p>{taskObj.task}</p> 
                        <button onClick={()=>this.handleDelete(taskObj.id)}
                                        //function defination
                        >Delete</button>
                    </li>
                ))
            }
            </ul> 
        </div>
    );
  }
}

export default Todo;

