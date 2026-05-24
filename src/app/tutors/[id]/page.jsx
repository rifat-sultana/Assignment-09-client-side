"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

export default function TutorDetailsPage() {

  const params = useParams();

  const id = params?.id;

  const [tutor, setTutor] = useState(null);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    async function fetchTutor() {

      try {

        const res = await fetch(
          `https://assignment-09-server-side.onrender.com/tutors/${id}`
        );

        const data = await res.json();

        console.log(data);

        setTutor(data);

      } catch (error) {

        console.log(error);

        toast.error("Failed to load tutor");

      } finally {

        setLoading(false);
      }
    }

    if (id) {
      fetchTutor();
    }

  }, [id]);



  // Loading
  if (loading) {

    return (
      <div className="flex justify-center items-center min-h-screen text-3xl font-bold">
        Loading...
      </div>
    );
  }
  
  // Tutor Not Found
  if (!tutor || tutor.message) {

    return (
      <div className="flex justify-center items-center min-h-screen text-4xl font-bold text-red-500">
        Tutor Not Found
      </div>
    );
  }



  return (
    <div className="max-w-5xl mx-auto py-12 px-5">

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border">

        {/* Image */}
        <div className="flex justify-center pt-10">

          <img
            src={tutor.photo}
            alt={tutor.tutorName}
            className="w-72 h-72 rounded-2xl object-cover shadow-lg"
          />

        </div>



        {/* Content */}
        <div className="p-10">

          <h1 className="text-5xl font-bold text-center mb-10">

            {tutor.tutorName}

          </h1>



          <div className="grid md:grid-cols-2 gap-6 text-xl">

            <p>
              <span className="font-bold">
                Subject:
              </span>{" "}
              {tutor.subject}
            </p>

            <p>
              <span className="font-bold">
                Location:
              </span>{" "}
              {tutor.location}
            </p>

            <p>
              <span className="font-bold">
                Experience:
              </span>{" "}
              {tutor.experience}
            </p>

            <p>
              <span className="font-bold">
                Fee:
              </span>{" "}
              ৳ {tutor.hourlyFee}
            </p>

            <p>
              <span className="font-bold">
                Available Slot:
              </span>{" "}
              {tutor.totalSlot}
            </p>

            <p>
              <span className="font-bold">
                Mode:
              </span>{" "}
              {tutor.teachingMode}
            </p>

          </div>



          {/* Description */}
          <div className="mt-10">

            <h2 className="text-3xl font-bold mb-4">
              Description
            </h2>

            <p className="text-gray-700 leading-8 text-lg">
              {tutor.description}
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}