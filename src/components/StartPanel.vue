<template>
  <div class="quiz container" style="padding-bottom: 30px;">
    <div class="panel d-flex justify-content-center align-items-center">
      <router-link to="/quiz" class="start-btn">スタート！</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartPanel',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 350px;
  background-color: white;
  border-radius: 30px;
  border: 3px solid gray;
}
.start-btn {
  width: 10em;
  height: 3em;
  color: rgba(250, 250, 250, 1);
  font-size: 24px;
  text-align: center;
  line-height: 3em;
  border-radius: 1.5em;
  background-color: darkblue;
  filter: contrast(1);
  transition: filter 0.3s;
}
.start-btn:hover {
  text-decoration: none;
  filter: contrast(0.7);
}

@media (max-width:767px) {
  .panel {
    height: 620px;
  }
}


</style>
