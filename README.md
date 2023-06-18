# week-one-challenge
In marks cade, the user is prompted to input the student's mark.

The code then checks the validity of the input mark using if and else if statements:

If the mark is greater than 100, less than 0, its null
If the mark is greater than 79, the grade is set to 'A'.
If the mark is between 60 and 79 (inclusive), the grade is set to 'B'.
If the mark is between 50 and 59 (inclusive), the grade is set to 'C'.
If the mark is between 40 and 49 (inclusive), the grade is set to 'D'.
If none of the above conditions are met, the grade is set to 'E'.
Finally, the calculated grade is displayed using console.log().

speed detector:
The function calculateDemeritPoints takes the speed of the car as a parameter

speedLimit represents the speed limit, which is set to 80 km/h.
kmPerDemeritPoint indicates the number of kilometers above the speed limit that will result in one demerit point. In this case, it is set to 5 km/h.
maxDemeritPoints represents the maximum number of demerit points before the driver's license gets suspended, which is set to 20.
The first condition checks if the speed is less than or equal to the speed limit. If it is, the program prints "Ok" to indicate that the driver is within the speed limit.

If the speed is greater than the speed limit, the program calculates the number of demerit points by subtracting the speed limit from the current speed and dividing the difference by kmPerDemeritPoint.

If the calculated number of points exceeds or equals the maxDemeritPoints, the program prints "License suspended" to indicate that the driver's license has been suspended.

If the number of points is below the maxDemeritPoints, the program prints demerit points.
