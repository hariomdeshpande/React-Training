import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

function Cake(props) {
 
  return (
    <div class="card" style={{ width: "18rem", margin: "1rem" }}>
      <Link to={"/cake/" + props.data.cakeid}>
        <img
          src={props.data.image} className="card-img-top" alt="..." />
      </Link>
      <div class="card-body">
        <h5 class="card-title">{props.data.title}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to={"/cake/" + props.data.cakeid}>
        <a class="btn btn-outline-primary">
         Know More
        </a>
        </Link>
      </div>
    </div>
  );
}

export default Cake;
