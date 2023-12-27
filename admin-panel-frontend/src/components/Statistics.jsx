const Statistics = (bikes) => {
  const totalBikes = (bikes) => {
    let totBikes = 0;
    for (let i = 0; i < bikes.length; i++) {
      if (bikes[i].id) {
        totBikes++;
      }
    }
    return totBikes;
  };

  const totalBusy = (bikes) => {
    let totBusy = 0;

    for (let i = 0; i < bikes.length; i++) {
      if (bikes[i].status === "busy") {
        totBusy++;
      }
    }

    return totBusy;
  };

  const totalAvailable = (bikes) => {
    let totAvailable = 0;
    for (let i = 0; i < bikes.length; i++) {
      if (bikes[i].status === "available") {
        totAvailable++;
      }
    }

    return totAvailable;
  };

  const averPrice = (bikes) => {
    const allBikes = totalBikes(bikes);
    let totalPrice = 0;

    for (let i = 0; i < bikes.length; i++) {
      totalPrice = totalPrice + bikes[i].price;
    }

    return totalPrice / allBikes;
  };

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
