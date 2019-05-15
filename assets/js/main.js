
$(document).ready(function() {
  // On initie la valeur du nombre de cliques à 0.
    var nbclics = 0;
    // Lorsque l'on clique sur le #button, une fonction se declenche
  $('#button').click(function () {
    // Cette fonction permet de placer dans l'input #text une valeur : celle du nombre de cliques ++ !
    $('#text').val(++nbclics);
    // ++nbclics et pas nbclics++ car sinon le compteur commence a 0 et non 1.
  });
});
