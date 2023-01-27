const EventBus = new Vue();

const posts = [
   {
    username: 'Cesur Alemdaroğlu',
    userImage: 'https://pbs.twimg.com/profile_images/964314745938567168/TpU9hGLh_400x400.jpg',
    postImage: 'http://idora.milliyet.com.tr/YeniAnaResim/2016/12/07/cesur-ve-guzel-5-bolum-fragmaninda-suhan-in-dengesi-alt-ust-oluyor--8124215.Jpeg',
    likes: 324810,
    upVoted: false,
    caption: "En güzel kadınla en güzel akşam yemeği <3 ",
    filter: 'perpetua'
   },
  {
    username: 'Ferhat Aslan',
    userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQraSUQwcV6HTnQERiCktf5JriSMVVJGBwPlOT90RK4tQoF5qx7',
    postImage: 'https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/29066299_418204571967440_300514407820034048_n.jpg?_nc_cat=0&oh=091d1c88afdef0451b6983d7f9a76c9c&oe=5B58BD1E',
    likes: 1423547,
    upVoted: true,
    caption: 'eyvallah ',
    filter: 'lark'
   },
   {
    username: 'messi',
    userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvTHGQfFpjOcZiAbXR2Isy7ptbFvtJR8lwgnnpgHmoO8emlZz',
    postImage: 'http://demo.yooztheme.ir/suchly/wp-content/uploads/2017/02/960.jpg',
    likes: 64457125,
    upVoted: true,
    caption: 'Day match ',
    filter: 'clarendon'
   },
   {
    username: 'Zed',
    userImage: 'https://runes.lol/image/generated/championtiles/Zed.jpg',
    postImage: 'https://www.mobafire.com/images/champion/skins/landscape/zed-championship.jpg',
    likes: 4415619,
    upVoted: false,
    caption: 'I am Back with full power',
    filter: 'lofi'
  }
  
]

const filters = [
  { name: 'normal' }, { name: 'clarendon' }, { name: 'gingham' }, { name: 'moon' }, { name: 'lark' }, { name: 'reyes' }, { name: 'juno' }, { name: 'slumber' }, { name: 'aden' }, { name: 'perpetua' }, { name: 'mayfair' }, { name: 'rise' }, { name: 'hudson' }, { name: 'valencia' }, { name: 'xpro2' }, { name: 'willow' }, { name: 'lofi' }, { name: 'inkwell' }, { name: 'nashville' }
]

Vue.component('instagram-post', {
  template: 
  `
    <div class="instagram-post">
      <div class="header level">
          <div class="level-left">
            <figure class="image is-32x32">
              <img :src="post.userImage" />
            </figure>
            <span class="username">{{post.username}}</span>
          </div>
      </div>
      <div class="image-container"
           :class="post.filter"
           :style="{ backgroundImage: 'url(' + post.postImage + ')' }"
           @dblclick="like">
      </div>
      <div class="content">
        <div class="heart">
          <i class="far fa-heart fa-lg"
            :class="{'fas': !this.post.upVoted,  'fas': this.post.upVoted}"
            @click="like">
          </i>
        </div>
        <p class="likes">{{post.likes}} likes</p>
        <p class="caption"><span>{{post.username}}</span> {{post.caption}}</p>
      </div>
    </div>
  `,
  props: ['post'],
  methods: {
    like() {
      this.post.upVoted ? this.post.likes-- : this.post.likes++;
      this.post.upVoted = !this.post.upVoted;
    }
  }
});

Vue.component('filter-type', {
  template:
  `
   <div class="filter-type">
     <p>{{filter.name}}</p>
    <div class="img"
         :class="filter.name"
         :style="{ backgroundImage: 'url(' + image + ')' }"
         @click="selectFilter">
    </div> 
   </div>
  `,
  props: ['filter', 'image'],
  methods: {
    selectFilter() {
      EventBus.$emit('selectFilter', {filter: this.filter.name});
    }
  }
});

new Vue({
  el: "#app",
  data: {
    posts,
    image: 'https://cdn.dribbble.com/users/46562/screenshots/3802512/attachments/858301/project-zed.jpg',
    caption: '',
    filterType: 'normal',
    step: 1,
    showDetails: false,
    fileInput: ''
  },
  created () {
    EventBus.$on('selectFilter', (evt) => {
      this.filterType = evt.filter;
    })
  },
  methods: {
    fileUpload(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.image = files[0];
      this.createImage();
    },
    createImage() {
      const image = new Image();
      const reader = new FileReader();

      reader.onload = e => {
        this.image = e.target.result;
        this.step = 2;
      };
      reader.readAsDataURL(this.image);
    },
    uploadRandomImage() {
      const randomImages = [
        'https://cdn.dribbble.com/users/46562/screenshots/3802512/attachments/858301/project-zed.jpg',
        'https://c.tadst.com/gfx/750w/turkeysovereigntychildensday.jpg?1',
        
        'https://givemesport.azureedge.net/images/18/01/22/b2f4315e00578c3ac32118d9cb137f8b/960.jpg',
        
        'https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/28467799_415372912250606_2202584948605383306_n.jpg?_nc_cat=0&oh=e7af3d9d495569b79c66564e30d631ee&oe=5B681AEB',
        
        'https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/28279865_414555712332326_491166031417217729_n.jpg?_nc_cat=0&oh=2dcad1b7728a476eb4caa9afe0c6785a&oe=5B63FA61'
      ];
      
      this.image = randomImages[Math.floor(Math.random() * randomImages.length)];
      this.step = 2;
    },
    goToHome() {
      this.image = 'https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/28467799_415372912250606_2202584948605383306_n.jpg?_nc_cat=0&oh=e7af3d9d495569b79c66564e30d631ee&oe=5B681AEB';
      this.caption = '';
      this.filterType = 'normal';
      this.step = 1;
    },
    sharePost() {
      const post = {
        username: 'Mohamed Mustafa [CEO]',
        userImage: 'https://i.imgur.com/vW1Bmm3.png',
        postImage: this.image,
        likes: 0,
        caption: this.caption,
        filter: this.filterType
      }
      
      this.posts.unshift(post);
      this.goToHome();
    }
  }
});