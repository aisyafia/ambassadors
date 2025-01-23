import { createUseStyles } from "react-jss";
import { IoMdCloudDownload } from "react-icons/io";

const useStyles = createUseStyles((theme) => ({
  Gallery: {
    marginTop: "2rem",
    marginBottom: "1rem",
    borderRadius: "8px",
    "& img": {
      height: "16rem",
      borderRadius: "8px",
    },
  },
  Picture: {
    background: theme.light.background,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    border: "1px",
    borderColor: theme.light.primary,
    marginBottom: "1rem",
    "& h3": {
      textAlign: "center",
      width: "fit-content",
    },

    "&:hover button": {
      opacity: 1,
      visibility: "visible",
    },
  },
  Actions: {
    //   display: "none",
    marginLeft: 8,

    "& button": {
      padding: "6px 12px",
      borderRadius: "4px",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      opacity: 0, // Initially hidden
      visibility: "hidden", // Hide from layout
      transition: "opacity 0.3s ease, visibility 0.3s ease",
      //   "&:hover": {
      //     background: "#0056b3",
      //   },
    },
  },
}));

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
      Step 4: Cherish this moment forever
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
