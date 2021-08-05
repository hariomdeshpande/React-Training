import Cakelist from "./CakeList";
import Carousel from "./Carousel";

function Home() {
   
  return (
    <div>
      
      <Carousel></Carousel>
      <div className="homeCompo">
      <Cakelist></Cakelist>
      </div>
    </div>
  );
}

export default Home;
