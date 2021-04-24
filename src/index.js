import './bootstrap-init.scss';

console.log('Hello World!');

$(document).ready(function (){
   console.log('jquery is loaded');

   var $target = $('#target');
   $target.css('color', 'purple');
   $target.addClass('btn btn-outline-danger');
});
