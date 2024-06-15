import React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import config from "./config.js";
import "./App.css";
import Navbar from "./Navbar.js";
import Aboutus from "./Aboutus.js";
import Footer from "./footer.js";
import ContactUs from "./ContactUs.js";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
const expressionsList = {
  waiting: { label: "📹 waiting", id: "waiting", gif: "waiting" },
  neutral: { label: "😐 Neutral", id: "neutral", gif: "blank stare" },
  happy: { label: "😀 Happy", id: "happy", gif: "smiling" },
  sad: { label: "😥 sad", id: "sad", gif: "sad" },
  angry: { label: "😤 angry", id: "angry", gif: "angry" },
  fearful: { label: "😨 fearful", id: "fearful", gif: "scared" },
  disgusted: { label: "😖 disgusted", id: "disgusted", gif: "disgusted" },
  surprised: { label: "😮 Surprise", id: "surprised", gif: "surprised" },
};
function App() {
  const videoRef = useRef();

  const [expressionsGifs, setExpressionsGifs] = useState();
  const [expression, setExpression] = useState("waiting");
  const [isVisible, setIsVisible] = useState(false);

  const poolOfGifs = useMemo(() => {
    if (!expressionsGifs) {
      return [];
    }

    const randompoolOfGifs = expressionsGifs[expression].sort(function () {
      return 0.5 - Math.random();
    });

    return randompoolOfGifs;
  }, [expression, expressionsGifs]);

  const fetchGifsByExpression = async (expression) => {
    const searchQuery = expression.gif;
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${config.API_KEY}&q=${searchQuery}`
    );
    const json = await response.json();

    if (!json.data) {
      return [];
    }

    const gifs = json.data;

    return gifs;
  };

  const getCurrentExpression = (expressions) => {
    const maxValue = Math.max(
      ...Object.values(expressions).filter((value) => value <= 1)
    );
    const expressionsKeys = Object.keys(expressions);
    const mostLikely = expressionsKeys.filter(
      (expression) => expressions[expression] === maxValue
    );
    return mostLikely[0] ? mostLikely[0] : "Neutral";
  };

  useEffect(() => {
    (async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");

      const buffer = Object.values(expressionsList).map(fetchGifsByExpression);

      const gifsByExpression = await Promise.all(buffer);

      const expressionsKeys = Object.keys(expressionsList);
      const expressionGifsArray = [];

      for (let index = 0; index < expressionsKeys.length; index++) {
        expressionGifsArray[expressionsKeys[index]] = gifsByExpression[index];
      }

      setExpressionsGifs(expressionGifsArray);

      if (videoRef.current)
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
          });
          videoRef.current.srcObject = stream;
        } catch (err) {
          console.error("Can't found camera. Full error : ", err);
        }
    })();
  }, []);

  useEffect(() => {
    setInterval(async () => {
      if (!videoRef) {
        return;
      }

      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      if (detections && detections[0] && detections[0].expressions) {
        const currentExpression = getCurrentExpression(
          detections[0].expressions
        );

        setExpression(currentExpression);
      }
    }, 1000);
  }, []);

  return (
    <React.Fragment>
        
        <Navbar></Navbar>

     
    <Router>
    <Routes>
    <Route path="/aboutus" element={<Aboutus />}>
    
  </Route>
  <Route path="/contactus" element={<ContactUs />}>
    
  </Route>

</Routes>
</Router>
    <div className="app">
      <div className="grid">
        <div className="grid-item video-grid-item">
          <div className="video-wrapper">
            <video className="video" ref={videoRef} autoPlay muted></video>
            <div className="expression-badge">
              {expressionsList[expression].label}
            </div>
          </div>
        </div>

      </div>


    </div>
  
<Footer></Footer>
    </React.Fragment>
  );
}

export default App;
