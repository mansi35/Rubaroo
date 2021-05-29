import React, { useState } from 'react'
import "../../css/MessageSender.css"
import { Avatar } from '@material-ui/core';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import {useAuth} from '../../contexts/AuthContext';
import { storage } from '../../firebase'
import db from '../../firebase'
import firebase from 'firebase'

function MessageSender() {
    const {currentUser} = useAuth();
    const [input, setInput] = useState('');
    const [image, setImage] = useState('');
    const [progress, setProgress] = useState(0);
    const [confirm, setImgUploadConfirm] = useState('');

    const uploadFileWithClick = () => {
        document.getElementsByClassName('messageSender__imageFile')[0].click()
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (image === '') {
            db.collection("posts").add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                profilePic: currentUser.photoURL,
                username: currentUser.displayName,
                image: image,
                likes: 0,
                userId: currentUser.uid
            })
        } else {
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                (error) => {
                    console.log(error);
                    alert(error.message);
                },
                () => {
                    storage
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            db.collection("posts").add({
                                message: input,
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                profilePic: currentUser.photoURL,
                                username: currentUser.displayName,
                                image: url,
                                likes: 0,
                                userId: currentUser.uid
                            });
                            setProgress(0);
                            setImage(null);
                        })
                }
            )
        }
        setInput("");
        setImgUploadConfirm('');
    }

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
            setImgUploadConfirm('Image is added and will be displayed after posting!');
        }
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={currentUser.photoURL} />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="messageSender__input" placeholder={`What's on your mind `+ currentUser.displayName + `?`} />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                    <h4>{confirm}</h4>
                </form>
            </div>
            <progress value={progress} max="100" className={`messageSender__progress ${progress && 'show'}`} />
            <div className="messageSender__bottom">
                <div className="messageSender__option" onClick={uploadFileWithClick}>
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <input type="file" className="messageSender__imageFile" onChange={handleChange} />
                    <p style={{color:"black", margin: 0, paddingLeft: "8px"}}>Photo/Video</p>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
