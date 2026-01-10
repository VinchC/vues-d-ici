/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import { JournalProps } from "@/app/types";
import Download from "./Download";

export const JournalComponent: any = (props: JournalProps) => {
  return (
    <>
      <div className="marginBottom">
        <h1>{props.title}</h1>
        <div className="flex justify-between items-center">
          <div>
            <p>{props.chapeau}</p>
          </div>
          <Download id={props.id} />
        </div>
        <div className="twoItems">
          <div className="flex-1 flex-col">
            <ul>
              {props.content.map((e, index) => (
                <>
                  <li className="font-bold mt-4" key={index}>
                    {e.categoryName}
                    <ul>
                      {e.text.map((f, index2) => (
                        <>
                          <li className="font-normal" key={index2}>
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
          <div className="flex-2">
            <img src={props.picture} alt={props.alt} />
          </div>
        </div>
      </div>
    </>
  );
};
