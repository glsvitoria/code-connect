"use client";

import { useState } from "react";

import { CommentWithChildrenType, Post } from "@/types";

import { Comment } from "../Comment";
import { Replies } from "../Replies";
import { Reply } from "../Reply";
import styles from "./styles.module.css";

type CommentListProps = {
  post: Post;
  comments: CommentWithChildrenType[];
};

export const CommentList = ({ post, comments }: CommentListProps) => {
  const [replyIsOpen, setReplyIsOpen] = useState(false);

  return (
    <section className={styles.comments}>
      <h2>Comentários</h2>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <Comment comment={comment} />
              <button
                className={styles.btn}
                onClick={() => {
                  setReplyIsOpen((prev) => !prev);
                }}
              >
                Responder
              </button>
              <Replies post={post} comment={comment} />
              {replyIsOpen && (
                <Reply
                  post={post}
                  comment={comment}
                  onSuccess={() => {
                    setReplyIsOpen(false);
                  }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
