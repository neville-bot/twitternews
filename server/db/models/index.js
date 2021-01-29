const User = require('./user')
const Tweet = require('./tweets')

Tweet.belongsTo(User)
User.hasMany(Tweet)

module.exports = {
  User,
  Tweet
}
