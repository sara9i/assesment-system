const yup = require('yup');


const answersSchema = yup.object().shape({
    description: yup.string().required(),
    isCorrect: yup.bool(),
  });

const questionsSchema = yup.object().shape({
    description: yup.string().required(),
    answers: yup.array().of(answersSchema).required()
  });

const sectionsSchema = yup.object().shape({
    questions: yup.array().of(questionsSchema).required()
  });

export const assessmentBodySchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string(),
    isActive: yup.bool(),
    sections: yup.array().of(sectionsSchema).required()
});
