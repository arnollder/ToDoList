import { TasksProvider } from "../context/TasksContex";
import Todo from "../components/ToDo/ToDo";

const TasksPage = () => {
    return (
        <TasksProvider>
            <Todo />
        </TasksProvider>
    );
};

export default TasksPage;
