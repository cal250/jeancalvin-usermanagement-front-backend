const mongoose=require('mongoose')

 
const Schema = mongoose.Schema;
const dataSchema = new Schema({
   title:{
        type:String,
        required:true,
    
    },
    firstname:{
        type:String,
        required:true,
        
    },

    position:{
        type:String,
        required:true,
    },

    company:{
        type:String,
        require:true,
    },

    businessarena:{
        type:String,
        require:true,
    },


   

    employee:{
        type:String,
        required:true,
    },
    street_nr:{
        type:String,
        required:true

    },

    additionalinfo:{
        type:String,
        require:false,
    },
    zipcode:{
        type:Number,
        required:true,
    },

    place:{
        type:String,
        required:true,
    },

    country:{
        type:String,
        require:true,
    },

    code:{
        type:String,
        required:true,
    },

    phonenumber:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,

    },
     
   
})


const dataModal=mongoose.model('Data',dataSchema);
module.exports=dataModal;