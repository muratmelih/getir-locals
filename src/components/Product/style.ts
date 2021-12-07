import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  itemContainer: {
    margin: "15px 10px",
    height: "350px",
    overflow: "hidden",
    padding: "5px",
    borderRadius:"5px",
    position:"relative"
  },
  imageContainer: {
    height: "150px",
    border: "1px solid rgba(176,176,176,1)",
    borderRadius:"10px",
    padding:"10px",
    textAlign:"center"
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
      height:"75px",
      overflow:"hidden"
  },
  chip:{
      margin:"2px"
  },
  addCardButton:{
    width:"100%",
    height:"25px",
    background:"#1EA4CE",
    color:"#FFFFFF",
    border:"none",
    outline:"none",
    borderRadius:"3px",
    cursor:"pointer",
    position:"absolute",
    bottom:"1px"

  }
});
