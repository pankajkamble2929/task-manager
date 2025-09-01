module.exports = (sequelize, Sequelize) => {
  return sequelize.define('Task', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.TEXT },
    status: { type: Sequelize.ENUM('todo','in-progress','done'), defaultValue: 'todo' },
    priority: { type: Sequelize.ENUM('low','medium','high'), defaultValue: 'medium' },
    dueDate: { type: Sequelize.DATE }
  }, {
    timestamps: true
  });
};
