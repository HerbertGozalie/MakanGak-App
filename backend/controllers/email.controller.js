import Email from "../models/email.model.js";

const sendError = (res, status, message) =>
  res.status(status).json({ error: message });

export const email = async (req, res) => {
  const { email } = req.body;
  if (!email) return sendError(res, 400, "Email is required");

  try {
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ error: "Email already subscribed" });
    }

    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(201).json({ message: "Email subscribed successfully" });
  } catch (error) {
    sendError(res, 500, "Database error");
  }
};
