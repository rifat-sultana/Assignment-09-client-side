import HomeTutors from "@/components/HomeTutors";
import Banner from "@/components/Banner";

async function getTutors() {
  const res = await fetch(`${API_KEY}/tutors`);

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