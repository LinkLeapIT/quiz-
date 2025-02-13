import StatCard from "@/components/StatCard";
import { fetchUsers } from "../(auth)/actions/fetchUsers";

// This function needs to be marked as async to allow data fetching
const StatsPage = async () => {
  let currentUser = null;
  try {
    currentUser = await fetchUsers();
  } catch (error) {
    console.error("Error in fetchUsers:", error);
  }

  const quizResults = currentUser?.data?.quizResults || [];

  return (
    <div className="py-20">
      <div className="text-center mb-10 text-2xl uppercase">
        <h1>{currentUser?.data?.user?.username} Stats 📊</h1>
      </div>
      <div className="max-w-[1500px] mx-auto w-[90%] grid sm:grid-cols-3 gap-10 justify-center">
        <StatCard
          title="Total Points"
          value={quizResults[0]?.quizScore ?? 0}
        />
        <StatCard
          title="Correct Answers"
          value={quizResults[0]?.correctAnswers ?? 0}
        />
        <StatCard
          title="Wrong Answers"
          value={quizResults[0]?.wrongAnswers ?? 0}
        />
      </div>
    </div>
  );
};

// Mark the component to use server-side rendering
export const dynamic = 'force-dynamic';

export default StatsPage;
