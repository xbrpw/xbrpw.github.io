const VueA = Vue.extend({
  template: `<div class="route-view"><iframe src="https://xbrpw.github.io//review/entradas/index.html" name="seccion-A" height="780px" width="100%" title="lamp" style="border:none;" allowfullscreen ></iframe></div>` });

const VueB = Vue.extend({
  template: `<div class="route-view"><iframe src="https://xbrpw.github.io" name="seccion-B" height="780px" width="100%" title="lamp" style="border:none;" allowfullscreen ></iframe></div>` });

const VueC = Vue.extend({
  template: `<div class="route-view"><iframe src="https://xbrpw.github.io/review/index.html" name="seccion-C" height="780px" width="100%" title="lamp" style="border:none;" allowfullscreen ></iframe></div>` });

const VueD = Vue.extend({
  template: `<div class="route-view"><iframe src="https://luisangelmaciel.github.io" name="seccion-D" height="780px" width="100%" title="lamp" style="border:none;" allowfullscreen ></iframe></div>` });


  
         

const router = new VueRouter({
  routes: [
  { path: '/', redirect: 'A' },
  { path: '/A', name: 'A', component: VueA },
  { path: '/B', name: 'B', component: VueB },
  { path: '/C', name: 'C', component: VueC },
  { path: '/D', name: 'D', component: VueD }] });



let direction = 0;
let fromKey = 0;
router.beforeEach((to, from, next) => {
  if (!history.state) {history.replaceState({ key: Date.now() }, to.name, location.href);}
  // const fromKey = parseInt(window.name);
  const toKey = history.state.key;
  direction = !fromKey || fromKey === toKey ? 0 : fromKey < toKey ? 1 : -1;
  next();
});
router.afterEach((to, from) => {
  Vue.nextTick(vm => {fromKey = history.state.key;});
});



new Vue({
  el: '#app',
  router,
  template: `
            <div>
            <pre style="display:none">{{ direction }}</pre>
            <nav>
                <button @click="history.go(-1)" style="display:none">Back</button>
                <button @click="history.go(1)" style="display:none">Forward</button>                
                <router-link :to="{name: 'A'}">Page A</router-link>
                <router-link :to="{name: 'B'}">Page B</router-link>
                <router-link :to="{name: 'C'}">Page C</router-link>
                <router-link :to="{name: 'D'}">luisangelmaciel</router-link>
            </nav> 
            <transition
                name="slide"
                appear

                @before-appear="beforeAppear"
                @appear="appear"
                @after-appear="afterAppear"
                @appear-cancelled="appearCancelled"

                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @enter-cancelled="enterCancelled"

                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                @leave-cancelled="leaveCancelled"

                :css="false"
            >

                <router-view :key="$router.path"></router-view>
            </transition>

               
            </div>
        `,
  data() {
    return { direction: '' };
  },
  methods: {

    beforeAppear() {},
    appear(el, done) {
      console.log('appear', window.name);
      this.direction =
      direction == 0 ? 'New page' :
      direction == 1 ? 'Forward' : 'Back';
      done();
    },
    afterAppear(el) {},
    appearCancelled(el) {},

    beforeEnter() {},
    enter(el, done) {
      console.log('enter', window.name);
      this.direction =
      direction == 0 ? 'New page' :
      direction == 1 ? 'Forward' : 'Back';
      done();
    },
    afterEnter(el) {},
    enterCancelled(el) {},


    beforeLeave(el) {},
    leave(el, done) {done();},
    afterLeave(el) {},
    leaveCancelled(el) {} } });