window.addEventListener("beforeunload",function(e){location.hostname!==this.hostname&&this.hostname.length||document.getElementById("loadEffect").classList.remove("loadRemove")}),document.onreadystatechange=(()=>{"complete"===document.readyState&&document.getElementById("loadEffect").classList.add("loadRemove")});