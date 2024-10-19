const getAllClientsController = (requeste, response) => {
    return response.status(200).json({ message: "Controller está ok!!!"});
};

module.exports = {
    getAllClientsController
};