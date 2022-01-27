// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent: function(sectionNum){
        // find the right section
        const sectionIndex = this.sections.findIndex(function(section){
            return section.sectionNum === sectionNum;
        })
        // add one to enroll
        this.sections[sectionIndex].enrolled++;
        renderSections(this.sections);
    },
    dropStudent: function(sectionNum){

    },

  };

function setCourseInfo(course){
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
}

function renderSections(sections){
    const sectionElement = document.querySelector("#sections");
    
    sections.forEach(section => {
        sectionElement.innerHTML += 
        `<tr>
            <td>${section.sectionNumber}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
        </tr>`
    })
}

setCourseInfo(aCourse);
renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
})