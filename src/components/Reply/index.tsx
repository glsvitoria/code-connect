import { postReply } from "@/app/actions";
import { CommentType, CommentWithChildrenType, Post } from "@/types";

import { SubmitButton } from "../SubmitButton";
import { Textarea } from "../Textarea";
import styles from "./styles.module.css";

type ReplyProps = {
  post: Post;
  comment: CommentType | CommentWithChildrenType;
  onSuccess: () => void;
};

export const Reply = ({ post, comment, onSuccess }: ReplyProps) => {
  const handleSubmitReply = postReply.bind(null, {
    post,
    parent: comment,
  });
  return (
    <form
      action={handleSubmitReply}
      className={styles.commentForm}
      onSubmit={onSuccess}
    >
      <Textarea required rows={8} name="text" placeholder="Digite aqui..." />
      <SubmitButton>Comentar</SubmitButton>
    </form>
  );
};
