const Statistics = (stats) => {
  return (
    <div>
      <h3>STATISTICS</h3>
      <p>Total Bikes: {stats.totalBikes}</p>
      <p>Available Bikes: {stats.availableBikes}</p>
      <p>Booked Bikes: {stats.bookedBikes}</p>
      <p>Average bike cost: {stats.averageCost}</p>
    </div>
  );
};

export default Statistics;
