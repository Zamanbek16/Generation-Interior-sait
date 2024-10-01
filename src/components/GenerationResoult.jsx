import React from 'react'

const GenerationResoult = ({responseText, imageUrl, show}) => {
  return (
    <div>
        {show ? (
            <div className="mx-auto p-4 mt-4 ">
                <div className="w-2/6 ">{imageUrl}</div>
                <div className="w-4/6 ">{responseText}</div>
            </div>) : <div></div>}
      
    </div>
  );
}

export default GenerationResoult
