import "./Collection.css";
import Image from "../../assets/img/collection.png"

const Collection = () => {
  return (
    <div className="coll_container">
      <img src={Image} alt="Collection"/>
      <div className="coll_content">
        <div>
        <h1>Classic winter collection</h1>
        <p>Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit libero.</p>
        <a href="#">Shop collection</a>
        </div>
      </div>
    </div>
  );
};

export default Collection;
