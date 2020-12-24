<template>
  <div class="col-8 offset-2">
    <h1>{{ specy }} for Adoption</h1>
    <b-table :fields="fields" :items="pets">
      <template #cell(name)="data">
        <router-link :to="`pets/${specyLink}/${data.index}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      specyLink: `${this.specy}s`,
    };
  },
  mounted() {
    console.log(this.specy);
  },
  props: {
    specy: String,
    pets: Array,
  },
};
</script>

