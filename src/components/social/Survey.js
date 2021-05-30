import React, { useState } from 'react'
import '../../css/Survey.css'
import db from '../../firebase';
import {useAuth} from "../../contexts/AuthContext";
import { storage } from '../../firebase'
import firebase from 'firebase'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { v1 as uuid } from "uuid";
 
function Survey({handleClose }) {
    const {currentUser} = useAuth();
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [progress, setProgress] = useState(0);
    const [confirm, setImgUploadConfirm] = useState('');

    function create() {
        const id = uuid();
        setLink(id);
    }

    const uploadFileWithClick = () => {
        document.getElementsByClassName('messageSender__imgFile')[0].click()
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (image === '') {
            db.collection("posts").add({
                message: message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                profilePic: currentUser.photoURL,
                username: currentUser.displayName,
                image: image,
                userId: currentUser.uid,
                title: title,
                sessionLink: link
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
                                message: message,
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                profilePic: currentUser.photoURL,
                                username: currentUser.displayName,
                                image: url,
                                userId: currentUser.uid,
                                title: title,
                                sessionLink: link
                            });
                            setProgress(0);
                            setImage(null);
                        })
                }
            )
        }
        setLink('');
        setMessage('');
        setTitle('');
        setImgUploadConfirm('');
        handleClose();
    }

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
            setImgUploadConfirm('Image is added and will be displayed after posting!');
        }
    }
 
    return (
        <div className="survey-modal">
            <label>
                Session Title <br />
                <input onChange={(e) => setTitle(e.target.value)} type="text" value={title} placeholder="Session Title" />
            </label>
            <br />
            <label>
                Session Description <br />
                <input onChange={(e) => setMessage(e.target.value)} type="text" value={message} placeholder="Session Description" />
            </label>
            <br />
            <label>
                Session Link <br />
                <input onChange={(e) => setLink(e.target.value)} type="text" value={link} placeholder="Session Link" />
                <button onClick={create}>Generate Link</button>
            </label>
            <div className="messageSender__option" onClick={uploadFileWithClick}>
                <PhotoLibraryIcon style={{ color: "green" }} />
                <input type="file" className="messageSender__imgFile" onChange={handleChange} />
                <p style={{color:"black", margin: 0, paddingLeft: "8px"}}>Photo/Video</p>
            </div>
            <h4>{confirm}</h4>
            <br />
 
            <button onClick={handleSubmit} type="submit" className="register__register">Submit</button>
        </div>
    )
}

export default Survey
