const target = document.getElementById("target");
let array = ["developpeur", "photographe", "créatif"];
let wordIndex = 0
let letterIndex = 0

function createLetter(){
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex] [letterIndex];
  setTimeout(() =>{
    letter.remove();
  }, 2800);
};

function loop() {
  setTimeout(() => {
    if(wordIndex >= array.length){
      wordIndex = 0;
      letterIndex = 0;
      loop();
    }else if(letterIndex < array[wordIndex].length){
      createLetter();
      letterIndex++;
      loop();
    }else{
      wordIndex++;
      letterIndex = 0;
      setTimeout(()=>{
        loop();
      }, 2800)
    };
  }, 60);
};
loop();