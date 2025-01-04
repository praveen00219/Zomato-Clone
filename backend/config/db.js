import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://paru2192000:dmhkkaGrvXQGrsO9@cluster0.2kbsy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("DB Connected"));
};

// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.

// dmhkkaGrvXQGrsO9
