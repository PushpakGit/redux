export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POSTS = "CREATE_POSTS";

const fetchPosts = (data) =>{
    return {
        type:FETCH_POSTS,
        payload:data
    }
} 

const createPost = (newPost) => {
    return {
        type:CREATE_POSTS,
        newPost
    }
} 

export function fetchPostAsync(){
    return (dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => dispatch( fetchPosts(json) ))
    }
}

export function createPostAsync(data){
    console.log("DAAATAA",data);
    return (dispatch) =>{
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }})
            .then(response => response.json())
            .then(json => { console.log("JSOM",json); dispatch( createPost(json) )})
    }
}