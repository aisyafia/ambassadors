import { createUseStyles } from "react-jss";
import { IoMdCloudDownload } from "react-icons/io";
import useStyles from "./style";

function Gallery({ pictures }) {
  const classes = useStyles();

  const handleDownload = (dataUri, filename) => {
    const link = document.createElement("a");
    link.href = dataUri;
    link.download = filename;
    link.click();
  };

  return (
    <section className={classes.Gallery}>
      <div className={classes.FirstSub}>
        <h4>Fourth: Keep or skip?</h4>
        <p>we vote keep, obviously!</p>
      </div>
      {pictures &&
        pictures.map((picture) => (
          <div className={classes.Picture}>
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
            </div>
          </div>
        ))}
    </section>
  );
}

export default Gallery;
