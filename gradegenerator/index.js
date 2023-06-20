function calculateGrade() {
//Prompt the user to input students marks
let marks = parseFloat(prompt("Enter the student's mark (between 0 and 100):"));
 

  if(marks >100 || marks < 0){
     return "invalid input";

       
}else if(marks > 79){
    return 'A';

}else if(marks >= 60){
    return 'B';
}else if(marks >= 50){
    return 'c';
}else if (marks >= 40){
    return 'D';
}else{
    return 'E';
}
}
let grade= calculateGrade();//call the function to submit the grade
console.log("grade");
