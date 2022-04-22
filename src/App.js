import logo from './logo.svg';
import './App.css';
import Tasks from "./Tasks";
import onDelete ,{onClick2} from "./Functions";
const tasks = [
{id:1,text:"Task Text 1",completed:true},
{id:2,text:"Task Text 2",completed:true},
{id:3,text:"Task Text 3",completed:true},
];


function App() {
  return (
      <div className="App">
        <header className="App-header">
          {tasks.map(task => <Tasks
                  key={task.id}
                  text={task.text}
                  id={task.id}
                  checked={task.completed}
                  onDelete={onDelete}
              />
          )}

        </header>
      </div>

  );
}

export default App;
