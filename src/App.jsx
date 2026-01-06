import ToDo from "./components/ToDo";
import { TasksProvider } from "./context/TasksContex";

const App = () => {
    return (
        <TasksProvider>
            <ToDo />
        </TasksProvider>
    );
};

export default App;
