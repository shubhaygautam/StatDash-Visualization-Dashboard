const Data = require('../models/Data');

exports.getData = async (req, res) => {
    try {
        // Retrieve data from the database
        const data = await Data.find({}).limit(30);
        // Send the retrieved data as a JSON response
        res.status(200).json(data);
    } catch (error) {
        // If an error occurs, log the error and send a 500 status with an error message
        console.error('Error retrieving data:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.addData = async (req, res) => {
    try {
        // Create a new instance of the Data model with the request body
        const newData = new Data(req.body);
        // Save the new data to the database
        const savedData = await newData.save();
        // Send a 201 status with the saved data as a JSON response
        res.status(201).json(savedData);
    } catch (error) {
        // If an error occurs, log the error and send a 500 status with an error message
        console.error('Error adding data:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
