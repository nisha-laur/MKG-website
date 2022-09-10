
var theParent = document.querySelector("#topnav");
theParent.addEventListener("click", doSomething);

function doSomething(e) {
  // console.log(e.target.id);

  if (e.target.id == document.getElementsByTagName("li")[0].id) {
    document.querySelector(".hori-selector").style.left = "824.859px";
    document.querySelector(".container1").style.right = "435px";
  }
  else if (e.target.id == document.getElementsByTagName("li")[1].id) {
    document.querySelector(".hori-selector").style.setProperty("left", "937.859px ");
    document.querySelector(".container1").style.right = "317px";
    
    // document.querySelector(".hori-selector").style.left = "937.859px  ";

  } else if (e.target.id == document.getElementsByTagName("li")[2].id) {
    document.querySelector(".hori-selector").style.left = "1028.86px ";
    document.querySelector(".container1").style.right = "214px";
  }
  else if (e.target.id == document.getElementsByTagName("li")[3].id) {
    document.querySelector(".hori-selector").style.left = "1122.86px";
    document.querySelector(".container1").style.right = "113px"; 
  }
  else if(e.target.id == document.getElementsByTagName("li")[4].id){
    document.querySelector(".hori-selector").style.left = "1217.86px";
    document.querySelector(".container1").style.right = "23px";
    
  }
  e.stopPropagation();
}

document.querySelector("#topnav").addEventListener("click", changecolor);
 function changecolor() {
  if (document.querySelector(".hori-selector").style.left == "824.859px") {
    document.getElementsByTagName("li")[0].style.color = "#022b3a";
    document.querySelector(".container1").style.display = "block";
    
  } else {
    document.getElementsByTagName("li")[0].style.color = "rgb(185, 182, 182)";
    
  }
  
  
  if (document.querySelector(".hori-selector").style.left == "937.859px") {
    document.getElementsByTagName("li")[1].style.color = "#022b3a";
    document.getElementsByTagName("li")[0].style.color = "rgb(185, 182, 182)";
    document.querySelector(".container1").style.display = "block";
  } else {
    document.getElementsByTagName("li")[1].style.color = "rgb(185, 182, 182)";
   
  }

  if (document.querySelector(".hori-selector").style.left == "1028.86px") {
    document.getElementsByTagName("li")[2].style.color = "#022b3a";
    document.getElementsByTagName("li")[0].style.color = "rgb(185, 182, 182)";
    document.querySelector(".container1").style.display = "block";
  } else {
    document.getElementsByTagName("li")[2].style.color = "rgb(185, 182, 182)";
   
  }

  if (document.querySelector(".hori-selector").style.left == "1122.86px") {
    document.getElementsByTagName("li")[3].style.color = "#022b3a";
    document.getElementsByTagName("li")[0].style.color = "rgb(185, 182, 182)";
    document.querySelector(".container1").style.display = "block";
  } else {
    document.getElementsByTagName("li")[3].style.color = "rgb(185, 182, 182)";
   
  }
  if (document.querySelector(".hori-selector").style.left == "1217.86px") {
    document.getElementsByTagName("li")[4].style.color = "#022b3a";
    document.getElementsByTagName("li")[0].style.color = "rgb(185, 182, 182)";
    document.querySelector(".container1").style.display = "block";
  } else {
    document.getElementsByTagName("li")[4].style.color = "rgb(185, 182, 182)";
    
  }

}


document.querySelector("body").addEventListener("click", function(){
	document.querySelector(".container1").style.display = "none";
});
// the navbar ends here

Vue.config.devtools = true;

Vue.component('card', {
  template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ['dataImage'],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null }),

  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)` };

    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)` };

    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})` };

    } },

  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    } } });



const app = new Vue({
  el: '#app' });