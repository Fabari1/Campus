<template>
  <v-container fluid class="fill-height pa-6">
    <h1 class="text-4xl font-bold mb-6" style="color: royalblue;">📢 University Announcements</h1>

    <v-sheet
      elevation="2"
      class="pa-4"
      height="80vh"
      style="overflow-y: auto; border-radius: 20px;"
    >
      <v-row dense>
        <v-col
          cols="12"
          md="6"
          v-for="(announcement, index) in announcements"
          :key="index"
        >
          <v-card
            elevation="6"
            class="mb-6 bg-surface"
            height="250"
            rounded="xl"
          >
            <v-card-title class="d-flex align-center">
              <v-icon
                :icon="announcement.icon"
                color="primary"
                size="28"
                class="mr-3"
              />
              <span class="text-xl font-semibold">{{ announcement.title }}</span>
            </v-card-title>

            <v-card-subtitle class="ml-12 mb-2" color="red">
              {{ announcement.date }}
            </v-card-subtitle>

            <v-card-text class="text-base ml-12">
              {{ announcement.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const announcements = ref([
  {
    title: 'Dean’s List Ceremony',
    date: 'April 25, 2025',
    description:
      'Join us in the Main Auditorium at 2:00 PM to celebrate students achieving academic excellence this semester.',
    icon: 'mdi-school'
  },
  {
    title: '2025 Innovation Grant Winner',
    date: 'April 20, 2025',
    description:
      'Congrats to Sarah Lin (Computer Science) for securing the $10,000 innovation grant for her AI-assisted physical therapy project.',
    icon: 'mdi-trophy-award'
  },
  {
    title: 'Spring Music Festival',
    date: 'April 30, 2025',
    description:
      'Outdoor concert with live bands, food trucks, and games from 4 PM to 10 PM at the university park.',
    icon: 'mdi-music-circle'
  },
  {
    title: 'Student Research Expo',
    date: 'May 2, 2025',
    description:
      'View groundbreaking projects from final-year students in Engineering, Sciences, and Arts in the Student Center Hall.',
    icon: 'mdi-chart-bar'
  },
  {
    title: 'New Cafeteria Menu',
    date: 'April 18, 2025',
    description:
      'Cafeteria introduces a new rotating global menu featuring dishes from Italy, Jamaica, India, and Japan weekly.',
    icon: 'mdi-silverware-fork-knife'
  },
  {
    title: 'Summer Internship Registration',
    date: 'April 22, 2025',
    description:
      'Register for on-campus and remote summer internships via the Career Services portal before the deadline.',
    icon: 'mdi-briefcase-account'
  }
]);
</script>
