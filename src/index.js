import express from 'express';
import cors from 'cors';
import { CategoryRouter } from './components';
import { ProductRouter } from './components';

const app = express();
app.use(express.json());
app.use(cors());

app.use("/category", CategoryRouter)
app.use("/product", ProductRouter)
//al poner cero espcificamos que use un puerto libre en la computadora
//solo se usa para desarrollo

 const PORT = 3000

app.listen(PORT, () => 
    console.log(
        `Server is running on port ${PORT}`
        )
)