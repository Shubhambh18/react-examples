import React from 'react';
import FeedBack from '../FeedBack/FeedBack.react';



class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            likeCount:1,
            unLikeCount:1
        }
        this.state={items:[]};
    }
 

    increamentLikes=()=>{
        console.log("Like Button Hit")
        this.setState( {likeCount :this.state.likeCount+1});
    }
    increamentDisLikes=()=>{
        console.log("Like Button Hit")
        this.setState( {unLikeCount :this.state.unLikeCount+1});
    }
    render() {
        return (
            <div >
                    <article>
                            <h1>
                                Who can Donate Blood
                            </h1>
                            <p>
                            You are eligible to donate blood if you are in good health, weigh at least 110 pounds and are 17 years or older.

                            You are not eligible to donate blood if you:
                            <ul >
                                <li>Have ever used self-injected drugs (non-prescription)</li>
                                <li>Had hepatitis</li>
                                <li>Are in a high-risk group for AIDS</li>
                            </ul>
                            
                                      
                            </p>
                    </article>
                    <p>
                       <span> Likes : </span> {this.state.likeCount} <br/><br/>
                       <span> DisLikes : </span> {this.state.unLikeCount} <br/><br/>
                        <FeedBack action={this.increamentLikes} action2={this.increamentDisLikes}></FeedBack>
                   

                       {/* <button className='fa fa-thumbs-up' onClick={this.increament}></button> */}
                    </p>
                    
            </div>
        );
    }
}

export default Blog;