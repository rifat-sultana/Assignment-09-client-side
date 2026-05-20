

export default function HomeTutors({ tutors }) {

  return (
          
      <div className="p-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          Available Tutors
          </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tutors?.map((tutor) => (
        <div
          key={tutor._id}
          className="border rounded-2xl shadow-lg overflow-hidden bg-white"
        >
          <img
            src={tutor.photo}
           alt={tutor.tutorName}
            className="w-full h-52 object-cover"
          />

          <div className="p-5">
            <h2 className="text-2xl font-bold">{tutor.tutorName}</h2>

            <p className="text-gray-600 mt-2">
            {tutor.subject}
            </p>

            <p className="text-gray-600 mt-2">
               {tutor.location}
            </p>

            <p className="mt-2 font-semibold">
              ৳ {tutor.hourlyFee}
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}