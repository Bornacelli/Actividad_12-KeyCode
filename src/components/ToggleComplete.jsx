import PropTypes from "prop-types";

const ToggleComplete = ({ toggleComplete, index, completed }) => {
    return (
        <button onClick={() => toggleComplete(index)}>
            {completed ? "Marcar como no completada" : "Marcar como completada"}
        </button>
    );
};

ToggleComplete.propTypes = {
    toggleComplete: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
};

export default ToggleComplete;
