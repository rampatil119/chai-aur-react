

import Header from '../components/Header'
import TodoItem from '../components/TodoItem'
import Button from '../components/Button'
const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="todo-container bg-white p-6 rounded-lg shadow-md w-80">
        <Header />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <Button />
        
       
      </div>
    </div>
  );
};
export default App