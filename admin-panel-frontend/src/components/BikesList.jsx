import Bike from "./Bike";

const BikesList = ({ bikes, handleDelete }) => {
  return (
    <div>
      {bikes.map((bike) => (
        <Bike key={bike.id} bike={bike} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default BikesList;
