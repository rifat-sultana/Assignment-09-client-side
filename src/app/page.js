import HomeTutors from "@/components/HomeTutors";
import Banner from "@/components/Banner";

async function getTutors() {
  const res = await fetch("http://localhost:5000/tutors");

  return res.json();
}

export default async function Home() {
  const tutors = await getTutors();

  return (
    <div>
      <Banner/>
      <HomeTutors tutors={tutors} />
    </div>
  );
}