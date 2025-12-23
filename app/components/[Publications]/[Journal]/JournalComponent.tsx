"use client"

import { JournalProps } from "@/app/types";
import Download from "./Download";

export const JournalComponent = (props: JournalProps) => {
  return (
    <>
      <section className="flex flex-col gap-0">
        <div className="p-4 gap-2 w-full m-0">
          <h2>
            #{props.id} - N° de {props.title}
          </h2>
          <p className="paragraph">{props.chapeau}</p>
          <Download id={props.id} />
          <div className="flex max-sm:flex-col-reverse items-center max-sm:items-start mb-8">
            {/* <div className="flex-3 flex-col gap-2">
              <ul>
                {props.content.map((e, index) => (
                  <>
                    <li className="font-bold" key={index}>
                      {e.categoryName}
                    </li>
                    <ul className="listStyle">
                      {e.text.map((f, index) => (
                        <li className="text" key={index}>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </>
                ))}
              </ul>
            </div> */}
            <div className="flex-2 justify-around items-center max-md:m-auto ml-auto">
              <div className="max-lg:w-52 max-lg:h-52 w-80 h-80 bg-red-500 mt-4"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
