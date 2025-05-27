var config = {
  "aslam": "712617067333025793",
}

async function nicknames() {
  fetch(`https://pfpfinder.com/api/discord/user/${config.aslam}`).then(r => r.json()).then(res => {
    document.getElementById('imageAvatar').src = `${res.url}`;
  })
  
}

nicknames()
