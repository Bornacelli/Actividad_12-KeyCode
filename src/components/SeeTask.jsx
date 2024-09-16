import PropTypes from 'prop-types';
import TaskItem from './TaskItem';
import '../styles/global.scss'; // Importa los estilos

const SeeTask = ({ listTask, updateTask, removeTask, toggleComplete }) => {
    return (
        <div className="container">
            <section>
                <h1>Lista de tareas</h1>
                <ul >
                    {listTask.map((task, index) => (
                        <TaskItem
                            key={index}
                            task={task}
                            index={index}
                            updateTask={updateTask}
                            removeTask={removeTask}
                            toggleComplete={toggleComplete}
                        />
                    ))}
                </ul>
            </section>
        </div>
    );
};

SeeTask.propTypes = {
    listTask: PropTypes.array.isRequired,
    updateTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
};

export default SeeTask;
