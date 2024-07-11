"use client";

import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

import { Button } from "../Button";
import { ArrowForward } from "../icons/arrowForward";
import { Spinner } from "../Spinner";

type SubmitButtonProps = {
  children: ReactNode;
};

export const SubmitButton = ({ children }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button aria-disabled={pending} type="submit">
      {pending ? (
        <Spinner />
      ) : (
        <>
          {children} <ArrowForward />
        </>
      )}
    </Button>
  );
};
