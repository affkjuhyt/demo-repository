import { query } from "express";

const apiFeatures = async (req, model, populate) => {
    let query;
    const reqQuery = { ...req.query };

    console.log('reqQuery')

    // Finding resource
    query = model.find({});

    console.log('query is: ', query)

    query = await query;

    if (!query) {
        console.log('Data not found')
        throw new Error('No Data Found', 400);
    }

    return query;
}

export default apiFeatures