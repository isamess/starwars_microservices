const {Schema} = require("mongoose");
 
const characterSchema = new Schema({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: Date,
    gender: String,  //o ENUM
    homeworld:{type: String, ref: "Planet"}, //referencias a modelos
    films: [{type: String, ref: "Film"}]  //referencias a modelos de películas q están en un array de ids de peliculas
});

characterSchema.statics.list = async function(){
    return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function(_id){
    return await this.findOne({_id})               //también podría ser findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.insert = async function(character){
    return await this.create(character)
}

module.exports = characterSchema;