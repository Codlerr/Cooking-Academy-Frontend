import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/AdminNav";
import ApiInstane from "../../API/api_instance";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2E5NTNiOTBiYzA0MDE3ZjgyYzNmZDMiLCJyb2xlIjoic3VwZXJBZG1pbiIsImVtYWlsIjoic2lyYWprQGdtYWlsLmNvbSIsInNlc3Npb25JZCI6IjM2MWNjNzAxLTllYmMtNDcxNi04YzRkLTMyZjQwNTViMWQzNiIsImlhdCI6MTY3MjgyNTMyNiwiZXhwIjoxNjcyOTk4MTI2fQ.Yj5HLX70b8uxopRDspyuAyhr3-XmaxxtoIhl9EyRAEA"


function CourseDetails() {

  const [course, setCourse] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
     
      await ApiInstane.get("/course",{
        headers:{
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        setCourse(response.data.data.courses);
        console.log(response.data);
      });
    };
    fetchItems();
  }, []);

  return (
    <>
      <Navbar />

      {/* Main section */}
      <section className="admin-body">
        {/* Data Input */}
        <div className="p-5">
          <h1 className="font-bold text-4xl pt-5">Course Details</h1>

          <form action="" className="md:w-3/5 flex flex-col gap-6 py-10">
            <div>
              <p className="text-xl pb-4">Banner Image</p>
              <input
                type="file"
                class="block w-full text-sm text-slate-500 bg-bg-darks md:w-80 p-10 border-dashed border-slate-600 border-2 rounded-lg
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-transparent file:text-primary-clr2
                      hover:file:bg-violet-100
                    "
                required
              />
            </div>

            <div>
              <p className="text-xl pb-4">Banner Video</p>
              <input
                className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                type="text"
                placeholder="Video link"
                required
              />
            </div>

            <div>
              <p className="text-xl pb-4">Headline</p>
              <input
                className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                type="text"
                placeholder="Enter your Headline"
                required
              />
            </div>

            <div>
              <p className="text-xl pb-4">About Class</p>
              <textarea
                rows="3"
                className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                type="text"
                placeholder="About Class"
                required
              />
            </div>

            <div>
              <p className="text-xl pb-4">Instructure Name</p>
              <input
                className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                type="text"
                placeholder="Instructure name"
                required
              />
            </div>

            <div>
              <p className="text-xl pb-4">Class Length</p>
              <input
                className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                type="text"
                placeholder="Class Length"
                required
              />
            </div>

            <div className="flex flex-row justify-between gap-10">
              <div>
                <p className="text-xl pb-4">Units</p>
                <input
                  className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                  type="text"
                  placeholder="01"
                  required
                />
              </div>
              <div>
                <p className="text-xl pb-4">Lessons</p>
                <input
                  className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                  type="text"
                  placeholder="19"
                  required
                />
              </div>
              <div>
                <p className="text-xl pb-4">Tasks</p>
                <input
                  className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                  type="text"
                  placeholder="60"
                  required
                />
              </div>
            </div>

            <div>
              <p className="text-xl pb-4">Enrolling Fees</p>
              <input
                className="bg-bg-darks border-none  p-3 rounded-lg w-1/3"
                type="text"
                placeholder="300"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                className="bg-primary-clr2 hover:bg-primary-clr1 transition-all duration-200 md:px-16 py-2 rounded-md"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>
        {/* Data Input end*/}

        {/* Display Data*/}
            {course?.map((item,index) => {
              return (
        <div className="w-full bg-[#2b2929] p-5 min-h-[200px]" key={index}>
          <div className="relative grid grid-cols-1  md:grid-cols-5">
            {/* contents */}
          
            <div className="flex flex-col py-5 gap-5 md:col-span-3">
              <p className="text-2xl font-medium">{item.name}</p>
              <p>{item.about}</p>
              <p>Instructor(s): {item.instructorName}</p>
              <p>Class Length: {item.duration} video</p>
              <p>{item.unit} units | {item.lesson} lessons | {item.task} tasks</p>
            </div>

            <div className="md:grid place-items-center">
              <h1 className="text-primary-clr2 text-3xl font-semibold">${item.price}</h1>
            </div>
            {/* Edit/Delete Buttons */}
            <div className="absolute top-10 right-5 flex gap-8">
              <i class="fa-solid fa-pen-to-square hover:text-red-700"></i>
              <i class="fa-solid fa-trash hover:text-red-700"></i>
            </div>
          </div>

          <hr />
        </div>
          ) })}
      </section>
    </>
  );
}

export default CourseDetails;
