export default function HeaderForPages({ image, text }) {
  return (
    <div className="About_us_picture_container">
      <img src={image} alt=""></img>
      <p className="abt">{text}</p>
    </div>
  );
}
