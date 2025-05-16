<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1>
                    <router-link
                        :to="`/course/${CourseCode}`"
                        style="text-decoration: none; color: inherit;"
                    >
                        {{ CourseName }} - Assignments
                    </router-link>
                </h1>
                <v-row>
                    <v-col
                        v-for="(assignment, index) in assignments"
                        :key="index"
                        cols="12"
                        class="py-2"
                    >
                        <v-card
                            class="d-flex align-center justify-space-between rounded-lg"
                            outlined
                        >
                            <div class="pl-4 py-3">
                                <span class="font-weight-medium">{{ assignment.name }}</span>
                            </div>
                            <v-checkbox
                                v-model="assignment.completed"
                                :value="assignment.completed"
                                @change="toggleAssignment(index)"
                                class="mr-4"
                                hide-details
                                color="primary"
                                :disabled="assignment.completed"
                            ></v-checkbox>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
function getRandomAssignments(count = 7) {
    const names = [
        "Essay", "Quiz", "Lab", "Project", "Presentation", "Midterm", "Final", "Homework", "Report", "Case Study"
    ];
    const assignments = [];
    for (let i = 0; i < count; i++) {
        // Shuffle the names array for more randomness
        if (i % names.length === 0) names.sort(() => Math.random() - 0.5);
        assignments.push({
            name: `${names[i % names.length]} ${Math.floor(Math.random() * 10) + 1}`,
            completed: Math.random() < 0.5
        });
    }
    return assignments;
}

export default {
    name: "Assignments",
    data() {
        return {
            assignments: getRandomAssignments(),
            CourseName: "",
            CourseCode: ""
        };
    },
    mounted() {
        const course = JSON.parse(localStorage.getItem("course"));
        this.CourseName = course && course.CourseName ? course.CourseName : "Unknown Course";
        this.CourseCode = course && course.CourseCode ? course.CourseCode : "Unknown Code";
        console.log(this.CourseName);
        console.log(this.CourseCode);
    },
    methods: {
        toggleAssignment(index) {
            this.assignments[index].completed = !this.assignments[index].completed;
        }
    }
};
</script>