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
        border: "4px solid #6FCF97",
      };
    } else if (newStatus === "busy") {
      newBikeStyle = {
        border: "4px solid #F2994A",
      };
    } else if (newStatus === "unavailable") {
      newBikeStyle = {
        border: "4px solid #EB5757",
      };
    }

    setBikeStyle(newBikeStyle);

    toggleDropDown();
    handleUpdate(bike._id, { status: newStatus });
  };

  const [bikeStyle, setBikeStyle] = useState(() => {
    if (bike.status === "available") {
      return {
        border: "4px solid #6FCF97",
      };
    } else if (bike.status === "busy") {
      return {
        border: "4px solid #F2994A",
      };
    } else if (bike.status === "unavailable") {
      return {
        border: "4px solid #EB5757",
      };
    }

    return {};
  });

  const btnStyle = {
    backgroundColor: "#e8e8e8",
    fontWeight: "700",
  };

  const toggleStyle = {
    border: "none",
  };

  return (
    <div style={bikeStyle}>
      <p>
        <strong>{bike.name}</strong> - {bike.type}({bike.color})
        <button style={btnStyle} onClick={() => handleDelete(bike._id)}>
          X
        </button>
      </p>
      <p>ID: {bike.id}</p>
      <div>
        STATUS:{" "}
        <button style={toggleStyle} onClick={toggleDropDown}>
          {selectedStatus} ▼
        </button>
        {dropDownMenu && (
          <div>
            <button onClick={() => handleStatusChange("available")}>
              Available
            </button>
            <button onClick={() => handleStatusChange("unavailable")}>
              Unavailable
            </button>
            <button onClick={() => handleStatusChange("busy")}>Busy</button>
          </div>
        )}
      </div>
      <p>{bike.price} UAH/hr.</p>
    </div>
  );
};

export default Bike;
