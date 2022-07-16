import "./Semaphore.scss";
import Light from "../Lights/Light";
import { LightModel } from "../../../models/Light";

interface SemaphoreProps {
  lights: LightModel;
  style?: React.CSSProperties;
}

const redStyle: React.CSSProperties = {
  backgroundColor: "rgb(183, 32, 32)",
  boxShadow: "0px 0px 20px 10px red",
};

const yellowStyle: React.CSSProperties = {
  backgroundColor: "rgb(255, 194, 38)",
  boxShadow: "0px 0px 20px 10px yellow",
};

const greenStyle: React.CSSProperties = {
  backgroundColor: "rgb(74, 179, 74)",
  boxShadow: "0px 0px 20px 10px greenyellow",
};

const offStyle: React.CSSProperties = {
  backgroundColor: "rgb(52, 52, 52)",
};

const Semaphore = ({ lights, style }: SemaphoreProps) => {
  return (
    <div className="semaphore" style={style}>
      <Light
        style={
          lights?.state === "red" || lights?.state === "redyellow"
            ? redStyle
            : offStyle
        }
      />
      <Light
        style={
          lights?.state === "yellow" || lights?.state === "redyellow"
            ? yellowStyle
            : offStyle
        }
      />
      <Light style={lights?.state === "green" ? greenStyle : offStyle} />
    </div>
  );
};

export default Semaphore;
