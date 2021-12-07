import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  itemsContainer: {
    height: "300px",
    overflow: "auto",
  },
  cardItem: {
    width: "100%",
    float: "left",
  },
  infoContainer: {
    width: "70%",
    float: "left",
  },
  actionsContainer: {
    width: "30%",
    float: "left",
  },
  borderBottom: {
    borderBottom: "1px solid #dedede",
    paddingBottom: "10px",
    marginBottom: "5px",
  },
  cardActionForm: {
    width: "100px",
    textAlign: "center",
    height: "50px",
    lineHeight: "50px",
    border: "none!important",
    outline: "none!important",
  },
  addornment: {
    fontSize: "25px",
    width: "25px",
    height: "25px",
    cursor: "pointer",
  },
  cardInput: {
    border: "none!important",
    outline: "none!important",
    height:"75px"
  },
  priceBox: {
    width: "95px",
    height: "50px",
    border: "1px solid #1EA4CE",
    float: "right",
    lineHeight: "50px",
  },
  borderBlue:{
      
    border: "3px solid #1EA4CE",
  }
});
