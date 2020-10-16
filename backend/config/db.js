import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(
      `DB Successfully Connected on  ${connection.connection.host}`.cyan
        .underline
    );
  } catch (error) {
    console.error(`ERROR::: ${error.message}`.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
