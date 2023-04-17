import introBgi from "../../images/intro_bgi.png";
import "./intro.scss";

function Intro() {
  return (
    <section className="intro">
      <div className="intro__container">
        <div className="intro__box">
          <p className="intro__text-one">Chase the new Flavour</p>
          <h2 className="intro__title">The key to Fine dining</h2>
          <p className="intro__text-two">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>
          <button className="intro__btn">Explore Menu</button>
        </div>
        <img className="intro__img" src={introBgi} alt="" />
      </div>
    </section>
  );
}

export default Intro;
