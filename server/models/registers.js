const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
   name: {
       type:String,
       required: true
   },
   email: {  
       type:String,
       require:true,
       unique:true
   },
   password: {
       type:String,
       required: true
   },
   ConfirmPassword: {
       type:String,
       required: true
}
})

userSchema.pre("save",async function(next) {

    if(this.isModified("password")){
    console.log(`the current password is ${this.password}`);
    this.password = await bcrypt.hash(this.password, 10);
    console.log(`the current password after Hashing is ${this.password}`);
    
    this.ConfirmPassword = undefined;
}
    next();
})

const Register = new mongoose.model("Usersregistration",userSchema);
module.exports = Register;