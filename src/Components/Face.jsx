const Face = ({
  name,
  locality,
  costForTwoMessage,
  avgRatingString,
  cuisines,
  sla,
  cloudinaryImageId,
}) => {
  return (
    <div className="main_face">
      <div className="parent_div">
        <div className="face_image">
          <img
            className="res_image"
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              cloudinaryImageId
            }
            alt="dish_icon"
          />
        </div>

        <div style={{ color: "white" }} className="text_container">
          <div className="inner_text">
            <h3>{name.toUpperCase()}</h3>
            <h5>{locality}</h5>
            <p>{cuisines.join(" ,")}</p>
          </div>
          <div className="rating_stuff">
            <h4
            
              style={
                avgRatingString < 4
                  ? { backgroundColor: "var(--light-red)",paddingRight:'10px',alignItems:'center',   marginRight: "10px",paddingLeft:'10px'}
                  : avgRatingString === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : {
                      color: "white",
                      backgroundColor: "green",
                      borderRadius: "2px",
                      alignItems: "center",
                      paddingRight:'10px',
                      marginRight: "10px",
                      paddingLeft:'10px'
                   
                    }
              }
            >
              <i className="fa-solid fa-star">⭐</i>
              {avgRatingString} 
            </h4>
            |
            <p style={{ color: "white" ,marginRight:'10px',paddingLeft:'10px'}}>{costForTwoMessage}</p>|
            <p style={{paddingLeft:'10px'}}>{sla} mins</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Face;
