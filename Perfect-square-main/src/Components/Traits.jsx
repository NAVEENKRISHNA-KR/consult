import "./TraitsStyles.css";
import TraitsData from "./TraitsData";

import trait1 from "../assets/img10.png";
import trait2 from "../assets/img15.png";
import trait3 from "../assets/img11.png";

function Trait() {
  return (
    <div className="trait">
      <h1>WHAT MAKES US UNIQUE</h1>
      <p>
      As an earthmoving company, we are committed to the respectful and thoughtful handling of land. Our services prioritize privacy, space, and amenities, while also preserving the natural beauty of the land. We strive to develop living areas that blend seamlessly with the environment, ensuring sustainable and harmonious development.
      </p>
      <div className="traitcard">
        <TraitsData
          image={trait1}
          heading="EXPERT CONTRACTORS"
          text="At SSV Earthmover Company, we boast a team of expert contractors with specialized knowledge, extensive experience, and unwavering dedication. Our professionals work in harmony, ensuring well-coordinated activities that minimize waste, excessive costs, and delays. Trust SSV Earthmover Company for efficient and cost-effective earthmoving solutions delivered by a team of experts."
        />

        <TraitsData
          image={trait2}
          heading="PROFESSIONAL SERVICE"
          text="At SSV Earthmover Company, we partner with you every step of the way in your earthmoving journey. We listen attentively to your needs, wants, and concerns, ensuring that we understand your situation and expectations. Trust SSV Earthmover Company for professional earthmoving services that are tailored to your specific requirements."
        />

        <TraitsData
          image={trait3}
          heading="EXPERIENCE PORTFOLIO"
          text="SSV Earthmover Company is recognized for its experience, stability, and reliability in the earthmoving industry. With a strong focus on outstanding customer service, we prioritize your needs throughout the building process. Trust SSV Earthmover Company for dependable and reliable earthmoving services backed by years of experience."
        />
      </div>
    </div>
  );
}

export default Trait;
