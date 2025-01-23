import { IoMdCloudDownload } from "react-icons/io";
import useStyles from "./style";
import { FaInstagram } from "react-icons/fa";

function Gallery({ pictures }) {
  const classes = useStyles();

  const handleDownload = (dataUri, filename) => {
    const link = document.createElement("a");
    link.href = dataUri;
    link.download = filename;
    link.click();
  };

  const handleInstagramClick = (dataUri) => {
    window.open("https://www.instagram.com/", "_blank"); // Opens Instagram in a new tab
  };

  return (
    <section className={classes.Gallery}>
      <div className={classes.FirstSub}>
        <h4>Fourth: Keep or skip?</h4>
        <p>We vote keep, obviously! or keep then share?</p>
      </div>
      {pictures &&
        pictures.map((picture) => (
          <div className={classes.Picture} key={picture.title}>
            <div>
              <h3>{picture.title}</h3>
              <img src={picture.dataUri} />
            </div>
            <div className={classes.Actions}>
              <button
                onClick={() =>
                  handleDownload(picture.dataUri, `${picture.title}.png`)
                }
              >
                <IoMdCloudDownload size={"4rem"} color="#383c41" opacity={9} />
              </button>

              <button onClick={() => handleInstagramClick()}>
                <FaInstagram size={"4rem"} opacity={9} />
              </button>
            </div>
          </div>
        ))}
    </section>
  );
}

export default Gallery;
