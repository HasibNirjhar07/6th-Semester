

import Tasks from "./Tasks"


function Hero (props){

    const getCompletedTasks = () => {
        return props.tasks.filter(task => task.completed).length;
    }
    
    const getPendingTasks = () => {
        return props.tasks.filter(task => !task.completed).length;
    }

    return(

        <div className="Hero">

            <div className="heading">
                <h1> 📝Interactive Task Manager</h1>
                <p>CLick Tasks to toggle completion, add new task and manage your to-do list </p>

            </div>

           

            <div className="task-counts">
                 <div className="Total-Tasks">

            <h3>{props.tasks.length} </h3>
            <p>Total Tasks</p>

            </div>
                <div className="completed-tasks">
                    <h3>{getCompletedTasks()}</h3>
                    <p>Completed</p>
                </div>
                <div className="pending-tasks">
                    <h3>{getPendingTasks()}</h3>
                    <p>Pending</p>
                </div>
            </div>

            <div className="buttons">
                <button  className="add-task-button">
                        Add Random Task
                    </button>
                    <button className="clear-completed-button">
                        Clear Completed Tasks
                    
                    </button>

</div>
                   


          
        </div>

    )
}

export default Hero;