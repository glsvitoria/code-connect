"use server";
import { revalidatePath } from "next/cache";

import { CommentType, Post } from "@/types";

import db from "../../../prisma/db";

type IncrementThumbsUpProps = {
  post: Post;
};

export async function incrementThumbsUp({ post }: IncrementThumbsUpProps) {
  // await new Promise((resolve) => setTimeout(resolve, 3000))

  await db.post.update({
    where: {
      id: post.id,
    },
    data: {
      likes: {
        increment: 1,
      },
    },
  });

  revalidatePath("/");
  revalidatePath(`/posts/${post.slug}`);
}

type PostCommentProps = {
  post: Post;
};

export async function postComment(
  { post }: PostCommentProps,
  formData: FormData,
) {
  const author = await db.user.findFirst({
    where: {
      username: "anabeatriz_dev",
    },
  });

  const comment = formData.get("text") as string;

  if (!author || !comment) return;

  await db.comment.create({
    data: {
      text: comment,
      authorId: author.id,
      postId: post.id,
    },
  });

  revalidatePath("/");
  revalidatePath(`/posts/${post.slug}`);
}

type PostReplyProps = {
  post: Post;
  parent: CommentType;
};

export async function postReply(
  { post, parent }: PostReplyProps,
  formData: FormData,
) {
  const author = await db.user.findFirst({
    where: {
      username: "anabeatriz_dev",
    },
  });

  const comment = formData.get("text") as string;

  if (!author || !comment) return;

  await db.comment.create({
    data: {
      text: comment,
      authorId: author.id,
      postId: post.id,
      parentId: parent.parentId ?? parent.id,
    },
  });

  revalidatePath("/");
  revalidatePath(`/posts/${post.slug}`);
}
