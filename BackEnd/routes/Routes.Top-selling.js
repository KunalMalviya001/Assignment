// Import express framework and the TopSelling model
import express from 'express';
import ModelTopSelling from '../models/Model.Top-selling.js';

const router = express.Router();

// GET route to fetch top 6 selling travel destinations from the database
router.get('/', async (req, res) => {
 try {
    const data = await ModelTopSelling.find().limit(6); // mock top-selling
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
