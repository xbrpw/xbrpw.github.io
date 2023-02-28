/**
 * Obtains parameters from the hash of the URL
 * @return Object
 */

var displayName = "RECEIPTIFY";
var dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
var today = new Date();

const timeRangeOptions = {
  short_term: {
    num: 1,
    period: "LAST MONTH",
  },
  medium_term: {
    num: 2,
    period: "LAST 6 MONTHS",
  },
  long_term: {
    num: 3,
    period: "ALL TIME",
  },
};

const hideReceipt = () => {
  $("#loggedin").hide();
  $("#receipt").hide();
  $("#login").show();
};

const showReceipt = () => {
  $("#login").hide();
  $("#receipt").show();
  $("#loggedin").show();
};

function getHashParams() {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

function hiddenClone(element) {
  // Create clone of element
  var clone = element.cloneNode(true);

  // Position element relatively within the
  // body but still out of the viewport
  var style = clone.style;
  style.position = "relative";
  style.top = window.innerHeight + "px";
  style.left = 0;
  // Append clone to body and return the clone
  document.body.appendChild(clone);
  return clone;
}
var userProfileSource = document.getElementById(
    "user-profile-template"
  ).innerHTML,
  userProfileTemplate = Handlebars.compile(userProfileSource),
  userProfilePlaceholder = document.getElementById("receipt");

function downloadImg() {
  const type =
    document.querySelector('input[name="type-select"]:checked')?.value ??
    "tracks";
  const period =
    document.querySelector('input[name="period-select"]:checked')?.value ??
    "short_term";

  const fileName = `top_${type}_${period}`;
  var offScreen = document.querySelector(".receiptContainer");
  window.scrollTo(0, 0);
  var clone = hiddenClone(offScreen);
  // Use clone with htm2canvas and delete clone
  html2canvas(clone, { scrollY: -window.scrollY }).then((canvas) => {
    var dataURL = canvas.toDataURL("image/png", 1.0);
    document.body.removeChild(clone);
    var link = document.createElement("a");
    link.href = dataURL;
    link.download = `${fileName}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

function getTopGenres(artists) {
  const genres = {};

  artists.forEach((artist) => {
    artist.genres?.forEach((genre) => {
      if (!genres[genre]) {
        genres[genre] = 0;
      }
      genres[genre] += 1;
    });
  });

  const genreArr = Object.keys(genres).map(function (key) {
    return { name: key.toUpperCase(), duration_ms: genres[key] };
  });

  // Sort the array based on the second element
  genreArr.sort(function (first, second) {
    return second.duration_ms - first.duration_ms;
  });
  return genreArr.slice(0, 10);
}

function displayReceipt(response) {
  const type =
    document.querySelector('input[name="type-select"]:checked')?.value ??
    "tracks";
  const timeRange =
    document.querySelector('input[name="period-select"]:checked')?.value ??
    "short_term";
  let data = {
    responseItems:
      type === "genres" ? getTopGenres(response.items) : response.items,
    total: 0,
    date: today.toLocaleDateString("en-US", dateOptions).toUpperCase(),
    json: true,
  };
  for (var i = 0; i < data.responseItems.length; i++) {
    data.responseItems[i].id = (i + 1 < 10 ? "0" : "") + (i + 1);
    if (type === "tracks") {
      data.responseItems[i].name =
        data.responseItems[i].name.toUpperCase() + " - ";
      data.total += data.responseItems[i].duration_ms;
      let minutes = Math.floor(data.responseItems[i].duration_ms / 60000);
      let seconds = (
        (data.responseItems[i].duration_ms % 60000) /
        1000
      ).toFixed(0);
      data.responseItems[i].duration_ms =
        minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
      for (var j = 0; j < data.responseItems[i].artists.length; j++) {
        data.responseItems[i].artists[j].name =
          data.responseItems[i].artists[j].name.trim();
        data.responseItems[i].artists[j].name =
          data.responseItems[i].artists[j].name.toUpperCase();
        if (j != data.responseItems[i].artists.length - 1) {
          data.responseItems[i].artists[j].name =
            data.responseItems[i].artists[j].name + ", ";
        }
      }
    } else if (type === "artists") {
      data.responseItems[i].name = data.responseItems[i].name.toUpperCase();
      data.responseItems[i].duration_ms = Math.ceil(
        data.responseItems[i].popularity / 10
      );
      data.total += data.responseItems[i].duration_ms;
    } else if (type === "genres") {
      data.total += data.responseItems[i].duration_ms;
    }
  }
  minutes = Math.floor(data.total / 60000);
  seconds = ((data.total % 60000) / 1000).toFixed(0);
  if (type === "tracks") {
    data.total = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  userProfilePlaceholder.innerHTML = userProfileTemplate({
    tracks: data.responseItems,
    total: data.total,
    time: data.date,
    num: timeRangeOptions[timeRange].num,
    name: displayName,
    period: timeRangeOptions[timeRange].period,
  });

  document.getElementById("download").addEventListener("click", downloadImg);

  const logout = () => {
    const url = "https://accounts.spotify.com/logout";
    const spotifyLogoutWindow = window.open(
      url,
      "Spotify Logout",
      "width=700,height=500,top=40,left=40"
    );
    setTimeout(() => {
      spotifyLogoutWindow.close();
      location.href = "/index.html";
    }, 2000);
  };

  document.getElementById("logout").addEventListener("click", logout);
}

function retrieveItems() {
  const type =
    document.querySelector('input[name="type-select"]:checked')?.value ??
    "tracks";
  const selectedType = type === "genres" ? "artists" : type;
  const timeRangeSlug =
    document.querySelector('input[name="period-select"]:checked')?.value ??
    "short_term";
  const limit = type === "genres" ? 50 : 10;
  $.ajax({
    url: `https://api.spotify.com/v1/me/top/${
      selectedType ?? "tracks"
    }?limit=${limit}&time_range=${timeRangeSlug}`,
    headers: {
      Authorization: "Bearer " + access_token,
    },
    success: displayReceipt,
  });
}

function retrieveItemsApple(hist) {
  let data = {
    responseItems: hist,
    total: 0,
    date: today.toLocaleDateString("en-US", dateOptions).toUpperCase(),
    json: true,
  };
  let albumInfoArr = [];
  for (var i = 0; i < data.responseItems.length; i++) {
    const attributes = data.responseItems[i].attributes;
    const isAlbum = data.responseItems[i].type === "albums";
    const albumInfo = {
      id: (i + 1 < 10 ? "0" : "") + (i + 1),
      duration_ms: isAlbum ? attributes.trackCount : 1,
      name: isAlbum
        ? attributes.name.toUpperCase() + " - " + attributes.artistName
        : attributes.name.toUpperCase(),
    };
    albumInfoArr.push(albumInfo);
    data.total += albumInfo.duration_ms;
  }
  userProfilePlaceholder.innerHTML = userProfileTemplate({
    tracks: albumInfoArr,
    total: data.total,
    time: data.date,
    num: 1,
    name: displayName,
    period: "HEAVY ROTATION",
  });
  document
    .getElementById("download")
    .addEventListener("click", () => downloadImg("heavy_rotation"));
}

let params = getHashParams();

let access_token = params.access_token,
  dev_token = params.dev_token,
  client = params.client,
  error = params.error;

if (error) {
  alert("There was an error during the authentication");
} else {
  if (client === "spotify" && access_token) {
    $.ajax({
      url: "https://api.spotify.com/v1/me",
      headers: {
        Authorization: "Bearer " + access_token,
      },
      success: function (response) {
        displayName = response.display_name.toUpperCase();
        showReceipt();
        retrieveItems();
      },
    });
  } else if (client === "applemusic" && dev_token) {
    const setupMusicKit = new Promise((resolve) => {
      document.addEventListener("musickitloaded", () => {
        const musicKitInstance = window.MusicKit.configure({
          developerToken: dev_token,
          app: {
            name: "receiptify",
            build: "1.0.0",
          },
        });
        delete window.MusicKit; // clear global scope
        resolve(musicKitInstance);
      });
    });
    $("#loggedin").hide();
    setupMusicKit.then(async (musicKit) => {
      try {
        await musicKit.authorize().then(async (token) => {
          try {
            const hist = musicKit.api.recentPlayed().then((hist) => {
              $("#options").hide();
              $("#top-type").hide();
              $("#logout").hide();
              showReceipt();
              retrieveItemsApple(hist);
            });
          } catch (error) {
            alert(
              "Your listening history isn't sufficient enough to generate your top tracks. Please try again."
            );
          }
        });
      } catch (error) {
        alert("Authorization Failed");
      }
    });
  } else {
    // render initial screen
    hideReceipt();
  }

  document
    .getElementById("short_term")
    .addEventListener("click", retrieveItems, false);
  document
    .getElementById("medium_term")
    .addEventListener("click", retrieveItems, false);
  document
    .getElementById("long_term")
    .addEventListener("click", retrieveItems, false);
  document
    .getElementById("top-tracks")
    .addEventListener("click", retrieveItems, false);
  document
    .getElementById("top-artists")
    .addEventListener("click", retrieveItems, false);
  document
    .getElementById("top-genres")
    .addEventListener("click", retrieveItems, false);
}
