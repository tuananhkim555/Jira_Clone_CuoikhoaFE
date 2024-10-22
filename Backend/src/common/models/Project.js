const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Project = sequelize.define('Project', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  image_url: {
    type: DataTypes.STRING,
  },
  site_link: {
    type: DataTypes.STRING,
  },
  github_link: {
    type: DataTypes.STRING,
  },
});

module.exports = Project;

