"use server";

const { connectToDatabase } = require('../mongodb');
let client = null;

export default async function submitUser(formData) {
    try {
        client = await connectToDatabase();
    } catch (error) {
        console.error('Error during login:', error);
        return 'Server Side Issue';
    }
    
    try {
        const { firstName, lastName, username, password } = formData;

        if (client) {
            const db = client.db();
            const collection = db.collection('SignUpinfo');

            // Check if the username already exists in the database
            const existingUser = await collection.findOne({ username });

            if (existingUser) {
                console.log('Username already exists. Data not inserted.');
                return 'Username already exists. Data not inserted.';
            }

            const result = await collection.insertOne({
                firstName,
                lastName,
                username,
                password
            });

            console.log('Data inserted:', result);

            // await collection.updateOne(
            //     { username },
            //     { $set: {authToken:"dsfdsfdsfsdfdf2343"} }
            // );

            return 'User Created Successfully';
        } else {
            console.error('MongoDB client is not available.');
            return 'Server Side Issue';
        }
    } catch (error) {
        console.error('Error inserting data:', error);
        return 'Server Side Issue';
    }
}