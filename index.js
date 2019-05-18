const {argv,consultarOfertaCursos} = require('./datos');
const fs = require('fs');

if(argv._[0]=='consultar'){

	consultarOfertaCursos(0, true, function(id,descripcion, nombre,duracion,valor){
		console.log("Información básica del curso: "+descripcion);
		console.log("		-id: "+id+".");
		console.log("		-nombre: "+nombre+".");
		console.log("		-duracion: "+duracion +" semanas.");
		console.log("		-valor: $ "+valor+".");
	});

}
else if(argv._[0]=='inscribir'){

	consultarOfertaCursos(argv.i, false, function(id,descripcion, nombre,duracion,valor){
		infoCurso="Información básica del curso: "+descripcion+"\n"
				+"		-id: "+id+"."+"\n"
				+"		-nombre: "+nombre+"."+"\n"
				+"		-duracion: "+duracion +" semanas."+"\n"
				+"		-valor: $ "+valor+".";
		console.log(infoCurso);
		nombreArchivo= "./inscripciones/Inscripcion_"+argv.c+".txt";

		infoArchivo= infoCurso+"\n"
					+"Información de la persona inscrita:"+"\n"
					+"		-Nombre: "+argv.n+"."+"\n"
					+"		-Cedula: "+argv.c+".";

		fs.writeFile(nombreArchivo, infoArchivo, (err)=>{
			if(err) throw (err);
			console.log('La inscripcion ha sido exitosa!');

			});
	});

}
else{
	console.log('Por favor seleccione alguna de las siguientes opciones:');
	console.log(' consultar: para consultar la oferta de cursos disponibles.');
	console.log(' inscribir: para inscribirse a un curso.');
}