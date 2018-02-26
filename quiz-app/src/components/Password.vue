<template>
  <section>
    <div class="content-wrapper">
      <div class="wrapper">

      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password"  />

      <router-link
      to="/success"
      tag="button"
      class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
      @click.preventDefault="">
      <i
      class="material-icons"
      >arrow_forward</i>
      </router-link>

      </div>
    </div>
  </section>
</template>

<script>

export default {

}

</script>


<style>

</style>
