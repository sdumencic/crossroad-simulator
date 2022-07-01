import "./Light.scss";

interface LightProps {
  style?: React.CSSProperties;
}

const Light = (props: LightProps) => {
  const lightColor = ["red", "yellow", "green", "grey"];

  return <div className="light" style={props.style}></div>;
};

export default Light;
