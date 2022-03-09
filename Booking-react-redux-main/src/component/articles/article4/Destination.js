import React, { useEffect } from 'react'
import "./Destination.css";
import img1 from "../img/3.1.jpg";
import img2 from "../img/3.2.jpg";
import img3 from "../img/3.3.jpg";
import img4 from "../img/3.4.jpg";
import img5 from "../img/3.5.jpg";
export default function Destination() {
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
                <h1>Destination Inspiration: San Juan, Puerto Rico</h1>
              </div>
              <div
                className="btn-group but mt-3 "
                role="group"
                aria-label="Basic outlined example"
              >
                <button type="button" className="btn btn-outline-dark">
                  Destinations
                </button>
              </div>
              <div className="mt-3">
                <p>
                  Worlds collide in San Juan, Puerto Rico’s vibrant capital, a
                  simmering melting pot of indigenous, European, American, and
                  Afro-Caribbean cultures with endless attractions to delight
                  all types of travelers. In Old San Juan, time stands still.
                  Candy-colored colonial houses line the cobbled lanes that
                  criss-cross from Plaza Colón to the 17th-century San Juan Gate
                  – once the main entrance to the walled city. All along the
                  water’s edge, fortresses stand watch from towering cliffs,
                  their cannons still aiming out over the sea. Just outside the
                  old town, the rocky shoreline gives way to the soft sand of El
                  Escambrón Beach, a sheltered snorkeling and swimming spot.
                </p>
              </div>
              <section>
                <div>
                  <img className="pic" src={img1} />
                </div>
                <div>
                  <div>
                    El Morro Fortress, Puerto Rico
                  </div>
                </div>
                <div className="my-3">
                  <p>
                    San Juan’s cultural fusion is never more evident than in its
                    food. In the city center, upscale European restaurants sit
                    alongside street stalls and fast food joints, while
                    home-grown chefs like José Enrique take traditional cooking
                    to fine-dining heights. The stand-out local dish is
                    “mofongo” – fried and mashed plantain stuffed with crispy
                    bacon, chicken, or prawns. No matter the time, one thing’s
                    for sure – the smell of freshly roasted Puerto Rican coffee
                    is never far away. You’ll find it served milky at breakfast,
                    or as an afternoon pick-me-up paired with pastries in
                    Spanish-style cafés.
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>When to go?</h3>
                </div>
                <div>
                  <img className="pic" src={img2} />
                </div>
                <div>
                  <div>
                    A waterfront view of Old San Juan, Puerto Rico
                  </div>
                </div>
                <div className="my-3">
                  <p>
                    San Juan’s tropical climate makes for warm, humid weather
                    all year round, with average temperatures rarely dipping
                    below 77 degrees Fahrenheit. Bargain accommodation prices
                    can often be found in September and October – but bear in
                    mind that these months are the tail end of the Caribbean
                    hurricane season.
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>Where to stay?</h3>
                </div>
                <div>
                  <h4>
                    Best Western Plus Condado Palm Inn & Suites – San Juan,
                    Puerto Rico
                  </h4>
                </div>
                <div>
                  <img className="pic" src={img3} />
                </div>
                <div>
                  <div>
                    The outdoor pool at the Best Western Plus
                  </div>
                </div>
                <div className="my-3">
                  <p>
                    This modern hotel is just a short distance from the
                    waterfront, in the upscale Condado neighborhood. Its beach
                    club and outdoor pool score highly with Booking.com guests,
                    who also sing the praises of the friendly staff. The bright
                    rooms and suites – some with sea views and fully equipped
                    kitchens – are another big plus.
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>Villa Herencia Hotel – San Juan, Puerto Rico</h3>
                </div>
                <div>
                  <img className="pic" src={img4} />
                </div>
                <div>
                  <div>
                    The restored Villa Herencia Hotel
                  </div>
                </div>
                <div className="my-3">
                  <p>
                    This restored villa in Old San Juan is full of old-world
                    charm. Booking.com guests rave about Villa Herencia’s
                    eclectic design, which blends historic features and antique
                    furniture with bold modern artwork. They also love the
                    tropical feel of the roof terrace – complete with exotic
                    flowers, sun loungers, and even roll-top baths!
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>La Terraza de San Juan – San Juan, Puerto Rico</h3>
                </div>
                <div>
                  <img className="pic" src={img5} />
                </div>
                <div>
                  <div>
                    Wonderful views from La Terraza's rooftop pool
                  </div>
                </div>
                <div className="my-3">
                  <p>
                    A roof terrace with a plunge pool and breathtaking sea views
                    makes this boutique hotel a favorite with Booking.com
                    guests. Set in a colonial house in Old San Juan, La Terraza
                    de San Juan also wins rave reviews for its mix of
                    traditional and modern design.
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>How to get there?</h3>
                </div>
                <div>
                  <p>
                    The easiest way to get to San Juan is to fly there. There
                    are direct flights every day from the US and Canada, with
                    most of the traffic coming through Miami and New York.
                    Getting to San Juan from further will usually involve at
                    least one layover. There are daily flights from Amsterdam
                    and London with only one layover, whereas a trip from Sydney
                    will involve two layovers. If you’re planning a trip from
                    within the Caribbean and prefer a more scenic route, there’s
                    a weekly ferry from Santo Domingo in the Dominican Republic,
                    which takes around 13 hours.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
}
