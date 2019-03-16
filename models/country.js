var mongoose =require("mongoose");
const Schema=mongoose.Schema;

let Country = new Schema({
countryId:{
    type : String
},
countryName:{
    type : String
}
});

module.exports=mongoose.model('Country',Country);


