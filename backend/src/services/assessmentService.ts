
/**
 * Required External Modules and Interfaces
 */
const db = require('../models');


export const createtAssessment = async (body) => {
  try {
    console.log("in assessment creation service")
    const {title,description,isActive,sections} = body;
    console.log("sections: ", typeof sections, sections)
    let sectionIdx = 1;
    const assessment  = await db.assessments.create({title: title, description: description, isActive: isActive});
    console.log("assessment: ", assessment)
    for(const section of sections){
        console.log("creating section ", section)
        const {questions, title=`Section ${sectionIdx}`, description} = section;
        const newSection = await db.sections.create({title: title, description: description, assessmentId: assessment.id});
        for(const question of questions){
            console.log("creating question ", question)
            const {answers, description} = question;
            const newQuestion = await db.questions.create({description: description, assessmentId: assessment.id, sectionId: newSection.id});
            for(const ans of answers){
                console.log("creating answer ", ans)
                const {isCorrect, description} = ans;
                await db.answers.create({description: description,isCorrect: isCorrect, assessmentId: assessment.id, questionId: newQuestion.id});
            }
        }
        sectionIdx+=1;
    }
 
    return assessment
  } catch (e) {
    throw 'Something bad happened';
  }
}

export const getAssessmentDetails = async (assessmentID) => {
  try {
    console.log("in assessment details service")
    let assessment  = await db.assessments.findByPk(assessmentID);
    assessment = assessment.dataValues;
    console.log("assessment: ", assessment)
    assessment.sections = await db.sections.findAll({where: {assessmentId:assessmentID}, raw : true})
    // const [assessment, metadata] = await db.sequelize.query(
    //   `SELECT * FROM assessments JOIN sections on sections.assessmentId=assessments.id JOIN questions ON questions.sectionId = sections.id where assessments.id = ${assessmentID}`
    // );
    console.log("assessment.sections: ", assessment.sections)
    for(const section of assessment.sections){
      section.questions = await db.questions.findAll({where: {sectionId: section.id}, raw : true});
      for(const question of section.questions){
        question.answers = await db.answers.findAll({where: {assessmentId: assessment.id, questionId: question.id}, raw : true});
      }
  }
 
    return assessment
  } catch (e) {
    console.log(e)
    throw 'Something bad happened';
  }
}