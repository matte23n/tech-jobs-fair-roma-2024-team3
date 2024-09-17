const { Sequelize, Model, DataTypes } = require("sequelize");
// const { pg } = require('pg');

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: "postgres",
  // dialectModule: pg
});

class Task extends Model {}
Task.init(
  {
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize, modelName: "task" }
);

sequelize.sync();

module.exports = Task;
