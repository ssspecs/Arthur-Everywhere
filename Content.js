const arthurMorganImages = [
  "https://images3.alphacoders.com/948/948669.jpg",
  "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/09/Arthur-Morgan-e1600294290774.jpg",
  "https://i.ytimg.com/vi/Jjt8KLHuJ6A/hq720.jpg",
  "https://media-rockstargames-com.akamaized.net/tina-uploads/posts/o34o4o4k3342a8/6e159fcbe32dd907df9035144add011750f33be4.png",
  "https://www.irishtimes.com/resizer/v2/FNVNZ7F54K3VFVOFYAGRBMKYEU.jpg?auth=ff0cb60cd2398bfcf00556f6cccb328ae31df90b21c37ae2a4c195c00d1c67b5&width=800&height=450",
  "https://www.usatoday.com/gcdn/presto/2018/10/25/USAT/dc445534-9d8a-4bce-95b4-72de59be8bd1-RDR2_SunsetSilhouette.jpg?width=700&height=394&fit=crop&format=pjpg&auto=webp",
  "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Red-Dead-Redemption-Arthur-Morgan-John-Marston.jpg",
  "https://i.pinimg.com/736x/b5/a4/c8/b5a4c81f0412e22df60984d9e2277817.jpg",
  "https://c4.wallpaperflare.com/wallpaper/330/183/587/arthur-morgan-red-dead-redemption-2-daylight-sunset-video-game-art-hd-wallpaper-preview.jpg"
];

function replaceTextWithArthurLove(node) {
  const walker = document.createTreeWalker(
    node,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    },
    false
  );

  while (walker.nextNode()) {
    walker.currentNode.nodeValue = "I Love Arthur Morgan";
  }
}

function replaceAllText() {
  replaceTextWithArthurLove(document.body);
}

function replaceYouTubeThumbnails() {
  const thumbnails = document.querySelectorAll("ytd-thumbnail img");
  thumbnails.forEach((img) => {
    const random = Math.floor(Math.random() * arthurMorganImages.length);
    img.src = arthurMorganImages[random];
    img.srcset = "";
  });
}

function replaceRobloxImages() {
  const imgs = document.querySelectorAll("img");
  imgs.forEach((img) => {
    const random = Math.floor(Math.random() * arthurMorganImages.length);
    img.src = arthurMorganImages[random];
    img.srcset = "";
  });
}

function replaceDiscordImages() {
  const imgs = document.querySelectorAll("img");
  imgs.forEach((img) => {
    const random = Math.floor(Math.random() * arthurMorganImages.length);
    img.src = arthurMorganImages[random];
    img.srcset = "";
  });
}

function replaceSpotifyImages() {
  const imgs = document.querySelectorAll("img");
  imgs.forEach((img) => {
    const random = Math.floor(Math.random() * arthurMorganImages.length);
    img.src = arthurMorganImages[random];
    img.srcset = "";
  });
}

function handleSite() {
  const host = location.hostname;

  if (host.includes("youtube.com")) {
    replaceYouTubeThumbnails();
  } else if (host.includes("roblox.com")) {
    replaceRobloxImages();
  } else if (host.includes("discord.com")) {
    replaceDiscordImages();
  } else if (host.includes("open.spotify.com")) {
    replaceSpotifyImages();
  }

  if (!location.hostname.includes("google.com")) {
  replaceAllText();
}
}

const observer = new MutationObserver(() => {
  handleSite();
});

window.addEventListener("load", () => {
  handleSite();

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
  const randomImg = Math.floor(Math.random() * arthurMorganImages.length);
  imgs[i].src = arthurMorganImages[randomImg];
}

