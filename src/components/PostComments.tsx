import React, { useState } from "react";

function PostComments() {

  const [comment, setComment] = useState<string>(""); 
  const [comments, setComments] = useState<string[]>([]); 

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="bg-blue-950 rounded-xl shadow-md p-6 max-w-md mx-auto mt-12">
      {/* Post principal */}
      <img className='w-90 h-64 mx-auto mb-4 rounded-lg object-cover'src="https://larepublica.cronosmedia.glr.pe/migration/images/APD5AHR5YBA7VJUHPP3KOXXF3Q.jpg" alt="NCT en Colombia" />
      <p className="text-white mb-6"> 
        ¡Thanks for everything Colombia!
      </p>

      {/* Input para nuevo comentario */}
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Escribe un comentario..."
          className="flex-1 border border-gray-300 rounded-lg p-2 bg-white"
        />
        <button
          onClick={handleAddComment}
          className="bg-white text-blue px-4 py-2 rounded-lg hover:bg-white transition-colors"
        >
          Comentar
        </button>
      </div>

      {/* Lista de comentarios */}
      <h3 className="text-lg font-semibold text-white mb-2">Comentarios:</h3>
      {comments.length === 0 ? (
        <p className="text-white">No hay comentarios todavía. ¡Sé el primero!</p>
      ) : (
        <ul className="space-y-2">
          {comments.map((c, index) => (
            <li
              key={index}
              className="bg-white border border-gray-300 rounded-md p-2"
            >
              {c}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostComments;
