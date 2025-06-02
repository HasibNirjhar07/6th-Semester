

function Tasks(props) {
    return (
        <div className={`task-container ${props.completed ? 'task-container1' : 'task-container2'}`}>
        <div className="task-title">
            <h3>{props.name}</h3>
        </div>

        <div className="task-status">
                    <p> {props.completed ?(<span style={{color : "green"}}> "✅ Completed" </span>):<span style={{color : "grey"}}> "⟳ Pending"</span>}</p>
         <button className="remove-button" >
                Remove 
            </button>
        </div>

        </div>

        
    );
}

export default Tasks;