var mongoose =require('mongoose');
const Schema= mongoose.Schema;

let District =new Schema({
    stateid:{
        type:String
    },
    distId:{
        type:String
    },
    distName:{
        type:String
    }
});

module.exports=mongoose.model('District',District);