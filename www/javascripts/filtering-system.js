/* Portfolio Filter - START */
var elementExists = document.getElementById("productionPortfolio");
if(elementExists == null | elementExists == undefined | elementExists == ""){

}else{
    function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("filterPortfolioWork");
      if (c == "all") c = "";
      for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "showWork");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "showWork");
      }
    }

    function w3AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
      }
    }

    function w3RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
      }
      element.className = arr1.join(" ");
    }
    filterSelection("all");

    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("portfolioFilters");
    var btns = btnContainer.getElementsByClassName("filterBtn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("activeFilter");
        current[0].className = current[0].className.replace(" activeFilter", "");
        this.className += " activeFilter";
      });
    }
    
}
/* Portfolio Filter - END */