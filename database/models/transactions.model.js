module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define("transactions", {
    transaction_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    transaction_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      validate: { min: 500, max: 500 },
    },
  });
  // Transaction.sync({ force: true }).then(() => console.log('Transaction MODEL CREATED')).catch((err) => console.log('ERROR ' + err))
  return Transaction;
};
