import React, { useState } from "react";

function TodoList() {
    const [task, setTask] = useState("")
    const [blocks, setBlocks] = useState([])

    const addTodo = () => {
        const newBlock = [<div key={blocks.length}>{task}</div>, ...blocks]
        setBlocks(newBlock)
    }

    const handleDelete = (index) => {
        const updatedItems = [...blocks];
        updatedItems.splice(index, 1); 
        setBlocks(updatedItems); 
    };

    return (
        <div className="container">
            <div className="upper_container">
                <input 
                    value={task}
                    placeholder="Введите задачу" 
                    onChange={(e) => {setTask(e.target.value)}}
                />
                <button onClick={addTodo}>Вести</button>
            </div>
            <div className="lower_container">
                {blocks.map((block, index) => (
                    <div className="list__container">
                        <div className="new-task" key={index}>{block}</div>
                        <div key={index} className="list__container__button">
                            <button onClick={(e) => {
                                handleDelete(index)
                            }}>Удалить</button>
                            <button>Избраные</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}   

export default TodoList