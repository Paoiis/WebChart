import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Cancer Death (million)",
        data: UserData.map((data) => data.CancerD),
        backgroundColor: [

          "#ffb55a",
          "#ffee65",
          "#beb9db",
          "#fdcce5",
          "#fd7f6f",
          "#7eb0d5",
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });



  return (
    <div className="App">
        <div style={{ width: 550 }}>
          <BarChart chartData={userData} />
        </div>
        <div style={{ width: 550 }}>
          <LineChart chartData={userData} />
        </div>
        <div style={{ width: 450 }}>
          <PieChart chartData={userData} />
        </div>
    </div>
  );
}

export default App;