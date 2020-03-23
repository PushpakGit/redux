import React from 'react';

const CreatePost = (props) =>{
    return <div style={
        {
            border:"1px solid black",
            boxShadow:"2px 2px 2px #CCC",
            margin:10,
            padding:10
            
        }
    }> 
    <label>Add Title:  </label>
    <input value={props.title} onChange={(e)=>props.onTitleChange(e)} />
    <br />
    <label>Add Body: </label>
    <input value={props.body} onChange={(e)=>props.onBodyChange(e)} />

    <br />
    <button style={{width:250}} onClick={()=> props.onAddClick() } >Add</button>
    </div>
}

export default CreatePost;