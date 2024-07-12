import Image from "next/image";

import { CommentType } from "@/types";

import styles from "./styles.module.css";

type CommentProps = {
  comment: CommentType;
};

export const Comment = ({ comment }: CommentProps) => {
  return (
    <div className={styles.comment}>
      <Image
        src={comment.author.avatar}
        width={32}
        height={32}
        alt={`Avatar do ${comment.author.name}`}
      />
      <strong>@{comment.author.name}</strong>
      <p>{comment.text}</p>
    </div>
  );
};
