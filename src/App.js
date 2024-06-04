import "./App.css";
import FormLogic from "./components/FormLogic.js";
import Result from "./components/Result.js";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData({ data });
  };
  return (
    <div className="App">
      <div>
        <FormLogic onSubmit={handleFormSubmit} />
        <Result data={formData} />
      </div>
    </div>
  );
}

export default App;
