import React, { useState } from "react";
import { assets } from "../../assets/assests";
import { addFood } from "../../services/foodService";
import { toast } from "react-toastify";
import "./AddFood.css";

const AddFood = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Biryani",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!image) {
      toast.error("Please select an image.");
      return;
    }

    try {
      await addFood(data, image);
      toast.success("Food added successfully.");
      setData({ name: "", description: "", category: "Biryani", price: "" });
      setImage(null);
      document.getElementById("image").value = null;
    } catch (error) {
      console.error(error);
      toast.error("Error adding food.");
    }
  };

  const categoryOptions = [
    "Biryani",
    "Cake",
    "Burger",
    "Pizza",
    "Rolls",
    "Salad",
    "Ice cream",
  ];

  return (
    <div className="container-fluid my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Add New Food Item</h2>
      </div>

      <form onSubmit={onSubmitHandler}>
        <div className="card">
          <div className="card-body">
            <div className="row g-4">
              {/* Left Column: Image Upload */}
              <div className="col-lg-5">
                <h5 className="mb-3">Food Image</h5>
                <input
                  type="file"
                  id="image"
                  required
                  hidden
                  onChange={handleImageChange}
                  accept="image/*"
                />
                <label htmlFor="image" className="w-100">
                  {image ? (
                    <div className="image-preview-container">
                      <img
                        src={URL.createObjectURL(image)}
                        alt="Preview"
                        className="image-preview"
                      />
                      <button
                        type="button"
                        className="btn btn-sm btn-danger remove-image-btn"
                        onClick={() => setImage(null)}
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </div>
                  ) : (
                    <div className="upload-area d-flex flex-column justify-content-center align-items-center">
                      <img
                        src={assets.upload}
                        alt="upload icon"
                        width={60}
                        className="mb-2"
                      />
                      <p className="mb-0 text-muted">
                        Click to upload or drag and drop
                      </p>
                    </div>
                  )}
                </label>
              </div>

              {/* Right Column: Food Details */}
              <div className="col-lg-7">
                <h5 className="mb-3">Food Details</h5>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Food Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    name="name"
                    onChange={onChangeHandler}
                    value={data.name}
                    placeholder="e.g. Chicken Dum Biryani"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="4"
                    required
                    name="description"
                    placeholder="Describe the food item"
                    onChange={onChangeHandler}
                    value={data.description}
                  ></textarea>
                </div>
                <div className="row g-3">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="category" className="form-label">
                      Category
                    </label>
                    <select
                      name="category"
                      id="category"
                      className="form-select"
                      onChange={onChangeHandler}
                      value={data.category}
                    >
                      {categoryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">₹</span>
                      <input
                        type="number"
                        className="form-control"
                        id="price"
                        required
                        name="price"
                        onChange={onChangeHandler}
                        value={data.price}
                        placeholder="250.00"
                        min="0"
                        step="0.01"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 mt-3"
                >
                  <i className="bi bi-plus-circle me-2"></i>Add Food Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
