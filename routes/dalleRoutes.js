import express from 'express';
import * as dotenv from 'dotenv';
import { OpenAI } from 'openai'; // Ensure you're using the correct OpenAI package

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure your API key is correct
});

router.route('/').get((req, res) => {
    res.send('Hello from Intell_AI!');
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        // Updated to use the correct method images.generate()
        const aiResponse = await openai.images.generate({
            prompt: prompt,
            n: 1,
            size: '1024x1024',
        });

        // Updated to match new response structure
        const image = aiResponse.data[0].url;

        res.status(200).json({ photo: image });
    } catch (error) {
        console.error(error);
        res.status(500).send(error?.response?.data?.error?.message || 'An error occurred');
    }
});

export default router;
