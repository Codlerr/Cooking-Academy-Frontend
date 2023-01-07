import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/AdminNav";
import instance from "../../API/api_instance";

function CourseDetails() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      await instance.get("/course", {}).then((response) => {
        setCourse(response.data.data.courses);
        console.log(response.data);
      });
    };
    fetchItems();
  }, []);

  

  const [post, setPost] = useState({
    name: "",
    image: "",
    duration: "",
    instructorName: "",
    unit: "",
    lesson: "",
    task: "",
    about: "",
    price: "",
    videoLink: "",
  });

  // Handle input
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setPost({ ...post, [name]: value });
  };

  // handle submit

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    const {
      name,
      image,
      duration,
      instructorName,
      unit,
      lesson,
      task,
      about,
      price,
      videoLink,
    } = post;


    let formdata = new FormData();
    formdata.append("name", name);
    formdata.append("image", image);
    formdata.append("duration", duration);
    formdata.append("instructorName", instructorName);
    formdata.append("unit", unit);
    formdata.append("lesson", lesson);
    formdata.append("task", task);
    formdata.append("about", about);
    formdata.append("price", price);
    formdata.append("videoLink", videoLink);
    console.log(formdata);

    try {
      const res = await instance.post("/course",formdata, {
        
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res.status);
      if (res.status === 400 || !res) {
        window.alert("Message not sent, try agin..");
      } else {
        window.alert("Message Sent");
        setPost({
          name: "",
          image: "",
          duration: "",
          instructorName: "",
          unit: "",
          lesson: "",
          task: "",
          about: "",
          price: "",
          videoLink: "",
        });
       
      }
    } catch (error) {
      console.log(error);
    }
  };

const HandleDelete = async (id)=>{

  const res = await instance.delete(`/course/${id}`).then((result)=>{
    if(
      result.statusCode === 200
    ){
      CourseDetails()
    }
  })
  console.log(res);
 
  useEffect(() => {
    CourseDetails()
  }, [course])
}



  return (
    <>
      <Navbar />

      {/* Main section */}
      <section className="admin-body">
        {/* Data Input */}
        <div className="p-5">
          <h1 className="font-bold text-4xl pt-5">Course Details</h1>

          <form
            onSubmit={handleSubmit}
            method="POST"
            className="md:w-3/5 flex flex-col gap-6 py-10"
          >
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
                name="image"
                value={post.image}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <p className="text-xl pb-4">Banner Video</p>
              <input
                className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                type="text"
                placeholder="Video link"
                name="videoLink"
                value={post.videoLink}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <p className="text-xl pb-4">Headline</p>
              <input
                className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                type="text"
                placeholder="Enter your Headline"
                name="name"
                value={post.name}
                onChange={handleChange}
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
                name="about"
                value={post.about}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <p className="text-xl pb-4">Instructure Name</p>
              <input
                className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                type="text"
                placeholder="Instructure name"
                name="instructorName"
                value={post.instructorName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <p className="text-xl pb-4">Class Length</p>
              <input
                className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                type="text"
                placeholder="Class Length"
                name="duration"
                value={post.duration}
                onChange={handleChange}
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
                  name="unit"
                  value={post.unit}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <p className="text-xl pb-4">Lessons</p>
                <input
                  className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                  type="text"
                  placeholder="19"
                  name="lesson"
                  value={post.lesson}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <p className="text-xl pb-4">Tasks</p>
                <input
                  className="bg-bg-darks border-none  p-3 rounded-lg w-full"
                  type="text"
                  placeholder="60"
                  name="task"
                  value={post.task}
                  onChange={handleChange}
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
                name="price"
                value={post.price}
                onChange={handleChange}
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
        {course && course.length>0 && course?.slice(0).reverse().map((item, index) => {
          return (
            <div className="w-full bg-[#2b2929] p-5 min-h-[200px]" key={index}>
              <div className="relative grid grid-cols-1  md:grid-cols-5">
                {/* contents */}

                <div className="flex flex-col py-5 gap-5 md:col-span-3">
                  <p className="text-2xl font-medium">{item.name}</p>
                  <p>{item.about}</p>
                  <p>Instructor(s): {item.instructorName}</p>
                  <p>Class Length: {item.duration} video</p>
                  <p>
                    {item.unit} units | {item.lesson} lessons | {item.task}{" "}
                    tasks
                  </p>
                </div>

                <div className="md:grid place-items-center">
                  <h1 className="text-primary-clr2 text-3xl font-semibold">
                    ${item.price}
                  </h1>
                </div>
                {/* Edit/Delete Buttons */}
                <div className="absolute top-10 right-5 flex gap-8">
                  <i  class="fa-solid fa-pen-to-square hover:text-red-700 cursor-pointer"></i>
                  <i onClick={()=>HandleDelete(item._id)}  class="fa-solid fa-trash hover:text-red-700 cursor-pointer"></i>
                </div>
              </div>

              <hr />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default CourseDetails;
