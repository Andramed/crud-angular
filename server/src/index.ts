import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors'; // importa modulul cors

const app = express();

app.use(cors()); // folosește middleware-ul cors

app.get('/test', (req, res) => {
    console.log('try to make a conection with server');
    res.json({message: "Hello world"})
})

app.listen('3000', () => {
    console.log('app run on the port 3000');
})

