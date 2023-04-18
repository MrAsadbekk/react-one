import menuImgOne from "../../images/menu_img1.png";
import menuImgTwo from "../../images/card_img4.png";
import menuImgThree from "../../images/menu_img2.png";
import menuImgFour from "../../images/menu_img3.png";
import menuImgFiwe from "../../images/card_img2.png";
import menuImgSix from "../../images/menu_img4.png";
import menuImgSeven from "../../images/menu_img5.png";
import menuImgEight from "../../images/card_img3.png";
import "../menu/menu.scss";

function Menu() {
  return (
    <section className="menu">
      <div className="menu__container">
        <h2 className="menu__title">Our Regular Menu Pack</h2>
        <div className="menu__btn-group">
          <button className="menu__btn">All</button>
          <button className="menu__btn">Shawarma</button>
          <button className="menu__btn">Turk Kebab</button>
          <button className="menu__btn">Hamburger Kebab</button>
          <button className="menu__btn">Doner kebab</button>
          <button className="menu__btn">Shish kebab</button>
          <button className="menu__btn">French fries Pizza</button>
          <button className="menu__btn">Desserts</button>
        </div>
        <div className="menu__card-box">
          <div className="menu__card">
            <img className="menu__card-img" src={menuImgOne} alt="" />
            <p className="menu__card_text-one">
              Barbecue Shish kebab Shashlik Skewer
            </p>
            <p className="menu__card_text-two">$12.00</p>
          </div>
          <div className="menu__card">
            <img className="menu__card-img" src={menuImgTwo} alt="" />
            <p className="menu__card_text-one">
              Barbecue Shish kebab Shashlik Skewer
            </p>
            <p className="menu__card_text-two">$12.00</p>
          </div>
          <div className="menu__card">
            <img className="menu__card-img" src={menuImgThree} alt="" />
            <p className="menu__card_text-one">
              Barbecue Shish kebab Shashlik Skewer
            </p>
            <p className="menu__card_text-two">$12.00</p>
          </div>
          <div className="menu__card">
            <img className="menu__card-img" src={menuImgFour} alt="" />
            <p className="menu__card_text-one">
              Barbecue Shish kebab Shashlik Skewer
            </p>
            <p className="menu__card_text-two">$12.00</p>
          </div>
          <div className="menu__card">
            <img className="menu__card-img" src={menuImgFiwe} alt="" />
            <p className="menu__card_text-one">
              Barbecue Shish kebab Shashlik Skewer
            </p>
            <p className="menu__card_text-two">$12.00</p>
          </div>
          <div className="menu__card">
            <img className="menu__card-img" src={menuImgSix} alt="" />
            <p className="menu__card_text-one">
              Barbecue Shish kebab Shashlik Skewer
            </p>
            <p className="menu__card_text-two">$12.00</p>
          </div>
          <div className="menu__card">
            <img className="menu__card-img" src={menuImgSeven} alt="" />
            <p className="menu__card_text-one">
              Barbecue Shish kebab Shashlik Skewer
            </p>
            <p className="menu__card_text-two">$12.00</p>
          </div>
          <div className="menu__card">
            <img className="menu__card-img" src={menuImgEight} alt="" />
            <p className="menu__card_text-one">
              Barbecue Shish kebab Shashlik Skewer
            </p>
            <p className="menu__card_text-two">$12.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
