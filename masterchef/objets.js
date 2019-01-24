objets = {
	oeuf: {
		nom: "oeuf",
		type: "ingrédient",
		états: ["frais", "cassé"],
		état: "frais",
		x: 150,
		y: 370,
		mobile: true,
		image: {
			src: "assets/oeufs.png",
			dimX: 60,
			dimY: 60,
			clés: 2
		}
	},
	lait: {
		nom: "lait",
		type: "ingrédient",
		états: ["plein", "entamé", "presqueVide", "vide"],
		état: "plein",
		x: 680,
		y: 335,
		mobile: true,
		image: {
			src: 'assets/lait.png',
			dimX: 60,
			dimY: 120,
			clés: 4
		}
	},
	farine: {
		nom: "farine",
		type: "ingrédient",
		états: ["neuf", "entamé"],
		état: "neuf",
		x: 210,
		y: 360,
		mobile: true,
		image: {
			src: 'assets/farine.png',
			dimX: 60,
			dimY: 90,
			clés: 2
		}
	},
	spatule: {
		nom: "spatule",
		type: "ustensile",
		états: ["propre", "sale"],
		état: "propre",
		x: 350,
		y: 430,
		mobile: true,
		image: {
			src: 'assets/spatule.png',
			dimX: 90,
			dimY: 60,
			clés: 2
		}
	},
	saladier: {
		nom: "saladier",
		type: "ustensile",
		états: ['propre', 'mélangé', 'sale', 'blanc', 'oeuf', 'épice', 'presqueTout', 'tout'],
		état: "propre",
		x: 400,
		y: 380,
		mobile: true,
		image: {
			src: 'assets/saladier.png',
			dimX: 120,
			dimY: 60,
			clés: 8
		}
	},
	moule: {
		nom: "moule",
		type: "ustensile",
		états: ["vide", "plein", "cuit", "auFour", "brulé"],
		état: "vide",
		x: 550,
		y: 400,
		mobile: true,
		image: {
			src: 'assets/moule.png',
			dimX: 120,
			dimY: 150,
			clés: 5
		}
	},
	four: {
		nom: "four",
		type: "électroménager",
		états: ["éteint", "allumé", "cuisson"],
		état: "éteint",
		x: 680,
		y: 170,
		image: {
			src: 'assets/four.png',
			dimX: 180,
			dimY: 180,
			clés: 3
		}
	},
	cuisson: {
		nom: 'table de cuisson',
		type: 'électroménager',
		états: ['éteint', 'allumé'],
		état: 'éteint',
		x: 150,
		y: 220,
		image: {
			src: 'assets/cuisson.png',
			dimX: 180,
			dimY: 60,
			clés: 2
		}
	},
	sucre: {
		nom: 'sucre',
		type: 'ingrédient',
		états: ['plein'],
		état: 'plein',
		x: 70,
		y: 370,
		mobile: true,
		image: {
			src: 'assets/sucre.png',
			dimX: 60,
			dimY: 90,
			clés: 1
		}
	},
	miel: {
		nom: 'miel',
		type: 'ingrédient',
		états: ['plein'],
		état: 'plein',
		x: 130,
		y: 440,
		mobile: true,
		image: {
			src: 'assets/miel.png',
			dimX: 40,
			dimY: 40,
			clés: 1
		}
	},
	casserole: {
		nom: 'casserole',
		type: 'ustensile',
		états: ['vide', 'pleine', 'chaude'],
		état: 'vide',
		x: 680,
		y: 440,
		mobile: true,
		image: {
			src: 'assets/casserole.png',
			dimX: 90,
			dimY: 84,
			clés: 3
		}
	},
	épices: {
		nom: 'épices',
		type: 'ingrédient',
		états: ['plein'],
		état: 'plein',
		x: 180,
		y: 430,
		mobile: true,
		image: {
			src: 'assets/épices.png',
			dimX: 20,
			dimY: 40,
			clés: 1
		}
	},
	doseur: {
		nom: 'verre doseur',
		type: 'ustensile',
		états: ['vide', 'plein'],
		état: 'vide',
		x: 270,
		y: 420,
		mobile: true,
		image: {
			src: 'assets/verre_doseur.png',
			dimX: 60,
			dimY: 90,
			clés: 2
		}
	},
}
