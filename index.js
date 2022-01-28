var openModal = document.getElementById('open-modal');
var modal = document.getElementById('modal-demo');
var closeModal = document.getElementsByClassName('close-modal')[0];
openModal.addEventListener('click', function(){
    modal.classList.toggle('visible');
});
closeModal.addEventListener('click', function(){
    modal.classList.remove('visible');
});

$(document).ready(function(){
    $("#in").click(function(){
         $("#img").width($("#img").width()+100);
         $("#img").height($("#img").height()+100);
    });
    $("#out").click(function(){
         $("#img").width($("#img").width()-100);
         $("#img").height($("#img").height()-100);
    });
 });