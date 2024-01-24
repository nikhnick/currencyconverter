import { useState } from "react";
import { InputBox } from "./components";
import useCurrency from "./hooks/useCurrency";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  const currencyData = useCurrency(from);
  const options = Object.keys(currencyData);

  const conversion = (amt) => {
    setAmount(amt);
    setConvertedAmount(amt * currencyData[to]);
  };

  const currencyChange = (curr) => {
    setFrom(curr)
    setAmount(0);
    setConvertedAmount(0)
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="text-center"><h1>Currency Converter</h1></div>
        <InputBox
          label="From"
          amount={amount}
          currencyChoice={from}
          currencyData={options}
          onCurrencyChange={(curr) => currencyChange(curr)}
          onAmountChange={(amt) => conversion(amt)}
        />
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyChoice={to}
          currencyData={options}
          onCurrencyChange={(curr) => setTo(curr)}
          readOnly={true}
        />
        <button
          type="button"
          className="absolute left-1/2 -translate-x-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 mt-2"
          onClick={swap}
        >
          swap
        </button>
      </div>
    </div>
  );
}

export default App;
