import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


// handles ES modules __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware function to log request details

const logRequestDetails = (req, res, next) => {
    const log = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`
    const logFile = path.join(__dirname, "../logs/request.log")

    fs.appendFile(logFile, log, (err)=>{
        if(err) console.log('Failed to log request', err)
    })

    next()
}

export default logRequestDetails