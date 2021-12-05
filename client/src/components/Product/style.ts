import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  itemContainer: {
    margin: "10px",
    height: "450px",
    overflow: "hidden",
    boxShadow: "0px 0px 3px 0px rgba(176,176,176,1);",
    padding: "5px",
  },
  imageContainer: {
    height: "250px",
  },
  itemDescription: {
    maxHeight: "80px",
    overflow: "hidden",
  },
  itemName:{
      fontWeight:"bold"
  },
  itemImage: {
    height: "250px",
    margin: "0 5%",
    width: "90%",
  },
});
