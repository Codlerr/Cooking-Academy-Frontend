import React from 'react'

function ActiveClass() {
  return (
    <>
    <div className="flex flex-col gap-3">
              <p className="text-xl font-semibold">Content Navigator</p>
              <div className="flex justify-between items-center bg-black p-4 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <p>Chapter</p>
                    <p className="text-base font-medium">Heading</p>
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
                  </div>
                  <div class="progresess">
                      <span class="title timer" data-from="0" data-to="70" data-speed="1500">5/6</span>
                      <div class="overlay"></div>
                      <div class="left"></div>
                      <div class="right"></div>
                  </div>
              </div>
            </div>
    </>
  )
}

export default ActiveClass