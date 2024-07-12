import { redirect } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

import { CardPost } from "@/components/CardPost";
import { CommentList } from "@/components/CommentList";
import logger from "@/logger";
import { PostWithCommentsChildrenType } from "@/types";

import db from "../../../../prisma/db";
import styles from "./page.module.css";

async function getPostBySlug(
  slug: string,
): Promise<PostWithCommentsChildrenType | null> {
  try {
    const post = await db.post.findFirst({
      where: {
        slug,
      },
      include: {
        author: true,
        comments: {
          include: {
            author: true,
            children: {
              include: {
                author: true,
              },
            },
          },
          where: {
            parentId: null,
          },
        },
      },
    });

    if (!post) {
      throw new Error(`Post com slug ${slug} não foi encontrado`);
    }

    const processedContent = await remark().use(html).process(post.markdown);
    const contentHtml = processedContent.toString();
    post.markdown = contentHtml;

    logger.info("Post carregado com sucesso");

    return post;
  } catch (error) {
    logger.error("Falha ao obter o post com o slug: ", {
      slug,
      error,
    });
  }

  redirect("/not-found");
}

type PagePostProps = {
  params: {
    slug: string;
  };
};

export default async function PagePost({ params }: PagePostProps) {
  const post = await getPostBySlug(params?.slug || "");

  if (!post) {
    return <h1>Post não encontrado</h1>;
  }

  return (
    <div style={{ width: "100%" }}>
      <CardPost post={post} highlight />
      <h3 className={styles.subtitle}>Código:</h3>
      <div className={styles.code}>
        <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
      </div>

      <CommentList comments={post.comments} post={post} />
    </div>
  );
}
