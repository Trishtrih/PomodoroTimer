function PlusOneSession(){
   PlusMinet = document.getElementById("SettedMinSession");
   let min = Number(PlusMinet.innerHTML);


   if(min<60)
    min+=1;

    if(min===10)
      PlusMinet.style.left=45+"%"

   PlusMinet.innerHTML = min;

}
function MinusOneSession(){
  MinusMinet = document.getElementById("SettedMinSession");
  let min = Number(MinusMinet.innerHTML);
  if(min>1)
    min-=1;

  if(min===9)
    MinusMinet.style.left=47.5+"%"

  MinusMinet.innerHTML = min;

}

function PlusOneBreak(){
  PlusMinet = document.getElementById("SettedMinBreak");
  let min = Number(PlusMinet.innerHTML);
  if(min<=60)
    min+=1;

  if(min===10)
    PlusMinet.style.left=45+"%"

  PlusMinet.innerHTML = min;

}
function MinusOneBreak(){
  MinusMinet = document.getElementById("SettedMinBreak");
  let min = Number(MinusMinet.innerHTML);
  if(min>1)
    min-=1;

  if(min===9)
    MinusMinet.style.left=47.5+"%"

  MinusMinet.innerHTML = min;

}
