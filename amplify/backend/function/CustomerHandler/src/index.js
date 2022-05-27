exports.handler = async (event) => {
    console.log(event)
    const customer = {'customerName': "Nidhi", 'Msg': "Testing "};
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(customer),
    };
    return response;
};