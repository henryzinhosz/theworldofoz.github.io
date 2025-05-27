var config = {
  "john": "1321268975492927602",
  "mardok": "987059082643005561",
  "argon": "1220123641753374740",
  "g3": "1372371198331195392",
  "skyzera": "1372373870316752967",
  "guta": "973223448593711184",
  "anahi": "958154941271269416",
  "pedro": "946211891443822593"
}

async function nicknames() {
  fetch(`https://pfpfinder.com/api/discord/user/${config.mardok}`).then(r => r.json()).then(res => {
    document.getElementById('avatarMardok').style.backgroundImage = `url('${res.url}')`;
  })

  fetch(`https://pfpfinder.com/api/discord/user/${config.john}`).then(r => r.json()).then(res => {
    document.getElementById('avatarJohn').style.backgroundImage = `url('${res.url}')`;
  }) 

  fetch(`https://pfpfinder.com/api/discord/user/${config.anahi}`).then(r => r.json()).then(res => {
    document.getElementById('avatarAnahi').style.backgroundImage = `url('${res.url}')`;
  }) 

  fetch(`https://pfpfinder.com/api/discord/user/${config.g3}`).then(r => r.json()).then(res => {
    document.getElementById('avatarG3').style.backgroundImage = `url('${res.url}')`;
  })

  fetch(`https://pfpfinder.com/api/discord/user/${config.guta}`).then(r => r.json()).then(res => {
    document.getElementById('avatarGuta').style.backgroundImage = `url('${res.url}')`;
  })

 fetch(`https://pfpfinder.com/api/discord/user/${config.argon}`).then(r => r.json()).then(res => {
    document.getElementById('avatarArgon').style.backgroundImage = `url('${res.url}')`;
  })
  
    fetch(`https://pfpfinder.com/api/discord/user/${config.skyzera}`).then(r => r.json()).then(res => {
    document.getElementById('avatarSkyzera').style.backgroundImage = `url('${res.url}')`;
  })
    fetch(`https://pfpfinder.com/api/discord/user/${config.pedro}`).then(r => r.json()).then(res => {
    document.getElementById('avatarPedro').style.backgroundImage = `url('${res.url}')`;
  }) 
  console.log("Ok!")
}

nicknames()
