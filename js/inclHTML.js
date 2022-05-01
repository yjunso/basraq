// inclHTML.js 파일 
window.addEventListener('load', function() {
  var allElements = document.getElementsByTagName('*');
  //console.log(allElements);
      
  Array.prototype.forEach.call(allElements, function(el) {
      var includePath = el.dataset.includePath;
      
      //console.log("include : "+includePath);
      if (includePath) {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                  el.outerHTML = this.responseText;
              }
          };
          xhttp.open('GET', includePath, true);
          xhttp.send();
      }
  });
});

