<template>
  <div>
    <v-toolbar dark prominent>
      <v-btn class="mr-3" elevation="1" fab small @click="toggleDrawer">
        <v-icon> mdi-view-quilt </v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn class="ma-2">
        <v-icon start icon="mdi-minus-circle"></v-icon>
        <div class="text-grey">Monitoring</div>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer floating permanent v-model="drawer">
      <div class="text-center py-8">
        <v-avatar size="x-large">
          <v-img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          ></v-img>
        </v-avatar>
        <h6>Gunawan</h6>
      </div>
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Dashboard"
          value="home"
          link="/"
        >
        </v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style></style>
