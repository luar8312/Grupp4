/**
 * Created by robinjohansson on 2016-04-13.
 */

Characters = new Mongo.Collection("characters");

//Bilder på karaktärer.
CharacterImages = new FS.Collection("characterImages", {stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]});

//Början på ett schema för karaktärer.
Characters.schema = new SimpleSchema({


});