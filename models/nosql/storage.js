const mongoose = require("mongoose")

const StorageScheme = new mongoose.Schema(
    {
        ulr: {
            type: String
        },
        filename: {
            type: String
        },
    },
    {
        timestamps: true, //TODO createdAt, updateAt
        versionKey: false
    }
);

module.exports = mongoose.model("storage", StorageScheme)