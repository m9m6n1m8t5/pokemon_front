<template>
  <div class="quiz container" style="padding-bottom: 30px;">
    <transition name="vshow">
      <div class='fullOverlay' v-show="isOverlay" >
        <div class="text">{{ resultText }}</div>
        <div v-if="isCorrect">
            <router-link to="/" class="replay-btn">スタートに戻る</router-link>
        </div>
        <div v-else>
            <div v-on:click="replay" class="replay-btn">もういちど</div>
            <router-link to="/" class="replay-btn" style="top:70%;">スタートに戻る</router-link>   
        </div>
      </div>
    </transition>
    <div class="panel">
      <div class="row panel-row">
        <div class="col-md-5 panel-left d-flex flex-column justify-content-around align-items-center">
          <div class="box2 d-flex justify-content-center align-items-center">
            <font calss="text-wrap" style="width: 20rem;" size="5">{{ englishName }}</font>
          </div>
          <form v-on:submit.prevent v-on:submit="check" class="box2 d-flex justify-content-center align-items-center">
            <input v-model="userAnswer" type="text" maxlength="10">
          </form>
        </div>
        <div class="col-md-7 panel-right d-flex flex-column justify-content-around align-items-center">  
          <div v-for="(hint,i) in hintDisplay" v-bind:key="i" v-on:click="openHint(i)"  v-bind:class="isOpened[i]?'hint-opended':'hint-closed'" class="d-flex justify-content-center align-items-center">
            <font v-bind:color="isOpened[i]?'darkslateblue':'white'" calss="text-wrap" style="width: 20rem;" size="5">{{ hintDisplay[i] }}</font>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'QuizPanel',
  data: function () {
    return {
      englishName: "",
      japaneseName: "",
      hintText: ["", "", ""],
      hintDisplay: ["ヒント ①", "ヒント ②", "ヒント ③"],
      isOpened: [false, false, false],
      userAnswer: "",
      isOverlay: false,
      isCorrect: false,
      resultText: ""

    }
  },
  beforeRouteEnter(to,from,next) {
    next(async (vm) => {
      await vm.initialize();
      next();
    });
  },
  methods: {
    initialize: function () {
      axios.get("/api/quiz")
        .then(response => {
            var data = response["data"]
            this.englishName = data["englishName"];
            this.japaneseName = data["japaneseName"];
            this.hintText = data["hintText"];
            console.log(response);
        }).catch(err => {
            console.log("err:", err);
        });
    },
    openHint: function (i) {
      this.$set(this.isOpened, i, true)
      this.$set(this.hintDisplay, i, this.hintText[i])      
    },
    check: function () {
      if (this.japaneseName===this.userAnswer) {
        this.isCorrect = true
        this.resultText = "正解！"
        this.isOverlay = true
      } else {
        this.isCorrect = false
        this.resultText = "不正解！"
        this.isOverlay = true
      } 
    },
    replay: function () {
      this.isOverlay = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fullOverlay{
  position: fixed;
  left: 0; top: 0;
  width: 100%; height: 100%;
  background: rgba(100, 100, 100, .8);
  z-index: 2147483647;
}
.fullOverlay .text{
  position: absolute;
  left: 50%; top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  color: rgba(250, 250, 250, 1);
  font-size: 24px;
  text-align: center;
}
.replay-btn {
  position: absolute;
  left: 50%; top: 60%;
  width: 10em;
  height: 1.5em;
  transform: translate(-50%, -50%);
  color: rgba(250, 250, 250, 1);
  font-size: 24px;
  text-align: center;
  border-radius: 0.75em;
  background-color: darkblue;
  filter: contrast(1);
  transition: filter 0.3s;
}
.replay-btn:hover {
  text-decoration: none;
  filter: contrast(0.7);
}
.vshow-enter-active{
    transition: opacity 1s
}
.vshow-enter{
    opacity: 0;
}
.panel {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 350px;
  background-color: white;
  border-radius: 30px;
  border: 3px solid gray;
}
.panel-row {
  height:100%;
  width:100%;
  margin: 0;
}
@media (max-width:767px) {
  .panel {
    height: 620px;
  }
  .panel-row {
    height: 50%;
  }
}

.panel-left {
  width: 100%;
  height: 100%;
  padding: 0;
}
.panel-right {
  width: 100%;
  height: 100%;
  padding: 0;
}
.box2 {
  width: 80%;
  height: 30%;
  border: 3px solid gray;
}
.hint-closed {
  width: 80%;
  height: 25%;
  background-color: darkslateblue;
  border-radius: 10px;
  filter: contrast(1);
  transition: filter 0.3s;
}
.hint-closed:hover {
  filter: contrast(0.7);
}
.hint-opended {
  width: 80%;
  height: 25%;
  background-color: aliceblue;
  border-radius: 10px;
}
input {
  width: 90%;
  border: none;
  outline: none;
  text-align: center;
  font-size: 25px;
}

</style>
