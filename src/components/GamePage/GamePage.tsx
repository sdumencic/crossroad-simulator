import Semaphore from "../Shared/Semaphore/Semaphore";
import "./GamePage.scss";

const IMAGE = "/images/220609crossing1.png";
const REDBUTTON = "/images/redbutton.png";
const GREENBUTTON = "/images/greenbutton.png";

interface GamePageProps {
  style?: React.CSSProperties;
}

const GamePage = (props: GamePageProps) => {
  const style = {
    backgroundImage: `url(${IMAGE})`,
  };

  const lightColor = ["red", "yellow", "green", "grey"];

  return (
    <div>
      <div className="crossingBackground" style={style}></div>
      <div className="container-control">
        <div className="text">
          <div className="row">
            <span className="flex-text">Glavna cesta:</span>
            <button className="button">
              <img src={REDBUTTON} />
            </button>
            <button className="button">
              <img src={GREENBUTTON} />
            </button>
          </div>

          {/* <div className="row">
            <span className="flex-text">Sporedna cesta:</span>
            <button className="button">
              <img src={REDBUTTON} />
            </button>
            <button className="button">
              <img src={GREENBUTTON} />
            </button>
          </div> */}
        </div>
      </div>
      <Semaphore style={{ top: "200px", right: "300px" }} />
      <Semaphore style={{ bottom: "100px", right: "500px" }} />
    </div>
  );
};

export default GamePage;
