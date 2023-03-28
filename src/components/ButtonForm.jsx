import { Routes, Route, useNavigate } from "react-router-dom";
import Form from "./Form";

export default function ButtonForm() {
  const navigate = useNavigate();

  const navigateForm = () => {
    navigate("/form");
  };

  return (
    <div>
      <button
        onClick={navigateForm}
        className="font-bold bg-primary-500 p-4 rounded hover:bg-primary-100 text-white"
      >
        Manage My DM's
      </button>
      <Routes>
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}
