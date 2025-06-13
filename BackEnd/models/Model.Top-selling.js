// Import mongoose library for MongoDB object modeling
import mongoose from "mongoose";

// Define the schema for a top-selling travel destination
const topSellingSchema = new mongoose.Schema({
    name: { type: String, required: true },      // Name of the top-selling destination (required)
    imageUrl: { type: String, required: true },  // URL of the destination image (required)
    details: { type: String },                   // Additional details about the destination (optional)
});

// Create the TopSelling model using the schema
const ModelTopSelling = mongoose.model("TopSelling", topSellingSchema);

// Export the model for use in other parts of the application
export default ModelTopSelling;