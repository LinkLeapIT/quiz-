"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Quiz from "./Quiz";
import { client } from "@/sanity/lib/client";

interface QuizClientProps {
  initialQuestions: {
    _id: string;
    question: string;
    answers: string[];
    correctAnswer: string;
  }[];
  userId: string | undefined;
  error?: string;
}

const QuizClient = ({ initialQuestions, userId, error }: QuizClientProps) => {
  const router = useRouter();
  const [questions, setQuestions] = useState(initialQuestions);

  useEffect(() => {
    if (error || !userId) {
      alert("You need to sign in first");
      router.push("/sign-in");
    }
  }, [error, userId, router]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const query = `*[_type == "questions"]{
        _id,
        question,
        answers,
        correctAnswer
      }`;
      const data = await client.fetch(query);
      setQuestions(data);
    };

    fetchQuestions();
  }, []);

  if (!userId) {
    return null; // Or a loading spinner, or a message indicating the user needs to sign in
  }

  return <Quiz questions={questions} userId={userId} />;
};

export default QuizClient;
