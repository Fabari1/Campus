<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card class="pa-5" elevation="5" rounded="xl">
          <v-card-title class="text-h5 my-7 text-center">Sign In</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="schoolID"
              label="School ID"
              type="text"
              variant="outlined"
              placeholder="Enter your School ID"
              density="compact"
              class="mt-3"
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              variant="outlined"
              placeholder="Enter your password"
              density="compact"
              class="mt-3"
            ></v-text-field>
            <v-alert v-if="error" type="error" class="mt-3" dense>
              Invalid credentials. Please try again.
            </v-alert>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              class="mx-auto bg-primary" color="blue" variant="outlined" rounded="xl" @click="checkCredentials">Sign In
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

import { useRouter } from "vue-router";
import { useTheme } from 'vuetify';  
import { ref ,watch ,onMounted ,onBeforeMount } from 'vue';
import { useAppStore } from "@/store/appStore";
import { storeToRefs } from "pinia";


const appStore = useAppStore();
const schoolID = ref("");
const password = ref("");
const error = ref(false);


const router = useRouter();

const checkCredentials = async () => {
  try {
    // Attempt login using the app store's login method
    const login = await appStore.login(schoolID.value, password.value);
    console.log("Login response:", login);

    if (login.message === "Login successful") {
      // Store authentication state and user data in localStorage
      localStorage.setItem("signedIn", true);
      localStorage.setItem("schoolID", schoolID.value);

      console.log("School ID:", schoolID.value);

      // Fetch and store student courses and user details
      const course = await appStore.getStudentCourses(schoolID.value);
      const student = await appStore.getUser(schoolID.value);

      console.log("Student details:", student);
      console.log("Courses:", course);

      localStorage.setItem("courses", JSON.stringify(course));
      localStorage.setItem("student", JSON.stringify(student));

      // Reload the page and navigate to the courses page
      window.location.reload();
      router.push("/courses");
    } else {
      // Handle invalid credentials
      error.value = true;
      localStorage.setItem("signedIn", false);
    }

  } catch (err) {
    // Log any unexpected errors
    console.error("Error during login:", err);
    error.value = true;
  }
};
</script>

<style scoped>
.v-card-title {
  font-weight: bold;
}
</style>
    