/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import { JournalProps } from "@/app/types";
import Download from "./Download";

export const JournalComponent: any = (props: JournalProps) => {
  return (
    <>
      <section className="flex flex-col gap-0">
        <div className="p-4 gap-2 w-full m-0">
          <h2>{props.title}</h2>
          <p className="paragraph">{props.chapeau}</p>
          <Download id={props.id} />
          <div className="flex max-sm:flex-col-reverse items-center max-sm:items-start mb-8">
            <div className="flex-3 flex-col gap-2">
              <ul>
                {props.content.map((e, index) => (
                  <>
                    <li className="font-bold mt-4" key={index}>
                      {e.categoryName}
                      <ul className="listStyle">
                        {e.text.map((f, index2) => (
                          <>
                            <li className="text" key={index2}>
                              {f}
                            </li>
                          </>
                        ))}
                      </ul>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div className="flex-2 max-md:m-auto ml-auto">
              <img src={props.picture} alt={props.alt} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
