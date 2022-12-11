import axios from "axios";

import { BASE_URL } from "../utils/contants.util";

export const paymentPost = async (batch_timings, user, amount) =>
  await axios.post(
    `${BASE_URL}/user/completepayment`,
    {
      batch_timings,
      user,
      amount,
    },
    { headers: { Authorization: `Bearer ${user.token}` } }
  );
