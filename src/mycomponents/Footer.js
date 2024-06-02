export default function foot() {
    
    let x=document.getElementsByClassName("ithree");
    let y=document.getElementById("bill");
    let z=0;
    let sum=0;
    while (z<x.length){
      sum+=Number(x[z].innerHTML);
      z++;
      }
      if (x.length<=0){
        y.innerHTML=0;
      }
      else {
      y.innerHTML=sum;
      }
  }