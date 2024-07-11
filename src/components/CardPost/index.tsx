"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { incrementThumbsUp, postComment } from "@/app/actions";
import { Post } from "@/types";

import { Avatar } from "../Avatar";
import { Chat } from "../icons/chat";
import { SubmitButton } from "../SubmitButton";
import { Textarea } from "../Textarea";
import styles from "./styles.module.css";
import { ThumbsUpButton } from "./thumbsUpButton";

type CardPostProps = {
  post: Post;
  highlight?: boolean;
};

export const CardPost = ({ post, highlight = false }: CardPostProps) => {
  const handleSubmit = incrementThumbsUp.bind(null, { post });
  const handleSubmitComment = postComment.bind(null, { post });
  const [commentIsOpen, setCommentIsOpen] = useState(false);

  return (
    <>
      <article className={styles.card} style={{ width: "100%" }}>
        <header className={styles.header}>
          <figure style={{ height: highlight ? 300 : 133 }}>
            <Image
              src={post.cover}
              alt={`Capa do post de título: ${post.title}`}
              width={438}
              height={133}
            />
          </figure>
        </header>
        <section className={styles.body}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link href={`/posts/${post.slug}`}>Ver detalhes</Link>
        </section>
        <footer className={styles.footer}>
          <div className={styles.footerActions}>
            <form action={handleSubmit}>
              <ThumbsUpButton />
              <p>{post.likes}</p>
            </form>
            <div
              onClick={() => {
                setCommentIsOpen((prev) => !prev);
              }}
            >
              <Chat />
              <p>{post.comments.length}</p>
            </div>
          </div>
          <Avatar name={post.author.name} imageSrc={post.author.avatar} />
        </footer>
      </article>
      {commentIsOpen && (
        <form
          action={handleSubmitComment}
          className={styles.commentForm}
          onSubmit={() => {}}
        >
          <Textarea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <SubmitButton>Comentar</SubmitButton>
        </form>
      )}
    </>
  );
};
