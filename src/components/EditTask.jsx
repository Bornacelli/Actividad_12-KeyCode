import { useState } from "react";
import PropTypes from "prop-types";

const EditTask = ({ task, index, updateTask, cancelEdit }) => {
    const [editedTask, setEditedTask] = useState(task);

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedTask({ ...editedTask, [name]: value });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        updateTask(index, editedTask);
        cancelEdit();
    };

    return (
        <form onSubmit={handleEditSubmit}>
            <input
                type="text"
                name="title"
                value={editedTask.title}
                onChange={handleEditChange}
                className="InputEdit-btn"
            />
            <textarea
                name="description"
                value={editedTask.description}
                onChange={handleEditChange}
            ></textarea>
            <button type="submit" className="SaveTask-btn">Guardar</button>
            <button type="button" className="CanceleTask-btn" onClick={cancelEdit}>Cancelar</button>
        </form>
    );
};

EditTask.propTypes = {
    task: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    updateTask: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
};

export default EditTask;
