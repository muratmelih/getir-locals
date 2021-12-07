import { createUseStyles } from "react-jss";

export const globalStyles = createUseStyles({
  textBlue: {
   color:"#1EA4CE"
  },
  
  marginTop10: {
    marginTop: "10px",
  },
  fullWidth:{
      width:"100%!important"
  },
  textCenter:{
      textAlign:"center"
  },
  margin10: {
    margin: "10px",
  },
  margin20: {
    margin: "20px",
  },
  
});

export const classList=(list:string[])=>{
return list.join(" ");
}