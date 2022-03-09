import React, { useEffect } from "react";
import "./BestCoffee.css";
import img1 from "../img/92967516.jpg";
import img2 from "../img/92967517.jpg";
import img3 from "../img/138765948.jpg";
import img4 from "../img/138766017.jpg";
import img5 from "../img/92967522.jpg";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
export default function BestCoffee() {

 const { t, i18n } = useTranslation();
 function handleClick(lang) {
   i18n.changeLanguage(lang);
 }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="cover"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="font mt-3">
                <h1>
                  {t("articles.BestCoffee.Best Coffee Cities in the US")}{" "}
                </h1>
              </div>
              <div
                className="btn-group but my-1 "
                role="group"
                aria-label="Basic outlined example"
              >
                <button type="button" className="btn btn-outline-dark">
                  Eat & Drink
                </button>
              </div>
              <div className="mt-3">
                <p>
                  Whether you like a basic brew or larger-than-life latte, here
                  are five of the best US cities for coffee-lovers to visit for
                  the ultimate caffeine fix.
                </p>
              </div>
              <section>
                <div>
                  <h3>Portland, OR</h3>
                </div>
                <div>
                  <img className="pic" src={img1} />
                </div>
                <div>
                  <div>Try out independent roasters in Portland, Oregon</div>
                </div>
                <div className="my-3">
                  <p>
                    Portland is a city synonymous with coffee. Known for their
                    independent roasteries, cozy cafés, and experimental
                    espressos, the relaxed river city is packed with local
                    coffee charm. After waking up in the laid-back downtown
                    Society Hotel, check out local roasteries like Portland
                    Roasting Company for their variety and local charm, Heart
                    Coffee for their famous fruity flavors (and amazing mochas),
                    or Stumptown Coffee Roasters for unique seasonal coffees
                    like the piña colada cold brew.
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>Seattle, WA</h3>
                </div>
                <div>
                  <img className="pic" src={img2} />
                </div>
                <div>
                  <div>Visit the coffee epicenter of the US in Seattle</div>
                </div>
                <div className="my-3">
                  <p>
                    As the birthplace of Starbucks, the rainy city of Seattle is
                    a major US hub for all things coffee. Visit the first ever
                    Starbucks at 1st and Pike before heading just nine blocks
                    away to the 15,000-square-foot Starbucks Roastery – a
                    self-proclaimed Willy Wonka’s Chocolate Factory for
                    coffee-lovers. For a more local experience, visit
                    coffeehouses like Café Allegro which claims to be “Seattle’s
                    oldest espresso bar.” Switch over to decaf before heading to
                    sleep at the Mayflower Park Hotel built in 1927 and located
                    downtown.
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>San Francisco, CA</h3>
                </div>
                <div>
                  <img className="pic" src={img3} />
                </div>
                <div>
                  <div>Innovation is the key to coffee in San Francisco</div>
                </div>
                <div className="my-3">
                  <p>
                    San Francisco's coffee scene has been around since the
                    California Gold Rush brought names like Folger Coffee
                    Company to the forefront (do check out the historic,
                    Renaissance revival Folgers Coffee Company Building if you
                    venture into the city's Financial District). They have a
                    strong love for their old-school coffee, but you’ll see
                    innovation mixing the old and new coffee techniques in the
                    Bay Area. Places like Contraband Coffee Bar, Wrecking Ball
                    Roasting Company, or the popular Blue Bottle Coffee are
                    great spots to see what California coffee has to offer.
                    Spend the night at Chancellor Hotel on Union Square which
                    offers a menu of 12 specialty pillows to choose from – so
                    you’ll definitely sleep comfortably even after all that
                    caffeine.
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>Brooklyn, NY</h3>
                </div>
                <div>
                  <img className="pic" src={img4} />
                </div>
                <div>
                  <div>
                    Keep up with the hustle and bustle with a coffee in
                    Brooklyn, NY
                  </div>
                </div>
                <div className="my-3">
                  <p>
                    New York City probably would be sleeping by now if not for
                    their love of coffee. For the best coffee experiences this
                    city has to offer, head over to some of the more hipster
                    spots in Brooklyn. Williamsburg is the ideal place for an
                    espresso at places like Hungry Ghost, Brooklyn Roasting
                    Company, or Devoción where you can get the perfect new-age
                    Brooklyn mix of sophisticated hangout and urban ambiance.
                    Stay overnight in Williamsburg at the Pod Brooklyn, which
                    has a nearby campus featuring rooms, amenities and outdoor
                    space.
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>Minneapolis, MN</h3>
                </div>
                <div>
                  <img className="pic" src={img5} />
                </div>
                <div>
                  <div>
                    Enjoy the best kept secret in the coffee community –
                    Minneapolis
                  </div>
                </div>
                <div className="my-3">
                  <p>
                    Minneapolis is the place to go for a rustic and relaxed
                    coffee scene. The state of Minnesota has long been at the
                    forefront of the national speciality coffee scene thanks to
                    progressive roasting styles and locally grown, high-quality
                    select beans. Coffee spots like Spyhouse, Dogwood, Duluth
                    Coffee Company and UP focus on quality and ethics in their
                    roasting – and make a pretty mean cup of joe. Stay downtown
                    at the Millennium Minneapolis, which is connected to the
                    skyway so you won't even have to step outside before your
                    morning brew.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
