//  app.js
$(document).on('turbolinks:load', function(){

  var btn = document.getElementById('speak-content__btn');
  var content = document.getElementById('speak-content__content');
  
  
  
  
  //音声認識APIの使用
  var speech = new webkitSpeechRecognition();
  
  
  //言語を日本語に設定
  speech.lang = "ja";
  
  
  
  
  btn.addEventListener( 'click' , function() {
  
  
    // 音声認識をスタート
    speech.start();
  
  
  } );
  
  
  
  
  speech.addEventListener( 'result' , function( e ) {
  
  
    var text = e.results[0][0].transcript;
  
  
      // 認識された「言葉(text)」を、表示用のdivタグに代入する
      content.textContent = text;
  
  
  } );
  });