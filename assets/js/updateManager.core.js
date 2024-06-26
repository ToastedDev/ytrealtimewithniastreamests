YT.updateManager = {
  prepare: function (e) {
    var odEl = ["#yt_subs", "#yt_views", "#yt_videos"];
    odEl.forEach(function (e) {
      new Odometer({
        el: document.querySelector(e),
        value: "0",
        format: "(,ddd)",
        theme: "minimal",
      });
    });
  },
  updateName: function (e) {
    $(".yt_name").text(e);
  },
  updateProfile: function (e) {
    $("#yt_profile").attr("src", e);
  },
  updateCover: function (e) {
    $("#yt_cover").attr("src", e);
  },
  updateSubscribers: function (e) {
    $("#yt_subs").text(e);
  },
  updateViews: function (e) {
    $("#yt_views").text(e);
  },
  updateVideos: function (e) {
    $("#yt_videos").text(e);
  },

  updateChannelID: function (e) {
    YT.live.channelID = e;
    $("#yt_shareurl").val(YT.urls.getCurrent());
    $("#yt_embed_small").val(
      '<iframe style="height:80px;width:300px;border:none;" frameborder="0" src="https://counts.live/embeds/youtube-subscriber-count/' +
        YT.live.channelID +
        '/small" />',
    );
    $("#yt_embed_large").val(
      '<iframe style="height:350px;width:320px;border:none;" frameborder="0" src="https://counts.live/embeds/youtube-subscriber-count/' +
        YT.live.channelID +
        '/large" />',
    );
    if (YT.live.channelID == "UCX6OQ3DkcsbYNE6H8uQQuVA") {
      let textyab = document.getElementById("yt_substext").innerHTML;
      let idkyab = textyab.replace(/Estimated/gi, "Studio")
      document.getElementById("yt_substext").textContent = idkyab
    }
    else {
      let textyab = document.getElementById("yt_substext").innerHTML;
      let idkyab = textyab.replace(/Studio/gi, "Estimated")
      document.getElementById("yt_substext").textContent = idkyab
    };
  },

};
