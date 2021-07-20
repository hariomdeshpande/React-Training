import './App.css';
import { Navbar } from './Components/Navbar';
import {Carousel} from './Components/Carousel'
import{Cake} from './Components/Cake';
import { AdminPortal } from './Components/AdminPortal';
// import {Loader} from "react-loader-spinner";

export var data1 ={
  image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DR_xDiShk",
  title:"Cake1",
}
export var data2 ={
  image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DR_xDiShk",
  title:"Cake2",
}

function App() {
  return (
    <div className="App">
     <Navbar name="HD"></Navbar>
     <AdminPortal></AdminPortal>
     <Carousel></Carousel>
     {/* <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /> */}
     <Cake data={data1}></Cake>
     <Cake data={data2}></Cake>
    </div>
  );
}

export default App;
