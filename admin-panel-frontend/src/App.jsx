import CreateNew from "./components/CreateNew";
import BikesList from "./components/BikesList";
import Statistics from "./components/Statistics";

const bikes = [
  {
    ID: 1,
    name: "Mountain Bike",
    type: "Mountain",
    color: "Red",
    wheelSize: 26,
    price: 500,
    status: "available",
    description: "A bike suitable for off-road cycling.",
  },
  {
    ID: 2,
    name: "Road Bike",
    type: "Road",
    color: "Blue",
    wheelSize: 28,
    price: 700,
    status: "busy",
    description: "A bike designed for traveling at speed on paved roads.",
  },
];

function App() {
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

  return (
    <div className={"general-container"}>
      <div style={styles.headerStyle}>ADMIN.BIKE-BOOKING.COM</div>
      <BikesList bikes={bikes} />
      <CreateNew />
      <Statistics />
      <div style={styles.footerStyle}>Developer: Filip Kriuk</div>
    </div>
  );
}

export default App;
