# AI Image Generation Platform

## Description
A full-stack application that allows users to generate and share AI-created images using DALL-E technology.

## Features
- AI image generation from text prompts
- Community image sharing
- Search functionality
- Random prompt generator
- Image downloads

## Tech Stack
- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Storage: Cloudinary
- AI: OpenAI DALL-E

## Setup
1. Clone the repository
2. Install dependencies
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```
3. Create .env file in server directory with:
   ```
   OPENAI_API_KEY=your_key
   MONGODB_URL=your_mongodb_url
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```
4. Start the server:
   ```bash
   cd server && npm start
   ```
5. Start the client:
   ```bash
   cd client && npm run dev
   ```

## Contributing
Pull requests are welcome.

## License
[MIT](https://choosealicense.com/licenses/mit/)

OPENAI_API_KEY = "your_openai_api_key"
MONGODB_URL = "your_mongodb_url"
CLOUDINARY_CLOUD_NAME = "your_cloud_name"
CLOUDINARY_API_KEY = "your_api_key"
CLOUDINARY_API_SECRET = "your_api_secret"

ai-image-generator/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── utils/
│   └── package.json
├── server/
│   ├── mongodb/
│   ├── routes/
│   ├── index.js
│   └── package.json
├── .gitignore
└── README.md
