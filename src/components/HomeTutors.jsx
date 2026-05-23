import Link from "next/link";
import { MapPin, BookOpen } from "lucide-react";

export default function HomeTutors({ tutors }) {
  return (
    <div className="py-14 px-5 md:px-10">
      
      <h1 className="text-4xl font-bold text-center mb-12">
        Available Tutors
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {tutors?.map((tutor) => (
          
          <div
            key={tutor._id}
            className="bg-white rounded-3xl overflow-hidden shadow-md border hover:shadow-2xl transition duration-300"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={tutor.photo}
                alt={tutor.tutorName}
                className="w-full h-64 object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">

              {/* Name */}
              <h2 className="text-2xl font-bold text-gray-800">
                {tutor.tutorName}
              </h2>

              {/* Subject */}
              <div className="flex items-center gap-2 mt-3 text-gray-600">
                <BookOpen size={18} />
                <p>{tutor.subject}</p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 mt-2 text-gray-600">
                <MapPin size={18} />
                <p>{tutor.location}</p>
              </div>

              {/* Button */}
              <div className="mt-6">
                <Link href={`/tutors/${tutor._id}`}>
                  <button className="btn btn-primary w-full rounded-xl">
                    View Details
                  </button>
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}