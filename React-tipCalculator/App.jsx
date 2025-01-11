import React, { useState } from 'react';

function App() {
  // State for storing bill amount and tip percentage
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Function to calculate the total amount
  const calculateTotal = () => {
    const total = billAmount + (billAmount * tipPercent / 100);
    setTotalAmount(total.toFixed(2)); // Formats the total to two decimal places
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <div className="mb-4">
          <label htmlFor="billAmount" className="block mb-2 text-sm font-medium text-gray-900">Bill Amount</label>
          <input type="number" id="billAmount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="0.00" value={billAmount} onChange={(e) => setBillAmount(parseFloat(e.target.value))} />
        </div>
        <div className="mb-4">
          <label htmlFor="tipPercent" className="block mb-2 text-sm font-medium text-gray-900">Tip Percentage</label>
          <input type="number" id="tipPercent" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="0" value={tipPercent} onChange={(e) => setTipPercent(parseFloat(e.target.value))} />
        </div>
        <button id="calculateAmount" className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={calculateTotal}>Calculate</button>
        <div className="mt-4">
          <label htmlFor="totalAmount" className="block mb-2 text-sm font-medium text-gray-900">Total Amount</label>
          <div id="totalAmount" className="text-lg font-semibold">{totalAmount}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
