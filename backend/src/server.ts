import { app } from './routes';

const port = 3000;



app.listen(port, () => {
    console.log(`Escutando em http://localhost:${port}`)
});