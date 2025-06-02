import { useState } from "react";
import Tasks from "./Tasks";
import Hero from "./Hero";
import { clear } from "@testing-library/user-event/dist/clear";

export default function TaskTracker() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "Learn React Basics",
            completed: false
        },
        {
            id: 2,
            name: "Practice useState Hook",
            completed: true
        },
        {
            id: 3,
            name: "Build First React App",
            completed: false
        }

      
    ]);


    return (
        <>
            <Hero tasks={tasks} />
            <div className="tasks">
                {tasks.map((task) => (
                    <Tasks
                        key={task.id}
                        name={task.name}
                        completed={task.completed}
                       
                    />

                  
                ))}

              
            </div>
        </>
    );
}