import authService from "../services/authService.js";

const register = async (req, res) => {
  const data = req.body;

  if (!data.name || !data.email || !data.password) {
    return res.status(422).send("Required data are missing.");
  }

  if (data.password !== data.confirmPassword) {
    return res.status(400).send("Passwords do not match.");
  }

  if (data.password.length < 6) {
    return res.status(400).send("Password length must be greater than 6.");
  }

  try {
    const user = await authService.register(data);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  const data = req.body;

  try {
    const user = await authService.login(data);

    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { register, login };
