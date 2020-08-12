import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT:'5000',
  MONGO_URI: 'mongodb+srv://Chandni:lab314@cluster0-ekwec.mongodb.net/test?retryWrites=true&w=majority',
  JWT_SECRET: 'sl_myJwtSecret'
};
