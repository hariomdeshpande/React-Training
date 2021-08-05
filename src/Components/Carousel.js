import { authenticator } from "..";

console.log(authenticator)

function Carousel() {


  return (
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ul class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ul>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="parent d-flex justify-content-center">
            <img src="../cake1.jpg"/>
        </div>
          </div>
          <div class="carousel-item">
            <div class="parent d-flex justify-content-center">
              <img src="../cake2.jpg"/>
        </div>
            </div>
            <div class="carousel-item">
              <div class="parent d-flex justify-content-center">
                <img src="../cake3.jpg"/>
        </div>
              </div>
            </div>

            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>

            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          );
}

          export default Carousel;
