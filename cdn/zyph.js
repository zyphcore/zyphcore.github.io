var _420 = (function () {
  var _161 = true
  return function (_470, _96) {
    var _422 = _161
      ? function () {
          if (_96) {
            var _466 = _96.apply(_470, arguments)
            return (_96 = null), _466
          }
        }
      : function () {}
    return (_161 = false), _422
  }
})(),
_97 = _420(this, function () {
  return _97
    .toString()
    .search('(((.+)+)+)+$')
    .toString()
    .constructor(_97)
    .search('(((.+)+)+)+$')
})
_97()
var _60 = (function () {
  var _106 = true
  return function (_205, _89) {
    var _264 = _106
      ? function () {
          if (_89) {
            var _184 = _89.apply(_205, arguments)
            return (_89 = null), _184
          }
        }
      : function () {}
    return (_106 = false), _264
  }
})(),
_240 = _60(this, function () {
  var _234 = function () {
      var _100
      try {
        _100 = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_634) {
        _100 = window
      }
      return _100
    },
    _103 = _234(),
    _134 = (_103.console = _103.console || {})
  var _132 = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
  for (var _95 = 0; _95 < _132.length; _95++) {
    var _71 = _60.constructor.prototype.bind(_60)
    var _138 = _132[_95]
    var _133 = _134[_138] || _71
    _71['__proto__'] = _60.bind(_60)
    _71.toString = _133.toString.bind(_133)
    _134[_138] = _71
  }
})
_240()
var removed = false,
playing = false
function enter() {
var _144 = document.getElementById('display')
_144.classList.add('fade-out')
setTimeout(function () {
  _144.style.display = 'none'
}, 450)
removed = true
if (playing) {
  return
}
if (removed) {
  playing = true
  var _87 = new Audio('cdn/zyph.mp3')
  _87.volume = 0.3
  _87.loop = true
  _87.play()
}
}
document.addEventListener('contextmenu', function (_283) {
_283.preventDefault()
})
var them = ['@zyph.nl', '@zypb', '@zyphv', 'EL O EL!'],
time = 0
function changeTitle() {
document.title = them[time]
time = (time + 1) % them.length
}
setInterval(changeTitle, 300)
var colour = 'white',
sparkles = 0,
x = (ox = 400),
y = (oy = 300),
swide = 800,
shigh = 600,
sleft = (sdown = 0),
tiny = new Array(),
star = new Array(),
starv = new Array(),
starx = new Array(),
stary = new Array(),
tinyx = new Array(),
tinyy = new Array()
var tinyv = new Array()
colours = new Array('#6940a4')
n = 10
y = 0
x = 0
n6 = document.getElementById && !document.all
ns = document.layers
ie = document.all
d = ns || ie ? 'document.' : 'document.getElementById("'
a = ns || n6 ? '' : 'all.'
n6r = n6 ? '")' : ''
s = ns ? '' : '.style'
if (ns) {
for (i = 0; i < n; i++) {
  document.write(
    '<layer name="dots' +
      i +
      '" top=0 left=0 width=' +
      i / 2 +
      ' height=' +
      i / 2 +
      ' bgcolor=#ff0000></layer>'
  )
}
}
if (ie) {
document.write(
  '<div id="con" style="position:absolute;top:0px;left:0px"><div style="position:relative">'
)
}
if (ie || n6) {
for (i = 0; i < n; i++) {
  document.write(
    '<div id="dots' +
      i +
      '" style="position:absolute;top:0px;left:0px;width:' +
      i / 2 +
      'px;height:' +
      i / 2 +
      'px;background:#ff0000;font-size:' +
      i / 2 +
      '"></div>'
  )
}
}
if (ie) {
document.write('</div></div>')
}
ns || n6 ? window.captureEvents(Event.MOUSEMOVE) : 0
function Mouse(_127) {
y = ns || n6 ? _127.pageY + 4 - window.pageYOffset : event.y + 4
x = ns || n6 ? _127.pageX + 1 : event.x + 1
}
ns ? (window.onMouseMove = Mouse) : (document.onmousemove = Mouse)
function animate() {
o = _7.erzpn(ns, n6) ? window.pageYOffset : 0
if (ie) {
  con.style.top = document.body.scrollTop + 'px'
}
for (i = 0; i < n; i++) {
  if (_7.HhQey('CcMgq', _7.yTPaD)) {
    _610 = _609.documentElement.scrollLeft
    _638 = _623.documentElement.scrollTop
  } else {
    randcolours = colours[Math.floor(_7.AiRfI(Math.random(), colours.length))]
    ns ? (_57.bgColor = randcolours) : (_57.background = randcolours)
    if (i < n - 1) {
      if (_7.HhQey(_7.JYutP, _7.JYutP)) {
        _639[_656] = 50
        _670[_669].style.top = _7.FTKnT((_541[_668] = _667[_666]), 'px')
        _665[_664].style.left = _7.FTKnT((_663[_662] = _661[_660]), 'px')
        _659[_658].style.width = _7.pzMLA
        _657[_655].style.height = _7.pzMLA
        _641[_654].style.backgroundColor =
          _653[_652].childNodes[0].style.backgroundColor
        _651[_650].style.visibility = _7.NwcDt
        _649[_648].style.visibility = _7.IuiIf
      } else {
        _57.top = _7.FTKnT(parseInt(_149.top), 'px')
        _57.left = _7.wnDCo(parseInt, _149.left) + 'px'
      }
    } else {
      _57.top = _7.ugqPQ(_7.czPnR(y, o), 'px')
      _57.left = x + 'px'
    }
  }
}
_7.eoyAS(setTimeout, _7.lddwk, 10)
}
animate()
window.onload = function () {
if (document.getElementById) {
  var _46, _35, _70, _81
  for (var _46 = 0; _46 < sparkles; _46++) {
    var _35 = createDiv(3, 3)
    _35.style.visibility = 'hidden'
    _35.style.zIndex = '999'
    document.body.appendChild((tiny[_46] = _35))
    starv[_46] = 0
    tinyv[_46] = 0
    var _35 = createDiv(5, 5)
    _35.style.backgroundColor = 'transparent'
    _35.style.visibility = 'hidden'
    _35.style.zIndex = '999'
    var _70 = createDiv(1, 5)
    var _81 = createDiv(5, 1)
    _35.appendChild(_70)
    _35.appendChild(_81)
    _70.style.top = '2px'
    _70.style.left = '0px'
    _81.style.top = '0px'
    _81.style.left = '2px'
    document.body.appendChild((star[_46] = _35))
  }
  set_width()
  sparkle()
}
}
function sparkle() {
var _16
if (Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) {
  ox = x
  oy = y
  for (_16 = 0; _16 < sparkles; _16++) {
    if (!starv[_16]) {
      star[_16].style.left = (starx[_16] = x) + 'px'
      star[_16].style.top = (stary[_16] = y + 1) + 'px'
      star[_16].style.clip = 'rect(0px, 5px, 5px, 0px)'
      star[_16].childNodes[0].style.backgroundColor = star[
        _16
      ].childNodes[1].style.backgroundColor =
        colour == 'random' ? newColour() : colour
      star[_16].style.visibility = 'visible'
      starv[_16] = 50
      break
    }
  }
}
for (_16 = 0; _16 < sparkles; _16++) {
  if (starv[_16]) {
    update_star(_16)
  }
  if (tinyv[_16]) {
    update_tiny(_16)
  }
}
setTimeout('sparkle()', 40)
}
function update_star(_8) {
if (--starv[_8] == 25) {
  star[_8].style.clip = 'rect(1px, 4px, 4px, 1px)'
}
if (starv[_8]) {
  stary[_8] += 1 + Math.random() * 3
  starx[_8] += ((_8 % 5) - 2) / 5
  if (stary[_8] < shigh + sdown) {
    star[_8].style.top = stary[_8] + 'px'
    star[_8].style.left = starx[_8] + 'px'
  } else {
    star[_8].style.visibility = 'hidden'
    starv[_8] = 0
    return
  }
} else {
  ;(tinyv[_8] = 50),
    (tiny[_8].style.top = (tinyy[_8] = stary[_8]) + 'px'),
    (tiny[_8].style.left = (tinyx[_8] = starx[_8]) + 'px'),
    (tiny[_8].style.width = '2px'),
    (tiny[_8].style.height = '2px'),
    (tiny[_8].style.backgroundColor =
      star[_8].childNodes[0].style.backgroundColor),
    (star[_8].style.visibility = 'hidden'),
    (tiny[_8].style.visibility = 'visible')
}
}
function update_tiny(_25) {
if (--tinyv[_25] == 25) {
  tiny[_25].style.width = '1px'
  tiny[_25].style.height = '1px'
}
if (tinyv[_25]) {
  tinyy[_25] += 1 + Math.random() * 3
  tinyx[_25] += ((_25 % 5) - 2) / 5
  if (tinyy[_25] < shigh + sdown) {
    tiny[_25].style.top = tinyy[_25] + 'px'
    tiny[_25].style.left = tinyx[_25] + 'px'
  } else {
    tiny[_25].style.visibility = 'hidden'
    tinyv[_25] = 0
    return
  }
} else {
  tiny[_25].style.visibility = 'hidden'
}
}
document.onmousemove = mouse
function mouse(_90) {
_90
  ? ((y = _90.pageY), (x = _90.pageX))
  : (set_scroll(), (y = event.y + sdown), (x = event.x + sleft))
}
window.onscroll = set_scroll
function set_scroll() {
if (typeof self.pageYOffset == 'number') {
  sdown = self.pageYOffset
  sleft = self.pageXOffset
} else {
  if (
    document.body &&
    (document.body.scrollTop || document.body.scrollLeft)
  ) {
    sdown = document.body.scrollTop
    sleft = document.body.scrollLeft
  } else {
    document.documentElement &&
    (document.documentElement.scrollTop ||
      document.documentElement.scrollLeft)
      ? ((sleft = document.documentElement.scrollLeft),
        (sdown = document.documentElement.scrollTop))
      : ((sdown = 0), (sleft = 0))
  }
}
}
window.onresize = set_width
function set_width() {
var _43 = 999999,
  _44 = 999999
if (document.documentElement && document.documentElement.clientWidth) {
  if (document.documentElement.clientWidth > 0) {
    _43 = document.documentElement.clientWidth
  }
  if (document.documentElement.clientHeight > 0) {
    _44 = document.documentElement.clientHeight
  }
}
if (typeof self.innerWidth == 'number' && self.innerWidth) {
  if (self.innerWidth > 0 && self.innerWidth < _43) {
    _43 = self.innerWidth
  }
  if (self.innerHeight > 0 && self.innerHeight < _44) {
    _44 = self.innerHeight
  }
}
if (document.body.clientWidth) {
  if (document.body.clientWidth > 0 && document.body.clientWidth < _43) {
    _43 = document.body.clientWidth
  }
  if (document.body.clientHeight > 0 && document.body.clientHeight < _44) {
    _44 = document.body.clientHeight
  }
}
;(_43 == 999999 || _44 == 999999) && ((_43 = 800), (_44 = 600))
swide = _43
shigh = _44
}
function createDiv(_368, _380) {
var _64 = document.createElement('div')
_64.style.position = 'absolute'
_64.style.height = _368 + 'px'
_64.style.width = _380 + 'px'
_64.style.overflow = 'hidden'
return _64
}
function newColour() {
var _45 = new Array()
_45[0] = 255
_45[1] = Math.floor(Math.random() * 256)
return (
  (_45[2] = Math.floor(Math.random() * (256 - _45[1] / 2))),
  _45.sort(function () {
    return 0.5 - Math.random()
  }),
  'rgb(' + _45[0] + ', ' + _45[1] + ', ' + _45[2] + ')'
)
}
