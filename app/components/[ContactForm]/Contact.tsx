"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/SendEmail";
import PolicyAcceptance from "../utils/PolicyAcceptance";
import Button from "../utils/Button";

export type FormData = {
  name: string;
  firstName: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <>
      <div className="isolate py-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="mb-5">
              <label
                htmlFor="firstName"
                className="mb-3 block text-base font-medium"
              >
                Prénom
              </label>
              <input
                type="text"
                placeholder="Prénom"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register("firstName", { required: true })}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium"
              >
                Nom de famille
              </label>
              <input
                type="text"
                placeholder="Nom de famille"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register("name", { required: true })}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register("email", { required: true })}
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="company"
                className="mb-3 block text-base font-medium"
              >
                Entreprise
              </label>
              <input
                type="text"
                placeholder="Entreprise"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register("company", { required: true })}
              />
            </div>
          </div>
          <div className="relative mb-8">
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium"
            >
              Sujet
            </label>
            <select
              id="message-subject"
              // name="message-subject"
              className="block w-full text-black rounded-xl border-0 px-3.5 py-2 bg-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 h-10"
              {...register("subject", { required: true })}
            >
              <option value="">--Choisissez un sujet--</option>
              <option value="Adhésion">Adhésion</option>
              <option value="Encart publicitaire">Encart publicitaire</option>
              <option value="Evènement">Evènement</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
          <div className="mb-8">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium"
            >
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Votre message"
              className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <div>
            <PolicyAcceptance />
          </div>
          <div className="mt-8 flex justify-center">
            <Button type={"submit"} title={"Envoyer"} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
