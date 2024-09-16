import PropTypes from "prop-types";

const DeleteTask = ({ removeTask, index }) => {
    return (
        <button onClick={() => removeTask(index)}>Eliminar</button>
    );
};

DeleteTask.propTypes = {
    removeTask: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};

export default DeleteTask;
