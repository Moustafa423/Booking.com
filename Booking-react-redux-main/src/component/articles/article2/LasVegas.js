import React, { useEffect } from 'react'
import "./LasVegas.css";
import img0 from "../img/1.jpg";
import img1 from "../img/1.1.jpg";
import img2 from "../img/1.2.jpg";
import img3 from "../img/1.3.jpg";
import img4 from "../img/1.4.jpg";
import img5 from "../img/1.5.jpg";
export default function LasVegas() {
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
              <div className="font mt-3 ">
                <h1>Las Vegas Beyond the Casinos</h1>
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
                  In Las Vegas, gambling isn’t the only way to hit the jackpot.
                  Nowadays the city promises an array of alternative
                  entertainment, from world-className concerts and blockbuster
                  shows, to adrenaline-pumping roller coasters and
                  Michelin-starred cuisine. For a sure-bet on a good time, we’ve
                  gathered Sin City’s top attractions beyond the blackjack
                  tables and slot machines.
                </p>
              </div>
              <section>
                <div>
                  <h3>Explore the Strip & Fremont Street</h3>
                </div>
                <div>
                  <img className="pic" src={img0} />
                </div>
                <div>
                  <div >
                    One of the world’s most recognizable streets
                  </div>
                </div>
                <div className="my-3">
                  <p>
                    Las Vegas Boulevard—more commonly known as the Strip—is one
                    of the world’s most recognizable streets. Walking down this
                    4-mile stretch, you’ll pass the city’s best shopping and
                    most famous sights, from the neon Welcome to Las Vegas sign
                    to the Bellagio’s fountain show. Then there’s Fremont
                    Street, which is sort of like the Strip’s quirky older
                    brother. It was the first paved road in downtown Las Vegas,
                    and to this day promises neon signs flashing above and
                    musicians performing on the sidewalks below. Want to stay
                    close to (but out of earshot from) the action? Check out the
                    Desert Rose Resort, whose spacious condo suites come with
                    fully equipped kitchens, all without the commotion of a
                    connected casino.
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>Vintage lights & Vegas history</h3>
                </div>
                <div>
                  <img className="pic" src={img1} />
                </div>
                <div>
                  <div >
                    The Neon Museum is a technicolor graveyard
                  </div>
                </div>
                <div className="my-3">
                  <p>
                    If Fremont Street doesn’t satisfy your classic-Vegas itch,
                    head to the Neon Museum. Its collection is as immense as it
                    is impressive, with two outdoor “boneyards” and a visitor’s
                    center housed in the former La Concha Motel lobby. The
                    artifacts are like a walk through history, tracking the
                    trends of design and technology from the 1930s to
                    present-day Las Vegas. For a glimpse into the city’s grimmer
                    past, The Mob Museum is only five minutes away. After a day
                    of history, settle back into modern-day luxury at the
                    Marriott’s Grand Chateau, one of the highest-rated hotels in
                    Vegas.
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>A taste of Europe in the desert</h3>
                </div>
                <div>
                  <img className="pic" src={img2} />
                </div>
                <div>
                  <div >
                    Float down Venetian canals in the middle of the desert
                  </div>
                </div>
                <div className="my-3">
                  <p>
                    You don’t need to take a transatlantic flight to experience
                    Europe. The Paris Hotel not only offers fine French cuisine
                    in an authentic brasserie ambiance, but even has a
                    half-scale replica of the Eiffel Tower, which stands
                    forty-six stories tall and offers incredible views down the
                    Strip. Or you could take a step back in time to Ancient Rome
                    at Casesar’s Palace, where the Colosseum hosts in the
                    world’s most exciting performers – though no gladiators. For
                    a modern-day Italian experience, you can go on a gondola
                    ride down the canals that run along restaurant terraces and
                    shopping arcades modeled after Venice. The Palazzo at The
                    Venetian® has a 9.1 rating, promising both comfort and fun.
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>Mile-high thrills</h3>
                </div>
                <div>
                  <img className="pic" src={img3} />
                </div>
                <div>
                  <div >
                    An amusement park not for the faint of heart
                  </div>
                </div>
                <div className="my-3">
                  <p>
                    The Stratosphere Tower is a key fixture in the Vegas skyline
                    and claims to be the country’s “tallest freestanding
                    observation tower” at a staggering 1,150 feet. The top level
                    doesn’t just offer incredible city views, but is also home
                    to the highest thrill rides in the country. Even the boldest
                    daredevils break a sweat free-falling at 40 mph doing a Sky
                    Jump or getting spun at 3 Gs over the edge of the
                    900-foot-high balcony. Once everyone’s pulse has settled,
                    the M Resort Spa & Casino is the perfect place to unwind for
                    the night.
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>Catch a world-className performance</h3>
                </div>
                <div>
                  <img className="pic" src={img4} />
                </div>
                <div>
                  <div >
                    Every Cirque du Soleil show promises jaw-dropping acts
                  </div>
                </div>
                <div className="my-3">
                  <p>
                    Every evening hosts incredible shows that give Broadway a
                    run for its money, making Las Vegas one of the world’s
                    entertainment capitals. On top of visiting acts from
                    international stars, there are dozens of shows that run 365
                    days a year, from various Cirque du Soleil performances to
                    the Blue Man Group and Jabbawockeez dance crew. Situated
                    halfway between the Strip and McCarran International
                    Airport, the Home2 Suites by Hilton Las Vegas City Center
                    also offers a free shuttle service for travelers arriving by
                    plane.
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>Airborne adventures</h3>
                </div>
                <div>
                  <img className="pic" src={img5} />
                </div>
                <div>
                  <div >
                    What’s better than a bird’s-eye view of the Grand Canyon?
                  </div>
                </div>
                <div className="my-3">
                  <p>
                    The Grand Canyon is too close—not to mention breathtaking—to
                    pass up. There’s no better way to fully appreciate this
                    natural wonder than by helicopter. Numerous companies offer
                    packages that will take you from Vegas to Boulder City,
                    before hopping a chopper and soaring over and through the
                    Grand Canyon. If time is tight for a day trip, you can still
                    get airborne at Vegas Indoor Skydiving, where vertical wind
                    tunnels let visitors experience the phenomena of flight.
                    Treat yourself to a stay at Bally's Las Vegas Hotel &
                    Casino, one of the city’s most highly rated hotels.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
}
