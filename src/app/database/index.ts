/**
 * @description      :
 * @author           : mario
 * @group            :
 * @created          : 12/01/2023 - 16:58:34
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 12/01/2023
 * - Author          : mario
 * - Modification    :
 **/
import "dotenv/config";
import mongoose, { ConnectOptions } from "mongoose";

const mongoURI = process.env.MONGO_URI;

export default function mongoDBConnection(): void {
	if (mongoURI) {
		mongoose.set('strictQuery', false);
		mongoose
			.connect(mongoURI, {
				useNewUrlParser: true,
				useUnifiedTopology: true
			} as ConnectOptions)
			.then((res) => {
				console.log("Connected to MongoDB");
			})
			.catch((err) => {
				console.log("Error connecting to MongoDB: ", err);
			});
	} else {
		console.log("Error connecting to MongoDB: Mongo URI has no value");
	}
}
