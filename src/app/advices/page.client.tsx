"use client";

import { useActionState } from "react";

import { useForm } from "@conform-to/react";
import { Button, CardBody, CardFooter, Textarea } from "@nextui-org/react";

import { createAdvice } from "./actions";

export default function AdvicesClient() {
  const [lastResult, action] = useActionState(createAdvice, undefined);
  const [form, fields] = useForm({ lastResult });

  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
      <CardBody>
        <Textarea
          label="Advice"
          key={fields.description.key}
          name={fields.description.name}
          errorMessage={fields.description.errors}
          isInvalid={!fields.description.valid}
          placeholder="Measure twice, cut once!"
        />
      </CardBody>
      <CardFooter className="justify-end">
        <Button type="submit">Submit</Button>
      </CardFooter>
    </form>
  );
}
