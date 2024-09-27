var posts=["2024/07/12/dream/","2077/07/07/board/","2024/04/19/hello-world/","2024/05/09/diary0/","2024/05/27/这个蘑菇可以吃吗/","2024/05/09/吾心于我即一王国/","2024/05/20/换锁心得与技巧/","2024/06/02/flower/","2024/09/20/符号主义/","2024/09/25/The-Intelligence-Age/","2024/09/27/读取ABB关节与坐标数据/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };