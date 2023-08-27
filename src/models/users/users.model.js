const usersModel = require("./users.mongo");

const createUpdateUser = async (body) => await usersModel.create(body);

const getAllUsers = async () => await usersModel.find();

const getUser = async (id) => await usersModel.findById(id);

const deleteUser = async (id) => await usersModel.deleteOne({ _id: id });

module.exports = { createUpdateUser, getAllUsers, getUser, deleteUser };
