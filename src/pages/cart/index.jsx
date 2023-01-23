import React from 'react'
import instance from '../../API/api_instance'
import CLASS from '../../components/sliders/explore-slider'

let Pic =
  'https://res.cloudinary.com/dvbplh4z9/image/upload/v1671270925/Cooking%20Academy%20Assets/cooking%20class/Rectangle_167_qkjplb.webp'

function Cart() {
  const HandleCart = async () => {
    const res = await instance
      .post('/student/payment', {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [
            { id: '63b9bc057c0e8c39f4edf485' },
            { id: '63b9bccc7c0e8c39f4edf4a3' },
          ],
        }),
      })
      .then((res) => {
        console.log(res)
        if (res.status === 200) return res
      })
      .then((response) => {
        window.location = response.data.data.url
      })
  }
  return (
    <>
      <section className="w-11/12 mx-auto">
        <h1 className="text-xl font-bold py-5">2 Courses in Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
          <div className="lg:col-span-2 grid gap-10 rounded-xl overflow-hidden bg-white xs:p-5 lg:p-10">
            {/* course details */}
            <div className="grid gap-3 lg:gap-0 grid-cols-1 md:grid-cols-1 lg:grid-cols-4 text-black">
              <img
                className="lg:h-28 lg:w-44 object-cover rounded-md"
                src={Pic}
                alt="image"
              />
              <div className="lg:col-span-2 flex justify-center flex-col">
                <h4 className="font-semibold lg:text-xl">Worldwide cuisine</h4>
                <p>By Gordon Ramsy</p>
                <span className="flex gap-2">
                  <p>4.9</p>
                  <div className="text-primary-clr2 grid grid-flow-col place-items-center gap-1">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <p>(239 ratings)</p>
                </span>
                <p>12 total hours | 7 lessons</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-1 flex-col justify-center align-middle text-blue-800 font-medium">
                  <p className="cursor-pointer">Remove</p>
                  <p className="cursor-pointer">Save for Later</p>
                </div>
                <div className="flex flex-col justify-center align-middle">
                  <h2 className="font-bold text-3xl">$199</h2>
                </div>
              </div>
            </div>

            <hr />

            <div className="grid gap-3 lg:gap-0 grid-cols-1 md:grid-cols-1 lg:grid-cols-4 text-black bg-white">
              <img
                className="lg:h-28 lg:w-44 object-cover rounded-md"
                src={Pic}
                alt="image"
              />
              <div className="lg:col-span-2 flex justify-center flex-col">
                <h4 className="font-semibold lg:text-xl">Worldwide cuisine</h4>
                <p>By Gordon Ramsy</p>
                <span className="flex gap-2">
                  <p>4.9</p>
                  <div className="text-primary-clr2 grid grid-flow-col place-items-center gap-1">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <p>(239 ratings)</p>
                </span>
                <p>12 total hours | 7 lessons</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-1 flex-col justify-center align-middle text-blue-800 font-medium">
                  <p className="cursor-pointer">Remove</p>
                  <p className="cursor-pointer">Save for Later</p>
                </div>
                <div className="flex flex-col justify-center align-middle">
                  <h2 className="font-bold text-3xl">$199</h2>
                </div>
              </div>
            </div>

            {/* CheckOut Btn */}
            <div className="flex justify-end">
              <a
                onClick={() => HandleCart()}
                className="bg-primary-clr2 hover:bg-primary-clr1 transition-all cursor-pointer duration-300 rounded-md px-16 lg:px-24 py-2 lg:py-5"
              >
                Checkout
              </a>
            </div>
          </div>

          <div className="grid gap-10 h-fit">
            {/* course details */}
            <div className="text-black bg-white rounded-md p-5">
              <h1 className="uppercase font-semibold">price details</h1>
              <hr className="py-2" />
              <div className="flex justify-between">
                <p>Price(2 item)</p>
                <p>$299</p>
              </div>
              <div className="flex justify-between">
                <p>Tax 18%</p>
                <p>$5.7</p>
              </div>
              <hr className="py-2" />
              <div className="flex justify-between font-semibold">
                <h3>Total Amount</h3>
                <h3>$304.7</h3>
              </div>
            </div>

            <div>
              <p className="font-medium pb-3">Promotions</p>
              <div className="block relative rounded-md overflow-hidden">
                <input
                  className="w-[100%] p-3 text-black"
                  type="text"
                  placeholder="Enter Coupon"
                />
                <button className="bg-primary-clr2 absolute rounded-tl-md rounded-bl-md text-base right-0 top-0 py-3 px-10 hover:text-white">
                  Apply
                </button>
              </div>
              <p className="text-sm pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                ullam perspiciatis minus voluptatibus aspernatur dolores at
                fugiat cupiditate voluptates autem consectetur et inventore
                nesciunt neque nobis mollitia facilis a asperiores, iste nulla
                possimus perferendis alias esse cumque! Voluptates reiciendis,
                ipsa nihil porro ex tenetur cum amet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="py-20">
        <h1 className="xs:text-3xl md:text-4xl w-11/12 mx-auto">
          More Classes
        </h1>
        <CLASS />
      </section>
    </>
  )
}

export default Cart;