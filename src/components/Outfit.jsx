import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Outfit = () => {
  const { clothes, setOutfit, outfit } = useContext(AuthContext);
  const [liked, setLiked] = useState([]);

  const generateOutfit = () => {
    const types = [
      "All",
      "T-shirt",
      "Jeans",
      "Shoes",
      "Jacket",
      "Shorts",
      "Kurta",
    ];

    const shuffledTypes = [...types].sort(() => 0.5 - Math.random());
    const selectedTypes = shuffledTypes.slice(0, 2);

    const newOutfit = selectedTypes
      .map((type) => {
        let items = clothes;
        if (type !== "All") {
          items = clothes.filter((item) => item.type === type);
        }
        return items.length
          ? items[Math.floor(Math.random() * items.length)]
          : null;
      })
      .filter(Boolean);

    setOutfit(newOutfit);
  };

  return (
    <div className="mt-10 text-white">
      <h1 className="text-2xl font-bold mb-3">Outfit Generator</h1>
      <button
        onClick={generateOutfit}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Generate Outfit
      </button>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {outfit.map((item) => (
          <div key={item.id} className="border p-2 rounded shadow text-center">
            <img
              src={item.image}
              alt={item.type}
              className="w-full h-32 object-cover rounded"
            />
            <p>
              {item.type} - {item.color}
            </p>
            <div className="flex justify-center gap-2 mt-2">
              <button className="text-3xl">👍</button>
              <button className="text-3xl">👎</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Outfit;
