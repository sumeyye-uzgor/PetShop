<template>
  <div class="col-4 offset-4">
    <b-card
      :title="animal.name"
      :img-src="imgLink"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2"
    >
      <b-card-text>
        <p>{{ animal.age }} years old</p>
        <p>Breed: {{ animal.breed }}</p>
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      animal: {},
      imgLink: "",
    };
  },
  computed: {
    ...mapState(["cats", "dogs"]),
  },
  mounted() {
    const species = this.$route.params.species;
    const animal = this[species][this.$route.params.id];
    this.animal = animal;
    if (species === "cat") {
      this.imgLink = "https://source.unsplash.com/collection/139386";
    } else {
      this.imgLink = "https://source.unsplash.com/collection/10139213";
    }
  },
};
</script>
