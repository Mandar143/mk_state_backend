var mongoose =require('mongoose');
const Schema= mongoose.Schema;

let State =new Schema({
    state_id:{
        type:String
    },
    state_name:{
        type:String
    }
});
module.exports=mongoose.model('State',State);