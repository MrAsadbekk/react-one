import cardImgOne from "../../images/card_img1.png";
import cardImgTwo from "../../images/card_img2.png";
import cardImgThree from "../../images/card_img3.png";
import cardImgFour from "../../images/card_img4.png";
import cardStar from "../../images/card_star.png";
import back from "../../images/back.svg";
import next from "../../images/next.svg";
import "../dishes/dishes.scss";

function Dishes() {
  return (
    <section className="dishes">
      <div className="dishes__container">
        <div className="dishes__box">
          <h3 className="dishes__title">Popular Dishes</h3>
          <button className="dishes__back-btn">
            <img src={back} alt="" />
          </button>
          <button className="dishes__next-btn">
            <img src={next} alt="" />
          </button>
        </div>
        <div className="dishes__box-card">
          <div className="dishes__card">
            <img className="dishes__card_img" src={cardImgOne} alt="" />
            <p className="dishes__card-text">
              Barbecue Shish kebab Shashlik Skewer
            </p>
            <img className="dishes__card-star" src={cardStar} alt="" />
            <p className="dishes__card_text-two">$12.00</p>
          </div>
          <div className="dishes__card">
            <img className="dishes__card_img" src={cardImgTwo} alt="" />
            <p className="dishes__card-text">
              Barbecue Shish kebab Shashlik Skewer
            </p>
            <img className="dishes__card-star" src={cardStar} alt="" />
            <p className="dishes__card_text-two">$12.00</p>
          </div>
          <div className="dishes__card">
            <img className="dishes__card_img" src={cardImgThree} alt="" />
            <p className="dishes__card-text">
              Barbecue Shish kebab Shashlik Skewer
            </p>
            <img className="dishes__card-star" src={cardStar} alt="" />
            <p className="dishes__card_text-two">$12.00</p>
          </div>
          <div className="dishes__card">
            <img className="dishes__card_img" src={cardImgFour} alt="" />
            <p className="dishes__card-text">
              Barbecue Shish kebab Shashlik Skewer
            </p>
            <img className="dishes__card-star" src={cardStar} alt="" />
            <p className="dishes__card_text-two">$12.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dishes;
