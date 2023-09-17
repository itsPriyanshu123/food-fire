// import { IMG_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="card">
      <img  className='card_image'src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + cloudinaryImageId} />
      <h3 style={{paddingTop:'5px'}}>{name}</h3>
      <h5 style={{paddingTop:'10px'}}>{cuisines.join(", ")}</h5>
      <h5 style={{paddingTop:'10px'}}><strong>{areaName}</strong></h5>
      <span>
        <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4>•</h4>
        <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? '₹200 for two'}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;