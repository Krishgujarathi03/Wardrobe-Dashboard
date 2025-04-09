import { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const AddItem = () => {
  const { setClothes } = useContext(AuthContext);
  const [type, setType] = useState("Select");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  const fileInputRef = useRef(null);

  const handleAdd = () => {
    if (!image || !color || type === "Select")
      return alert("Please enter all fields");
    const newItem = {
      id: Date.now(),
      image,
      type,
      color,
    };
    setClothes((prev) => [...prev, newItem]);
    setColor("");
    setType("Select");
    setImage("");
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-6 text-white">
      <h2 className="text-xl font-semibold mb-2 bg-blue-600 px-2">Add Item</h2>
      <div className="grid gap-2 md:grid-cols-3">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 rounded"
        >
          <option>Select</option>
          <option>T-shirt</option>
          <option>Jeans</option>
          <option>Shoes</option>
          <option>Jacket</option>
          <option>Shorts</option>
          <option>Kurta</option>
        </select>
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Color"
          className="border p-2 rounded placeholder:text-white"
        />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const url = URL.createObjectURL(file);
              setImage(url);
            }
          }}
          className="border p-2 rounded"
        />
      </div>
      <button
        onClick={handleAdd}
        className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add Item
      </button>
    </div>
  );
};
export default AddItem;
