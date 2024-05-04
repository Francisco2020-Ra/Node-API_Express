const mongoose = require("mongoose")

const TracksScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        album: {
            type: String
        },
        cover: {
            type: String,
            validate: {
                validator: (reg) => {
                    return true;
                },
                message: "ERROR_URL",
            },
        },
        artist: {
            name: {
                type: String,
            },
            nickname: {
                type: String,
            },
            nationality: {
                type: String,
            },
        },
        duration: {
            start: {
                type: Number,
            },
            end: {
                type: Number,
            },
        },
        mediaId: {
            type: mongoose.Types.ObjectId,
        },
    },
    {
        timestamps: true, //TODO createdAt, updateAt
        versionKey: false
    }
);

/**
 * Implementar metodo propio con relacion a storage
 */
TracksScheme.statics.findAllData = function (name) {
    const joinData = this.aggregate([//TODO: Tracks
        {
            $lookup:
            {
                from: "storages", //TODO: Tracks --> storages
                localField: "mediaId",//TODO: Tracks.mediaId
                foreignField: "_id",//TODO: Storages._id
                as: "audio"//TODO: Alias:
            }

        },
        {
            $unwind: "$audio" // quita el array [] e indica una relación uno a uno
        }]);
    return joinData;
};


TracksScheme.statics.findOneData = function (id) {
    const joinData = this.aggregate([//TODO: Tracks
        {
            $match: {
                _id: new mongoose.Types.ObjectId(id)
            },
        },
        {
            $lookup:
            {
                from: "storages", //TODO: Tracks --> storages
                localField: "mediaId",//TODO: Tracks.mediaId
                foreignField: "_id",//TODO: Storages._id
                as: "audio"//TODO: Alias:
            }

        },
        {
            $unwind: "$audio" // quita el array [] e indica una relación uno a uno
        }]);
    return joinData;
};
module.exports = mongoose.model("tracks", TracksScheme)