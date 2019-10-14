const db = require('./db');
const User = require('./User');
const Project = require('./Project');
const ScreenSize = require('./ScreenSize');
const FontScale = require('./FontScale');

User.hasMany(Project);
Project.belongsTo(User);

Project.hasMany(ScreenSize);
ScreenSize.belongsTo(Project);

ScreenSize.hasMany(FontScale);
FontScale.hasMany(ScreenSize);

module.exports = {
  db,
  User,
  Project,
  ScreenSize,
  FontScale,
};
