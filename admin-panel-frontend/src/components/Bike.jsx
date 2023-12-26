const Bike = ({ bike, handleDelete }) => {
  let bikeStyle = {};

  if (bike.status === "available") {
    bikeStyle = {
      border: "4px solid #6FCF97",
    };
  }

  if (bike.status === "unavailable") {
    bikeStyle = {
      border: "4px solid #F2994A",
    };
  }

  if (bike.status === "busy") {
    bikeStyle = {
      border: "4px solid #F2994A",
    };
  }

  return (
    <div style={bikeStyle}>
      <p>{bike.name}</p>
      <button onClick={() => handleDelete(bike._id)}>X</button>
    </div>
  );
};

export default Bike;
