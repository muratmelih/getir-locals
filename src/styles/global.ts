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
  }
});

export const classList=(list:string[])=>{
return list.join(" ");
}