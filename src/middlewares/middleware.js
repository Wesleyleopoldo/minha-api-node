
const validationBodyCreateClient = (request, response, next) => {
    const { body } = request;
    
    if(body.name === undefined || body.address === undefined || body.telephone === undefined)
    {
        response.status(400).json({ message: "Nenhum dos parâmetros podem estar indefinidos!!!"});
    } if(body.name === "" || body.address === "" || body.telephone === "") 
    {
        response.status(400).json({ message: "Nenhum dos campos podem ser vázios!!!"});
    }
    else
    {
        next();
    }
    
};

const validationBodyCreateRoom = (request, response, next) => {
    const { body } = request;

    if(body.roomtype === undefined || body.diariesprice === undefined)
    {
        return response.status(400).json({ message: "Request Payload is Empty!!!" });
    }
    if(body.roomtype === "" || body.diariesprice === null)
    {
        return response.status(400).json({ message: "Request Payload is Empty!!!"});
    }
    else
    {
        next();
    }
}

const validationBodyCreateReservation = (request, response, next) => {
    const { body } = request;

    if(body.reservation_date === undefined || body.roomId === undefined)
    {
        return response.status(400).json({ message: "Request Payload is Empty!!!" });
    }
    if(body.reservation_date === null || body.roomId === null)
    {
        return response.status(400).json({ message: "Request Payload is Empty!!!" });
    }
    else
    {
        next();
    }
}

module.exports ={
    validationBodyCreateClient,
    validationBodyCreateRoom,
    validationBodyCreateReservation
}