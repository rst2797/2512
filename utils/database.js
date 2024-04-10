import mongoose from "mongoose";
const uri =
  "mongodb+srv://discretestructure3:39RhblCgUlJmUK2x@2512-shop.owvszby.mongodb.net/?retryWrites=true&w=majority";

export const connection =()=>{
  try {
      mongoose.connect(uri).then(()=>console.log('Database Connected'));
  } catch (error) {
    console.error({error})
  }
}