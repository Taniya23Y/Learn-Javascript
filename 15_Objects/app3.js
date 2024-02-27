// Object de-structure

const course = {
    courseName: "javascript",
    price: "999",
    courseInstructor: "Hitesh Sir"
}

console.log(course.courseInstructor); // Hitesh Sir

const {courseInstructor} = course
console.log(courseInstructor); // Hitesh Sir

const {courseInstructor: instructor} = course
console.log(instructor); // Hitesh Sir
