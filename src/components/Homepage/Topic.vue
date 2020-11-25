<template>
  <div class="col-md-6">
    <div class="card" style="width: 18rem;border:none">
      <div class="card-body">
        <h5 class="card-title" style="color: #92dd9f">{{ name}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ date }}</h6>
        <p class="card-text">{{ title }}</p>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: ["name","title","date"]
};
</script>

<style scoped>
a {
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;
}
</style>
