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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 marginBottom">
          <div>
            <label htmlFor="Prénom" className="formLabel">
              Prénom
            </label>
            <input
              type="text"
              placeholder="Prénom"
              aria-label="Prénom"
              className="formInput"
              {...register("firstName", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="Nom de famille" className="formLabel">
              Nom de famille
            </label>
            <input
              type="text"
              aria-label="Nom de famille"
              placeholder="Nom de famille"
              className="formInput"
              {...register("name", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="email" className="formLabel">
              Email
            </label>
            <input
              type="email"
              placeholder="example@domain.com"
              aria-label="example@domain.com"
              className="formInput"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="Entreprise" className="formLabel">
              Entreprise
            </label>
            <input
              type="text"
              placeholder="Entreprise"
              aria-label="Entreprise"
              className="formInput"
              {...register("company", { required: true })}
            />
          </div>
        </div>
        <div className="relative marginBottom">
          <label htmlFor="Sujet" className="formLabel">
            Sujet
          </label>
          <select
            id="message-subject"
            aria-label="Sujet"
            // name="message-subject"
            className="block w-full text-black rounded-md border-0 px-3.5 py-2 bg-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 h-10"
            {...register("subject", { required: true })}
          >
            <option value="">--Choisissez un sujet--</option>
            <option value="Adhésion">Adhésion</option>
            <option value="Encart publicitaire">Encart publicitaire</option>
            <option value="Evènement">Evènement</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <div className="marginBottom">
          <label htmlFor="Message" className="formLabel" >
            Message
          </label>
          <textarea
            rows={4}
            aria-label="Votre message"
            placeholder="Votre message"
            className="formInput"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div>
          <PolicyAcceptance />
        </div>
        <div className="marginTop flex justify-center">
          <Button type={"submit"} title={"Envoyer"} style={"cta blueBG"} />
        </div>
      </form>
    </>
  );
};

export default Contact;
