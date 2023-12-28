import { useState } from "react";
import bikeService from "../services/bikes";

const Bike = ({ bike, handleDelete }) => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(bike.status);

  const toggleDropDown = () => {
    setDropDownMenu(!dropDownMenu);
  };

  const handleUpdate = async (bikeId, updatedBikeData) => {
    try {
      const updatedBike = await bikeService.update(bikeId, updatedBikeData);
      console.log("Bike updated successfully:", updatedBike);
    } catch (error) {
      console.error("Failed to update bike:", error);
    }
  };

  const handleStatusChange = (newStatus) => {
    setSelectedStatus(newStatus);
    // Update the border color based on the selected status
    let newBikeStyle = {};
    if (newStatus === "available") {
      newBikeStyle = {
        border: "2px solid #6FCF97",
      };
    } else if (newStatus === "busy") {
      newBikeStyle = {
        border: "2px solid #F2994A",
      };
    } else if (newStatus === "unavailable") {
      newBikeStyle = {
        border: "2px solid #EB5757",
        backgroundColor: "rgba(255, 255, 255, .5)",
      };
    }

    setBikeStyle(newBikeStyle);

    toggleDropDown();
    handleUpdate(bike._id, { status: newStatus });
  };

  const [bikeStyle, setBikeStyle] = useState(() => {
    if (bike.status === "available") {
      return {
        border: "2px solid #6FCF97",
      };
    } else if (bike.status === "busy") {
      return {
        border: "2px solid #F2994A",
      };
    } else if (bike.status === "unavailable") {
      return {
        border: "2px solid #EB5757",
        backgroundColor: "rgba(255, 255, 255, .5)",
      };
    }

    return {};
  });

  const btnStyle = {
    fontSize: "large",
    fontWeight: "700",
  };

  const toggleStyle = {
    border: "none",
  };

  return (
    <div className="bike-style" style={bikeStyle}>
      <div>
        <p>
          <strong>{bike.name}</strong> - {bike.type}({bike.color})
        </p>
        <p>ID: {bike.id}</p>
        <div>
          STATUS:{" "}
          <button
            className="toggle-style"
            style={toggleStyle}
            onClick={toggleDropDown}
          >
            {selectedStatus} ▼
          </button>
          {dropDownMenu && (
            <div>
              <button
                className="toggle-style"
                onClick={() => handleStatusChange("available")}
              >
                Available
              </button>
              <button
                className="toggle-style"
                onClick={() => handleStatusChange("unavailable")}
              >
                Unavailable
              </button>
              <button
                className="toggle-style"
                onClick={() => handleStatusChange("busy")}
              >
                Busy
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="wrapper-btn-price">
        <button
          className="remove-btn"
          style={btnStyle}
          onClick={() => handleDelete(bike._id)}
        >
          X
        </button>
        <p>{bike.price} UAH/hr.</p>
      </div>
    </div>
  );
};

export default Bike;
