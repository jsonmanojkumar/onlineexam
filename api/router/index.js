import studentsRouter from './student/student.route';
import categoryRouter from './category/category.route';
import paperattemptedRouter from './paper-attempted/paper-attempted.route';
import papercodeRouter from './paper-code/papercode.route';
import questionansRouter from './question-ans/questionans.route';
import userRouter from './user/user.route';
import subjectRouter from './subject/subject.route';
import paperRouter from './paper/paper.route';



module.exports = {
    studentsRouter:studentsRouter,
    categoryRouter:categoryRouter,
    paperattemptedRouter:paperattemptedRouter,
    papercodeRouter:papercodeRouter, 
    questionansRouter:questionansRouter, 
    userRouter:userRouter,
    subjectRouter:subjectRouter,
    paperRouter:paperRouter
    

}
