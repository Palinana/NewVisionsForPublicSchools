# NewVisionsForPublicSchools

### Tech Stack:
- Node.js
- React

To view the project, please follow the following steps:

## Clone and install the project from Github
```
git clone https://github.com/Palinana/NewVisionsForPublicSchools.git
cd NewVisionsForPublicSchools
npm install
npm start
```
## Details
After running **npm** start in terminal the app will automatically be loaded in a Browser. It will get the data from src/data/students.json and will isplay the initial data from the file on a Browser's webpage. The right top buttons will display the students data either by grade(**groupByGrade()**) or by average value for each grade(**findLowestAverages()**).

```
groupByGrade() {}
```
- The data comes from src/data/students.json
- Sorts it by grades
- Saves data into a array of data grouped by grade


The function is called when you click By Grade button.
  

```
findLowestAverages() {}
```
- The data comes from src/data/students.json
- Iterates over the data, finds the average value of all the scores for one student, and saves to a new array.
- Sorts the data in the array, filters to find the smallest values in a group based by grade
- Updates the array and returns the students with the lowest average scores
- 
The function is called when you click By Average button.

##
If you want to see the format of outhputs from the prompt, please click on the By Grade or By Average button and open developer console. 
![image](https://user-images.githubusercontent.com/26104823/110702854-0d7e8a00-81c1-11eb-8d9c-8f0bf33082d9.png)
