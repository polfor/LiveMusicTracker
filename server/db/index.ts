import mongoose from "mongoose";

// @ts-ignore
export default async _nitroApp => {
  const config = useRuntimeConfig();

  // console.log(`Try to connect to ${config.MONGO_URI}`);
  await mongoose.connect(config.MONGO_URI, { dbName: "livemusictracker" });
  // .then(() => console.log("Connected to DB"))
  // .catch((e: any) => console.log(e));
};
