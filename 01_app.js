"use strict";

/*
		let oProvince = {   
		 "QC" : "Québec",
		 "ON" : "Ontario",
		 "MA" : "Manitoba",
		 "SK" : "Saskashewan",
		 "AL" : "Alberta",
		 "NF" : "Terre-Neuve",
		 "NB" : "Nouveau-Brunswick"
		}

		const contenu_objet_json = (o) => {
   			let trace = '';

				for (let p in o) { 
					trace += p + '<td>' + o[p] + '</td>'; 
				} 
			return trace;
			}
//*///		console.log(contenu_objet_json(oProvince))

const http = require("http"); 
let fs = require("fs");

http.createServer((request, response) => { //console.log('branchement sur le port 3000')

	/* La fonction fs.readFile() est asynchrone elle ne bloque pas l'éxécution des instructions suivantes */
	fs.readFile('03.json', "utf8", (err, data) => {
	if (err) throw err;

	let obj = JSON.parse(data);

	response.writeHead(200, {"Content-Type" : "text/html; charset=UTF-8"});
	response.write('<!DOCTYPE "html"><html><body><table>');
		
		for(let item in obj){
			response.write("<tr><td>"+item+"</td><td>"+obj[item]+"</td></tr>");
		}
	
	response.write('</table></body></html>');
	response.end(); 
	});
	
}).listen(3000);

/*//sur la page wed
http://localhost:3000/ 
*/