import { useState } from 'react';
import PropTypes from 'prop-types';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';
import ToggleComplete from './ToggleComplete';
import '../styles/global.scss'; // Importa los estilos

const TaskItem = ({ task, index, updateTask, removeTask, toggleComplete }) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {isEditing ? (
                <EditTask
                    task={task}
                    index={index}
                    updateTask={updateTask}
                    cancelEdit={() => setIsEditing(false)}
                />
            ) : (
                <>
                    <h2>{task.title || 'Sin título'}</h2>
                    <p>{task.description || 'Sin descripción'}</p>
                    <div className="button-group">
                        <button className="edit-button" onClick={() => setIsEditing(true)}>Editar</button>
                        <button className="delete-button" onClick={() => removeTask(index)}>Eliminar</button>
                        <button
                            className="complete-button"
                            onClick={() => toggleComplete(index)}
                        >
                            {task.completed ? 'Marcar como Incompleta' : 'Marcar como Completa'}
                        </button>
                    </div>
                </>
            )}
        </li>
    );
};

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    updateTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
};

export default TaskItem;
