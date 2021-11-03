<template>
  <div class="child">
    <h1>Child component1</h1>
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise,
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
