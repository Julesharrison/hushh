<template>
  <section>
    <div class="content-wrapper">
      <div class=>

      <h4>Welcome back</h4>
      <h3>{{ userName }}</h3>


      </div>
    </div>
  </section>
</template>

<script>



export default {
  data() {
    return {

    }
  },
  computed: {
    userName() {
      return this.$store.state.userName
    }
  }
}


</script>

<style>

section {
  text-align: center;
}

</style>
