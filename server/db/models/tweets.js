 const Sequelize = require('sequelize')
 const db = require('../db')

 const Tweet = db.define('tweet', {
     body: {
         type: Sequelize.STRING,
         allowNull: false,
         validate: {
             notEmpty: true
         }
     },
     author: {
         type: Sequelize.STRING,
         allowNull: false
     }
 })

 module.exports = Tweet