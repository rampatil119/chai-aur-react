

import Header from '../components/Header'
import TodoItem from '../components/TodoItem'
import Button from '../components/Button'
import Counter from '../components/Counter'
import Stop from '../components/Stop';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="todo-container bg-white p-6 rounded-lg shadow-md w-80">
      <Counter/>
        <Header title="Todoe App" />
        <TodoItem completed={true} text="eat"/>
        <TodoItem text="sleep"/>
        <TodoItem text="sleep again"/>
        <TodoItem text="gym"/>
        <Button />


        <Stop/>
        
       
      </div>
    </div>
  );
};
export default App