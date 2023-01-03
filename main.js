https://teachablemachine.withgoogle.com/models/2MIpUfMyF/
previsao1 = "";
previsao2 = "";
Webcam.set({
  height: 300,
  width: 350,
  imageFormat: "png",
  pngQuality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function capturar() {
  Webcam.snap(function (data_uri) {
    document.getElementById("resultado").innerHTML = '<img id="imagem"src="' + data_uri + '"/>';
  });
}
console.log("versão ml5", ml5.version);
classfier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2MIpUfMyF/", modelLoaded);
function modelLoaded() {
  console.log("o medelo foi carregado");
}
function speak() {
  var synth = window.speechSynthesis;
  fala1 = "a primera previsão e" + previsao1;
  fala2 = "a segunda previsão e" + previsao2;
  var juntar = new SpeechSynthesisUtterance(fala1 + fala2);
  synth.speak(juntar);
}
function check() {
  img = document.getElementById("imagem");
  classfier.classify(img, gotResult);
}
function gotResult(error, results) {
  console.error(error);
  document.getElementById("resultado1").innerHTML = results[0].label;
  document.getElementById("resultado2").innerHTML = results[1].label;
  previsao1 = results[0].label;
  previsao2 = results[1].label;
  speak();
  if (results[0].label == "feliz") {
    document.getElementById("carregar").innerHTML = "&#128522;";
  }
  if (results[1].label == "feliz") {
    document.getElementById("carregar2").innerHTML = "&#128522;";
  }
  if (results[0].label == "raiva") {
    document.getElementById("carregar").innerHTML = "&#128545;";
  }
  if (results[1].label == "raiva") {
    document.getElementById("carregar2").innerHTML = "&#128545;";

  }
  if (results[1].label == "asustado") {
    document.getElementById("carregar2").innerHTML = "&#128561;";
  }
  if (results[1].label == "asustado") {
    document.getElementById("carregar2").innerHTML = "&#128561;";
  }


}
