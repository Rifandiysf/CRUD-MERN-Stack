import User from "../model/UserModel.js"

export const getUsers = async(req, res) => {
    try {
        const response = await User.findAll()
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
    }
}

export const getUsersById = async(req, res) => {
    try {
        const response = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
    }
}

export const CreateUsers = async(req, res) => {
    try {
        await User.create(req.body)
        res.status(201).json({message: "User Created"})
    } catch (error) {
        console.log(error.message)
    }
}

export const UpdateUsers = async(req, res) => {
    try {
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({message: "User Updated"})
    } catch (error) {
        console.log(error.message)
    }
}

export const DeleteUsers = async(req, res) => {
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({message: "User Deleted"})
    } catch (error) {
        console.log(error.message)
    }
}