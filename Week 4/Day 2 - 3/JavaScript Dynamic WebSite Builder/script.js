let createCard = ((titleVideo,channelName,views,timeSpan,duration,thumbnail)=>{
let viewsNumber = (views<1000) ? (views) : (views>1000000)? (views/1000000 + "M") : (views/1000 + "K");
let html = `<div class="card">
        <div class="image">
          <img
            src="${thumbnail}"
            alt=""
          />
          <div class="capsule">${duration}</div>
        </div>
        <div class="text">
          <h1>${titleVideo}</h1>
          <p>${channelName} .${viewsNumber} views . ${timeSpan} months ago</p>
        </div>
      </div>`
      document.querySelector(".container").innerHTML += html;
});

createCard(`Introduction to Sigma Batch OP | Video # 2`,`CodeWithHassan`,56000,7,`36:21`,`https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA`);