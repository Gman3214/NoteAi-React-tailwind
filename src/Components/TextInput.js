import React from "react";

function TextInput(props) {
    return (
      <div className="px-3 my-1">
        <label htmlFor="price" className="block text-center text-sm font-medium leading-6 text-white">
          Api Key
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          </div>
          <input
            onChange={(event) => { const value = event.target.value; props.setValue(value)}}
            type="text"
            name="apikey"
            id="apikey"
            value={props.value}
            className="block w-full rounded-md border-0 py-1 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="sk-...yR4I"
          />
        </div>
      </div>
    )
  }

  export default TextInput;