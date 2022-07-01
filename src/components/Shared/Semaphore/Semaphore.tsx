import "./Semaphore.scss";
import Light from "../Lights/Light";

interface SemaphoreProps {
  style?: React.CSSProperties;
}

const Semaphore = (props: SemaphoreProps) => {
  return (
    <div className="semaphore" style={props.style}>
      <Light
        style={{
          backgroundColor: "rgb(183, 32, 32)",
          boxShadow: "0px 0px 20px 10px red",
        }}
      />
      <Light
        style={{
          backgroundColor: "rgb(255, 194, 38)",
          boxShadow: "0px 0px 20px 10px yellow",
        }}
      />
      <Light
        style={{
          backgroundColor: "rgb(74, 179, 74)",
          boxShadow: "0px 0px 20px 10px greenyellow",
        }}
      />
    </div>
  );
};

export default Semaphore;
