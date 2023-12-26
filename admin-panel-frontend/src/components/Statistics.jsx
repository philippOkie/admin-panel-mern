const Statistics = (props) => {
  return (
    <div>
      <h3>STATISTICS</h3>
      <p>Total Bikes: {props.totalBikes}</p>
      <p>Available Bikes: {props.availableBikes}</p>
      <p>Booked Bikes: {props.bookedBikes}</p>
      <p>Average bike cost: {props.averageCost}</p>
    </div>
  );
};

export default Statistics;
