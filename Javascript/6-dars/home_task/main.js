const videos = [
  {
    title: "Lorem Ipsum",
    video_url: "https://www.youtube.com/embed/TRF3HAusQrY",
    thumbnail: "https://via.placeholder.com/200",
    channel: {
      channel_photo: "https://via.placeholder.com/50",
      channel_name: "CHannel Name",
    },
    views: 100,
  },
  {
    title: "Lorem Ipsum",
    video_url: "https://www.youtube.com/embed/TRF3HAusQrY",
    thumbnail: "https://via.placeholder.com/200",
    channel: {
      channel_photo: "https://via.placeholder.com/50",
      channel_name: "CHannel Name",
    },
    views: 100,
  },
];

function renderVideos() {
  const videosWrapper = document.querySelector(".videos");

  videos.forEach((video) => {
    // const newVideoEl = `<div class="video">
    //     <img src="${video.thumbnail}" alt="" />
    //     <div class="bottom">
    //       <img src="${video.channel.channel_photo}" alt="" />
    //       <div>
    //         <h4>${video.title}</h4>
    //         <p>${video.channel.channel_name}</p>
    //         <p>${video.views} views</p>
    //       </div>
    //     </div>
    //   </div>`;

    const newVideoEl = `<div class="video">
    <iframe width="560" height="315" src="${video.video_url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="bottom">
          <img src="${video.channel.channel_photo}" alt="" />
          <div>
            <h4>${video.title}</h4>
            <p>${video.channel.channel_name}</p>
            <p>${video.views} views</p>
          </div>
        </div>
  </div>`;

    videosWrapper.innerHTML += newVideoEl;
    console.log(videosWrapper.innerHTML);
  });
}

renderVideos();
