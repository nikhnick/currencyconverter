import { useId } from "react";

const InputBox = ({ 
    label = "From", 
    amount, 
    currencyChoice, 
    currencyData=[], 
    onCurrencyChange, 
    onAmountChange,
    readOnly=false }) => {
  const id = useId(null);

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="price"
          id={id}
          value={amount}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder="0.00"
          onChange={(e)=> onAmountChange && onAmountChange(e.target.value)}
          readOnly={readOnly}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 sm:text-sm"
            value={currencyChoice}
            onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
          >
            {currencyData.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
