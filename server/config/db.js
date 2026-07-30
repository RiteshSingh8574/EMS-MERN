
import mongoose from "mongoose";

export const connectDb = async () => {
  
    await mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log("Db Connected"))
    .catch((error) => {
      console.log("Error is:", error);
    });
};




