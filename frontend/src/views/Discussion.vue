<template>
    <div class="discussion">
        <h1><router-link
                        :to="`/course/${CourseCode}`"
                        style="text-decoration: none; color: inherit;"
                    >
                        {{ CourseName }} - Disussion Forum
                    </router-link></h1>
        <div class="posts">
            <div v-for="(post, index) in posts" :key="index" class="post">
                <div class="post-content">
                    <strong>{{ post.author }}</strong>: {{ post.content }}
                </div>
                <div class="replies">
                    <div v-for="(reply, rIndex) in post.replies" :key="rIndex" class="reply">
                        <em>{{ reply.author }}</em>: {{ reply.content }}
                    </div>
                </div>
            </div>
        </div>
        <!-- Forum content goes here -->
    </div>
</template>

<script>
export default {
    name: 'Discussion',
    data() {
        return {
            CourseName: "",
            CourseCode: "",
            posts: [
                {
                    author: "Alice",
                    content: "What's your biggest takeaway from this week's lecture?",
                    replies: [
                        { author: "Bob", content: "I finally understood recursion!" },
                        { author: "Carol", content: "The group project requirements are clearer now." }
                    ]
                },
                {
                    author: "David",
                    content: "Does anyone have tips for the upcoming quiz?",
                    replies: [
                        { author: "Eve", content: "Review the sample questions from last year." }
                    ]
                },
                {
                    author: "Frank",
                    content: "Share your favorite resource for this course!",
                    replies: [
                        { author: "Grace", content: "I like the official documentation." },
                        { author: "Heidi", content: "YouTube tutorials help a lot." }
                    ]
                },
                {
                    author: "Ivan",
                    content: "What topic do you find most challenging so far?",
                    replies: [
                        { author: "Judy", content: "Asynchronous programming is tough." }
                    ]
                },
                {
                    author: "Mallory",
                    content: "Let's discuss the latest assignment together.",
                    replies: [
                        { author: "Niaj", content: "I'm stuck on question 3." }
                    ]
                },
                {
                    author: "Olivia",
                    content: "Any study group recommendations?",
                    replies: [
                        { author: "Peggy", content: "Join the Discord group!" }
                    ]
                },
                {
                    author: "Quentin",
                    content: "How do you stay organized for this class?",
                    replies: [
                        { author: "Rupert", content: "I use Notion for notes." }
                    ]
                },
                {
                    author: "Sybil",
                    content: "Post your questions about the project here.",
                    replies: [
                        { author: "Trent", content: "How do we handle user authentication?" }
                    ]
                },
                {
                    author: "Uma",
                    content: "Who wants to collaborate on the next task?",
                    replies: [
                        { author: "Victor", content: "I'm interested!" }
                    ]
                },
                {
                    author: "Wendy",
                    content: "Share your thoughts on today's discussion.",
                    replies: [
                        { author: "Xander", content: "It was very insightful." }
                    ]
                }
            ]
        };
        
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
.discussion {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
}
.posts {
    margin-top: 2rem;
}
.post {
    background: #f5f5f5;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
}
.post-content {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}
.replies {
    margin-left: 1rem;
    border-left: 2px solid #ddd;
    padding-left: 1rem;
}
.reply {
    margin-bottom: 0.3rem;
    color: #555;
}
</style>