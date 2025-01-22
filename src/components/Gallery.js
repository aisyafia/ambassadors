import { createUseStyles } from "react-jss";
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
    flexDirection: "column",
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
  },
}));

function Gallery({ pictures }) {
  const classes = useStyles();

  return (
    <section className={classes.Gallery}>
      Step 4: Cherish this moment forever
      {pictures &&
        pictures.map((picture) => (
          <div className={classes.Picture}>
            <h3>{picture.title}</h3>
            <img src={picture.dataUri} />
          </div>
        ))}
    </section>
  );
}

export default Gallery;
