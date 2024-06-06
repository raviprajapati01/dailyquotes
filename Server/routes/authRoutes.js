import express from 'express'
import { getQuote } from "../controller/Auth.js";

const router = express.Router();

router.get('/quotes', getQuote);

export default router;