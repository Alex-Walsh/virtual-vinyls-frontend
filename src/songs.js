import React, { Component } from 'react';
import axios from 'axios';

class Songs extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs: [],
            count: 0,

            //will be for if the client doesn't want to/can't scan qr code
            requestedAlbumCode: this.props.albumCode
        }
    }
    
//TODO: make sure that it only makes one request !!! very important or else whole app crashes

//TODO:finish getting data, then work on ui
componentDidUpdate(prevProps,prevState){
    console.log("Component did update");
    console.log(prevProps);
    let rawAlbumCode = prevProps.albumCode;
    let passableAlbumCode = rawAlbumCode.toString();
    console.log("passable album code: ", passableAlbumCode);
    if(this.state.count < 3) {
    axios.get("https://us-central1-virtual-vinyls.cloudfunctions.net/api/albums", {
        params: {
            album: passableAlbumCode
        }
    }).then((result) => {
        console.log("songs", result.data.songs);
        console.log(this.state.songs);
        if(result.data.songs.length !== 0){
            this.setState({
                songs: result.data.songs 
            });
        }
        console.log(this.state.songs);
    }).catch((error) => {
        console.log(error);
    });

}
this.setState({
    count: count+1
});
}


    render() {
        return (
            <div className="songs">
                {this.state.songs.map((song, index) => (
                    <h1 key={index}>Song: {song} </h1>
                ))}
            </div>
        );
    }
}

export default Songs;
