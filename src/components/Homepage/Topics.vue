<template>
  <div>
    <Topic 
        v-for="item in homepagetopics"
        v-bind:key="item.id"   
        v-bind="item"
     />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Topic from "./Topic";
export default {
  name: "Topics",
  components: { Topic },
  computed: {
    ...mapState({
      homepagetopics: "homepagetopics",
    }),
  },
};
</script>

<style scoped></style>
