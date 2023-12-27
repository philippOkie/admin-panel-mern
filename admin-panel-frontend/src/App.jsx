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

  async function handleDelete(id) {
    try {
      await bikeService.remove(id);
      setBikes(bikes.filter((bike) => bike._id !== id));
      console.log(`Deleting bike with ID ${id}`);
    } catch (error) {
      console.error("Error deleting bike:", error);
    }
  }

  return (
    <div className={"general-container"}>
      <div style={styles.headerStyle}>ADMIN.BIKE-BOOKING.COM</div>
      <BikesList bikes={bikes} handleDelete={handleDelete} />
      <CreateNew addABike={addABike} />
      <Statistics bikes={bikes} />
      <div style={styles.footerStyle}>Developer: Filip Kriuk</div>
    </div>
  );
}

export default App;
