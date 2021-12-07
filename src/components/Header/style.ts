import { createUseStyles } from "react-jss";
import logo from '../../../public/localslogo.png';

export const useStyles = createUseStyles({
  header: {
    width: "100%",
    height: "75px",
    backgroundColor:"#1EA4CE",
    backgroundImage: `url('/localslogo.png')`,
    backgroundPosition:"center",
    backgroundSize:"auto 90%",
    backgroundRepeat:"no-repeat",
    position:"fixed",
    top:"0",
    left:"0",
    zIndex:"1000"
  },
  cardButton:{
      position:"absolute!important",
      right:"5%!important",
      width:"130px",
      height:"75px",
      backgroundColor:"#147594!important",
      color:"#fff!important"
  }
});
