import React, { useState } from "react";
import Wardrobe from "./components/Wardrobe";
import AddItem from "./components/AddItem";
import Outfit from "./components/Outfit";

const App = () => {
  const [filter, setFilter] = useState("All");
  return (
    <div className="p-4 max-w-5xl mx-auto text-white">
      <h1 className="text-3xl font-bold text-center text-green-500 mb-6">
        Wardrobe Dashboard
      </h1>
      <AddItem />
      <Wardrobe filter={filter} />
      <Outfit />
    </div>
  );
};

export default App;
