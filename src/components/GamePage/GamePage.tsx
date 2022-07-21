import "./GamePage.scss";

import { useEffect, useRef, useState } from "react";

import Semaphore from "../Shared/Semaphore/Semaphore";
import { StatusModel } from "../../models/Status";
import axios from "axios";

const IMAGE = "/images/crossing1.png";
const REDBUTTON = "/images/redbutton.png";
const GREENBUTTON = "/images/greenbutton.png";
const CAR = "/images/car.png";

let car = false;

const clickButton = (color: "red" | "green" | "off") => {
  axios
    .post("http://192.168.183.114:8000/set", {
      state: color,
    })
    .then((res) => {
      console.log(res);
    });

  if (color === "red") {
    car = true;
    setTimeout(() => {
      car = false;
    }, 10000);
  } else {
    car = false;
  }
};

const GamePage = () => {
  const ws = useRef<WebSocket>();

  const [status, setStatus] = useState<StatusModel>(new StatusModel());

  // Initial use effect, runs only once after initial component render
  useEffect(() => {
    console.log("Setting up webSocket");

    ws.current = new WebSocket("ws://192.168.183.114:8000/ws");

    ws.current.onopen = (_) => console.log("Socket opened");

    ws.current.onmessage = (event) => {
      const ev = Object.assign(new StatusModel(), JSON.parse(event.data));
      if (ev) setStatus(ev);
    };

    ws.current.onerror = (event) => {
      console.error("Ws errored", event);
      ws.current?.close();
    };

    // Cleanup the WebSocket Code
    return () => {
      console.log("Cleanup WS");
      ws.current?.close();
    };
  }, []);

  console.log(status);

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
            <button
              className="button"
              onClick={() => clickButton("red")}
              disabled={!status.ready}
              style={!status.ready ? { opacity: "70%" } : {}}
            >
              <img src={REDBUTTON} />
            </button>
            <button
              className="button"
              onClick={() => clickButton("green")}
              disabled={!status.ready}
              style={!status.ready ? { opacity: "70%" } : {}}
            >
              <img src={GREENBUTTON} />
            </button>
          </div>
        </div>
      </div>
      <Semaphore
        style={{ top: "150px", right: "50px" }}
        lights={status.lights[0]}
      />
      <Semaphore
        style={{ bottom: "70px", right: "400px" }}
        lights={status.lights[1]}
      />
      <div className={car ? "car" : "no-car"}>
        <img src={CAR} />
      </div>
    </div>
  );
};

export default GamePage;
