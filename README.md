### Required functionalities

1. Admin User should be able to create multiple assessments
2. Each assessment can can have multiple sections
3. Each section can have multiple questions [MCQ, MSQ]
4. Each question would have multiple answer options(4 max) with one or more answers being correct
5. User can view these assessments and try and attempt them
6. Admin can view how many assessments user has attempted

### Required code

1. Design the backend architecture. Tables and attributes for assessments, sections, questions, answers and any other required tables
2. UI to list all created assessments → Bonus if details page will all sections, questions and answers is also completed. Apis for getting the data
3. UI for adding a new assessments, its sections, questions and answers. Apis for getting the data
4. Edit/Delete not in scope
5. Authentication and Authorisation not in scope
6. Styling not in scope. But ability to demonstrate will be a bonus
7. Scoring logic for attempt of questions not in scope
8. User assignment attempt and scoring not in scope


### Assumptions

You can take the following assumptions under consideration

1. User data exists. 
    1. admin
        1. user_id: 1
        2. email: admin@xyz.co
    2. student_user_1
        1. user_id: 2
        2. email: student_user_1@xyz.co
    3. student_user_2
        1. user_id: 3
        2. email: student_user_2@xyz.co
