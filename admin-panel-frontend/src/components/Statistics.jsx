import { useEffect } from "react";

const Statistics = ({ bikes }) => {
  const totalBikes = (bikes) => {
    if (!Array.isArray(bikes)) {
      console.error("Input is not an array");
      return 0;
    }

    let totBikes = 0;
    for (let i = 0; i < bikes.length; i++) {
      if (bikes[i].id !== undefined) {
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

    return allBikes > 0 ? totalPrice / allBikes : 0;
  };

  useEffect(() => {
    console.log("Effect triggered with new bikes:", bikes);
  }, [bikes]);

  return (
    <div className="stats">
      <h3>STATISTICS</h3>
      <p>Total Bikes: {totalBikes(bikes)}</p>
      <p>Available Bikes: {totalAvailable(bikes)}</p>
      <p>Booked Bikes: {totalBusy(bikes)}</p>
      <p>Average bike cost: {averPrice(bikes)}</p>
    </div>
  );
};

export default Statistics;
