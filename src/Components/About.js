// import food from "../Images/burger-image.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1 className="text-red-400">
          Welcome to <br/> The world of <br /> <span>Tasty & Fresh Food</span>
        </h1>
        <h4>
          "Better you will feel if you eat a Food<span>Fire</span> healthy meal"
        </h4>
      </div>
      <div className="about-right">
        <img src={"https://foodfire-app.netlify.app/burger-image.ec55d069.png"} alt="Food Image" />
      </div>
    </div>
  );
};

export default About;