<template>
  <section>
    <div class="content-wrapper">
      <div class="wrapper">

        <h1>Hu<span class="bold">shh</span></h1>
        <router-link
        to="/userLogin"
        tag="a"
        @click.preventDefault="">
        Login
        </router-link>

        <router-link
        to=""
        tag="a"
        @click.preventDefault="">
        No account ? Sign up free
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

a {
  display: block;
  color: #ffffff;
  font-size: 1.1em;
  font-weight: 200;
  letter-spacing: 2px;
  text-decoration: none;
  cursor: pointer;
}

a:nth-child(3) {
  font-size: .9em;
  margin-top: 25px;
  font-weight: 200;
  opacity: .75;
  border-bottom: 1px solid;
  transition: all ease 300ms;
}

a:nth-child(3):hover {
  opacity: 1;
  transition: all ease 300ms;
}

.bold {
  font-weight: 500;
}






</style>
