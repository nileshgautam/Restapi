const mongoose =require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/nileshandcompany', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
console.log('Db Connected');
}).catch((e)=>{
    console.log('DB error');
});