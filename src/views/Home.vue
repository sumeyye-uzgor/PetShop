<template>
  <div class="home col-6 offset-3">
    <h1>Adopt a new best friend...</h1>
    <h3>We have {{ animalsCount }} different animals...</h3>
    <h3>
      These are {{ getAllCats.length }} cats and
      {{ animalsCount - getAllCats.length }} dogs.
    </h3>
    <button class="btn btn-success" @click="togglePetForm">Add New Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          v-model="formData.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Species" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="formData.species"
          :options="['cat', 'dog']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Pet's Age:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="number"
          v-model="formData.age"
          placeholder="Enter age"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      showPetForm: false,
      formData: {
        name: "",
        age: 0,
        species: null,
      },
    };
  },
  computed: {
    ...mapGetters(["animalsCount", "getAllCats"]),
  },
  methods: {
    ...mapActions(["addPet"]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit() {
      const { species, name, age } = this.formData;
      const specy = species + "s";
      const payload = {
        specy,
        pet: {
          name,
          age,
          species,
        },
      };
      console.log(payload);
      this.addPet(payload);

      // reset form after submission
      this.formData = {
        name: "",
        age: 0,
        species: null,
      };
    },
  },
};
</script>