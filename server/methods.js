/**
 * Created by robinjohansson on 2016-04-08.
 */
Meteor.methods({
	//Här skriver man serversidans metoder som ska kunna anropas av klientsidan.
	addCharacter: function (name, image, description) {
		//Lägga till en karaktär.
	},
	deleteCharacter: function (id) {
		//Ta bort en karaktär.
	},
	updateCharacter: function (id, name, description, image) {
		//Uppdatera information om en karaktär.
	}
});