import { useState } from "react";
import AddTask from "../components/AddTask";
import Header from "../components/header/Header";
import SeeTask from "../components/SeeTask";

function Home() {
    const [showComponent, setShowComponent] = useState(true);
    const [listTask, setlistTask] = useState([]);

    // Función para actualizar una tarea
    const updateTask = (index, updatedTask) => {
        const newList = listTask.map((task, i) =>
            i === index ? updatedTask : task
        );
        setlistTask(newList);
    };

    // Función para eliminar una tarea
    const removeTask = (index) => {
        const newList = listTask.filter((_, i) => i !== index);
        setlistTask(newList);
    };

    // Función para marcar una tarea como completada o no completada
    const toggleComplete = (index) => {
        const newList = listTask.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setlistTask(newList);
    };

    return (
        <>
            <Header setShowComponent={setShowComponent} />
            {showComponent ? (
                <AddTask listTask={listTask} setlistTask={setlistTask} />
            ) : (
                <SeeTask
                    listTask={listTask}
                    updateTask={updateTask}
                    removeTask={removeTask}
                    toggleComplete={toggleComplete}
                />
            )}
        </>
    );
}

export default Home;
