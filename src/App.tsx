import React from "react";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <div className="App bg-stone-100 font-body">
      <div id="cursor-circle" className="cursor-in"></div>
      <Layout />
    </div>
  );
};

export default App;
