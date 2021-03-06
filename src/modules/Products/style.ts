import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  textCenter: {
    textAlign: "center",
  },
  margin10: {
    margin: "10px",
  },
  width100: {
    width: "100px",
  },
  floatLeft: {
    float: "left",
  },
  productsContainer: {
    width: "90%",
    margin: "0 auto",
    marginTop: "125px",
  },
  paginatorContainer: {
    width: "350px",
    margin: "0 auto",
  },
  bigText: {
    fontSize: "24px",
  },
  chip: {
    background: "#F2F0FD !important",
    color: "#1EA4CE  !important",
    border: "none !important",
    borderRadius: "2px !important",
  },
  activeChip: {
    color: "#F2F0FD  !important",
    background: "#1EA4CE  !important",
  },
});
