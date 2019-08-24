import React from "react";
import curious from "../../img/curious.jpg";
import empowered from "../../img/empowered.jpg";
import v1 from "../../img/v1.jpg";
import inclusive from "../../img/inclusive.jpg";
import "../../css/body.css";

export default function Body() {
  return (
    <div className="main-container">
      <div className="container">
        <img className="image" src={curious} alt="curious" />
        <div className="container-text">
          <div className="text">
            <p className="text-title">Curious</p>
            <p className="body">
              Staying curious about what is outside and two steps ahead inspires
              us to challenge the status quo. Having the courage to look and
              leap is the way we grow. Because asking "what if?" pushes us to
              the next level as people and as a company.
            </p>
            <p className="end">~Keep seeking, never settle.</p>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="container-text">
          <div className="text">
            <p className="text-title">Empowered</p>
            <p className="body">
              True empowerment is the result of taking responsibility. This
              means giving yourself permission to see it, say it and do it, and
              owning the outcomes. Because we move forward faster when we all
              take action.
            </p>
            <p className="end">~Make it happen.</p>
          </div>
        </div>
        <img className="image" src={empowered} alt="empowered" />
      </div>

      <div className="container">
        <img className="image" src={v1} alt="v1.0" />
        <div className="container-text">
          <div className="text">
            <p className="text-title">V1.0. 2.0, 3.0</p>
            <p className="body">
              There are very few overnight successes. Greatness is born of many
              little victories (and failures). Share v1.0. test it, and make it
              better. Then create the next version. Because the moment we think
              something is perfect, it will be obsolete.
            </p>
            <p className="end">~Push for progress, not perfection</p>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="container-text">
          <div className="text">
            <p className="text-title">Inclusive</p>
            <p className="body">
              We are smart alone but together we are genius. This means being
              inclusive, giving the benefit of the doubt and being responsible
              for each other. Because, for our company to thrive for the next
              100+ years, smart isn't enough. We need genius.
            </p>
            <p className="end">~Include, value and trust each other.</p>
          </div>
        </div>
        <img className="image" src={inclusive} alt="inclusive" />
      </div>
    </div>
  );
}
