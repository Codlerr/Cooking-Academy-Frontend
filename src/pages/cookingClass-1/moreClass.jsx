import React from 'react'

function MoreClass() {
  return (
    <>
     <div className="flex justify-between items-center p-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-5">
                    <span className="flex gap-2 text-sm">
                      <i class="text-primary-clr2 grid place-items-center fa-regular fa-circle-play"></i>
                      <p>Video 5</p>
                    </span>
                    <span className="flex gap-2 text-sm">
                      <i class="text-primary-clr2 grid place-items-center fa-regular fa-clock"></i>
                      <p>1 hrs</p>
                    </span>
                </div>
                <p className="text-base font-medium">Heading</p>
              </div>

              <i class="text-4xl text-primary-clr2 fa-regular fa-circle-play"></i>
            </div>

    </>
  )
}

export default MoreClass