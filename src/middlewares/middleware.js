
const validationBodyCreateClient = (request, response, next) => {
    const { body } = request;
    
    if(body.name === undefined || body.address === undefined || body.telephone === undefined)
    {
        response.status(400).json({ message: "Nenhum dos parâmetros podem estar indefinidos!!!"});
    } if(body.name === "" || body.address === "" || body.telephone === "") 
    {
        response.status(400).json({ message: "Nenhum dos campos podem ser vázios!!!"});
    }

    next();
};

module.exports ={
    validationBodyCreateClient,

}