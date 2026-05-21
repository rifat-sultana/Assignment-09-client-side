"use client";

import { useEffect, useState } from "react";

export default function MyTutorsPage() {

  const [tutors, setTutors] = useState([]);

  const [selectedTutor, setSelectedTutor] =
    useState(null);

  const userEmail = "demo@gmail.com";

  // loading my tutors

  useEffect(() => {

    fetch(
      `http://localhost:5000/my-tutors?email=${userEmail}`
    )
      .then((res) => res.json())
      .then((data) => setTutors(data));

  }, []);

  // Delete tutors

  const handleDelete = (_id) => {

    const confirmDelete =
      confirm("Are you sure?");

    if (!confirmDelete) {

      return;
    }

    fetch(
      `http://localhost:5000/tutors/${_id}`,
      {

        method: "DELETE",
      }
    )
      .then((res) => res.json())

      .then((data) => {

        if (data.deletedCount > 0) {

          alert("Tutor Deleted");

          const remaining =
            tutors.filter(
              (tutor) =>
                tutor._id !== _id
            );

          setTutors(remaining);
        }
      });
  };

  // Update tutors

  const handleUpdate = (e) => {

    e.preventDefault();

    const form = e.target;

    const updatedTutor = {

      tutorName:
        form.tutorName.value,

      subject:
        form.subject.value,

      hourlyFee:
        form.hourlyFee.value,

      location:
        form.location.value,
    };

    fetch(
      `http://localhost:5000/tutors/${selectedTutor._id}`,
      {

        method: "PUT",

        headers: {

          "content-type":
            "application/json",
        },

        body: JSON.stringify(
          updatedTutor
        ),
      }
    )
      .then((res) => res.json())

      .then((data) => {

        if (
          data.modifiedCount > 0
        ) {

          alert(
            "Tutor Updated"
          );

          const updated =
            tutors.map((tutor) => {

              if (
                tutor._id ===
                selectedTutor._id
              ) {

                return {

                  ...tutor,

                  ...updatedTutor,
                };
              }

              return tutor;
            });

          setTutors(updated);

          setSelectedTutor(null);
        }
      });
  };

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold text-center mb-10">

        My Tutors

      </h1>

      {
        tutors.length === 0 ? (

          <div className="text-center text-2xl font-semibold">

            No Tutors Added

          </div>

        ) : (

          <div className="overflow-x-auto">

            <table className="table w-full">

              <thead>

                <tr>

                  <th>Name</th>

                  <th>Subject</th>

                  <th>Fee</th>

                  <th>Location</th>

                  <th>Actions</th>

                </tr>

              </thead>

              <tbody>

                {
                  tutors.map((tutor) => (

                    <tr key={tutor._id}>

                      <td>

                        {tutor.tutorName}

                      </td>

                      <td>

                        {tutor.subject}

                      </td>

                      <td>

                        ৳ {tutor.hourlyFee}

                      </td>

                      <td>

                        {tutor.location}

                      </td>

                      <td className="flex gap-3">

                        <button
                          onClick={() =>
                            setSelectedTutor(
                              tutor
                            )
                          }
                          className="btn btn-info"
                        >

                          Update

                        </button>

                        <button
                          onClick={() =>
                            handleDelete(
                              tutor._id
                            )
                          }
                          className="btn btn-error"
                        >

                          Delete

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

      {
        selectedTutor && (

          <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

            <form
              onSubmit={handleUpdate}
              className="bg-white p-8 rounded-xl w-[400px] space-y-4"
            >

              <h2 className="text-2xl font-bold">

                Update Tutor

              </h2>

              <input
                type="text"
                name="tutorName"
                defaultValue={
                  selectedTutor.tutorName
                }
                className="input input-bordered w-full"
              />

              <input
                type="text"
                name="subject"
                defaultValue={
                  selectedTutor.subject
                }
                className="input input-bordered w-full"
              />

              <input
                type="number"
                name="hourlyFee"
                defaultValue={
                  selectedTutor.hourlyFee
                }
                className="input input-bordered w-full"
              />

              <input
                type="text"
                name="location"
                defaultValue={
                  selectedTutor.location
                }
                className="input input-bordered w-full"
              />

              <div className="flex gap-4">

                <button className="btn btn-primary">

                  Save

                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedTutor(
                      null
                    )
                  }
                  className="btn"
                >

                  Cancel

                </button>

              </div>

            </form>

          </div>
        )
      }

    </div>
  );
}