import React, { Component } from "react";
import "./font/flaticon.css";
import "../HotelServices/hotelServices.css";
import imgOne from "./img/hotelpool.jpg";
import imgTwo from "./img/dinner.jpg";
import imgThree from "./img/roomview.jpg";
import imgFour from "./img/relax.jpg";

class HotelServices extends Component {
  render() {
    return (
      <div className="main-services">
        <h1>Discover Our Services</h1>
        <div className="services-container">
          <div className="services">
            <div className="flaticon-container">
              <span className="flaticon-parking"></span>
              <h3>Parking Services</h3>
            </div>

            <div>
              <p>
                That’s funny, my name’s roger. two roger’s don’t make a right.oh
                no, not the bees! please not the bees ahhhh!
              </p>
            </div>
          </div>
          <div className="services">
            <div className="flaticon-container">
              <span className="flaticon-cocktail"></span>
              <h3>Bar & Drinks</h3>
            </div>
            <div>
              <p>
                And the whole time…you stand there…with this who-expression on
                your face! - That’s funny, oh no, not the bees! please not the
                bees ahhhh!
              </p>
            </div>
          </div>
          <div className="services">
            <div className="flaticon-container">
              <span className="flaticon-24-hours"></span>
              <h3>Shuttle Services</h3>
            </div>
            <div>
              <p>
                Who's responsible for the ask for this request? my capacity is
                full what about scaling components to a global audience?
              </p>
            </div>
          </div>
          <div className="services">
            <div className="flaticon-container">
              <span className="flaticon-washing-machine"></span>
              <h3>Laundry</h3>
            </div>
            <div>
              <p>
                I want to take his face…off. Eyes. Nose. Skin. Teeth. It’s
                coming off. Who's responsible The Beeeeeeessssssss
              </p>
            </div>
          </div>
          <div className="services">
            <div className="flaticon-container">
              <span className="flaticon-serving-dish"></span>
              <h3>Room Services</h3>
            </div>
            <div>
              <p>
                Move the needle put it on the parking lot. Cos I was made for
                this sewer Baby and I AM the king
              </p>
            </div>
          </div>
          <div className="services">
            <div className="flaticon-container">
              <span className="flaticon-stroller"></span>
              <h3>Babysitting</h3>
            </div>
            <div>
              <p>
                Why couldn’t you just put the Bunny back in the box? We have put
                the apim bol, uhum.
              </p>
            </div>
          </div>
          <div className="services">
            <div className="flaticon-container">
              <span className="flaticon-bathrobe"></span>
              <h3>SPA</h3>
            </div>

            <div>
              <p>
                We have put the apim bol, temporarily so that we can later put
                the monitors on a tentative event rundown is attached for your
                reference
              </p>
            </div>
          </div>
          <div className="services">
            <div className="flaticon-container">
              <span className="flaticon-jacuzzi"></span>
              <h3> Medicinal Jacuzzi</h3>
            </div>
            <div>
              <p>
                I could eat a peach for hours, not the bees, Cos I was made for
                this sewer Baby and I AM the king
              </p>
            </div>
          </div>
        </div>

        <div className="room-offers">
          <div className="offer-one">
            <div>
              <img src={imgOne} />
            </div>
            <div>
              <div className="room-desc">
                <div>
                  <p>
                    <span> $360</span> per night
                  </p>
                </div>
                <h3>Single Room</h3>
              </div>
            </div>
          </div>
          <div className="offer-two">
            <div>
              <img src={imgTwo} />
            </div>
          </div>
          <div className="offer-three">
            <div>
              <img src={imgThree} />
            </div>
          </div>
          <div className="offer-four">
            <div>
              <img src={imgFour} />
            </div>
          </div>
        </div>

        <div className="sub-title-util">
          <h1>Enjoy Our Utilities</h1>

          <div className="utilities-container">
            <div className="utilities">
              <div className="flaticon-container-ut">
                <span className="flaticon-swimming-pool"></span>
              </div>

              <div className="ut-text-holder">
                <h3>Pool</h3>
              </div>
            </div>
            <div className="utilities">
              <div className="flaticon-container-ut">
                <span className="flaticon-popcorn"></span>
              </div>

              <div className="ut-text-holder">
                <h3>Theater</h3>
              </div>
            </div>
            <div className="utilities">
              <div className="flaticon-container-ut">
                <span className="flaticon-microphone"></span>
              </div>

              <div className="ut-text-holder">
                <h3>Night Concert</h3>
              </div>
            </div>
            <div className="utilities">
              <div className="flaticon-container-ut">
                <span className="flaticon-birdie"></span>
              </div>

              <div className="ut-text-holder">
                <h3>Golf course</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HotelServices;
