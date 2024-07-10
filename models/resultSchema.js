import mongoose, {Schema} from "mongoose"

const resultSchema = new Schema(
    {
        category: String,
        item: String,
        firstName: String,
        firstUnit: String,
        secondName: String,
        secondUnit: String,
        thirdName: String,
        thirdUnit: String,
    }
);

const ResultModel = mongoose.models.result || mongoose.model("result",resultSchema);

export default ResultModel