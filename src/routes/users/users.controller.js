const {
  createUpdateUser,
  getAllUsers,
  getUser,
  deleteUser,
} = require("../../models/users/users.model");

const httpCreateUpdateUser = async (req, res) =>
  res.status(200).json(await createUpdateUser(req.body));

const httpGetAllUsers = async (_, res) =>
  res.status(200).json(await getAllUsers());

const httpGetUser = async (req, res) =>
  res.status(200).json(await getUser(req.params.id));

const httpDeleteUser = async (req, res) =>
  res.status(200).json(await deleteUser(req.params.id));

module.exports = {
  httpCreateUpdateUser,
  httpGetAllUsers,
  httpGetUser,
  httpDeleteUser,
};
