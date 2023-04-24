import { User } from "../models/User.js";

export const getUsers = async (req, res) => {
try {
 const users = await User.findAll()
    res.json(users)
} catch (error) {
    return res.status(500).json({message: error.message})
}
};

export const getUser = async (req, res) => {
  try{
    const {id} = req.params;
    const user = await User.findByPk(id)
    res.json(user)
  } catch(error){
    return res.status(500).json({message: error.message})
  }
};

export const createUser = async (req, res) => {
try{
  const {
    firstName,
    lastName,
    email,
    psw,
  } = req.body;

  const newUser = await User.create({
    firstName,
    lastName,
    email,
    psw,
  });
  res.json(newUser);
} catch (error) {
    return res.status(500).json({message: error.message})
}
};

export const updateUser  = async (req, res) => {
  try{
    const {id} = req.params;
    const {
      firstName,
      lastName,
      email,
      psw,
      } = req.body

    const user = await User.findByPk(id) 
    user.firstName = firstName,
    user.lastName = lastName,
    user.email = email,
    user.psw = psw
    await user.save()
    res.json(user)
  } catch(error) {
    return res.status(500).json({message: error.message})
  }
};