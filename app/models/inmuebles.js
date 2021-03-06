"use strict";
var mysql = require("../../config/mysql.js")

module.exports = new class {
	constructor() {
		this.crear();
	}
	// crear tabla
	crear() {
		mysql.query(
			// esto es una concatenacion ya que javascript no es lo 
			// suficientemente inteligente como para ver un
			// string de varias lineas
			"CREATE TABLE `inmuebles` (" +
				"`id` INT NOT NULL AUTO_INCREMENT," +
				"`id_usuario` INT NOT NULL," +
				"`id_tipo_inmueble` INT NOT NULL," +
				"`id_tipo_adquisicion` INT NOT NULL," +
				"`metros` INT NOT NULL," +
				"`banos` INT NOT NULL," +
				"`descripcion` VARCHAR(100) NOT NULL," +
				"PRIMARY KEY (`id`)," +
				"INDEX (`id_usuario`)," +
				"INDEX (`id_tipo_inmueble`)," +
				"INDEX (`id_tipo_adquisicion`)" +
			") ENGINE=InnoDB;", (err) => {
			if (!err)
				console.log("creando la tabla inmuebles");
			else
				console.log("la tabla inmuebles ya existe");
		});
	}
	registrar() {
		console.log("luego se creara");
	}
	entrar() {
		console.log("luego se creara");
	}
	ver() {
		console.log("luego se creara");
	}
}