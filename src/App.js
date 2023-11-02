import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    document.documentElement.classList.contains("dark")
  );

  function processThemeChange() {
    setIsDarkTheme((isDarkTheme) => !isDarkTheme);
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  }

  function switchTheme() {
    processThemeChange();
  }

  return (
    <div
      className={`${
        isDarkTheme ? "dark" : ""
      } app flex flex-col h-screen  text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200`}
    >
      <div className="flex flex-col items-center h-full">
        <div className="flex flex-row py-4">
          <h1 className="dark:text-gray-100 text-gray-900 text-xl p-2">
            {isDarkTheme ? "Make it light" : "Make it dark"}
          </h1>
          <button
            id="theme-toggle"
            onClick={switchTheme}
            type="button"
            className="dark:text-gray-300 dark:border-gray-300 text-gray-800 border-gray-500 border-2 rounded-lg text-sm p-2"
          >
            {isDarkTheme ? (
              <svg
                id="theme-toggle-dark-icon"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            ) : (
              <svg
                v-else
                id="theme-toggle-light-icon"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>

        <div className="flex items-center justify-center w-screen font-medium">
          <div className="flex flex-grow items-center justify-center h-full ">
            <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-96 dark:bg-gray-800 dark:text-gray-200">
              <div className="flex items-center mb-4">
                <svg
                  className="h-8 w-8 text-indigo-500 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <h4 className="font-semibold ml-3 text-lg dark:text-white">
                  My tasks
                </h4>
              </div>
              <div className="flex flex-col">
                <Todos />
                <AddTodo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
