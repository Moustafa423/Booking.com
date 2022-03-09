import React, { useEffect } from "react";
import "./Unmissable.css";

import img1 from "../img/4.1.jpg";
import img2 from "../img/4.2.jpg";
import img3 from "../img/4.3.jpg";
import img4 from "../img/4.4.jpg";
import img5 from "../img/4.5.jpg";
import img6 from "../img/4.6.jpg";
import img7 from "../img/4.7.jpg";

export default function Unmissable() {
  useEffect(() => {
   window.scrollTo({
     top: 0,
     left: 0,
     behavior: "instant",
   });
  }, []);
  return (
    <div className="container-fluid">
      <div className="cover"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="font mt-3">
              <h1>7 unmissable hot air balloon rides</h1>
            </div>
            <div
              className="btn-group but mt-3 "
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" className="btn btn-outline-dark">
                Travel Tips
              </button>
            </div>
            <div className="mt-4">
              <p>
                Peaceful yet full of adventure, experiencing a view by hot air
                balloon has to be the most scenic way to take it all in. Next
                time you take a trip, consider jumping in a basket and gazing at
                the horizon from hundreds of feet up. Whether you’re a rookie or
                regularly take to the skies, a trip in a balloon is an
                experience that's sure to make unforgettable memories. From
                soaring over green pastures to drifting across the Arctic, we
                found seven of the best locations to go up, up, and away.
              </p>
            </div>
            <section>
              <div>
                <h3>Cappadocia, Turkey</h3>
              </div>
              <div>
                <img className="pic" src={img1} />
              </div>
              <div>
                <div>See Cappadocia's famous fairy chimneys from the sky</div>
              </div>
              <div className="my-3">
                <p>
                  Famous for its hoodoos—also known as fairy
                  chimneys—Cappadocia’s natural wonders draw visitors from
                  around the world. These tall, thin spires of rock were formed
                  over millions of years by lava flows, and seeing them from
                  above is incredible. On any given day, countless hot air
                  balloons drift over the horizon in a kaleidoscope of colors.
                  While May to September is peak season, rides are offered
                  throughout the year, weather permitting. Stay in the heart of
                  Cappadocia, in one of the cave rooms at the Mithra Cave Hotel.
                  Wake up early to catch a balloon ride and enjoy the view of
                  the region’s peaks and valleys as the sun rises.
                </p>
              </div>
            </section>
            <section>
              <div>
                <h3>Loire Valley, France</h3>
              </div>
              <div>
                <img className="pic" src={img2} />
              </div>
              <div>
                <div>
                  Bask in the beauty of the Loire Valley by hot air balloon
                </div>
              </div>
              <div className="my-3">
                <p>
                  Offering a quintessentially French outlook by balloon, the
                  Loire Valley has vineyards, rivers, and forests you can coast
                  over in a matter of minutes. Try one of the most popular
                  rides, which soars over the grand Château Chenonceau. Peek
                  over the wicker basket at the grounds below. If you visit
                  between April and October, this castle will be open to visit
                  on land, too. Depending on weather conditions, departures
                  typically start early in the morning or mid-afternoon. When
                  you’re back on steady ground, rest your head at the luxurious
                  Le Pavillon Des Lys, which is only a five-minute walk from the
                  Château d’Amboise.
                </p>
              </div>
            </section>
            <section>
              <div>
                <h3>Iqaluit, Nunavut, Canada</h3>
              </div>
              <div>
                <img className="pic" src={img3} />
              </div>
              <div>
                <div>
                  Balloon expeditions give you a once-in-a-lifetime view of the
                  Canadian Arctic
                </div>
              </div>
              <div className="my-3">
                <p>
                  The Canadian Arctic, particularly Iqaluit, is a coveted
                  destination for hot air balloon enthusiasts. These
                  awe-inspiring expeditions give you a once in a lifetime chance
                  to fly between northern communities or even across the ice
                  caps, from Nunavut’s Baffin Island to Greenland. Brace
                  yourself for the elements. Ballooning here takes place in the
                  winter, so you can enjoy the natural ice in all its wonder.
                  When the day is over, warm up at The Frobisher Inn. With a
                  fitness center and kitchenettes in some rooms, it’s
                  conveniently located in the center of town.
                </p>
              </div>
            </section>
            <section>
              <div>
                <h3>Serengeti National Park, Tanzania</h3>
              </div>
              <div>
                <img className="pic" src={img4} />
              </div>
              <div>
                <div>Get a bird’s eye view of the Serengeti by balloon</div>
              </div>
              <div className="my-3">
                <p>
                  The Serengeti National Park is renown for its landscape and
                  array of wildlife, from elephants to lions, and more. Get
                  unbeatable bird’s eye views of Tanzania by taking a trip in a
                  hot air balloon. Tours are available all year round, but can
                  vary by location. The cruising altitude will change depending
                  on the season and weather conditions, so no two rides are the
                  same. With a decor based on Masaai ceremonies, Asanja Africa
                  offers tented accommodations in the south-central region of
                  the park.
                </p>
              </div>
            </section>
            <section>
              <div>
                <h3>Bagan, Myanmar</h3>
              </div>
              <div>
                <img className="pic" src={img5} />
              </div>
              <div>
                <div>Check out Bagan’s sights from the sky</div>
              </div>
              <div className="my-3">
                <p>
                  Home to thousands of historic monuments, stupas, and pagodas,
                  Bagan is one of Myanmar’s most visited cities. Take to the sky
                  in a basket and revel in the sheer volume of the iconic
                  architecture around you. The ballooning season runs from
                  October to mid-March, when the winds are calm and the air is
                  cool. The most favorable conditions are between December and
                  February, when you’re bound to spot many other visitors
                  enjoying the scenery. Come back down to earth at the Bagan
                  View Hotel, where you’ll get a great outlook of balloons
                  floating across the sky.
                </p>
              </div>
            </section>
            <section>
              <div>
                <h3>Albuquerque, New Mexico, USA</h3>
              </div>
              <div>
                <img className="pic" src={img6} />
              </div>
              <div>
                <div>
                  More than 500 balloons take off during the Albuquerque
                  International Balloon Fiesta
                </div>
              </div>
              <div className="my-3">
                <p>
                  Balloon enthusiasts regularly travel to Albuquerque in the
                  first week of October for the city’s annual International
                  Balloon Fiesta. More than 500 colorful blimps take flight
                  during the festival, which also includes a laser light show,
                  flying competition, and fireworks. If you plan on heading to
                  the festival, don’t miss out – make sure you book a ride in
                  advance. If you want something a little more exclusive, book a
                  private ride with champagne for views of New Mexico’s stunning
                  high-desert landscape. At the end of a long day, kick back at
                  El Vado Motel, a retro location that’s been fully refurbished
                  to offer all the modern amenities you’ll need.
                </p>
              </div>
            </section>
            <section>
              <div>
                <h3>Muelle, San Carlos, Costa Rica</h3>
              </div>
              <div>
                <img className="pic" src={img7} />
              </div>
              <div>
                <div>
                  Muelle and its active volcano are best viewed from 1,000 feet
                  above ground
                </div>
              </div>
              <div className="my-3">
                <p>
                  Drift above the rainforests and—if you’re lucky—catch a
                  glimpse of monkeys racing through canopies by taking a flight
                  from Muelle. Best viewed from 1,000 feet in the sky, the
                  natural beauty of northern Costa Rica offers an array of
                  sights including the National Park and active Arenal volcano.
                  For a more hands-on experience, you can learn how to prepare
                  the balloon for flight in Muelle. You’ll even be able to
                  choose where to land, all under the supervision of a pilot.
                  Afterwards, relax at the Tilajari Hotel Resort, which is
                  surrounded by rainforest and tropical gardens.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
