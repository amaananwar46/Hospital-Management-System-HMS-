import { useState } from "react";
import "../stylesheets/Sidebar.css";

export default function Sidebar({ setActiveModule }) {

  const [activeBtn, setActiveBtn] = useState("patients");

  const handleClick = (module) => {
    setActiveBtn(module);
    setActiveModule(module);
  };

  return (
    <div className="sidebar">

      <button
        className={activeBtn === "patients" ? "active" : ""}
        onClick={() => handleClick("patients")}
      >
        Patients
      </button>

      <button
        className={activeBtn === "appointments" ? "active" : ""}
        onClick={() => handleClick("appointments")}
      >
        Appointments
      </button>

      <button
        className={activeBtn === "doctors" ? "active" : ""}
        onClick={() => handleClick("doctors")}
      >
        Doctors
      </button>

      <button
        className={activeBtn === "inventory" ? "active" : ""}
        onClick={() => handleClick("inventory")}
      >
        Inventory
      </button>

      <button
        className={activeBtn === "medicine-shop" ? "active" : ""}
        onClick={() => handleClick("medicine-shop")}
      >
        Buy Medicine
      </button>

      <button
        className={activeBtn === "purchase-history" ? "active" : ""}
        onClick={() => handleClick("purchase-history")}
      >
        Purchase History
      </button>

    </div>
  );
}
