'use client';

import { useEffect, useState } from 'react';
import { authHeaders } from '@/lib/jwt';

export default function MyTutorsPage() {
	const [tutors, setTutors] = useState([]);
	const [selectedTutor, setSelectedTutor] = useState(null);

	// loading my tutors
	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/my-tutors`, { headers: authHeaders() })
			.then((res) => res.json())
			.then((data) => {
        setTutors(data)
      });
	}, []);

	// Delete tutors

	const handleDelete = (_id) => {
		const confirmDelete = confirm('Are you sure?');

		if (!confirmDelete) {
			return;
		}

		fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${_id}`, {
			method: 'DELETE',
			headers: authHeaders(),
		})
			.then((res) => res.json())

			.then((data) => {
				if (data.deletedCount > 0) {
					alert('Tutor Deleted');

					const remaining = tutors.filter((tutor) => tutor._id !== _id);

					setTutors(remaining);
				}
			});
	};

	// Update tutors

	const handleUpdate = (e) => {
		e.preventDefault();

		const form = e.target;

		const updatedTutor = {
			tutorName: form.tutorName.value,

			subject: form.subject.value,

			hourlyFee: form.hourlyFee.value,

			location: form.location.value,
		};

		fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${selectedTutor._id}`, {
			method: 'PUT',

			headers: {
				'content-type': 'application/json',
				...authHeaders(),
			},

			body: JSON.stringify(updatedTutor),
		})
			.then((res) => res.json())

			.then((data) => {
				if (data.modifiedCount > 0) {
					alert('Tutor Updated');

					const updated = tutors.map((tutor) => {
						if (tutor._id === selectedTutor._id) {
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
		<div className='p-10'>
			<h1 className='text-4xl font-bold text-center mb-10'>My Tutors</h1>

			{tutors.length === 0 ? (
				<div className='text-center text-2xl font-semibold'>No Tutors Added</div>
			) : (
				<div className='overflow-x-auto bg-white shadow-md rounded-lg'>
					<table className='w-full text-left'>
						<thead className='bg-gray-100'>
							<tr>
								<th className='px-4 py-3 font-semibold'>Photo</th>
								<th className='px-4 py-3 font-semibold'>Name</th>
								<th className='px-4 py-3 font-semibold'>Subject</th>
								<th className='px-4 py-3 font-semibold'>Fee</th>
								<th className='px-4 py-3 font-semibold'>Location</th>
								<th className='px-4 py-3 font-semibold'>Actions</th>
							</tr>
						</thead>
						<tbody>
							{tutors.map((tutor, i) => (
								<tr key={tutor._id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
									<td className='px-4 py-3'>
										<img src={tutor.photo} alt='' className='w-10 h-10 rounded-full object-cover' />
									</td>
									<td className='px-4 py-3 font-medium'>{tutor.tutorName}</td>
									<td className='px-4 py-3'>{tutor.subject}</td>
									<td className='px-4 py-3'>৳ {tutor.hourlyFee}</td>
									<td className='px-4 py-3'>{tutor.location}</td>
									<td className='px-4 py-3 flex gap-2'>
										<button
											onClick={() => setSelectedTutor(tutor)}
											className='px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600'
										>
											Update
										</button>
										<button
											onClick={() => handleDelete(tutor._id)}
											className='px-3 py-1.5 bg-red-500 text-white rounded hover:bg-red-600'
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}

			{selectedTutor && (
				<div className='fixed inset-0 bg-black/40 flex justify-center items-center'>
					<form onSubmit={handleUpdate} className='bg-white p-8 rounded-lg w-[400px] space-y-4'>
						<h2 className='text-2xl font-bold'>Update Tutor</h2>
						<input
							type='text'
							name='tutorName'
							defaultValue={selectedTutor.tutorName}
							className='w-full px-3 py-2 border border-gray-300 rounded'
						/>
						<input
							type='text'
							name='subject'
							defaultValue={selectedTutor.subject}
							className='w-full px-3 py-2 border border-gray-300 rounded'
						/>
						<input
							type='number'
							name='hourlyFee'
							defaultValue={selectedTutor.hourlyFee}
							className='w-full px-3 py-2 border border-gray-300 rounded'
						/>
						<input
							type='text'
							name='location'
							defaultValue={selectedTutor.location}
							className='w-full px-3 py-2 border border-gray-300 rounded'
						/>
						<div className='flex gap-4'>
							<button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Save</button>
							<button
								type='button'
								onClick={() => setSelectedTutor(null)}
								className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			)}
		</div>
	);
}
