import { memo } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
    const { 
        tasks = [],
        filteredTasks,
        onDeleteOnButtonClick,
        onTaskCompleteChange,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
     } = props;

    const hasTasks = tasks.length > 0;
    const isEmptyFilteredTasks = filteredTasks?.length === 0

    if (!hasTasks) {
        return <div className="todo__empty-message">There are no tasks yet</div>;
    }
    
    if (hasTasks && filteredTasks) {
        return <div className="todo__empty-message">Tasks not found</div>;
    }

    return (
        <ul className="todo__list">
            {(filteredTasks ?? tasks).map((task) => (
                <ToDoItem 
                    className="todo__item" 
                    key={task.id} 
                    ref={task.id === firstIncompleteTaskId ? firstIncompleteTaskRef : null}
                    {...task} 
                    onDeleteOnButtonClick={onDeleteOnButtonClick}
                    onTaskCompleteChange={onTaskCompleteChange}    
                />
            ))}
        </ul>
    );
};

export default memo(ToDoList);
