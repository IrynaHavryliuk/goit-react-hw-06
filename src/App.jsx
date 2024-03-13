import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../src/redux/contactsSlice'; // Assuming you have a counter slice
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const reduxCount = useSelector((state) => state.counter.value); // Assuming counter is your slice name

  const handleIncrement = () => {
    // Dispatch the increment action
    dispatch(increment());
  };

  return (
    <>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleIncrement}>
          Redux count is {reduxCount}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
    </>
  );
}

export default App;
