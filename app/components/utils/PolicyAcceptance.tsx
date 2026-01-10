"use client";

import { Field, Label, Switch } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

export default function PolicyAcceptance() {
  const [agreed, setAgreed] = useState(false);

  return (
    <Field className="flex items-center gap-x-4 sm:col-span-2">
      <div className="flex h-6 items-center">
        <Switch
          checked={agreed}
          onChange={setAgreed}
          className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-checked:bg-indigo-600"
        >
          <span className="sr-only">
            Accepter nos conditions d&apos;utiliation
          </span>
          <span
            aria-hidden="true"
            className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
          />
        </Switch>
      </div>
      <Label>
        En sélectionnant ceci, vous acceptez notre{" "}
        <Link href="#" className="font-semibold">
          politique de confidentialité
        </Link>
        .
      </Label>
    </Field>
  );
}
