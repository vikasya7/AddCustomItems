import React, { useState } from 'react'
import { UNSAFE_SingleFetchRedirectSymbol, useNavigate } from 'react-router-dom';
import { useItemContext } from "../context/ItemContext";
import toast from 'react-hot-toast';

const Additems = () => {
    const[formData, setFormData]=useState({
        title:"",
        category:"",
        description:"",
        image:"",
    });
    const {addItem}=useItemContext();
   
     const navigate = useNavigate();


  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const newItem={
        id:Date.now(),
        ...formData
    
    }
    addItem(newItem);
      
  toast.success("Item successfully added!");
    
    setFormData({
        title: "",
      category: "",
      description: "",
      image: "",
    })
    setTimeout(() => {
        navigate("/")
    }, 1000);
  }

  return (
    <div>
        <h1>Add Item</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" >
                <input
          type="text"
          name="title"
          placeholder="Item Name"
          value={formData.title}
          onChange={handleChange}
          required
          className="border p-2 rounded"

        />


        <input
          type="text"
          name="category"
          placeholder="Item Type"
          value={formData.category}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <textarea
          name="description"
          placeholder="Item Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

         <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <button
          
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Item
        </button>












        </form>
      
    </div>
  )
}

export default Additems
