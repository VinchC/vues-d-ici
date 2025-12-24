import { FormProps } from "@/app/types";

export default function FormComponent(props: FormProps) {
  return (
    <div>
      <label htmlFor={props.title} className="block font-semibold">
        {props.fieldName}
      </label>
      <div className="mt-2">
        <input
          id={props.title}
          name={props.title}
          type="text"
          autoComplete={props.autoComplete}
          className="block w-full rounded-xl border-0 px-3.5 py-2 shadow-sm ring-1 bg-gray-200 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>
  );
}
