$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var letter = $('.letter');
    var letterText = $('.letter-text');
  
    envelope.click(function() {
      open();
    });
    btn_open.click(function() {
      open();
    });
    btn_reset.click(function() {
      close();
    });
  
    function open() {
        envelope.addClass("open")
          .removeClass("close");
        $(".hearts").fadeIn();
        $(".letter").addClass("zoom"); // Agregar clase zoom a la carta
        $(".front").fadeOut(); // Ocultar el sobre rosado
        setTimeout(function() {
          letterText.fadeIn(); // Mostrar el texto "Te amo"
        }, 500);
      }
  
    function close() {
      envelope.addClass("close")
        .removeClass("open");
      $(".hearts").fadeOut();
      letterText.fadeOut();
      letter.removeClass("zoom");
    }
  });