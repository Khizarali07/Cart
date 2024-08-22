import './componentscss/ProductList.css';
import './componentscss/footer.css';
import priceup from './priceup';
import pricedown from './pricedown';
import foot from './Footer';

export default function ProductList() {
  return (
    <>
    <div id='main'>
        <input type='text' placeholder='Name'  className='one'/>
        <input type='text' placeholder='Price' className='one' required/>
        <div id="one" onClick={adding}>Add Item</div>
    </div>
    <div id='container'>
    <div className='items' id='k1'>
        <div className='ione'>Samsung Galaxy S10<span className='span'>100000</span></div>
        <div className='itwo'><span className='min' onClick={()=>{pricedown('k1'); foot();}} >-</span><span className='quan'>0</span><span className='max' onClick={()=>{priceup('k1'); foot();}} onMouseOut={foot}>+</span></div>
        <div className='ithree'>0</div>
        <div className='ifour' onClick={()=>{remove('k1');}} >Remove</div>
    </div>
    <div className='items' id='k2'>
        <div className='ione'>Samsung Galaxy S11<span className='span'>150000</span></div>
        <div className='itwo'><span className='min' onClick={()=>{pricedown('k2'); foot();}} >-</span><span className='quan'>0</span><span className='max' onClick={()=>{priceup('k2'); foot();}} onMouseOut={foot}>+</span></div>
        <div className='ithree'>0</div>
        <div className='ifour' onClick={()=>{remove('k2');}} >Remove</div>
    </div>
    </div>

    <div id='footer' onMouseOver={foot}>
        <pre>Total bill is : </pre>
        <p id='bill'>0</p>
        <div id='button'>Pay Now</div>
    </div>
    </>
  )
}

let i=2;
function adding (){
    i++;
    let x=document.createElement("div");
    let y=document.getElementById("container");
    let str1=`k${i}`;
    x.className='items';
    x.id=str1;
    y.append(x);

    let input=document.getElementsByClassName("one");

    let ch1=document.createElement("div");
    let ch11=document.createElement("span");
    ch1.className='ione';
    ch11.className='span';
    ch1.innerHTML=input[0].value;
    x.append(ch1);
    ch11.innerHTML=input[1].value;
    ch1.append(ch11);

    let ch2=document.createElement("div");
    let ch21=document.createElement("span");
    let ch22=document.createElement("span");
    let ch23=document.createElement("span");
    ch2.className='itwo';
    x.append(ch2);
    ch21.className='min';
    ch22.className='quan';
    ch23.className='max';
    ch21.innerHTML='-';
    ch21.onclick=()=>{pricedown(str1); foot();};
    ch21.onmouseout=foot;
    ch22.innerHTML=0;
    ch23.innerHTML='+';
    ch23.onclick=()=>{priceup(str1); foot();};
    ch23.onmouseout=foot;
    ch2.append(ch21);
    ch2.append(ch22);
    ch2.append(ch23);

    let ch3=document.createElement("div");
    ch3.className='ithree';
    ch3.innerHTML=0;
    x.append(ch3);

    let ch4=document.createElement("div");
    ch4.className='ifour';
    ch4.innerHTML='Remove';
    ch4.onclick=()=>{remove(str1);};
    x.append(ch4);
}

function remove (value){
    let x=document.getElementById('container');
    let y=document.getElementsByClassName('items');
    let z=0;
    while (z<y.length){
        if (value===y[z].id){
        x.removeChild(y[z]);
        }
        z++;
    }
    foot();
}