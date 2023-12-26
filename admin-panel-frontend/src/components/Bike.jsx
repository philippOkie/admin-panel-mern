const Bike = ({ bike }) => {
  let bikeStyle = {};

  if (bike.status === "available") {
    bikeStyle = {
      border: "4px solid #6FCF97",
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
    </div>
  );
};

export default Bike;
