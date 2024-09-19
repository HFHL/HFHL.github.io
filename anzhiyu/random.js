var posts=["2024/07/12/dream/","2077/07/07/board/","2024/04/19/hello-world/","2024/05/09/diary0/","2024/05/27/这个蘑菇可以吃吗/","2024/05/09/吾心于我即一王国/","2024/05/20/换锁心得与技巧/","2024/06/02/flower/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };