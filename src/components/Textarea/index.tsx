import { TextareaHTMLAttributes } from "react";

import style from "./styles.module.css";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ ...rest }: TextareaProps) => {
  return <textarea className={style.textarea} {...rest} />;
};
