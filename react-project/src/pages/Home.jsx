import React, { useEffect, useState } from "react";
import axios from "axios";
import { useItemContext } from "../context/ItemContext";
import Navbar from "../components/Navbar";
import EnquireButton from "../components/EnquireButton";

export default function Home() {
  const [apiItems, setApiItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { customItems } = useItemContext();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setApiItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching items:", err);
        setLoading(false);
      });
  }, []);

  const allItems = [...customItems, ...apiItems];

  return (
   
   <div>
      <Navbar/>
     <div className="max-w-7xl mx-auto px-4 " style={{backgroundColor:'#92A8D1'}} >
         
      <h1 className="text-3xl font-bold mb-6 text-center">View Items</h1>
      <EnquireButton className='mb-6' />

      {loading ? (
        <p className="text-center">Loading items...</p>
      ) : allItems.length === 0 ? (
        <p className="text-center">No items found.</p>
      ) : (
        <div className=" mt-2 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover cursor-pointer hover:scale-125 transition duration-300"
              />
              <div className="p-4">
                <h2 className="font-bold text-lg">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.category}</p>
                <p className="mt-2 text-gray-700 text-sm line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
   </div>
  );
}
