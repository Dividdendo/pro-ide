import '../js/jquery-1.11.1.min';
import '../jsmaps/jsmaps-libs.js';
import '../jsmaps/jsmaps-panzoom.js';
import '../jsmaps/jsmaps.js';

export function ale(Mapa ){
	var capa=document.getElementById("mapa-col");
   capa.style.display="none"
   $("#mapa-col").empty();
		window.JSMaps.maps.colombia =Mapa;
		$('#mapa-col').JSMaps({
			map: 'colombia'
 });
}


		
 
 
  
 