import React from "react";
import Header from "./components/Header";
function App() {
  //   const title = "Blog Post";
  //   const body = "This is my blog post";
  //   const comments = [
  //     { id: 1, text: "Comment one" },
  //     { id: 2, text: "Comment two" },
  //     { id: 3, text: "Comment three" },
  //   ];

  //   const loading = false;
  //   const commentBlock = (
  //     <div className="comments">
  //       Comments({comments.length})
  //       <ul>
  //         {comments.map((comment, index) => (
  //           <li key={index}>{comment.text}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  //   const showComment = true;
  //   if (loading) return <h1>Loading...</h1>;
  //   return (
  //     <div className="container">
  //       <h1>My app </h1>

  //       {showComment && commentBlock}
  //     </div>
  //   );
  return (
    <>
      <Header />
      <div className="container">
        <h1>My App</h1>
      </div>
    </>
  );
}

export default App;
