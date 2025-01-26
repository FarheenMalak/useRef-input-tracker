import { useRef, useState } from 'react';

function App() {
   const inputRef = useRef(""); 
   const [_, setRender] = useState(0); 

   function handleChange(e) {
      inputRef.current = e.target.value; 
      setRender(prev => prev + 1);
   }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Input Tracker</h1>

        <input
          type="text"
          placeholder="Type something"
          ref={inputRef}  
          className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-700 mb-4"
          onChange={handleChange} 
        />

        <p className="w-full py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 mt-4">
          {inputRef.current} 
        </p>
      </div>
    </div>
  );
}

export default App;


