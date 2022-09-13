import Header from "./header/Header";
import Home from "./home/Home";

const App = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "Beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "Boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "Forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "City" },
    { url: "http://localhost:3000/image-5.jpg", title: "Italy" },
  ];

  return (
    <div>
      <Header />
      <Home slides={slides} />
    </div>
  );
};

export default App;
