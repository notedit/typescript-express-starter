import {Server} from './src/server'
import * as http  from 'http'
import * as dddebug from 'debug'


const debug = dddebug('server')
const port = process.env.PORT || 8080


var app = Server.bootstrap().app
app.set('port',port)

const httpServer = http.createServer(app)

//listen on provided ports
httpServer.listen(port)

//add error handler
httpServer.on("error", onError)

//start listening on port
httpServer.on("listening", onListening)


function onError(err:Error){
    debug('error ', err)
}

function onListening(){
    let addr = httpServer.address()
    let bind = typeof addr === "string"
    ? "pipe " + addr
    : "port " + addr.port;
    debug("Listening on " + bind);
}

