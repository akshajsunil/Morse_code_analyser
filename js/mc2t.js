
var morseAlphabet2 = {
   '.-':'a',
  '-...': 'b',
   '-.-.': 'c',
  '-..':'d',
   '.':'e',
  '..-.':'f',
  '--.':'g',
  '....':'h',
  '..':'i',
  '.---':'j',
  '-.-':'k',
  '.-..':'l',
  '--':'m',
  '-.':'n',
  '---':'o',
  '.--.':'p',
  '--.-':'q',
  '.-.':'r',
  '...':'s',
  '-':'t',
  '..-':'u',
  '...-':'v',
  '.--':'w',
  '-..-':'x',
  '-.--':'y',
   '--..':'z',
   '.----':'1',
   '..---': '2',
   '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
   '--...': '7',
   '---..': '8',
   '----.': '9',
   '-----': '0',
   '/': ' ',
 
};

window.onload = function(){
  var x = document.getElementById("myDIV");
  x.style.display = "none"
document.getElementById("demo").onclick = function (){




    var str=this.elements['t1'].value;
    var str2="";
    str.split(" ").forEach(function (letter) {
        letter=String(letter)
      
        

    str2 += morseAlphabet2[letter];
        
     x.style.display = "block"
    

    })
    document.getElementById("res").innerHTML=str2;
    console.log(str2);
}

}