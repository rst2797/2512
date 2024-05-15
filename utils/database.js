import mongoose from "mongoose";

// const uri = 
//       "mongodb+srv://rishabhtomarrishabh:bucgnGZ5CnmnoqKN@cluster0.at1c6nu.mongodb.net/project2512?retryWrites=true&w=majority&appName=Cluster0";

const uri = 
      "mongodb+srv://pacchis12:bucgnGZ5CnmnoqKN@atlascluster.7whu2ct.mongodb.net/pacchis12?retryWrites=true&w=majority&appName=AtlasCluster";

export const connection =()=>{
  try {
      mongoose.connect(uri).then(()=>console.log('Database Connected'));
  } catch (error) {
    console.error({error})
  }
}