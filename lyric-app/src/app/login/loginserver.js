"use server";

const { connectToDatabase } = require('../mongodb');
let client = null;

export default async function loginUser(formData) {
    try {
        client = await connectToDatabase();
    } catch (error) {
        console.error('Error during login:', error);
        return 'Server Side Issue';
    }
    
    try {
        const { username, password } = formData;

        if (client) {
            const db = client.db();
            const collection = db.collection('SignUpinfo');

            // Check if the username already exists in the database
            const existingUser = await collection.findOne({ username });

            if (!existingUser) {
                return 'Username does not exist boss';
            }

            if (existingUser.password != password) {
                return 'Wrong password';
            }

            return 'User Logged In Successfully';
        } else {
            console.error('MongoDB client is not available.');
            return 'Server Side Issue';
        }
    } catch (error) {
        console.error('Error inserting data:', error);
        return 'Server Side Issue';
    }
}