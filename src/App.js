import React, { Component } from 'react';
import studentsData from "./data/students";
import './App.css';

class App extends Component {
  state = {
    initialData: studentsData,
    studentsData,
    averageToggle: false
  }

  /*
  Takes in students data, and sorts it first by grade, and returns
    an array with updated records object 
  */
  groupByGrade = (students) => {
    // sorts by grade
    students.sort(function(a, b) {
      return a['grade'] - b['grade'];
    });
  
    // adds name and grade to new to new array
    const groupedByGradeData = students.reduce(function(r, a) {
      r[a.grade] = r[a.grade] || [];
        r[a.grade].push({'name':a.name, 'grade': a.grade});
        return r;
    }, []);

    // on state saving simplier version, the desired one is printed in Browser's console 
    console.log('groupByGrade: ', groupedByGradeData)

    // saving modified data on state
    this.setState({
      studentsData: students,
      averageToggle: false
    })
  }

  /*
  Takes in students data with averages. Then sorts it first by average and filters objects
   to get the smallest average in a group by grade. Returns an array with updated records object 
  */ 
  findLowestAverages = (students) => {
    let studentsDataWithAverage = students.reduce(function(r, a) {
      r[a.grade] = r[a.grade] || [];
      
      // adding to new array name, date and smallest average
      r[a.grade].push({
        'name':a.name, 
        'grade': a.grade, 
        'average': a.scores.reduce((r, c) => r + c.value, 0) / a.scores.length
      });
      return r;
    }, []);
  
    studentsDataWithAverage = this.smallestAverageGrade(studentsDataWithAverage);
    console.log('findLowestAverages: ', studentsDataWithAverage)

    // saving modiifed data on state and toggling the average info
    this.setState({
      studentsData: studentsDataWithAverage,
      averageToggle: true
    })
  }

  /* Finds the smallest average grade in array */
  smallestAverageGrade = (students) => {
    for(let i=0;i<students.length;i++){
      if (Array.isArray(students[i])){
        students[i] = students[i]
        .sort((a, b) => a.average - b.average)
        .filter((student, index, array) => student.average === array[0].average)[0]
      }    
    }
    return students;
  }

  render() {
    const { initialData, studentsData, averageToggle } = this.state;

    return (
      <div className="container"> 
        <div className="table-header">
          <div className="table-header__items">
            <div className="table-header__item-title"><h2>College Students</h2></div>

            <div className="table-header__item-btns">
              <button 
                onClick={() => this.groupByGrade(initialData)}
                className="table-header__btn-grade" 
              >
              By Grade
              </button>

              <button 
                onClick={() => this.findLowestAverages(initialData)}
                className="table-header__btn-avg"  
              >
              By Average
              </button>              
              </div>
          </div>
        </div>
  
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Grade</th>
              {averageToggle ? <th>Average</th> : null}
            </tr>
          </thead>
          <tbody>
            {studentsData.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{item.grade}</td>
                  {item.average ? <td>{item.average}</td> : null}
                </tr>
              )}
              )
            }
          </tbody>
        </table>
      </div> 
    );
  }
}

export default App;
