<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a @click="$router.push('/')" class="navbar-brand" style="color: #8a3ab9">Task Manager</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a @click="$router.push('/')" class="nav-link">Home <span class="sr-only">(current)</span></a>
        </li>
      </ul>
      <ul v-if="!registered" class="navbar-nav ml-auto">
        <li class="nav-item">
          <a @click="$router.push('/singin')" class="nav-link">SingIn</a>
        </li>
        <li class="nav-item">
          <a @click="$router.push('/singup')" class="nav-link">SingUp</a>
        </li>
      </ul>
      <ul v-if="registered" class="navbar-nav ml-auto">
        <li class="nav-item">
          <a @click="changeRegisterState" class="nav-link">LogOut</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapState({
      registered: "registered",
    }),
  },
  methods: {
    changeRegisterState() {
      this.$store.dispatch("changeRegisterState");
    },
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
