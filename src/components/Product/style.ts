import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  itemContainer: {
    margin: "15px 10px",
    height: "350px",
    overflow: "hidden",
    padding: "5px",
    borderRadius:"5px"
  },
  imageContainer: {
    height: "150px",
    border: "1px solid rgba(176,176,176,1)",
    borderRadius:"10px",
    padding:"10px"
  },
  itemDescription: {
    maxHeight: "80px",
    overflow: "hidden",
  },
  itemName:{
      fontWeight:"bold"
  },
  itemImage: {
    height: "150px",
    margin: "0 5%",
    width: "auto",
    maxWidth:"90%;"
  },
  chipContainer:{
      maxHeight:"75px",
      overflow:"hidden"
  },
  chip:{
      margin:"2px"
  }
});
