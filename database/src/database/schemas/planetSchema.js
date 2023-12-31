const {Schema} = require("mongoose");

const planetSchema = new Schema({
_id: String,
name: String,
rotation_period: String,
orbital_period: String,
diameter: String,
climate: String,
gravity: String,
terrain: String,
surface_water: String,
residents: [ {
    type: String,
    ref: "Character"
}],
films: [{
    type: String, 
    ref: "Film"
}]

});

planetSchema.statics.list = async function(){
    return await this.find()
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.get = async function(_id){
    return await this.findOne({_id})               //también podría ser findById(id)
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.insert = async function(planet){
    return await this.create(planet)
}

module.exports = planetSchema;