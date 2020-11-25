<template>
  <div class="col-md-6">
    <div class="card" style="width: 18rem; border: none">
      <div class="card-body">
        <h1 v-if="registered" @click="openform" class="card-title" style="color: #92dd9f; cursor: pointer">+</h1>
        <div v-if="registered">
          <form v-if="clicked">
            <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input v-model="name" type="text" class="form-control" id="topicname" placeholder="Tolga KAYA" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Date</label>
              <input v-model="date" type="text" class="form-control" id="topicdate" placeholder="1 Ocak" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Title</label>
              <textarea v-model="title" class="form-control" id="topiccontent" rows="3"></textarea>
            </div>
            <div class="form-group">
              <button @click="addtopic" class="btn btn-success">Add Topic</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Addtopicform",
  computed: {
    ...mapState({
      registered: "registered",
    }),
  },
  data() {
    return {
      clicked: false,
      name: "",
      date: "",
      title: "",
    };
  },
  methods: {
    openform() {
      this.clicked = !this.clicked;
    },
    addtopic(e) {
      e.preventDefault();
      const name = this.name;
      const date = this.date;
      const title = this.title;
      const newTopic = { name, date, title };
      this.$store.dispatch("addNewTopic", newTopic);
      this.clicked = false;
    },
  },
};
</script>

<style scoped></style>
