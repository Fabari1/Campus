<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>
                        <h1>
                    <router-link
                        :to="`/course/${CourseCode}`"
                        style="text-decoration: none; color: inherit;"
                    >
                        {{ CourseName }} - Assignments
                    </router-link>
                </h1>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="dialog = true">Add Event</v-btn>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-list>
                            <v-list-item v-for="event in events" :key="event.id">
                                <v-list-item-content>
                                    <v-list-item-title>{{ event.title }}</v-list-item-title>
                                    <v-list-item-subtitle>
                                        {{ event.date }} &mdash; {{ event.description }}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn icon @click="editEvent(event)">
                                        <v-icon>mdi-pencil</v-icon>
                                    </v-btn>
                                    <v-btn icon @click="deleteEvent(event.id)">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item v-if="events.length === 0">
                                <v-list-item-content>
                                    <v-list-item-title>No events yet.</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Add/Edit Event Dialog -->
        <v-dialog v-model="dialog" max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">{{ editedEvent.id ? 'Edit' : 'Add' }} Event</span>
                </v-card-title>
                <v-card-text>
                    <v-form ref="form" v-model="formValid">
                        <v-text-field
                            v-model="editedEvent.title"
                            label="Title"
                            :rules="[v => !!v || 'Title is required']"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="editedEvent.date"
                            label="Date"
                            type="date"
                            :rules="[v => !!v || 'Date is required']"
                            required
                        ></v-text-field>
                        <v-textarea
                            v-model="editedEvent.description"
                            label="Description"
                            :rules="[v => !!v || 'Description is required']"
                            required
                        ></v-textarea>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="closeDialog">Cancel</v-btn>
                    <v-btn color="primary" :disabled="!formValid" @click="saveEvent">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    name: "Events",
    data() {
        return {
            CourseName: "",
            CourseCode: "",
            events: [],
            dialog: false,
            formValid: false,
            editedEvent: {
                id: null,
                title: "",
                date: "",
                description: "",
            },
        };
    },
    methods: {
        closeDialog() {
            this.dialog = false;
            this.resetForm();
        },
        saveEvent() {
            if (!this.$refs.form.validate()) return;
            if (this.editedEvent.id) {
                // Edit existing event
                const index = this.events.findIndex(e => e.id === this.editedEvent.id);
                if (index !== -1) this.events.splice(index, 1, { ...this.editedEvent });
            } else {
                // Add new event
                this.events.push({
                    ...this.editedEvent,
                    id: Date.now(),
                });
            }
            this.closeDialog();
        },
        editEvent(event) {
            this.editedEvent = { ...event };
            this.dialog = true;
        },
        deleteEvent(id) {
            this.events = this.events.filter(e => e.id !== id);
        },
        resetForm() {
            this.editedEvent = {
                id: null,
                title: "",
                date: "",
                description: "",
            };
            if (this.$refs.form) this.$refs.form.resetValidation();
        },
    },
     mounted() {
        const course = JSON.parse(localStorage.getItem("course"));
        this.CourseName = course && course.CourseName ? course.CourseName : "Unknown Course";
        this.CourseCode = course && course.CourseCode ? course.CourseCode : "Unknown Code";
        console.log(this.CourseName);
        console.log(this.CourseCode);
    },
};
</script>

<style scoped>
.headline {
    font-weight: bold;
}
</style>