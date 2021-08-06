import Cakelist from "./CakeList";
import Carousel from "./Carousel";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
