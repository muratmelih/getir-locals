import { createUseStyles } from "react-jss";

export const globalStyles = createUseStyles({
  textBlue: {
   color:"#1EA4CE"
  },
});

export const classList=(list:string[])=>{
return list.join(" ");
}