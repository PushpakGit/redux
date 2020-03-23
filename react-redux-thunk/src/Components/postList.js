import React from 'react';
import { connect } from 'react-redux';
import { fetchPostAsync, createPostAsync } from '../Actions/index';

import CreatePost from './create-post'

class PostsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            body:''
        }
    }

    renderAllPosts = () =>{
        return this.props.posts.map(post=>
            <div key={post.id}>
                <label>Title: </label><div>{post.title}</div>
                <label>Body: </label><div>{post.body}</div>
                <hr />
            </div>)
    }

    addPost = () => {
        let t = this;
        console.log(this.state.title)
        this.props.onCreatePostAsync({
                title:this.state.title,
                body:this.state.body,
                userId:1
        });
        t.setState({title:'',body:''})
    }

    componentDidMount(){
        console.log(this.props)
        this.props.onfetchPostAsync()
    }

    render(){
        return <div>
            <CreatePost title={this.state.title} 
                        body={this.state.body} 
                        onAddClick={this.addPost}
                        onTitleChange={(e)=>this.setState({title:e.target.value})}
                        onBodyChange={(e)=>this.setState({body:e.target.value})}
                         />
            {
                this.renderAllPosts()
            }
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onfetchPostAsync: () => {
            dispatch(fetchPostAsync());
        },
        onCreatePostAsync:(data)=>{
            console.log("DD",data)
            dispatch(createPostAsync(data))
        }
    };
  };

function mapStateToProps(state){
    console.log(state)
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsList);