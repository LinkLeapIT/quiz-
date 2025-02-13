import QuizClient from '@/components/QuizClient';
import { client } from '@/sanity/lib/client';
import { fetchUsers } from '../(auth)/actions/fetchUsers';

export const dynamic = "force-dynamic";

async function getData() {
    const query = `*[_type == "questions"]{
        _id,
        question,
        answers,
        correctAnswer
    }`;

    const data = await client.fetch(query);
    console.log("Fetched Questions:", data); // Debug log

    return data;
}

const Page = async () => {
    const questions = await getData();
    const user = await fetchUsers();
    const userId = user?.data?.user?.id;

    return (
        <QuizClient initialQuestions={questions} userId={userId} error={user?.error} />
    );
}

export default Page;
