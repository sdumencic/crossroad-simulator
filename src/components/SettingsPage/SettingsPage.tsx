interface LightProps {
  style?: React.CSSProperties;
}

const SettingsPage = (props: LightProps) => {
  const lightColor = ["red", "yellow", "green", "grey"];

  return <div className="light" style={props.style}></div>;
};

export default SettingsPage;
