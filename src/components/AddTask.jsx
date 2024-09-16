import PropTypes from 'prop-types';
import { useRef } from 'react';
import '../styles/global.scss'; // Importa los estilos

const AddTask = ({ listTask, setlistTask }) => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const title = titleRef.current.value;
        const description = descriptionRef.current.value;

        setlistTask([...listTask, { title, description, completed: false }]);

        titleRef.current.value = '';
        descriptionRef.current.value = '';
    };

    return (
        <div className="container">
            <section>
                <h1>Agregar una tarea</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Título" ref={titleRef} />
                    <textarea placeholder="Descripción" ref={descriptionRef}></textarea>
                    <button type="submit" className='AddTask-btn'>Agregar</button>
                </form>
            </section>
        </div>
    );
};

AddTask.propTypes = {
    listTask: PropTypes.array.isRequired,
    setlistTask: PropTypes.func.isRequired,
};

export default AddTask;
