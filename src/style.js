import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  blurCircle: {
    backgroundColor: "#676394",
    position: "absolute",
    zIndex: -10,
    height: "20rem",
    borderRadius: "50%",
    filter: "blur(25rem)",
  },
  blurCircle1: {
    left: "0.125rem",
    right: "0.125rem",
    width: "50rem",
  },
  blurCircle2: {
    left: "66.666%",
    right: "0.125rem",
    width: "68rem",
  },
  "@global body": {
    color: theme.light.primary,
    fontFamily: "'Prompt', serif",
  },

  App: {
    padding: "20px",
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
      fontFamily: "'Prompt', serif",
      fontWeight: 300,
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
      fontFamily: "'Unbounded', serif",
      cursor: "pointer",
      fontSize: "4rem",
      textAlign: "center",
      marginBottom: "2rem",
    },
  },
  Subtitle: {
    fontFamily: "Unbounded",
    textAlign: "center",
    marginBottom: "4rem",
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
    alignItems: "center",
    gap: "1rem",
    marginTop: "2rem",
    marginBottom: "4rem",
  },
  FirstSub: {
    display: "flex",
    alignItems: "center",
    height: "20px",
  },
  FirstInput: {
    textAlign: "center",
    height: "20px",
    marginTop: "1rem",
  },
  FirstExplain: {
    "& p": {
      height: "20px",
      margin: 4,
    },
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

export default useStyles;
