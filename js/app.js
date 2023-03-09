document.addEventListener('DOMContentLoaded', function() {
document.querySelector('#hero').addEventListener('mouseout', function() {
    document.querySelectorAll('.hero-section').forEach(function(element) {
      element.classList.add('fade-out');
    });
 });
  
document.querySelector('#hero').addEventListener('mouseover', function() {
    document.querySelectorAll('.hero-section').forEach(function(element) {
      element.classList.remove('fade-out');
    });
  });
document.querySelector('#features').addEventListener('mouseout', function() {
    document.querySelectorAll('.features-section').forEach(function(element) {
      element.classList.add('fade-out');
    });
 });
  
document.querySelector('#features').addEventListener('mouseover', function() {
    document.querySelectorAll('.features-section').forEach(function(element) {
      element.classList.remove('fade-out');
    });
  });
document.querySelector('#testimonials').addEventListener('mouseout', function() {
    document.querySelectorAll('.testimonials-section').forEach(function(element) {
      element.classList.add('fade-out');
    });
});
  
document.querySelector('#testimonials').addEventListener('mouseover', function() {
    document.querySelectorAll('.testimonials-section').forEach(function(element) {
      element.classList.remove('fade-out');
    });
});
});