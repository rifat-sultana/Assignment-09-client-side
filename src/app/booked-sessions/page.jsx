"use client";

import { useEffect, useState } from "react";
import { authHeaders } from "@/lib/jwt";

export default function MyBookedSessions() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    fetch(
      `${process.env.API_KEY}/bookings`,
      { headers: authHeaders() }
    )
      .then((res) => res.json())
      .then((data) =>
        setBookings(data)
      );

  }, []);

  const handleCancel = (_id) => {

    const confirmCancel =
      confirm(
        "Cancel Booking?"
      );

    if (!confirmCancel) {

      return;
    }

    fetch (
      `${process.env.API_KEY}/bookings/${_id}`,
      {
        method: "PATCH",
        headers: authHeaders(),
      }
    )
      .then((res) => res.json())
      .then((data) => {

        if (
          data.modifiedCount > 0
        ) {

          alert(
            "Booking Cancelled"
          );

          const updated =
            bookings.map(
              (booking) => {

                if (
                  booking._id ===
                  _id
                ) {

                  return {

                    ...booking,

                    status:
                      "cancelled",
                  };
                }

                return booking;
              }
            );

          setBookings(updated);
        }
      });
  };

  return (

      <div className="p-10 min-h-screen bg-gray-100">

    <h1 className="text-4xl font-bold text-center mb-10">

      My Booked Sessions

    </h1>

    {
      bookings.length === 0 ? (

        <div className="text-center text-2xl font-semibold">

          No Bookings Available

        </div>

      ) : (

        <div className="overflow-x-auto bg-white shadow-xl rounded-2xl p-5">

          <table className="table w-full">

            <thead>

  <tr className="bg-gray-200 text-black text-lg">

    <th className="text-center">
      Tutor
    </th>

    <th className="text-center">
      Student
    </th>

    <th className="text-center">
      Email
    </th>

    <th className="text-center">
      Status
    </th>

    <th className="text-center">
      Action
    </th>

  </tr>

</thead>

<tbody>

  {
    bookings.map((booking) => (

      <tr
        key={booking._id}
        className="hover"
      >

        <td className="text-center font-semibold">

          {booking.tutorName}

        </td>

        <td className="text-center">

          {booking.studentName}

        </td>

        <td className="text-center">

          {booking.studentEmail}

        </td>

        <td className="text-center">

          <span
            className={`px-3 py-1 rounded-full text-white text-sm

            ${
              booking.status ===
              "cancelled"
                ? "bg-red-500"
                : "bg-green-500"
            }`}
          >

            {booking.status}

          </span>

        </td>

        <td className="text-center">

          <button

            disabled={
              booking.status ===
              "cancelled"
            }

            onClick={() =>
              handleCancel(
                booking._id
              )
            }

            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
          >

            Cancel

          </button>

        </td>

      </tr>
    ))
  }

</tbody>
            </table>

          </div>
        )
      }

    </div>
  );
}