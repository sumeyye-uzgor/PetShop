<template>
  <div class="col-8 offset-2">
    <pet-table specy="cat" :pets="cats" />
  </div>
</template>
<script>
import { mapState } from "vuex";
import PetTable from "../components/PetTable.vue";
export default {
  components: {
    PetTable,
  },
  computed: {
    ...mapState(["cats"]),
  },
};
</script>

