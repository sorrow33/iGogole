function date(id)
	{
		date = new Date;
		annee = date.getFullYear();
		mois = date.getMonth();
		month = new Array('Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre');
		j = date.getDate();
		jour = date.getDay();
		days = new Array ('Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche');

		h = date.getHours();
		if (h<10) {h="0"+h};
		m=date.getMinutes();
		if (m<10) {m="0"+m};

		resultatDate = 'La date du jour: \n'+days[jour]+' '+j+' '+month[mois]+' '+annee; 
		resultatHeure = '\n Il est exactement: '+h+':'+m;
		document.getElementById(id).innerHTML = resultatDate + resultatHeure;
		//document.getElementById(id).innerHTML = resultatHeure;
		setTimeout('date('+id+');','1000');
		return true;
	}