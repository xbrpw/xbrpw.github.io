new Vue({
  el: '#app',
  data: {
    showLiked: false,
    highlighted: null,
    items: [
      {
        title: 'Travis',
        image: 'https://www.billboard.com/files/styles/900_wide/public/media/travis-scott-astroworld-album-art-2018-billboard-embed.jpg',
        liked: false
      },
      {
        title: 'Ariana',
        image: 'https://www.billboard.com/files/styles/900_wide/public/media/ariana-grande-sweetner-album-art-2018-billboard-1240.jpg',
        liked: false
      },
      {
        title: 'Cardi',
        image: 'https://www.billboard.com/files/styles/900_wide/public/media/cardi-b-invasion-of-privacy-album-art-2018-billboard-embed.jpg',
        liked: false
      },
      {
        title: 'Kids',
        image: 'https://www.billboard.com/files/styles/900_wide/public/media/kids-see-ghosts-album-art-2018-billboard-1240.jpg',
        liked: false
      },
      {
        title: 'Tenyana',
        image: 'https://www.billboard.com/files/styles/900_wide/public/media/teyana-taylor-KTSE-album-art-2018-billboard-embed.jpg',
        liked: false
      },
      {
        title: 'Asap',
        image: 'https://www.billboard.com/files/styles/900_wide/public/media/asap-rocky-testing-album-art-2018-billboard-1240.jpg',
        liked: false
      },
      {
        title: 'Solastalgia',
        image: 'https://www.billboard.com/files/styles/900_wide/public/media/Solastalgia-missy-higgins-album-art-2018-billboard-1240.jpg',
        liked: false
      },
      {
        title: '5sos',
        image: 'https://www.billboard.com/files/styles/900_wide/public/media/5sos-young-blood-album-art-2018-billboard-1240.jpg',
        liked: false
      },
      {
        title: 'Migos',
        image: 'https://www.billboard.com/files/styles/900_wide/public/media/migos-culture-2-album-art-2018-billboard-1240.jpg',
        liked: false
      },
      {
        title: 'The pains',
        image: 'https://www.billboard.com/files/styles/900_wide/public/media/the-pains-of-growing-alessia-cara-album-art-2018-billboard-1240.jpg',
        liked: false
      },
      {
        title: 'Kacey',
        image: 'https://www.billboard.com/files/styles/900_wide/public/media/kacey-musgraves-golden-hour-album-2018-billboard-embed.jpg',
        liked: false
      },
      {
        title: 'Love me',
        image: 'https://www.billboard.com/files/styles/900_wide/public/media/Love-Me-Love-Me-Not-HONNE-album-art-2018-billboard-1240.jpg',
        liked: false
      },
      {
        title: 'The carters',
        image: 'https://www.billboard.com/files/styles/900_wide/public/media/beyonce-jay-z-everything-is-love-album-art-2018-billboard-embed.jpg',
        liked: false
      },
      {
        title: 'Mac',
        image: 'https://www.billboard.com/files/media/mac-miller-swimming-art-2018-billboard-embed.jpg',
        liked: false
      },
      {
        title: 'Janelle',
        image: 'https://www.billboard.com/files/styles/900_wide/public/media/janelle-monae-dirty-computer-album-2018-billboard-embed.jpg',
        liked: false
      },
      {
        title: 'The internet',
        image: 'https://www.billboard.com/files/styles/900_wide/public/media/the-internet-hive-mind-album-art-2018-billboard-embed.jpg',
        liked: false
      },
      {
        title: 'Troye',
        image: 'https://www.billboard.com/files/styles/900_wide/public/media/troye-sivan-bloom-album-art-2018-billboard-embed.jpg',
        liked: false
      }
    ]
  },
  computed: {
    featuredItems () {
      let i = _.clone(this.items);
      return i.splice(0, 4);
    },
    feedItems () {
      let i = _.clone(this.items);
      let a = null;
      
      if(this.showLiked) {
        a = this.likedItems;
      } else {
        a = i.splice(4, i.length-4);
      }
      
      return a;
    },
    totalLikes () {
      return _.filter(this.items, {'liked': true}).length;
    },
    likedItems () {
      return _.filter(this.items, {'liked': true});
    }
  },
  methods: {
    highlightItem(item) {
      this.highlighted = item;
    },
    likeItem (item) {
      if(item.liked) {
        item.liked = false;
      } else {
        item.liked = true;
      }
    }
  }
})