export default function pricedown (value){
    let x=document.getElementsByClassName('quan');
    let y=document.getElementsByClassName('items');
    let z=document.getElementsByClassName('ithree');
    let a=document.getElementsByClassName('span');
    let i=0;
    while (i<y.length){
        if (value===y[i].id){
            if (x[i].innerHTML>0){
        let y=x[i].innerHTML;
        Number(y);
        y--;
        z[i].innerHTML=y*Number(a[i].innerHTML);
        x[i].innerHTML=y;
        }
    }
    i++;
}}