import './App.css';
import Content from './Content/Content';
import Header from './Header/Header';
import Total from './Total/Total';

function App() {
  const course = " IT-Run React Web Dev";
  const part1 = "Intro course to React";
  const task1 = 7;
  const part2 = "Component State";
  const task2 = 10
  const part3 = "Decomposition of components"
  const task3 = 5
  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3}
       task1={task1} task2={task2} task3={task3}/>
       
       <Total  tasks={task1 + task2 +task3}/>
    </div>
  );
}

export default App;
