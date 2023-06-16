function calculateGrade() 
//Prompt the user to input student marks
const mark = parseInt(prompt("Enter the student's mark (between 0 and 100):"));
 
    let grade="";

  if(marks>100 || marks <0 (user))
         grade ="invalid input"; 
         
else if(marks>79){
    grade='A';

}else if(marks>=60){
    grade='B'
}else if(marks>=50){
    grade ='c';
}else if (marks>=40){
    grade='D'
}else{
    grade='E'
}
console.log(grade);