import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
    const { 
        tasks = [],
        onDeleteOnButtonClick,
        onTaskCompleteChange,
     } = props;

    const hasTasks = true;

    if (!hasTasks) {
        return <div className="todo__empty-message"></div>;
    }

    return (
        <ul className="todo__list">
            {tasks.map((task) => (
                <ToDoItem 
                    className="todo__item" 
                    key={task.id} 
                    {...task} 
                    onDeleteOnButtonClick={onDeleteOnButtonClick}
                    onTaskCompleteChange={onTaskCompleteChange}    
                />
            ))}
        </ul>
    );
};

export default ToDoList;
