var posts=["2026/03/31/hello-world/","2026/07/07/Git基础与核心操作（上）/","2026/07/12/Git基础与核心操作（下）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };