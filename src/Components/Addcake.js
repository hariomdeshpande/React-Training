import { connect } from "react-redux";
import { Link,withRouter } from "react-router-dom";
import { AddCakethunk } from "../reduxstore/thunks";

function Addcake(props) {
  let cakeData = {};
  function addcakeData() {
    const eggValue = document.querySelector('input[name="eggless"]:checked').value
    const ingreValue = document.getElementById("cakeingredients").value.split(" ")
    const cakeDetails = {
        name:cakeData.name,
        price:cakeData.price,
        weight:cakeData.weight,
        description:cakeData.description,
        image:cakeData.image,
        flavour:cakeData.flavour,
        eggless:eggValue,
        ingredients:ingreValue
    };
      function checkEmpty(item){
        if(item!==undefined){
          return true
        }
      }
      if(Object.values(cakeDetails).every(checkEmpty)){
        console.log("Adding Cake Details.............",cakeDetails)
        props.dispatch(AddCakethunk(cakeDetails))
      }
      else{
        window.alert("Enter All Values")
      }
     
   
  }
  return (
    <div>
    { props.isuserloggedin && props.isuserloggedin!==undefined ?
    <div className="d-flex justify-content-center jumbotron">
      <form className="form w-50">
        <div class="form-group">
          <label for="cakename">Cake Name</label>
          <input
            type="text"
            onChange={(e) => {
              cakeData.name = e.target.value;
            }}
            name="cakename"
            class="form-control"
            id="cakename"
          />
        </div>
        <div class="form-group">
          <label for="cakeprice">Cake Price</label>
          <input
            type="text"
            onChange={(e) => {
              cakeData.price = e.target.value;
            }}
            class="form-control"
            id="cakeprice"
          />
        </div>
        <div class="form-group">
          <label for="cakeweight">Cake Weight</label>
          <input
            type="text"
            onChange={(e) => {
              cakeData.weight = e.target.value;
            }}
            class="form-control"
            id="cakeweight"
          />
        </div>
        <div class="form-group">
          <label for="cakedescription">Cake Description</label>
          <input
            type="text"
            onChange={(e) => {
              cakeData.description = e.target.value;
            }}
            class="form-control"
            id="cakedescription"
          />
        </div>
        <div class="form-group">
          <label for="cakeimage">Cake Image</label>
          <input
            type="text"
            onChange={(e) => {
              cakeData.image = e.target.value;
            }}
            class="form-control"
            id="cakeimage"
            placeholder="Enter cake image url here !!  "
          />
        </div>
        <div class="form-group">
          <label for="cakeflavour">Cake Flavour</label>
          <input
            type="text"
            onChange={(e) => {
              cakeData.flavour = e.target.value;
            }}
            class="form-control"
            id="cakeflavour"
          />
        </div>
        <div class="form-group">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="eggless"
              id="cakeeggtrue"
              value="true"
              checked
            />
            <label class="form-check-label" for="cakeeggtrue">
              Contains Egg
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="eggless"
              id="cakeeggfalse"
              value="false"
            />
            <label class="form-check-label" for="cakeeggfalse">
              Eggless   
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="cakeingredients">Ingredients</label>
          <input
            type="text"
            class="form-control"
            id="cakeingredients"
            placeholder="Enter each ingredient with a space !"
          />
        </div>
        <div className="text-center">
          <a type="submit" class="btn btn-info btn-lg" onClick={addcakeData}>
            Add Cake
          </a>
        </div>
      </form>
    </div>: 
    <div className="p-5">
        <h2>Please Login to add cake !!</h2>
        <Link to="./login"><button className="mt-4 btn btn-info">Login Here</button></Link>
      </div>}
    </div>
  );
}

Addcake = withRouter(Addcake);
export default connect(function (state, props) {
  console.log(state);
  return {
    isuserloggedin: state["AuthReducer"]["isuserloggedin"],
  };
})(Addcake);
