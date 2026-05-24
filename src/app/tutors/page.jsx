"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { authHeaders } from "@/lib/jwt";

export default function TutorsPage() {

  const [tutors, setTutors] = useState([]);

  useEffect(() => {

    fetch("https://assignment-09-server-side.onrender.com/tutors")

      .then((res) => res.json())

      .then((data) => setTutors(data));

  }, []);


  const handleBook = async (tutor) => {

    if (tutor.totalSlot <= 0) {

      return toast.error(
        "This session is fully booked"
      );
    }

    try {

      const bookingData = {

        tutorId: tutor._id,

        tutorName: tutor.tutorName,

        image: tutor.photo,

        subject: tutor.subject,

        fee: tutor.hourlyFee,
      };



      const bookingRes = await fetch(
        "https://assignment-09-server-side.onrender.com/bookings",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            ...authHeaders(),
          },

          body: JSON.stringify(bookingData),
        }
      );



      const result = await bookingRes.json();



      if (!bookingRes.ok) {

        return toast.error(
          result.message || "Booking failed"
        );
      }



      const updatedTutors = tutors.map((item) => {

        if (item._id === tutor._id) {

          return {

            ...item,

            totalSlot: item.totalSlot - 1,
          };
        }

        return item;
      });

      setTutors(updatedTutors);

      toast.success(
        "Session booked successfully"
      );

    } catch (error) {

      toast.error(
        "Something went wrong"
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-12">

      {/* Heading */}
      <h1 className="text-5xl font-bold text-center mb-14">
        All Tutors
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {tutors.map((tutor) => (

          <div
            key={tutor._id}
            className="bg-white rounded-2xl shadow-lg border p-5 hover:shadow-2xl transition duration-300"
          >

            {/* Image */}
            <div className="flex justify-center pt-3">

              <img
                src={tutor.photo}
                alt={tutor.tutorName}
                className="w-56 h-56 rounded-xl object-cover border shadow-md hover:scale-105 transition duration-300"
              />

            </div>



            {/* Content */}
            <div className="mt-6">

              <h2 className="text-3xl font-bold mb-4">

                {tutor.tutorName}

              </h2>



              <div className="space-y-2 text-gray-700">

                <p>
                  <span className="font-semibold">
                    Subject:
                  </span>{" "}
                  {tutor.subject}
                </p>

                <p>
                  <span className="font-semibold">
                    Location:
                  </span>{" "}
                  {tutor.location}
                </p>

                <p>
                  <span className="font-semibold">
                    Experience:
                  </span>{" "}
                  {tutor.experience}
                </p>

                <p>
                  <span className="font-semibold">
                    Fee:
                  </span>{" "}
                  ৳ {tutor.hourlyFee}
                </p>

                <p>
                  <span className="font-semibold">
                    Available Slot:
                  </span>{" "}
                  {tutor.totalSlot}
                </p>

                <p>
                  <span className="font-semibold">
                    Mode:
                  </span>{" "}
                  {tutor.teachingMode}
                </p>

              </div>



              {/* Button */}
              <button
                onClick={() => handleBook(tutor)}
                disabled={tutor.totalSlot <= 0}
                className={`w-full mt-6 py-3 rounded-xl text-white font-semibold transition ${
                  tutor.totalSlot <= 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >

                {
                  tutor.totalSlot <= 0
                    ? "Fully Booked"
                    : "Book Session"
                }

              </button>

            </div>

          </div>

        ))}
      </div>
    </div>
  );
}