import React, { useEffect } from 'react'
import "./Yoga.css";
import img0 from "../img/2.1.jpg";
import img1 from "../img/2.2.jpg";
import img2 from "../img/2.3.jpg";
import img3 from "../img/2.4.jpg";
import img4 from "../img/2.5.jpg";
 import last from "../img/last.webp";

export default function Yoga() {
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
              <div className="font mt-5">
                <h1>5 soulful yoga retreat destinations</h1>
              </div>
              <div
                className="btn-group but mt-5 "
                role="group"
                aria-label="Basic outlined example"
              >
                <button type="button" className="btn btn-outline-dark">
                  Destinations
                </button>
              </div>
              <section>
                <div className="mt-5">
                  <img className="pic" src={img0} />
                </div>
                <div className="my-3">
                  <p>
                    Over the past year, many people have sought refuge in the
                    peaceful practice of yoga. Now that travel is on the rise
                    again, we discovered that one in four travelers will be
                    prioritizing relaxation on their next trip. If you’re also
                    looking to unite mind, body, and wanderlust, check out our
                    selection of the world’s most rejuvenating yoga retreats.
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>COMO Shambhala Estate, Bali, Indonesia</h3>
                </div>
                <div>
                  <img className="pic" src={img1} />
                </div>
                <div>
                  <div >
                    Infinity pool and outdoor showers in lush green surroundings
                    at COMO Shambhala Estate
                  </div>
                </div>
                <div className="my-3">
                  <p>
                    Nestled in a lush tropical enclave, Shambhala Estate is the
                    ideal place to relax in Bali. At this luxury yoga retreat,
                    stone steps paved along meandering waterways lead to private
                    residences, and infinity pools overlook the dense jungle
                    canopy. A stay here is guaranteed to cleanse your body of
                    the stresses of daily life – even without a round of yoga.
                    But if mindfulness is on your mind, Shambhala Estate has a
                    full menu of holistic health offerings, ranging from
                    meditation, Pilates, yoga, hydrotherapy, and more. Want a
                    more personal experience? The estate’s internationally
                    accredited teachers will happily craft an individualized
                    wellness plan for you.
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>Paradis Plage Surf Yoga & Spa, Taghazout, Morocco</h3>
                </div>
                <div>
                  <img className="pic" src={img2} />
                </div>
                <div>
                  <div >
                    Yoga className on the beach at Paradis Plage Surf Yoga & Spa
                  </div>
                </div>
                <div className="my-3">
                  <p>
                    Situated in the rustic fishing village of Taghazout, Paradis
                    Plage Surf Yoga & Spa is a 300-acre oasis of calm and fun.
                    From focusing on your breathwork at seaside yoga workshops
                    to losing said breath in an intense surf lesson, there’s no
                    shortage of enjoyment here. After a sun-kissed yoga session,
                    tuck into healthy organic food at the resort’s restaurant
                    and savor a selection of fresh food and juices to refuel
                    after practice. End your day with a massage or treat
                    yourself to a cocktail while gazing out at the sun as it
                    sinks into the Atlantic.
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>Tri, Koggala Lake, Sri Lanka</h3>
                </div>
                <div>
                  <img className="pic" src={img3} />
                </div>
                <div>
                  <div >
                    Disappear into the natural surroundings at Tri
                  </div>
                </div>
                <div className="my-3">
                  <p>
                    Tri sits on the shores of the tranquil Lake Koggala,
                    enclosed on all sides by sweet-scented cinnamon plantations.
                    The resorts blend into its natural surroundings, thanks to
                    its walls which are made out of wood from the local
                    plantations. Only the occasional peek of a thatched roof or
                    glimmer from the infinity pools give away its location. The
                    resort is the brainchild of Rob Drummond, who’s big on
                    sustainability. Nature seeps into every space here, with
                    geckos scuttling about and kingfishers perched by earth-tone
                    pools. It’ll be tempting to simply kick back and enjoy the
                    natural beauty,with a green juice in hand, but there’s also
                    an array of wellness services to try. Rob's wife, Lara,
                    conducts yoga sessions in a treetop sala (hall) hidden among
                    the bamboo groves, and her client lists includes Gerard
                    Butler and Sienna Miller. Thanks to Tri’s proximity to the
                    coast, you can soak away any lingering stresses in the
                    roaring Indian Ocean.
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>Zenses Wellness and Yoga Resort, Tulum, Mexico</h3>
                </div>
                <div>
                  <img className="pic" src={img4} />
                </div>
                <div>
                  <div >
                    Zenses Wellness and Yoga Resort, Tulum, Mexico
                  </div>
                </div>
                <div className="my-3">
                  <p>
                    Zenses Wellness and Yoga Resort in Tulum is a sanctuary for
                    those who love sun, sand, and soulful reflection. It's a
                    bohemian-chic yogi abode designed to cater to every taste
                    while bringing you closer to nature. Situated 1.5 miles
                    inland from Paraíso Beach, this adults-only wellness retreat
                    has poolside hammocks, refreshing outdoor showers, hidden
                    reading nooks, and, of course, yoga. The best part? All
                    sessions and equipment are free, but you’re welcome to tip
                    the instructor. Once you’re done putting yourself in
                    posture-aligning poses, it’s time to unfold into Savasana
                    next to the pool.
                  </p>
                </div>
              </section>
              <section>
                <div>
                  <h3>Six Senses, Douro Valley, Portugal</h3>
                </div>
                <div>
                  <img className="pic" src={last} />
                </div>
                <div>
                  <div >
                    Six Senses, Douro Valley, Portugal
                  </div>
                </div>
                <div className="my-3">
                  <p>
                    Retreat to the mountains at this oasis of peace amid
                    northern Portugal’s vineyards and sunbaked canyons. Vaulted
                    ceilings reach down to meet your mountain pose at this
                    19th-century mansion-turned-hotel by the edge of the Douro
                    River. The surrounding landscape is spectacular all year,
                    with rolling hills awash with the rugged farmland colors and
                    ancient manor homes. The resort’s three-day Discover Yoga
                    program aims to improve your mind-body balance, suitable for
                    novices and advanced yogis alike. If you prefer to practice
                    solo, focus on your breath while sitting in a bird’s nest
                    swing or dive into a refreshing moment of poolside
                    meditation. Top it all off with a dining experience at the
                    on-site restaurant, accompanied by a glass of local wine.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
}
