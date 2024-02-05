import databiz from "../assets/images/client-databiz.svg";
import heroIcon from "../assets/images/image-hero-desktop.png";
import audiophile from "../assets/images/client-audiophile.svg";
import maker from "../assets/images/client-maker.svg";
import meet from "../assets/images/client-meet.svg";
import classes from "../modules/Body.module.scss";

const Body = () => {
  return (
    <div className={classes["body-container"]}>
      <div className={classes["body-txtSide"]}>
        <h1>Make remote work</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          inventore, corrupti perferendis facilis eligendi dicta aliquid ex
          facere reprehenderit accusantium culpa enim a, quia dolore deserunt
          sint, autem in id similique est mollitia deleniti necessitatibus.
          Dolorum repellat ea veritatis obcaecati?
        </p>
        <button>Learn more</button>
        <div>
          <img src={audiophile} alt="" />
          <img src={databiz} alt="" />
          <img src={maker} alt="" />
          <img src={meet} alt="" />
        </div>
      </div>
      <div className={classes["body-imgSide"]}>
        <img src={heroIcon} alt="" />
      </div>
    </div>
  );
};

export default Body;
