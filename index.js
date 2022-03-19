// Require
require('dotenv').config()
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const { Deepgram } = require('@deepgram/sdk');
const fs = require('fs')

// configure
app.use(express.static('public'));
const deepgram = new Deepgram(process.env.DG_KEY);
const deepgramLive = deepgram.transcription.live({ utterances: true });


// Logic
io.on('connection', (socket) => {
    console.log(`Connected at ${new Date().toISOString()}`);
    socket.on('microphone-stream', (data) => {
        // console.log(data)
        deepgramLive.send(data)
    })
})

// Run
http.listen(3000, console.log(`Started at ${new Date().toISOString()}`))