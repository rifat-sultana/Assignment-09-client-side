"use client";

import { useEffect, useState } from "react";

export default function TutorsPage() {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tutors")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTutors(data);
      });
  }, []);

  return (
        <div className="p-10"> 
          <h1 className="text-4xl font-bold text-center mb-10">
        All Tutors
      </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {tutors.map((tutor) => (
    <div
      key={tutor._id}
      className="border rounded-2xl shadow-lg overflow-hidden bg-white"
    >
      <img
        src={tutor.photo}
        alt={tutor.tutorName}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2">
          {tutor.tutorName}
        </h2>

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
            Mode:
          </span>{" "}
          {tutor.teachingMode}
        </p>

        <button className="mt-5 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg w-full">
          Book Session
        </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}