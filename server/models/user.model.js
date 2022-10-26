const mongoose = require('mongoose')
const DB = "mongodb+srv://galal:galal@cluster0.isz0tlf.mongodb.net/?retryWrites=true&w=majority";
const bcrypt = require('bcrypt')


const userSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    username:String,
    password:String,
    admin:{
        type:Boolean,
        default:false
    }
    
})
const User = mongoose.model("User",userSchema)

exports.newUser = data => {
    return new Promise ((resolve,reject)=>{
        mongoose.connect(DB).then(()=>{
            User.findOne({username:data.username}).then((user)=>{
                if (user) {
                    reject("User Already Exist")
                }else{
                    if (data.password !== data.rePassword) {
                        reject("Password not match")
                    }else{
                        bcrypt.hash(data.password,10).then((hashPassword)=>{
                            const newUser = new User({
                                firstname:data.firstname,
                                lastname:data.lastname,
                                username:data.username,
                                password:hashPassword
                            })
                            newUser.save()
                            resolve(' User Done Created ')
                        })
                    }
                }
            })
        }).catch((err)=>{
            console.log(err);
        })
    })
}
exports.login = data => {
    return new Promise ((resolve,reject)=>{
        mongoose.connect(DB).then(()=>{
            User.findOne({username:data.username}).then(user =>{
                if (!user) {
                    reject("User not Exist")
                }else{
                    bcrypt.compare(data.password,user.password).then(same =>{
                        if(!same){
                            reject('Wrong password')
                        }else{
                            resolve({
                                id:user._id,
                                admin:user.admin
                            })
                        }
                    })
                }
            })
        })
    })
}