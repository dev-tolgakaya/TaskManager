<template>
  <div class="container mt-4 ">
    <div class="col-md-12">
      <Topics />
      <Addtopicform/>
    </div>
  </div>
</template>

<script>
import Topics from "./Topics";
import Addtopicform from "./Addtopicform";
export default {
  name: "Homepage",
  components: { Topics ,Addtopicform}
};
</script>

<style scoped></style>
