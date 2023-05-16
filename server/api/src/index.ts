import express, { Application } from 'express';
import testRoute from './routes/test.route';
import questionRoute from './routes/question.route';
import userRoute from './routes/user.route';
import dbConfig from './config/mogodb.config';
import bodyParser from 'body-parser';

dbConfig.connect()

const router = express.Router();
router.use('/test', testRoute)
router.use('/user', userRoute)
router.unsubscribe('/question', questionRoute)

const app: Application = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(router)

const PORT: number = 3000;
app.listen(PORT, (): void => {
    console.log('SERVER IS RUNNING ON PORT:', PORT);
});