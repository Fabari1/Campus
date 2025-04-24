<template>

   <v-container class="container" fluid>
            <v-row class="pb-2 mb-2" rounded="xl" align="center" :max-width="800" justify="center">

         
              
                
                <v-card class="mx-auto mt-5 px-5 py-3">
                    <h2 class="mx-auto mb-5 px-5 pb-3">Welcome back, {{ student.FirstName }}</h2>
                    <h4 class="mx-6">Course overview</h4>
                    <v-row>
                        <v-col cols="12" md="4" v-for="course in courses" :key="course.CourseCode">
                            <RouterLink class = "route"  :to="`/course/${course.CourseCode}`" style="text-decoration: none; color: inherit;">
                                    <v-card elevation="10" class="mx-auto mx-2 mt-5 px-5 py-3" max-width="400" min-height="200" rounded="xl">
                                        <v-card-title>{{ course.CourseCode }}</v-card-title>
                                        <v-card-subtitle class="text-blue">{{ course.CourseName }}</v-card-subtitle>
                                        <v-card-text>{{ courseInitial(course.CourseCode) }} Undergraduate Courses</v-card-text>
                                    </v-card>
                                
                            </RouterLink>
                        </v-col>
                    </v-row>
                </v-card>
            </v-row>
     

     
    </v-container>
</template>

    <script setup>

    import { storeToRefs } from 'pinia';
    import { ref,reactive, watch, onMounted, onBeforeUnmount } from 'vue';
    import { useAppStore } from "@/store/appStore";
    import { useRoute, RouterLink } from 'vue-router';
    import { useRouter } from 'vue-router';






// VARIABLES
// let isLoading = ref(false);
const appStore = useAppStore();
const { isLoading } = storeToRefs(appStore);

// function refreshPage() {
//     setTimeout(() => {
//         window.location.reload();
//     }, 1000); // 1 second delay
// }

// Call refreshPage only when necessary, e.g., based on a user action or specific condition

// let courses = ref( [
//                         {CourseCode: 'COMP2171', CourseName: 'Object Oriented Design & Implementation', category: 'COMP Undergraduate Courses' },
//                         {CourseCode: 'COMP3161', CourseName: 'Introduction to Database Management Systems', category: 'COMP Undergraduate Courses' },
//                         {CourseCode: 'COMP3901', CourseName: 'Group Project', category: 'COMP Undergraduate Courses' },
//                         {CourseCode: 'COMP2451', CourseName: 'Software Engineering', category: 'COMP Undergraduate Courses' },
//                         {CourseCode: 'COMP2172', CourseName: 'Web Programming', category: 'COMP Undergraduate Courses' },
//                         {CourseCode: 'COMP3171', CourseName: 'Computer Networks', category: 'COMP Undergraduate Courses' },
//                         {CourseCode: 'COMP3172', CourseName: 'Operating Systems', category: 'COMP Undergraduate Courses' },
//                         {CourseCode: 'COMP3173', CourseName: 'Computer Architecture', category: 'COMP Undergraduate Courses' },
//                         {CourseCode: 'COMP3174', CourseName: 'Computer Graphics', category: 'COMP Undergraduate Courses' },
//                         {CourseCode: 'COMP3175', CourseName: 'Artificial Intelligence', category: 'COMP Undergraduate Courses' },
//                     ] )
const courses = JSON.parse(localStorage.getItem('courses') || '[]');
const user = JSON.parse(localStorage.getItem('student') || '{}');

let student = user.user ;// { id: 620154701, fname: 'Fabari', lname: 'Williams' }
console.log(courses);

// let student = ref({ id: 620154701, fname: 'Fabari', lname: 'Williams' })



const courseInitial = (courseName) => {
    return courseName
        .replace(/[0-9]/g, '') // Remove all numbers
        .split(' ')
        .join('');
}


// function getCourses(courseId) {
//     // Simulate an API call to fetch course details
// }
    


// FUNCTIONS
onMounted(()=>{
   
});

onBeforeUnmount(()=>{ 
  
});
       
   
    </script>

