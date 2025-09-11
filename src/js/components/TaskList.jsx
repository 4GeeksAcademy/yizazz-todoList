import react, { useState } from "react"



const TaskList = () => {
    const [newTask, setNewTask] = useState('')
    const [holdTask, setHoldTask] = useState([])

    const validateTask = () => {
        if (newTask === '') alert("No puede estar vacío");
        setHoldTask([...holdTask, newTask]);
        setNewTask('');
    }

    return (
    <div className="row mt-5 justify-content-center border border-success">

        <div className=" col-8 border p-0">
            <input className="w-100 px-3" id="bar"
                type="text"
                value={newTask}
                onChange={event => setNewTask(event.target.value)}
                onKeyDown={event => {
                    if (event.key === "Enter") validateTask();
                }}

            ></input>
            <div>{holdTask.map((task, index) => (<div className="border-bottom"><div className="px-3" key={index}>{task}</div></div>))}</div>
        </div>
    </div>
    );

};
export { TaskList };
