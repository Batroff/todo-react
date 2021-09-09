import './App.scss';
// import { io } from 'socket.io-client';

import {Home} from "pages/home/Home";

function App() {
  // const socket = io('http://localhost:5000', {
  //     transports: ["websocket", "polling"]
  // });
  //
  // socket.on('connection_error', () => {
  //     console.log('Connection error! Switching connection type to HTTP Polling...')
  //     socket.io.opts.transports = ["polling", "websocket"];
  // });
  //
  // socket.on('connect', function() {
  //   console.log('connect')
  //   socket.emit('test', {status: 'OK'})
  // })
  return (
    <main role="main" className="main">
        <Home/>
    </main>
  );
}

export default App;
