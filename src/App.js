import { useState } from "react";
import { createUseStyles } from "react-jss";
import { useWebcamCapture } from "./useWebcamCapture";
// import logo from './logo.svg'

import just_slap from "./slap.png";
import slap_or_wave from "./slap_or_wave.webp";
import slap_pop_art from "./slap_pop_art.avif";
import slap_real_hand from "./slap_real_hand.png";
import slap_speed from "./slap_speed.jpg";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import Gallery from "./components/Gallery";

const useStyles = createUseStyles((theme) => ({
  "@global body": {
    background: theme.light.background,
    color: theme.light.primary,
    fontFamily: "monospace",
  },

  App: {
    padding: "20px",
    background: theme.light.background,
    maxWidth: "800px",
    minHeight: "600px",
    margin: "auto",
    "& a": {
      color: theme.light.text,
    },
  },
  NavBar: {
    fontSize: "24px",

    "& ul": {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      cursor: "pointer",
    },

    "& li": {
      listStyleType: "none",
    },

    "& a": {
      textDecoration: "none",
      padding: "4px",
      opacity: "70%",

      "&:hover": {
        borderRadius: "8px",
        opacity: "100%",
      },
    },
  },
  Header: {
    "&  h1": {
      fontFamily: "monospace",
      cursor: "pointer",
      fontSize: "4rem",
    },
  },
  Main: {
    background: theme.light.secondary,
    borderRadius: "8px",
    padding: "8px",

    "& canvas": {
      marginTop: "1rem",
      width: "100%",
      height: "auto",
    },
    "& video": {
      marginTop: "1rem",
      display: "none",
    },
  },
  First: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  Stickers: {
    marginTop: "1rem",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",

    "& img": {
      height: "4rem",
      borderRadius: "8px",
      padding: "2px",
    },

    "& button": {
      marginRight: "8px",
      marginLeft: "8px",
      borderRadius: "8px",
      "&:hover": {
        filter:
          "drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
      },
    },
  },
}));

const logo = [
  just_slap,
  slap_or_wave,
  slap_pop_art,
  slap_real_hand,
  slap_speed,
];

const stickers = logo.map((url) => {
  const img = document.createElement("img");
  img.src = url;
  return { img, url };
});

function App(props) {
  // css classes from JSS hook
  const classes = useStyles(props);
  // currently active sticker
  const [sticker, setSticker] = useState(null);
  // title for the picture that will be captured
  const [title, setTitle] = useState("SLAPPE!");

  // webcam behavior hook
  const [
    handleVideoRef, // callback function to set ref for invisible video element
    handleCanvasRef, // callback function to set ref for main canvas element
    handleCapture, // callback function to trigger taking the picture
    pictures, // latest captured picture data object
  ] = useWebcamCapture(sticker?.img, title);

  return (
    <div className={classes.App}>
      <nav className={classes.NavBar}>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/readme">readme</Link>
          </li>
        </ul>
      </nav>
      <header className={classes.Header}>
        <h1>SlapSticker</h1>
        <p>
          Have you ever said something so dumb, you just wanted to slap
          yourself? Well now you can!
        </p>
      </header>
      <Routes>
        {/* Main app route */}
        <Route
          path="/"
          element={
            <main>
              <section className={classes.First}>
                Step one: Give it a name
                <input
                  type="text"
                  placeholder="some fun name!"
                  value={title}
                  onChange={(ev) => setTitle(ev.target.value)}
                />
              </section>
              <section className={classes.Stickers}>
                Step 2: select your sticker...
                {stickers.map((sticker, index) => (
                  <button key={index} onClick={() => setSticker(sticker)}>
                    <img src={sticker.url} alt={`Sticker ${index + 1}`} />
                  </button>
                ))}
                {/* {sticker && (
                  <div className="classes.SelectedSticker">
                    <h2>Selected Sticker</h2>
                    <img src={sticker} alt="Selected sticker" />
                  </div>
                )} */}
              </section>

              <section className={classes.Main}>
                Step three: Slap your self!
                <video ref={handleVideoRef} />
                <canvas
                  ref={handleCanvasRef}
                  width={2}
                  height={2}
                  onClick={handleCapture}
                />
              </section>

              <Gallery pictures={pictures} />
            </main>
          }
        />
        {/* Main app route */}
        <Route
          path="/readme"
          element={
            <main>
              <h2>Devtest Readme</h2>
              <p>
                Hello candidate, Welcome to our little dev test. The goal of
                this exercise, is to asses your general skill level, and give us
                something to talk about at our next appointment.
              </p>
              <section>
                <h3>What this app should do</h3>
                <p>
                  SlapSticker is an app that lets users to slap stickers on
                  their face, using their webcam. Functionality wise the app
                  works, but the ui needs some love. We'd like for you to extend
                  this prototype to make it look and feel it bit better.
                </p>
                <p>These are the basic requirements:</p>
                <ul>
                  <li>User can pick a sticker</li>
                  <li>User can give the captured image a title</li>
                  <li>User can place the sticker over the webcam image</li>
                  <li>User can capture the webcam image with sticker</li>
                </ul>
              </section>
              <section>
                <h3>What we want you to do</h3>
                <p>
                  Off course we didn't expect you to build a full fledged app in
                  such a short time frame. That's why the basic requirements are
                  already implemented.
                </p>
                <p>
                  However, we would like for you to show off your strengths as a
                  developer by improving the app.
                </p>
                <p>Some ideas (no need to do all):</p>
                <ul>
                  <li>Make it look really nice</li>
                  <li>Let users pick from multiple (custom) stickers</li>
                  <li>Improve the workflow and ux</li>
                  <li>Show multiple captured images in a gallery</li>
                  <li>Let users download or share the captured pics</li>
                  <li>Add super cool effects to webcam feed</li>
                  <li>Organize, document and test the code</li>
                  <li>Integrate with zoom, teams, meet...</li>
                </ul>
              </section>
              <section>
                <h3> quickstart</h3>
                <ul>
                  <li>You can clone this repo to get started </li>
                  <li>run `$ npm install` to install deps</li>
                  <li>run `$ npm run start` to start dev environment</li>
                  <li>push it to github or gitlab to share it with us. </li>
                </ul>
              </section>
              <section>
                <p>
                  P.s. We've already added some libraries to make your life
                  easier (Create React App, Jss, React Router), but feel free to
                  add more.
                </p>
              </section>
            </main>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
