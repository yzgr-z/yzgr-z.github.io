var posts=["2026/07/07/Git 基础与核心操作 — 入门教程/","2026/03/31/hello-world/","2026/07/12/基础与核心操作（下）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };