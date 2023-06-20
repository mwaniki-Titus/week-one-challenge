function calculateGrade() 
//Prompt the user to input students marks
const marks = parseInt(prompt("Enter the student's mark (between 0 and 100):"));
 

  if(marks >100 || marks < 0 (marks))
     return "invalid input";{

       
  }if(marks>79){
    grade='A';

}else if(marks>=60){
    grade='B'
}else if(marks>=50){
    grade ='c';
}else if (marks>=40){
    grade='D'
}else{
    return 'E'
}
let grade= generategrade();//call the function to submit the grade
console.log("The student's grade is:"+ grade);
