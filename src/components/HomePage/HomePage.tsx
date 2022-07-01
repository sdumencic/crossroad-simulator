import "./HomePage.scss";

const IMAGE = "/images/traffic-light.jpg";

interface LightProps {
  style?: React.CSSProperties;
}

const HomePage = (props: LightProps) => {
  const style = {
    backgroundImage: `url(${IMAGE})`,
  };

  const lightColor = ["red", "yellow", "green", "grey"];

  return (
    <div>
      <div className="loginBackground" style={style}></div>
      <div className="container">
        <h1 className="title">RPi upravljanje semaforima na raskrižju</h1>
        <div className="text">
          <span className="strong">Zadatak: </span> Napraviti sustav koji će
          upravljati semaforima na raskrižju s dvije ceste (glavna i sporedna).
          Semafori imaju svoj ciklus, sporedna cesta ima detektor "nalazi li se
          auto na cesti" (npr. fotootpornik) i raskrižjem se dodatno može
          upravljati putem web sučelja. Optimizirati sustav za ovu primjenu.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
