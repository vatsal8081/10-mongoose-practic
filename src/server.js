import './config/env'
import { app } from './app';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
.then(s => console.log('DB connection sucessful..'))
.catch(e => console.log(`errr in DB connection.. ${e}`))


const port = process.env.PORT || 8000
app.listen(port, () => {
 
    console.log(`listerning on.... ${port}`)
})


