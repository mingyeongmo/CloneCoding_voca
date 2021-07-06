import Hello from './component/Hello';
import './App.css';

function App() {
  
  return (
    <div>
      <Hello age={10}/>
      <Hello age={20}/>
    </div>
  );
}

export default App;
