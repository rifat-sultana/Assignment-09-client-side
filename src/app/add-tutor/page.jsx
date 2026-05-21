"use client";

export default function AddTutorPage() {

  const handleAddTutor = (e) => {

    e.preventDefault();

    const form = e.target;

    const tutorData = {

      tutorName: form.tutorName.value,

      photo: form.photo.value,

      subject: form.subject.value,

      availableDays: form.availableDays.value,

      availableTime: form.availableTime.value,

      hourlyFee: form.hourlyFee.value,

      totalSlot: form.totalSlot.value,

      sessionStartDate:
        form.sessionStartDate.value,

      institution: form.institution.value,

      experience: form.experience.value,

      location: form.location.value,

      teachingMode: form.teachingMode.value,

      // USER INFO

      userName: "Rifat",

      userEmail: "rifat@gmail.com",

    };

    console.log(tutorData);

    fetch("http://localhost:5000/tutors", {

      method: "POST",

      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(tutorData),

    })
      .then((res) => res.json())

      .then((data) => {

        console.log(data);

        if (data.insertedId) {

          alert("Tutor Added Successfully");

          form.reset();
        }
      });
  };

  return (

    <div className="max-w-3xl mx-auto py-16 px-6">

      <div className="bg-white shadow-2xl rounded-2xl p-10">

        <h1 className="text-4xl font-bold text-center mb-3">

          Add Tutor

        </h1>

        <p className="text-center text-gray-500 mb-10">

          Fill all tutor information

        </p>

        <form
          onSubmit={handleAddTutor}
          className="space-y-6"
        >

          {/* Tutor Name */}

          <div>

            <label className="font-semibold">

              Tutor Name
            </label>

            <input
              type="text"
              name="tutorName"
              placeholder="Enter tutor name"
              className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Photo URL */}

          <div>

            <label className="font-semibold">

              Photo URL
            </label>

            <input
              type="text"
              name="photo"
              placeholder="Paste image URL"
              className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Subject */}

          <div>

            <label className="font-semibold">

              Subject
            </label>

            <select
              name="subject"
              className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >

              <option>Mathematics</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Biology</option>
              <option>English</option>

            </select>
          </div>

          {/* Available Days */}

          <div>

            <label className="font-semibold">

              Available Days
            </label>

            <input
              type="text"
              name="availableDays"
              placeholder="Sun - Thu"
              className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Available Time */}

          <div>

            <label className="font-semibold">

              Available Time
            </label>

            <input
              type="text"
              name="availableTime"
              placeholder="5:00 PM - 8:00 PM"
              className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Hourly Fee */}

          <div>

            <label className="font-semibold">

              Hourly Fee
            </label>

            <input
              type="number"
              name="hourlyFee"
              placeholder="Enter fee"
              className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Total Slot */}

          <div>

            <label className="font-semibold">

              Total Slot
            </label>

            <input
              type="number"
              name="totalSlot"
              placeholder="Enter total slot"
              className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Session Start Date */}

          <div>

            <label className="font-semibold">

              Session Start Date
            </label>

            <input
              type="date"
              name="sessionStartDate"
              className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Institution */}

          <div>

            <label className="font-semibold">

              Institution
            </label>

            <input
              type="text"
              name="institution"
              placeholder="Institution name"
              className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Experience */}

          <div>

            <label className="font-semibold">

              Experience
            </label>

            <input
              type="text"
              name="experience"
              placeholder="5 Years"
              className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Location */}

          <div>

            <label className="font-semibold">

              Location
            </label>

            <input
              type="text"
              name="location"
              placeholder="Dhaka"
              className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Teaching Mode */}

          <div>

            <label className="font-semibold">

              Teaching Mode
            </label>

            <select
              name="teachingMode"
              className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >

              <option>Online</option>
              <option>Offline</option>
              <option>Both</option>

            </select>
          </div>

          {/* Submit Button */}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold"
          >

            Submit

          </button>

        </form>

      </div>

    </div>
  );
}