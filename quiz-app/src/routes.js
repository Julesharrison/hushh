import SignIn from './components/SignIn.vue';
import UserLogin from './components/UserLogin.vue';
import UserPanel from './components/UserPanel.vue';
import Password from './components/Password.vue';
import Success from './components/Success.vue';

export const routes = [
  {path: '', component: SignIn},
  {path: '/userLogin', component: UserLogin},
  {path: '/userPanel', component: UserPanel},
  {path: '/password',  component: Password},
  {path: '/success', component: Success}
]
