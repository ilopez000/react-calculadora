import React, { useState } from 'react';

function Calculadora() {
  const [input, setInput] = useState('');

  const handleClick = (valor) => {
    setInput(input + valor);
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (e) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="flex flex-col items-center max-w-md mx-auto mt-20 p-4 border border-gray-300 rounded shadow-md">
      <div className="w-full mb-4">
        <input className="w-full p-2 text-lg border rounded" type="text" value={input} readOnly />
      </div>
      <div className="grid grid-cols-4 gap-4 w-full">
        <button className="p-2 text-lg bg-gray-200 rounded hover:bg-gray-300 focus:outline-none" onClick={() => handleClick('1')}>1</button>
        <button className="p-2 text-lg bg-gray-200 rounded hover:bg-gray-300 focus:outline-none" onClick={() => handleClick('2')}>1</button>
        <button className="p-2 text-lg bg-gray-200 rounded hover:bg-gray-300 focus:outline-none" onClick={() => handleClick('3')}>1</button>
        <button className="p-2 text-lg bg-gray-200 rounded hover:bg-gray-300 focus:outline-none" onClick={() => handleClick('+')}>1</button>
        <button className="p-2 text-lg bg-gray-200 rounded hover:bg-gray-300 focus:outline-none" onClick={() => handleClick('4')}>1</button>
        <button className="p-2 text-lg bg-gray-200 rounded hover:bg-gray-300 focus:outline-none" onClick={() => handleClick('5')}>1</button>
        <button className="p-2 text-lg bg-gray-200 rounded hover:bg-gray-300 focus:outline-none" onClick={() => handleClick('6')}>1</button>
        <button className="p-2 text-lg bg-gray-200 rounded hover:bg-gray-300 focus:outline-none" onClick={() => handleClick('-')}>1</button>
        <button className="p-2 text-lg bg-gray-200 rounded hover:bg-gray-300 focus:outline-none" onClick={() => handleClick('7')}>1</button>
        <button className="p-2 text-lg bg-gray-200 rounded hover:bg-gray-300 focus:outline-none" onClick={() => handleClick('8')}>1</button>
        <button className="p-2 text-lg bg-gray-200 rounded hover:bg-gray-300 focus:outline-none" onClick={() => handleClick('9')}>1</button>
        <button className="p-2 text-lg bg-gray-200 rounded hover:bg-gray-300 focus:outline-none" onClick={() => handleClick('*')}>1</button>
        <button className="p-2 text-lg bg-gray-200 rounded hover:bg-gray-300 focus:outline-none" onClick={() => handleClick('0')}>1</button>
        <button className="p-2 text-lg bg-gray-200 rounded hover:bg-gray-300 focus:outline-none" onClick={() => handleClick('.')}>1</button>
        <button className="p-2 text-lg bg-gray-200 rounded hover:bg-gray-300 focus:outline-none" onClick={() => handleClick('/')}>1</button>
        <button className="p-2 text-lg bg-gray-200 rounded hover:bg-gray-300 focus:outline-none" onClick={() => handleEqual()}>=</button>
        <button className="p-2 text-lg bg-gray-200 rounded hover:bg-gray-300 focus:outline-none" onClick={() => handleClear()}>C</button>
      </div>
      <div className="mt-4">
        <button className="w-full p-2 text-lg bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none" onClick={() => handleClear()}>C</button>
      </div>
    </div>
  );
}

export default Calculadora;




