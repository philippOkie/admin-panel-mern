import CreateNew from "./components/CreateNew";
import BikesList from "./components/BikesList";
import Statistics from "./components/Statistics";
import bikeService from "./services/bikes";
import { useEffect, useState } from "react";

function App() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const fetchBikes = async () => {
      const bikes = await bikeService.getAll();
      setBikes(bikes);
    };

    fetchBikes();
  }, []);

  const styles = {
    footerStyle: {
      backgroundColor: "#696969",
      color: "#E8E8E8",
    },

    headerStyle: {
      backgroundColor: "#696969",
      color: "#E8E8E8",
    },
  };

  function addABike(returnedBike) {
    setBikes(bikes.concat(returnedBike));
  }

  return (
    <div className={"general-container"}>
      <div style={styles.headerStyle}>ADMIN.BIKE-BOOKING.COM</div>
      <BikesList bikes={bikes} />
      <CreateNew addABike={addABike} />
      <Statistics />
      <div style={styles.footerStyle}>Developer: Filip Kriuk</div>
    </div>
  );
}

export default App;
