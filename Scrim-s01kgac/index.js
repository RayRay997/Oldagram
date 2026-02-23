import { posts } from '/postsArry.js'

function getPosts(posts) {
    return posts.map(postObj => {
        const {
            name,
            username,
            location,
            avatar,
            post,
            comment,
            likes
        } = postObj
        return `
        <section class="container">
            <div class="post-content-top">
                <img class="avatar avatar-post"src=${avatar}></img>
                <div class="nameLocation">
                    <h2>${name}</h2>
                    <h3>${location}</h3>
                </div>
            </div>
            <div class="post-content-mid">
                <img src=${post}></img>
            </div>
            <div class="post-content-bottom">
                <div class="post-icons">
                    <img class="heart" src="/images/like.png"></img>
                    <img class="comment" src="/images/comment.png"></img>
                    <img class="dm" src="/images/share.png"></img>  
                </div>
                <h2>${likes} likes<h2>
                <h2>${username}<span> ${comment}</span></h2>
            </div>
        </section>
        `
        
        
        
        
    }).join('')
    
}

















document.getElementById('container').innerHTML = getPosts(posts)