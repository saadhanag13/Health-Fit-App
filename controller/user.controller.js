var uniqid = require("uniqid");

const { User } = require("../database/database");
const { Transaction } = require("../database/database");

exports.completePayment = async (req, res) => {
  const { batch_timings, user, amount } = req.body;
  const userDB = await User.findOne({ email: user.email, raw: true });
  console.log(userDB);

  if (!userDB) return res.status(500).json({ error: "User does not exist" });

  const transaction_id = uniqid();

  const transaction = await Transaction.create({
    transaction_id,
    transaction_by: userDB.user_id,
    amount,
  });

  if (transaction) {
    await User.update(
      { batch_timings, subscription: Date.now() },
      { where: { email: userDB.email } }
    );

    res.json("ok");
  }
};
