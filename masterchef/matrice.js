var interactions = {
	'farine/neuf': {
		'doseur/vide': function (farine, doseur) {
			farine.état = 'entamé';
			doseur.état = 'plein';
			return "200g de farine ont été versés dans le verre doseur"
		}
	},
	'doseur/plein': {
		'saladier/propre': function (doseur, saladier) {
			doseur.état = 'vide';
			saladier.état = 'blanc';
			return "200g de farine ont été transvasés dans le saladier"
		}
	},
	'oeuf/frais': {
		'saladier/blanc': function (oeuf, saladier) {
			oeuf.état = 'cassé';
			saladier.état = 'oeuf';
			return "2 oeufs ont été cassés dans le saladier"
		}
	},
	'sucre/plein': {
		'saladier/blanc': function (sucre, saladier) {
			return "Le sucre a été ajouté dans le saladier"
		}
	},
	'épices/plein': {
		'saladier/oeuf': function (oeuf, saladier) {
			saladier.état = 'presqueTout';
			return "Les épices ont été ajoutées dans le saladier"
		}
	},
	'lait/plein': {
		'casserole/vide': function (lait, casserole) {
			lait.état = 'entamé';
			casserole.état = 'pleine';
			return "Le lait a été versé dans la casserole"
		}
	},
	'cuisson/éteint': {
		'self': function (cuisson) {
			cuisson.état = 'allumé';
			return "La table de cuisson a été allumée"
		}
	},
	'cuisson/allumé': {
		'self': function (cuisson) {
			cuisson.état = 'éteint';
			return "La table de cuisson a été éteinte"
		}
	},
	'casserole/pleine': {
		'cuisson/allumé': function (casserole, cuisson) {
			setTimeout(function () {
				cuisson.état = 'éteint'; cuisson.setFrame(0);
				casserole.état = 'chaude'; casserole.setFrame(2);
				texte.setText("Le lait est tiède");
			}, 3000)
			casserole.reset = function () {
				this.setPosition(cuisson.x - 30, cuisson.y - 30);
			}
			return "La casserole de lait a été mise à tiédir"
		}
	},
	'casserole/chaude': {
		'saladier/presqueTout': function (casserole, saladier) {
			casserole.état = 'vide';
			saladier.état = 'tout';
			return "La lait tiède a été versé dans le saladier"
		}
	},
	'miel/plein': {
		'saladier/tout': function (miel, saladier) {
			return "Le miel a été ajouté dans le saladier"
		}
	},
	'spatule/propre': {
		'saladier/tout': function (spatule, saladier) {
			spatule.état = 'sale';
			saladier.état = 'mélangé';
			return "Les ingrédients ont été mélangés"
		}
	},
	'four/éteint': {
		'self': function (four) {
			four.état = 'allumé';
			return "Le four a été allumé"
		}
	},
	'four/allumé': {
		'self': function (four) {
			four.état = 'éteint';
			return "Le four a été éteint"
		}
	},
	'saladier/mélangé': {
		'moule/vide': function (saladier, moule) {
			saladier.état = 'sale';
			moule.état = 'plein';
			return "La préparation a été versée dans le moule"
		}
	},
	'moule/plein': {
		'four/allumé': function (moule, four) {
			four.état = 'cuisson';
			moule.visible = false;
			setTimeout(function () {
				four.état = 'éteint'; four.setFrame(0);
				moule.visible = true;
				moule.état = 'cuit'; moule.setFrame(2);
				texte.setText("Le pain d'épice est terminé !");
			}, 3000);
			return "La préparation a été enfournée"
		}
	},
	'moule/cuit': {
		'four/allumé': function (moule, four) {
			four.état = 'cuisson';
			moule.visible = false;
			setTimeout(function () {
				four.état = 'éteint'; four.setFrame(0);
				moule.visible = true;
				moule.état = 'brulé'; moule.setFrame(4);
				texte.setText("Bravo ! Le pain d'épice est cramé !");
			}, 5000);
			return "La préparation a été enfournée"
		}
	},

};
