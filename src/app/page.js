import HomeTutors from "@/components/HomeTutors";
import Banner from "@/components/Banner";

export const dynamic = 'force-dynamic';

async function getTutors() {
 const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`);

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