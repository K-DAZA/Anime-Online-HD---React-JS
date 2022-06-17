import React from 'react'

export default function AnimeResultsId(props) {
  return (
    
      <div className="container box-border lg:p-4 bg-dark mt-5 rounded text-white">
        <div className="flex flex-row overflow-hidden h-96 rounded box-border lg:p-5">
          <div className="w-2/6 box-border">
            <img src={props.imagen} alt="" srcset="" className="w-full h-full" />
          </div>

          <div className="w-4/6 bg-black box-border p-4 overflow-y-scroll">
            <h1 className="w-4/6 text-5xl">
              <strong>{props.anime}</strong>
            </h1>
            <div className="w-5/6 mt-4 text-justify ">{props.synopsis}</div>
          </div>
        </div>
      </div>

  );
}
