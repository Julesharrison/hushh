<template>
  <section>
    <div class="content-wrapper">
      <div class="wrapper">

      <input type="text" placeholder="Username" v-model="userName" />
      <input type="password" placeholder="Password" v-model="password" />

      <router-link
      to="/userPanel"
      tag="button"
      class="fab"
      @click.preventDefault="storeName">
      </router-link>


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
    userName: {
      get() {
        return this.$store.state.userName
      },
      set(value) {
        this.$store.commit('updateUserName', value)
      }
    }
  },
}
</script>


<style>

.fab {
  height:65px;
  width: 65px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  margin-top: 25px;
  cursor: pointer;
  background-image: url('../assets/FAB-next.png');
}

</style>
