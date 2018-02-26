<template>
  <div id="app-container" class="primary-bg">
    <img
    class="status-bar"
    src="./assets/state-bar-white-1.png" />


    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>

import SignIn from './components/SignIn.vue';
import UserLogin from './components/UserLogin.vue';
import UserPanel from './components/UserPanel.vue';
import Password from './components/Password.vue';
import Success from './components/Success.vue';
import Account from './components/Account.vue';
import Documents from './components/Documents.vue';


export default {
  components: {
    appSignIn : SignIn,
    appUserLogin : UserLogin,
    appUserPanel : UserPanel,
    appPassword : Password,
    appSuccess : Success
  }
}
</script>


<style>

html, body {
	height: 100%;
	margin: 0 auto;
	font-family: "Roboto";
  color: #ffffff;
}

body {

	overflow-x: hidden;
	-webkit-overflow-scrolling: touch;
	-moz-overflow-scrolling: touch;
	overflow-scrolling: touch;
}

img.status-bar {
  position: absolute;
  top: 15px;

}

#app-container {
  height: 812px;
  width: 375px;
  margin: 0 auto;
  display: flex;
	display: -ms-flex;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: -moz-flex;
  align-items: center;
  justify-content: center;
  background: #e91e63;
  background: -moz-linear-gradient(top, #e91e63 1%, #b0003a 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #e91e63 1%,#b0003a 100%); /* Chrome10-25,Safari5.1-6 */
}

section {
  height: 100%;
  display: grid;

}

.content-wrapper {
  margin: 10px;
  padding: 15px;
  text-align: center;
	display: flex;
	display: -ms-flex;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: -moz-flex;
  align-items: center;
  justify-content: center;
}

.wrapper {
  padding: 20px;
}

input {
  display: block;
  text-align: center;
  border: none;
  background: none;
  border-bottom: 1px solid white;
  font-size: 1.75em;
  font-weight: 200;
  letter-spacing: 2px;
  margin-top: 50px;
  color: #ffffff;
}

.header {
  width: 100%;
  height: 50px;
  position: fixed;
  background: #ffffff;
  top: 0px;
  left: 0px;
}

button {
  top: 50px;
}

h1 {
font-size: 3.5em;
font-weight: lighter;
letter-spacing:1px;
line-height:1em;
}

h2 {
font-size:56px;
font-weight:200;
line-height:64px;
}

h3 {
font-size:45px;
font-weight:200;
line-height:34px;
}

h4 {
font-size: 1.75em;
font-weight: 300;
letter-spacing: 2px;
}

h5 {
font-size: 1.25em;
font-weight: 200;
}

.md_title {
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
}

.md_headline {
  font-size: 24px;
  font-weight: 400;
}

.md_subhead {
  font-size: 16px;
  font-weight: 400;
}

.md_menu {
  font-size: 14px;
  font-weight: 500;
}

.md_button {
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
}

.md_caption {
  font-size: 12px;
  font-weight: 400;
}

.md_body {
  font-size: 14px;
  font-weight: 400;
}

.md_primary-bg {
  background-color: #e91e63;
}

.md_dark-primary-bg {
  background-color: #b0003a;
}

.md_light-primary-bg {
  background-color: #ff6090;
}

.md_accent-bg {
  background-color: #ffa726
}

.md_accent-color {
  color: #ffa726;
}

.md_primary-text {
  color: #212121;
}

.md_secondary-text {
  color: #757575;
}

.md_divider {
  background-color: #BDBDBD;
}

.md_light-text-icon {
  color: #ffffff;
}

.md_box-shadow-low {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.md_box-shadow-low:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.md_box-shadow-mid {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.md_box-shadow-high {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

/* ANIMATIONS */

.slide-enter-active {
  animation: slide-in 400ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 400ms ease-in forwards;
}

@keyframes slide-in {
  from {
    transform: translateX(70%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0%);
    opacity: 1;
  }
  to {
    transform: translateX(-70%);
    opacity: 0;
  }
}

.unslide-enter-active {
  animation: unslide-in 400ms ease-out forwards;
}

.unslide-leave-active {
  animation: unslide-out 400ms ease-in forwards;
}

@keyframes unslide-in {
  from {
    transform: translateX(-70%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
}

@keyframes unslide-out {
  from {
    transform: translateX(0%);
    opacity: 1;
  }
  to {
    transform: translateX(70%);
    opacity: 0;
  }
}

</style>
