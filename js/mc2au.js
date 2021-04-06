var morseAlphabet = {
  'a': '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
  0: '-----',
 
};




window.onload = function(){
  var x = document.getElementById("myDIV");
  x.style.display = "none"
document.getElementById("demo").onclick = function (){




    var str=this.elements['t1'].value;
    var str2="";
    var n=0;
    str.split("").forEach(function (letter) {
      if(letter==' ')
        str2 += '/';
        else

    str2 += morseAlphabet[letter]+" ";
    
     x.style.display = "block"
    

    });
    document.getElementById("res").innerHTML=str2;
    console.log(str2);
    str2.split("").forEach(function(ch)
    {
        n++;
            setTimeout(function(){
    if(ch=='.')
        document.getElementById('e').play();
        else if(ch=='-')
        
        document.getElementById('t').play();
}, n*1150);
    

    })
    
    

}

}