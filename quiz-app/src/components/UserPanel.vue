<template>
  <section>
    <div class="content-wrapper">
      <div class="wrapper">

        <div class="user-holder">
          <h4>{{ userName }}</h4>
        </div>

        <ul class="menu">
          <li
          :class="[ isActive ? 'active' : 'inactive' ]"
          @click="toggleClass()"
          class="account">Account</li>

          <li
          :class="[ isActive ? 'inactive' : 'active' ]"
          @click="toggleClass()"
          class="documents">Documents</li>
        </ul>

        <transition :name="name[counter]" mode="out-in">
          <app-account v-if="counter < 1"></app-account>
          <app-documents v-if="counter >= 1"></app-documents>
        </transition>

      </div>
    </div>
  </section>
</template>

<script>
import Account from './Account.vue';
import Documents from './Documents.vue';

export default {
  data() {
    return {
      isActive: true,
      counter: 0,
      name: ['unslide','slide']
    }
  },
  components: {
    appAccount : Account,
    appDocuments : Documents
  },
  computed: {
    userName() {
      return this.$store.state.userName
    }
  },
  methods: {
    toggleClass: function(event){
       // Check value
       if(this.isActive){
         this.isActive = false;
         this.counter++;
       }else{
         this.isActive = true;
         this.counter--;
       }
    },
    toggleSlideTran() {
      this.slideToggle = this.slideToggle[0];
      console.log(this.slidetoggle)
    }
  }
}

</script>


<style>

.user-holder {
  position: absolute;
  top: 20px;
  height: 75px;
  left: 50%;
  transform: translateX(-50%);
  border-bottom: 1px solid;
  width: 375px;
}

ul.menu {
  position: absolute;
  height: 35px;
  left: 50%;
  transform: translateX(-50%);
  border-bottom: 1px solid;
  width: 375px;
  top: 95px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

ul.menu li {
  padding-top: 4px;
  cursor: pointer;
  transition: 300ms ease all;
}

.active {
  background: white;
  color: #E91E63;
}

.inactive {
  background: none;
  color: white;
}



</style>
