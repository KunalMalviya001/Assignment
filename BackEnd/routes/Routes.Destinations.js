// Import express framework and the Destination model
import express from 'express';
import ModelDestination from '../models/Model.Destinations.js';

const router = express.Router();

// GET route to fetch all travel destinations from the database
router.get('/', async (req, res) => {
 try {
    const data = await ModelDestination.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
