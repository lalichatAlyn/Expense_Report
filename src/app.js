import express from "express"; 
import { client } from "./utills/db.js";


async function init() {
    const app = express();
    const port = 4000;
  
    await client.connect();
  
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
  
    app.get('/', (req, res) => {
        res.send('Hello World');
      });
  
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  }
  
  init();