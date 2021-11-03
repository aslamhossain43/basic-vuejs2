<template>
  <div class="child">
    <h1>Child component</h1>
    <ChildComponent1 title="my title" />
  </div>
</template>

<script>
import ChildComponent1 from "./ChildComponent1.vue";
export default {
  components: {
    ChildComponent1,
  },
};
</script>



<style scoped>
h1 {
  color: red;
}
p {
  color: blue;
}
</style>
