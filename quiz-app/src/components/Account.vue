<template>
  <div class="accounts-container">

    <div class="accounts">
      <img src="../assets/FAB-contacts.png" class="account-icon" />
      <h5>Contacts: 275 / 500</h5>
    </div>

    <div class="accounts">
      <img src="../assets/FAB-messages.png" class="account-icon" />
      <h5>Messages: 798 / 1000</h5>
    </div>

    <div class="accounts">
      <img src="../assets/FAB-media.png" class="account-icon" />
      <h5>Media: 12Mb / 64Mb</h5>
    </div>

    <div class="add-storage">
      <img src="../assets/add-icon.png" class="add-icon" />
    </div>


  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
}

</script>

<style>

.accounts {
  border-bottom: 1px solid;
  margin-top: 30px;
  width: 325px;
}

.accounts-container {
  position: relative;
}

.add-storage {
  position: absolute;
  bottom: -120px;
  left: 50%;
  transform: translateX(-50%);
}


</style>
