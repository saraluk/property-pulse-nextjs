import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  // strictQuery ensures that only fields that are specified in our schema will be saved to the database.
  mongoose.set("strictQuery", true);

  // If the database is already connected, don't connect again
  if (connected) {
    console.log("MongoDB is connected");
    return;
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
