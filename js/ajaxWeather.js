 function connect(page) {
            requeteAjax = new XMLHttpRequest();
            if (requeteAjax != null) {
                requeteAjax.open("GET", page, true);
                requeteAjax.onreadystatechange = handler;
                requeteAjax.send();
            }
            else {
                window.alert("Pas de support AJAX (XMLHTTP)");
            }
        }

    function handler() {
        if (requeteAjax.readyState == 4) {
            if (requeteAjax.status == 200) {
                display()
            }
        }
    }

	function call(){
		var page = "http://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("ville").value;
		connect(page);
	}

function display() {
            var JSONweather = JSON.parse(requeteAjax.responseText);
            var divliste = document.getElementById("meteo");
            var noeud = document.createTextNode(JSONweather.sys.country+' '+JSONweather.main.temp+' '+JSONweather.weather[0].main+' '+JSONweather.name);
            divliste.appendChild(noeud);
            divliste.style.visibility = "visible";
            divliste.value = texte;
        }
