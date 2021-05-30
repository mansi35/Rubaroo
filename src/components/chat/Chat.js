import React, {useState, useEffect} from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert } from '@material-ui/icons';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { Link, useParams } from 'react-router-dom';
import db from '../../firebase';
import "../../css/Chat.css";
import firebase from "firebase";
import {useAuth} from "../../contexts/AuthContext";
import { v1 as uuid } from "uuid";

function Chat() {
    var [input, setInput] = useState("");
    const {roomId, roomType} = useParams();
    const [roomName, setRoomName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [messages, setMessages] = useState([]);
    const {currentUser} = useAuth();
    var [id, setId] = useState('');
    var [open, setOpen] = useState(true);

    async function listenMessage() {
        const accessToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjQ2Mjg3MTYxODMzNTUzOTIiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiN2R4bktnVFh6UUJWSXdWZzFJU2FXUGlwUHgyS1NsN1hAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjIyMjk4MDIzLCJleHAiOjE2MjIzODQ0MjMsImF6cCI6IjdkeG5LZ1RYelFCVkl3VmcxSVNhV1BpcFB4MktTbDdYIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.PKOU3ZMaZ3u7ZW4GbgBEzr4-h1Ks2uFCnu9OTX8McqLj_p7drJoZXEpHyFENdCu1eRTwYccqvq0qnpJ7_MLP0VOvaD429ZA_W3PMBuBH98P_jUKf6NPzRcZBU_It8WFBNPYIcR7dGpxh7XyXujcHI-SMzUqUZeO9Nw1QEnKNgXPRjhCkA2GcyPLcviK-r49I5Bql0bI90NB3u6PmFbBNBY1iKvKh1_KDpd0ZQRyhTthJAz_f3XxHq6v80J3c5NkRO9A_MmeAjcJtXDntU0oAGO1LS_bY1E7Oz5KtWZj2-lw_TLg0yr3KRBeRa5RP_Cr1C6V5UTsQx-F72b8y4XHUrw";
        const uniqueMeetingId = btoa("user@example.com");
        const symblEndpoint = `wss://api.symbl.ai/v1/realtime/insights/${uniqueMeetingId}?access_token=${accessToken}`;

        const ws = new WebSocket(symblEndpoint);
        // alert("Socket opened!")

        if (!open) {
            ws.close();
        }
        else {

        ws.onmessage = (event) => {
            // You can find the conversationId in event.message.data.conversationId;
            const data = JSON.parse(event.data);
            
            if (data.type === 'message' && data.message.hasOwnProperty('punctuated')) { // Speech to text
                setInput(data.message.punctuated.transcript);
            }

            // alert(`Response type: ${data.type}. Object: `, data);
        }

        ws.onopen = (event) => {
            ws.send(JSON.stringify({
              type: 'start_request',
              meetingTitle: 'Websockets How-to', // Conversation name
              insightTypes: ['question', 'action_item'], // Will enable insight generation
              config: {
                confidenceThreshold: 0.5,
                languageCode: 'en-US',
                speechRecognition: {
                  encoding: 'LINEAR16',
                  sampleRateHertz: 44100,
                }
              },
              speaker: {
                userId: 'example@symbl.ai',
                name: 'Example Sample',
              }
            }));
        };

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });

        const handleSuccess = (stream) => {
        const AudioContext = window.AudioContext;
        const context = new AudioContext();
        const source = context.createMediaStreamSource(stream);
        const processor = context.createScriptProcessor(1024, 1, 1);
        const gainNode = context.createGain();
        source.connect(gainNode);
        gainNode.connect(processor);
        processor.connect(context.destination);
        processor.onaudioprocess = (e) => {
            // convert to 16-bit payload
            const inputData = e.inputBuffer.getChannelData(0) || new Float32Array(this.bufferSize);
            const targetBuffer = new Int16Array(inputData.length);
            for (let index = inputData.length; index > 0; index--) {
                targetBuffer[index] = 32767 * Math.min(1, inputData[index]);
            }
            // Send audio stream to websocket.
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(targetBuffer.buffer);
            }
        };
        };


    handleSuccess(stream);
    }
    setOpen(!open);
    }

    useEffect(() => {
        console.log(roomId, roomType)
        if (roomId) {
            db.collection('users').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().userName);
                setProfilePic(snapshot.data().profilePic)
            });

            db.collection('users').doc(roomId).collection('friendMessages').orderBy('timestamp', 'asc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map((doc) => doc.data())))
            );
        }
    // eslint-disable-next-line
    },[roomId])

    const sendMessage = (e, customInput) => {
        e.preventDefault();
        if (customInput) {
            input = customInput;
        }
        console.log("You typed >>>> ", input);
        db.collection('users').doc(roomId).collection('friendMessages').add({
            message: input,
            name: currentUser.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        db.collection('users').doc(currentUser.uid).collection('friendMessages').add({
            message: input,
            name: currentUser.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    }

    function create() {
        var uid = uuid();
        setId(uid);
        var customInput = `${currentUser.displayName} is inviting you to shop virtually! Please click on this message to join! ${uid}`;
        console.log(customInput.slice(0, customInput.length-36))
        var clickEvent = new Event( 'click' );
        sendMessage(clickEvent, customInput);
    }

    if (currentUser)
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={profilePic}/>
                <div className="chat__headerInfo">
                    <h3 style={{color: 'white'}}>{roomName}</h3>
                    <p style={{color: 'white'}}>Last Seen{" "}
                    {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton onClick={create}>
                        <Link to={`/room/${id}`} target="_blank">
                            <VideoCallIcon fontSize="large" />
                        </Link>
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert  />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${message.name === currentUser.displayName && "chat__receiver"}`}>
                        <span className="chat__name">{message.name}</span>
                        {!message.imageUrl? <span className="d-none"></span> : 
                        <div>
                        <Link to="/">
                            <img height="250" src={message.imageUrl} alt="" /><br />
                        </Link>
                        </div>
                        }
                        {message.message.startsWith(`${message.name} is inviting you to shop virtually! Please click on this message to join!`) ? 
                            <span className="d-none">{id = message.message.slice(message.message.length-36)}</span> : 
                            <span></span>
                        }
                        <span className="chat__boxmessage">{id !== '' ? 
                            <div>
                            <Link to={`/room/${id}`} target="_blank">
                                {message.message.slice(0, message.message.length-36)}
                            </Link> 
                            {id=''}
                            </div>
                            : <span>{message.message}</span>
                        }</span>
                        <span className="chat__timestamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon fontSize="large" style={{color: '#eff2f5'}}/>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button type="submit" onClick={sendMessage}> Send a Message</button>
                </form>
                <button type="submit" onClick = {listenMessage}>Send</button>
            </div>
        </div>
    )
}

export default Chat