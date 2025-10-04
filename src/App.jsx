import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";
export default function App() {
  const [text, setText] = useState("Carpio");
  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(text);
    setText("");
  };
  const [theme, setTheme] = useState("light");
  const handleThemeChange = (e) => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div
      className={`min-h-screen flex justify-center items-center ${
        theme === "light" ? "bg-gray-100" : "bg-gray-800"
      }`}
    >
      <nav className="border-2 border-black p-5 rounded-2xl bg-white shadow-lg flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Hello World</h1>
        <input
          value={text}
          onChange={handleInputChange}
          className="border-1 border-black rounded-md text-sm p-2 w-64"
          type="text"
        />
        <button
          onClick={handleSubmit}
          className="bg-gray-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 hover:text-white-500 transition"
        >
          Submit
        </button>

        <button onClick={handleThemeChange}>
          {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </button>
        <p>{text}</p>
      </nav>
    </div>
  );
}
