import express, { Application } from 'express';
import dotenv from 'dotenv'
import authRoute from './routes/auth.route';
import testRoute from './routes/test.route';
import questionRoute from './routes/question.route';
import userRoute from './routes/user.route';
import db from './config/mogodb.config';
import bodyParser from 'body-parser';
import { authenticateJWT } from './middlewares/auth.middleware';

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` })
db.connect()

const router = express.Router();
router.use('/api/auth', authRoute)
router.use(authenticateJWT)
router.use('/api/test', testRoute)
router.use('/api/user', userRoute)
router.use('/api/question', questionRoute)

const app: Application = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(router)

const port = process.env.API_PORT;
app.listen(port, (): void => {
    console.log('SERVER IS RUNNING ON PORT:', port);
});