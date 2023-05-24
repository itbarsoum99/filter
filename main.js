var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (error) {
      console.log("Something went wrong!");
    });
}

let letter = document.getElementById('letter');
const onMouseMove = (e) =>{
  letter.style.left = e.pageX + 'px';
  letter.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);



function generateRandomLetter() {
  letter.classList.remove('fade');
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
  letter.innerHTML = randomCharacter;
  const colors = ["purple", "blue", "green", "red", "orange"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  letter.style.color = randomColor;

  setTimeout(function() {
    letter.classList.add('fade');
  }, 400);
  
}


    
