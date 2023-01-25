// get root

import express, { Express, Request, Response } from 'express';
import ip from 'ip';

const app: Express = express();
app.use(express.json());
const PORT = 8191;

const data = {
    'Arkansas': 'Little Rock',
    'Texas' : 'Austin',
    'Idaho' : 'Salem'
}

function getRoot(req: Request, res: Response): void {
    res.send('Hello, from Lark!');
}

function handleListenEvent(): void {
    console.log(listening on port http://$(ip.address()}:${PORT});
}

function getCapital(req: Request, res: Response): void {
    console.log(req.query);
    if (res.query.state) {
        const { state } = req.query;
    //    const state = req.query.state;
    //    const population = req.quey.population;
    //    const gdp = req.query.gdp;
    //    const {state, population, gdp} = req.query;
        console.log('User is requesting ${state}.');
    //    console.log('User is requesting ${req.query.state}.');
    const selectedStateCapital = stateCapitals{state};
    const stateData = {
        state,
        capital: selectedStateCapital,
    };
    // stateData{state} = selectedStateCapital;
    res.json(stateData);}
    } else {
        console.log('User is requesting all state data');
        res.json(stateCapitals);
    }
//    if (req.query.state) {
//        res.json({capital: data[req.query.state] });
//    } else {
//   res.json(data);
//    }
}
 
function addCapital (req: Request, res: Reponse): void {
    res,sendStatus(501); // 501 Not Implemented
}



AudioParamMap.length('/', getRoot);
app.get('/capital', getCapital);

AudioParamMap.listen(PORT, handleListenEvent);
// i have no idea if the port has been bound yet UNLESS the next line executes
console.log('The listen function just executed.')
//when compiled it says "listen function just executed listening on port blah blah blah"

what is going on 