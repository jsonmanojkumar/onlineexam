import studentsController from './student/student.controller';
import categoryController from './category/category.controller';
import paperAttemptedController from './paper-attempted/paperattempted.controller';
import paperCodeController from './paper-code/paper-code.controller';
import questionAnsController from './question-ans/question-ans.controller';
import subjectController from './subject/subject.controller';
import resultController from './result/result.controller';
import paperController from './paper/paper.controller';
import userController from './user/user.controller';



module.exports = {
    studentsController: studentsController,
    categoryController:categoryController,
    paperController:paperController,
    paperAttemptedController:paperAttemptedController,
    paperCodeController:paperCodeController,
    questionAnsController:questionAnsController,
    resultController:resultController,
    userController:userController,
    subjectController:subjectController
}