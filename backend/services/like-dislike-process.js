const Sauce = require('../models/sauce-model');

module.exports = {
    likeSauce: async function(userId, sauce) {
        await Sauce.updateOne({ _id: sauce._id }, { $push: { usersLiked: userId }, $inc: { likes: +1 }})
    },

    alreadyStatusOnSauce: async function(userId, sauce) {
            if (sauce.usersLiked.includes(userId)) { 
              await Sauce.updateOne({ _id: sauce._id }, { $pull: { usersLiked: userId }, $inc: { likes: -1 }})
            }
            if (sauce.usersDisliked.includes(userId)) { 
              await Sauce.updateOne({ _id: sauce._id }, { $pull: { usersDisliked: userId }, $inc: { dislikes: -1 }})
            }
    },

    dislikeSauce: async function (userId, sauce) {
        await Sauce.updateOne({ _id: sauce._id }, { $push: { usersDisliked: userId }, $inc: { dislikes: +1 }})
    }
}