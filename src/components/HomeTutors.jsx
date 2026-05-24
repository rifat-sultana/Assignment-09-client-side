"use client";

import Link from "next/link";

export default function HomeTutors({ tutors }) {
  return (
    <div className="max-w-7xl mx-auto px-5 py-12">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Available Tutors
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {tutors.map((tutor) => (

          <div
            key={tutor._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition duration-300"
          >

            {/* Image */}
            <div className="h-64 overflow-hidden">
              <img
                src={tutor.photo}
                alt={tutor.tutorName}
                className="w-full h-full object-contain hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">

              <h2 className="text-2xl font-bold mb-3">
                {tutor.tutorName}
              </h2>

              <p className="mb-2 text-gray-700">
                <span className="font-semibold">
                  Subject:
                </span>{" "}
                {tutor.subject}
              </p>

              <p className="mb-4 text-gray-700">
                <span className="font-semibold">
                  Location:
                </span>{" "}
                {tutor.location}
              </p>

              <Link
                href={`/tutors/${tutor._id}`}
                className="inline-block bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                View Details
              </Link>

            </div>
          </div>

        ))}
      </div>
    </div>
  );
}