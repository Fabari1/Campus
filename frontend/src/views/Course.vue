<template>
<!-- 
<Navbar/> -->

  
        <v-container>
          <!-- Course Title & Tabs -->
          <v-card class="pa-6 mb-6">
            <h1 class="text-h4">{{ courseTitle }}</h1>
           
          </v-card>
  
          <!-- General Section -->
            <v-card class="pa-4 mb-4">
            <h2 class="text-h5 mb-4">General</h2>
            <v-row dense>
              <v-col cols="9" md="3" v-for="item in generalItems" :key="item.title">
              <v-card class="d-flex flex-column align-center pa-4 mx-3 my-3 rounded-lg" elevation="2" hover>
                <v-btn icon color="primary" size="large" class="mb-3">
                <v-icon size="36">{{ item.icon }}</v-icon>
                </v-btn>
                <h3 class="text-subtitle-1 text-center">{{ item.title }}</h3>
                
              </v-card>

              
              </v-col>
              <v-col cols="3" >
                <v-card class="d-flex flex-column align-center pa-4 mx-3 my-3 rounded-lg" elevation="2" hover>
                <v-btn icon color="primary" size="large" class="mb-3">
                <h2 class="text-h5">{{ courseGrade }}</h2>
                </v-btn>
                <h3 class="text-subtitle-1 text-center">Grades</h3>
                
              </v-card>
              </v-col>
            </v-row>
            </v-card>
  
          <!-- Lectures Section -->
          <v-card class="pa-4 mb-4">
            <h2 class="text-h5">Lectures</h2>
            <!-- Add content as needed -->
          </v-card>
        </v-container>

    
  </template>

<script setup>
/** JAVASCRIPT HERE */

// IMPORTS
import { ref,reactive,watch ,onMounted,onBeforeUnmount,computed } from "vue";  
import { useRoute ,useRouter } from "vue-router";


 
 
// VARIABLES
const router      = useRouter();
const route       = useRoute();  

const course_id = route.params.id;

const courses = JSON.parse(localStorage.getItem('courses') || '[]');

const course = courses.find(c => c.CourseCode === course_id);
console.log(course);


let generalItems = ref([
    { title: 'Assignments', icon: 'mdi-book-open' },
    { title: 'Discussions', icon: 'mdi-forum' },
    { title: 'Events', icon: 'mdi-calendar' },
    
]);

let tab = ref(0);

const user = JSON.parse(localStorage.getItem('student') || '{}');

let student = user.user 

// let courses = ref( [
//                         { id: 1, code: 'COMP2171', title: 'Object Oriented Design & Implementation', category: 'COMP Undergraduate Courses' },
//                         { id: 2, code: 'COMP3161', title: 'Introduction to Database Management Systems', category: 'COMP Undergraduate Courses' },
//                         { id: 3, code: 'COMP3901', title: 'Group Project', category: 'COMP Undergraduate Courses' },
//                         { id: 4, code: 'COMP2451', title: 'Software Engineering', category: 'COMP Undergraduate Courses' },
//                         { id: 5, code: 'COMP2172', title: 'Web Programming', category: 'COMP Undergraduate Courses' },
//                         { id: 6, code: 'COMP3171', title: 'Computer Networks', category: 'COMP Undergraduate Courses' },
//                         { id: 7, code: 'COMP3172', title: 'Operating Systems', category: 'COMP Undergraduate Courses' },
//                         { id: 8, code: 'COMP3173', title: 'Computer Architecture', category: 'COMP Undergraduate Courses' },
//                         { id: 9, code: 'COMP3174', title: 'Computer Graphics', category: 'COMP Undergraduate Courses' },
//                         { id: 10, code: 'COMP3175', title: 'Artificial Intelligence', category: 'COMP Undergraduate Courses' },
//                     ] )


let courseCode = course.CourseCode;
let courseTitle = course.CourseName;
let courseGrade = course.Grade;
console.log(courseGrade);


// FUNCTIONS
onMounted(()=>{
    // THIS FUNCTION IS CALLED AFTER THIS COMPONENT HAS BEEN MOUNTED
});


onBeforeUnmount(()=>{
    // THIS FUNCTION IS CALLED RIGHT BEFORE THIS COMPONENT IS UNMOUNTED
});


</script>


<style scoped>
/** CSS STYLE HERE */


</style>
  