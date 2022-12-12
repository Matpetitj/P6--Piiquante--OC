module.exports = {
    likeSauce: function() {
        Sauce.updateOne({ _id: sauceId }, { $push: { usersLiked: userId }, $inc: { likes: +1 }})
          .then(() => res.status(200).json({ message: `J'aime` }))
          .catch((error) => res.status(500).json({ error }))
    },

    alreadyStatusOnSauce () {
        Sauce.findOne({ _id: sauceId })
           .then((sauce) => {
            if (sauce.usersLiked.includes(userId)) { 
              Sauce.updateOne({ _id: sauceId }, { $pull: { usersLiked: userId }, $inc: { likes: -1 }})
                .then(() => res.status(200).json({ message: `Neutre` }))
                .catch((error) => res.status(500).json({ error }))
            }
            if (sauce.usersDisliked.includes(userId)) { 
              Sauce.updateOne({ _id: sauceId }, { $pull: { usersDisliked: userId }, $inc: { dislikes: -1 }})
                .then(() => res.status(200).json({ message: `Neutre` }))
                .catch((error) => res.status(500).json({ error }))
            }
          })
          .catch((error) => res.status(404).json({ error }))
    },

    dislikeSauce: function () {
        Sauce.updateOne({ _id: sauceId }, { $push: { usersDisliked: userId }, $inc: { dislikes: +1 }})
          .then(() => { res.status(200).json({ message: `Je n'aime pas` }) })
          .catch((error) => res.status(500).json({ error }))
    }
}