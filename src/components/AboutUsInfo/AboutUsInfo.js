import "./AboutUsInfo.css";

import woman1 from "../../assets/img/greyCoatWoman.avif";
import woman2 from "../../assets/img/yellowCostumeWoman.jpeg";

const AboutUsInfo = () => {
  return (
    <div className="abt_main_container">
      <div className="first_item">
        <img src={woman1} alt="" />
        <div className="text_info">
          <h3>THE BEGGING OF OUR JOURNEY</h3>
          <p>
            In laoreet quam efficitur quam porttitor vulputate. Pellentesque
            malesuada vitae lorem vitae placerat. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Cras ultricies eros nec maximus
            eleifend. Suspendisse tortor dui, ultricies sit amet eleifend vitae,
            blandit porta sem. Nam nunc quam, ullamcorper eget velit vel, tempor
            volutpat enim. Donec et urna sodales, lobortis eros eget,
            condimentum lorem. Integer ut malesuada dui, quis hendrerit justo.
            Nam accumsan bibendum ante, sed congue est ultrices ut.
          </p>
        </div>
      </div>
      <div className="second_item">
        <div className="text_info">
          <h3>WHO ARE WE?</h3>
          <p>
            Pellentesque nec eros erat. In eu ipsum tincidunt, consectetur urna
            ac, varius ipsum. Aenean ut tellus dapibus justo finibus
            pellentesque ac sed dui. Quisque fermentum, libero in luctus
            aliquet, sapien arcu imperdiet erat, eget pellentesque urna lacus et
            tellus. Integer sed nisi a ante hendrerit efficitur eu quis magna.
            Duis a bibendum dolor. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Vestibulum dapibus nibh blandit, dictum lacus
            ac, dapibus eros. Vivamus vel commodo
          </p>
        </div>

        <img src={woman2} alt="" />
      </div>
    </div>
  );
};

export default AboutUsInfo;
