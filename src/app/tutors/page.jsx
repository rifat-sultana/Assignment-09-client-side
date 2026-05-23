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

<<<<<<< HEAD
  // BOOK SESSION FUNCTION

  const handleBookSession = async (tutor) => {
=======
<<<<<<< HEAD
		if (currentDate < sessionDate) {
			alert('Booking is not available yet for this tutor');

			return;
		}
=======
  // BOOK SESSION FUNCTION

  const handleBookSession = async (tutor) => {

    // SLOT CHECK

    if (tutor.totalSlot === 0) {

      alert(
        "No available slots left"
      );

      return;
    }

    // DATE CHECK

    const currentDate =
      new Date();

    const sessionDate =
      new Date(
        tutor.sessionStartDate
      );

    if (currentDate < sessionDate) {

      alert(
        "Booking is not available yet for this tutor"
      );

      return;
    }

    // BOOKING DATA
>>>>>>> 94b62c9 (READme.MD file completed)
>>>>>>> a751740 (READme.MD file completed)

    // SLOT CHECK

    if (tutor.totalSlot === 0) {

      alert(
        "No available slots left"
      );

      return;
    }

    // DATE CHECK

<<<<<<< HEAD
    const currentDate =
      new Date();
=======
<<<<<<< HEAD
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
			method: 'POST',
=======
    // SAVE BOOKING

    fetch("http://localhost:5000/bookings", {
>>>>>>> 94b62c9 (READme.MD file completed)
>>>>>>> a751740 (READme.MD file completed)

    const sessionDate =
      new Date(
        tutor.sessionStartDate
      );

<<<<<<< HEAD
    if (currentDate < sessionDate) {
=======
<<<<<<< HEAD
			body: JSON.stringify(bookingData),
		})
			.then((res) => res.json())
>>>>>>> a751740 (READme.MD file completed)

      alert(
        "Booking is not available yet for this tutor"
      );

      return;
    }

    // BOOKING DATA

    const bookingData = {

      tutorName: tutor.tutorName,

      studentName: "Demo User",

      studentEmail: "demo@gmail.com",

      status: "booked",
    };

    // SAVE BOOKING

    fetch("http://localhost:5000/bookings", {

      method: "POST",

      headers: {

        "content-type":
          "application/json",
      },

      body: JSON.stringify(
        bookingData
      ),
    })

      .then((res) => res.json())

      .then((data) => {

        if (data.insertedId) {

          // SLOT DECREASE

          fetch(

<<<<<<< HEAD
=======
							<button
								disabled={tutor.totalSlot === 0}
								onClick={() => handleBookSession(tutor)}
								className='mt-5 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg w-full disabled:bg-gray-400'
							>
								{tutor.totalSlot === 0 ? 'Fully Booked' : 'Book Session'}
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
=======
      headers: {

        "content-type":
          "application/json",
      },

      body: JSON.stringify(
        bookingData
      ),
    })

      .then((res) => res.json())

      .then((data) => {

        if (data.insertedId) {

          // SLOT DECREASE

          fetch(

>>>>>>> a751740 (READme.MD file completed)
            `http://localhost:5000/tutors/slot/${tutor._id}`,

            {
              method: "PATCH",
            }
          );

          alert(
            "Session Booked Successfully"
          );

          // UI UPDATE

          const updatedTutors =
            tutors.map((item) => {

              if (
                item._id === tutor._id
              ) {

                return {

                  ...item,

                  totalSlot:
                    item.totalSlot - 1,
                };
              }

              return item;
            });

          setTutors(updatedTutors);
        }
      });
  };

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold text-center mb-10">

        All Tutors

      </h1>

      {
        tutors.length === 0 && (

          <div className="text-center text-2xl font-bold">

            No Tutors Available

          </div>
        )
      }

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

              <button

                disabled={tutor.totalSlot === 0}

                onClick={() =>
                  handleBookSession(tutor)
                }

                className="mt-5 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg w-full disabled:bg-gray-400"
              >

                {
                  tutor.totalSlot === 0
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 94b62c9 (READme.MD file completed)
>>>>>>> a751740 (READme.MD file completed)
