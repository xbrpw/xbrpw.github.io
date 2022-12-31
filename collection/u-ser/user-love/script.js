feather.replace();

let app = new Vue({
    el: '#app',
    
    data: {
        randomUser: {
            photo: '',
            name: '',
            location: ''
        },
        showShareCard: false, 
        showLikesCard: false,
        showFollowCard: false,
        numOfLikes: 72,
        numOfFollowers: 1234,
        numFollowing: 234,
        info: ['location', 'email', 'phone'],
        selectedIndex: 0,
        active: 'active',
        activePrevArrow: true,
        activeNextArrow: false,
        socialLinks: ['facebook', 'instagram', 'twitter', 'linkedin'],
        transitionName: 'fade',
        direction: 1
    },

    watch: {
      selectedIndex: function(val) {
        if(val === 2) {
          this.activeNextArrow = true;
        } else if(val === 0) {
          this.activePrevArrow = true;
        } else {
          this.activeNextArrow = false;
          this.activePrevArrow = false;
        }
      }
    },

    computed: {
      infoState: function() {
        return this.info[this.selectedIndex];
      },
      iconActive: function() {
        if(this.showShareCard) return 'active';
      },
      iconActiveLike: function() {
        if(this.showLikesCard) return 'activeLike';
      }
    },
    
    methods: { 
      
      fetchUser: function() {
        let temp;
        
        fetch('https://randomuser.me/api/')
          .then(res => res.json())
          .then(data => {
            let user = data.results[0];
            temp = {
              photo: user.picture.large,
              name: user.name.first + ' ' + user.name.last,
              location: user.location.city + ', ' + user.location.country,
              email: user.email,
              phone: user.phone
            }
            this.randomUser = temp;
        });
        
      },

      shareCardEnter: function(el, done) {
        gsap.fromTo(el, 0.5, { x: 0 },{ x: 50, ease: "back.out", onComplete: done } );
        gsap.from('#shareIcon', {
          duration: 0.3,
          y: -5,
          x: -60,
          rotate: 90,
          opacity: 0,
          stagger: 0.1,
          ease: "sine.out"
        })
        
      },
      shareCardLeave: function(el, done) {
        gsap.to(el, 0.5, { x: 0, ease: "power2.in", onComplete: done });
      },

      followCardEnter: function(el, done) {
        gsap.fromTo(el, 0.6, { y: 0 },{ y: 60, ease: "expo.out", onComplete: done } );
        gsap.from('.follow__num', { y: -30, stagger: 0.2 });
      },
      followCardLeave: function(el, done) {
        gsap.to(el, 0.5, { y: 0, ease: "expo.out", onComplete: done });
      },

      showLikes: function() {
        if(this.showShareCard) this.showShareCard = false;
        this.showLikesCard = !this.showLikesCard;
        if(this.showLikesCard) {
          
          gsap.to("#likes", 0.5, { y: -20, x: -20, opacity: 1, ease: "expo.out", onComplete: () => {
            this.numOfLikes += 1;
          } } );
        } else {
          gsap.to("#likes", 0.5, { y: 0, x: 0, opacity: 0, ease: "expo.out" } );
        }
      },

      onFollow: function() {
        this.showFollowCard = true;
      },

      slide(dir) {
        // Slider code by Ada https://codepen.io/adaban/pen/qoqLJb
        this.direction = dir;
        dir === 1
          ? (this.transitionName = "slide-next")
          : (this.transitionName = "slide-prev");
        var len = this.info.length;
        this.selectedIndex = (this.selectedIndex + dir % len + len) % len;
      }
    },
    
    mounted() {
      this.fetchUser();
    }
  });