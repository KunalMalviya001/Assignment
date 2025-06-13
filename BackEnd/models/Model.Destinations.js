// Import mongoose library for MongoDB object modeling
import mongoose from "mongoose";

// Define the schema for a travel destination
const destination = new mongoose.Schema({
    name: { type: String, required: true },      // Name of the destination (required)
    imageUrl: { type: String, required: true },  // URL of the destination image (required)
    price : { type: Number, required: true },    // Price for the destination (required)
    details: { type: String },                   // Additional details about the destination (optional)
});

// Create the Destination model using the schema
const ModelDestination = mongoose.model("Destination", destination);

// Export the model for use in other parts of the application
export default ModelDestination;