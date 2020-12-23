<template>
  <div class="col-8 offset-2">
    <h1>Dogs for Adoption</h1>
    <b-table :fields="fields" :items="dogs">
      <template #cell(name)="data">
        <router-link :to="`pets/dogs/${data.index}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["dogs"]),
  },
};
</script>

