import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from 'cors';
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { User } from "./entity/User"


    const app = express()
    


    // setup express app here
    // ...
	app.use(express.json());
	app.use(cors());
	app.use(bodyParser.json());

	app.get('/test', (req: Request, res: Response) => {
		console.log('try to connect');
		
		res.status(200).send({message: 'message'})
	})
	app.post('/test', (req: Request, res: Response) => {
		console.log('try to connect post');
		console.log(req.body);
		
		res.status(200).send({message: 'message'})
	})
    // start express server
    app.listen(3000)  
	  

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")


