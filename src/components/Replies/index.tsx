"use client";

import { useEffect, useState } from "react";

import { CommentType, CommentWithChildrenType, Post } from "@/types";

import { Comment } from "../Comment";
import { Reply } from "../Reply";
import styles from "./styles.module.css";

type RepliesProps = {
  post: Post;
  comment: CommentWithChildrenType;
};

export const Replies = ({ post, comment }: RepliesProps) => {
  const [showReplies, setShowReplies] = useState(false);
  const [replyIsOpen, setReplyIsOpen] = useState(false);
  const [replySelected, setReplySelected] = useState<CommentType | null>(null);

  const [replies, setReplies] = useState<CommentWithChildrenType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(`/api/comment/${comment.id}/replies`);
    const data = await response.json();
    setReplies(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (showReplies) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showReplies]);

  return (
    <div>
      <div className={styles.replies}>
        <button
          className={styles.btn}
          onClick={() => {
            setShowReplies((prev) => !prev);
          }}
        >
          {showReplies ? "Ocultar respostas" : "Ver respostas"}
        </button>
        {showReplies && (
          <ul
            style={{
              marginLeft: 48,
            }}
          >
            {isLoading ? (
              <p>Carregando...</p>
            ) : (
              replies.map((reply) => (
                <li key={reply.id}>
                  <Comment comment={reply} />
                  <button
                    className={styles.btnReply}
                    onClick={() => {
                      setReplyIsOpen((prev) => !prev);
                      setReplySelected(reply);
                    }}
                  >
                    Responder
                  </button>
                  {replyIsOpen && replySelected === reply && (
                    <Reply
                      post={post}
                      comment={replySelected}
                      onSuccess={() => {
                        setReplyIsOpen(false);
                      }}
                    />
                  )}
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
};
