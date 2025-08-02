import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./ListFood.css";
import { deleteFood, getFoodList } from "../../services/foodService";

const ListFood = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  // State for modal confirmation
  const [showModal, setShowModal] = useState(false);
  const [foodToDelete, setFoodToDelete] = useState(null);

  const fetchList = async () => {
    setLoading(true);
    try {
      const data = await getFoodList();
      setList(data);
    } catch {
      toast.error("Error while reading the foods.");
    }
    setLoading(false);
  };

  const handleDeleteClick = (foodId) => {
    setFoodToDelete(foodId);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (!foodToDelete) return;
    try {
      const success = await deleteFood(foodToDelete);
      if (success) {
        toast.success("Food removed.");
        await fetchList();
      } else {
        toast.error("Error occurred while removing the food.");
      }
    } catch {
      toast.error("Error occurred while removing the food.");
    }
    setShowModal(false);
    setFoodToDelete(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setFoodToDelete(null);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="listfood-container py-4 px-2 px-md-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Food Items</h2>
        <span className="text-muted">
          {list.length} item{list.length !== 1 ? "s" : ""}
        </span>
      </div>
      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table align-middle table-hover table-striped mb-0 listfood-table">
            <thead className="table-light">
              <tr>
                <th style={{ minWidth: 70 }}>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th className="text-end">Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center py-5">
                    <div
                      className="spinner-border text-primary"
                      role="status"
                    />
                  </td>
                </tr>
              ) : list.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-5 text-muted">
                    No food items found.
                  </td>
                </tr>
              ) : (
                list.map((item, index) => (
                  <tr key={item.id || index}>
                    <td>
                      <img
                        className="rounded-image"
                        src={item.imageUrl}
                        alt={item.name}
                        height={48}
                        width={48}
                        style={{
                          objectFit: "cover",
                          borderRadius: "0.5rem",
                          border: "1px solid #eaeaea",
                        }}
                      />
                    </td>
                    <td>
                      <strong>{item.name}</strong>
                      <div
                        className="text-muted small"
                        style={{
                          maxWidth: 140,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.description}
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-secondary bg-opacity-25 text-dark rounded-pill px-3">
                        {item.category}
                      </span>
                    </td>
                    <td
                      className="text-end fw-semibold"
                      style={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      <span className="fs-6">
                        <span className="text-muted">&#8377;</span>
                        {item.price}.00
                      </span>
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-outline-danger rounded-circle delete-btn"
                        title="Delete"
                        onClick={() => handleDeleteClick(item.id)}
                        style={{
                          width: 36,
                          height: 36,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i
                          className="bi bi-trash-fill"
                          style={{ fontSize: "1.2rem" }}
                        ></i>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Custom Modal */}
      {showModal && (
        <div className="modal-backdrop-custom">
          <div className="modal-custom" role="dialog" aria-modal="true">
            <div className="modal-header-custom">
              <span className="modal-title-custom">
                <i className="bi bi-exclamation-triangle-fill text-warning me-2"></i>
                Confirm Delete
              </span>
            </div>
            <div className="modal-body-custom">
              Are you sure you want to <b>delete this food item?</b>
            </div>
            <div className="modal-footer-custom">
              <button className="btn btn-secondary" onClick={cancelDelete}>
                Cancel
              </button>
              <button className="btn btn-danger ms-2" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListFood;
