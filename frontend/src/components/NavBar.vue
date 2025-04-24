  <template>
         <VToolbar flat density="compact" color="surface" height="100" >
            <VContainer fluid>
                    <VRow align="center" justify="center">
                        <VCol cols="1" align="left" >
                            <v-tooltip text="Logout" location="start">
                                <template #activator="{ props }">
                                    <VBtn class="logout" size="x-medium" :elevation="0"  icon v-bind="props" @click="logout()" > 
                                        <VIcon icon="mdi:mdi-account-arrow-left" ></VIcon>
                                    </VBtn>
                                </template>
                            </v-tooltip>
                      
                             
                        </VCol>

                        <VCol cols="2" align="center"  >
                            <div>
                                <!-- <VRow align="center" justify="center">
                                    <h1 class="text-h5 font-weight-bold" 
                                    >Course Management System</h1>
                                </VRow> -->
                                <VRow align="center" justify="center">
                                    <h1 class="text-subtitle-1">Campus Learning Environment</h1>
                                </VRow>
                            </div>
                        </VCol>


                        <VCol cols="8"  align="start"   > 

                     

                            <RouterLink class="route" :to="{ name: 'Home' }" >
                                <VBtn class="text-subtitle-2"   density="compact"  color="primary" :variant="(route.name == 'Home')? 'tonal':'text'">Home</VBtn>
                            </RouterLink>

                            <!-- Add Links Below -->
                          
                            <RouterLink class="route" :to="{ name: 'Courses' }" >
                                <VBtn class="text-subtitle-2"   density="compact"  color="primary" :variant="(route.name == 'Courses')? 'tonal':'text'">Courses</VBtn>
                            </RouterLink>


                        </VCol>
                        <VCol cols="1" align="right">
                            <VBtn size="x-small" :elevation="0"  icon @click="darkmode = !darkmode">                  
                                <VIcon v-if="darkmode" icon="mdi:mdi-weather-night"   ></VIcon>
                                <VIcon v-else  icon="mdi:mdi-white-balance-sunny"  ></VIcon>
                            </VBtn>
                        </VCol>
                    </VRow>
                </VContainer>
            </VToolbar>
  </template>

  
  <script setup>
    import { useRoute,useRouter } from "vue-router";
    import { useTheme } from 'vuetify';  
    import { ref ,watch ,onMounted ,onBeforeMount } from 'vue';
import { Tooltip } from "chart.js";


  
    // VARIABLES 
    const theme       = useTheme();
    const darkmode    = ref(false); 
    const router      = useRouter();  
    const route       = useRoute();  

    // WATCHERS
    watch(darkmode,  (mode) => {
    theme.global.name.value = mode ?  'darkMode' : 'lightMode';
    localStorage.setItem("theme",mode ? 'darkMode' : 'lightMode');  
    });


    // FUNCTIONS

    const logout = () => {
        localStorage.setItem("signedIn", false);
        router.push({ name: 'SignIn' });
        window.location.reload();
        localStorage.removeItem("courses");
        localStorage.removeItem("student");
        localStorage.removeItem("theme");

    };

    onMounted(()=>{
 

    });

    onBeforeMount(()=>{
        // SAVE THEME TO LOCALSTORAGE MAKING IT PERSIST BROWSER REFRESH

        if(localStorage.getItem("theme") != null){
            theme.global.name.value = localStorage.getItem("theme");
            darkmode.value = theme.global.current.value.dark;
        }
        else{
            localStorage.setItem("theme",theme.global.current.value.dark ? 'darkMode' : 'lightMode');
            darkmode.value = theme.global.current.value.dark;    
        }  
    });
   
let previousRoute = route.name;

const logoutButton = document.querySelector('.logout');



watch(route, (to, from) => {
    if (previousRoute === 'Course' && to.name !== 'Course') {
        previousRoute = to.name;
        window.location.reload();
    } else {
        previousRoute = to.name;
    }
});
  </script>

  <style>
    .route {
        text-decoration: none;
        margin-left: 8px;
        margin-right: 8px; 
    }

    .logout :hover {
        color: var(--v-primary-base);
        cursor: pointer;
        font-weight: bold;
    }
  </style>
  