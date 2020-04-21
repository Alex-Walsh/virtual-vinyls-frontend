import React,{ Component } from "react";


//TODO: actually make this component functional...it is currently just a dummy component
class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: ''
        }
    }

    componentDidMount(){
        this.setState({

            //TODO: AXIOS.GET(PARAMS) THEN PUT HERE IN STATE
            link: "https://storage.googleapis.com/virtual-vinyls.appspot.com/roses.mp3?GoogleAccessId=virtual-vinyls%40appspot.gserviceaccount.com&Expires=2209006800&Signature=tuJQDkQx5bBE9J2RcJFM70YD7DOaZvMm4544pFQ9sC2Lm%2BEho00TKLiVqVKFMp0OeYx0wC7%2FJaX6MAVUvwLj8Dn3YzzmHj1W5KMJ%2BdZQN7FsPpVrc4Ff9V0690L1zMBvRWvRsOsgdHRr12bUbtnRHLau%2BNpbXdpKl1wLitKF1Jjjw%2B%2BSgprDFBZ7FfgDzozZRPqRklL0xqVir1A%2FPZ%2F2BQH9Kg%2FzGHjtufM%2FLUmk0fJtLynRuPJ0YQCF%2FHmDTN6DKAGNdiHfR3UWuwcszah6KXRtA9pcks%2FD3lGOvQgUQC3QPeCMYxJQGGuF14BFIgB%2FFz1d0oMiRPFsfi3H9QLBow%3D%3D"
        });
    }
     
    render() {
        return (
            <div className="play">
                <audio src={this.state.link} controls autoPlay />
            </div>
        );
    }
}

export default Play;