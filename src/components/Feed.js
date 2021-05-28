import React from 'react';
import Post from "./Post";
import "../css/Feed.css";
import {ReactComponent as Party} from '../svg/undraw_Party_re_nmwj.svg';

function Feed() {
    return (
        <div className = "feed">
            <div className="row" style={{ padding: 0, margin: 0 }}>
                <div className="col-md-7" style={{ paddingTop: 20 }}>
                    <div className = "feed__header">
                        <h2>Hey, there <strong>User</strong>! </h2>
                    </div>
                    <div className = "feed__subheader">
                        <h6>World’s a party with you in it! What do you want to do today?</h6>
                    </div>
                    <div className = "feed__starter">
                        <h4>Continue Listening</h4>
                        {/* <div className = "feed__svg">
                            <Party />
                        </div> */}
                    </div>
                    
                    <div className = "posts">
                        <Post pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVKI2IROLwUPrQjdsoYHfo0Xbg-iC9VD7Ijw&usqp=CAU" 
                        author = "Grandpa" title = "Story session" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Feed
