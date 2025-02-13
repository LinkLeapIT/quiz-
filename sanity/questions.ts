import { defineType, defineField } from 'sanity';

const questions = defineType({
  name: 'questions',
  title: 'Questions',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'answers',
      title: 'Answers',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'correctAnswer',
      title: 'Correct Answer',
      type: 'string',
    }),
  ],
});

export default questions;
