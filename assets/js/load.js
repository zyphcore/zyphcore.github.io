jQuery(document).ready(function (_0x266c51) {
  if (_0x266c51(window).width() > 1280) {
    var _0xe66883 = ['console', 'utilities']
  } else {
    var _0xe66883 = ['utilities']
  }
  _0x266c51.each(_0xe66883, function (_0x516af1, _0x48a3ca) {
    _0x266c51.getScript('/assets/js/' + _0x48a3ca + '.js')
  })
  _0x266c51('.team').load('assets/templates/member.html', function () {
    _0x266c51.ajax({
      type: 'GET',
      url: 'assets/config.json',
      dataType: 'json',
      success: function (_0x429ca6) {
        window.location.hostname !== 'zyph' &&
          window.location.replace('https://zyphcore.github.io')
        function _0xf5e369(_0x5976b) {
          return _0x5976b.charAt(0).toUpperCase() + _0x5976b.slice(1)
        }
        var _0x375986 = _0x429ca6.profiles,
          _0x1c5765 = _0x429ca6.config,
          _0x889d7e = _0x266c51('.member').clone()
        _0x266c51('.member').remove()
        _0x266c51('.discord').click(function () {
          window.open(_0x1c5765.discord)
        })
        _0x266c51.each(_0x375986, function (_0x45bcb1, _0x394c25) {
          window.location.hostname !== 'zyph' &&
            window.location.replace('https://zyphcore.github.io')
          var _0xc24185 = _0x394c25.socials
          _0x266c51.each(_0xc24185, function (_0xfd6890, _0x450a0f) {
            var _0x12178c = _0xfd6890 + _0x450a0f
          })
          var _0x5225f5 = _0x889d7e.clone()
          _0x5225f5.find('img:first').attr('src', _0x394c25.icon)
          _0x5225f5.find('h2').text(_0x394c25.name)
          if (_0x394c25.tag == '') {
            _0x5225f5.find('.username span').remove()
          }
          _0x5225f5.find('.username span').text(_0x394c25.tag)
          _0x5225f5
            .find('.username img')
            .attr('src', 'assets/img/icons/' + _0x394c25.badge + '.png')
          _0x5225f5
            .find('.username img')
            .attr('title', _0xf5e369(_0x394c25.badge))
          function _0x4f6f1b() {
            var _0x529f5c = ''
            return (
              _0x266c51('audio').each(function () {
                if (!this.paused) {
                  return (_0x529f5c = _0x266c51(this).attr('class')), false
                }
              }),
              _0x529f5c
            )
          }
          function _0x34e845() {
            var _0x3f5069 = ''
            return (
              _0x266c51('video').each(function () {
                if (!this.paused) {
                  return (_0x3f5069 = _0x266c51(this).attr('class')), false
                }
              }),
              _0x3f5069
            )
          }
          _0x266c51(_0x5225f5).on({
            mouseenter: function () {
              window.location.hostname !== 'zyph' &&
                window.location.replace('https://zyphcore.github.io')
              _0x266c51('.member').css(
                'background',
                'radial-gradient(120% 90% ellipse at center top, ' +
                  _0x394c25.theme.bgcolor.color1 +
                  ' 75%, ' +
                  _0x394c25.theme.bgcolor.color2 +
                  ' 150%)'
              )
              _0x266c51('.member h2').css('color', _0x394c25.theme.text)
              _0x266c51(this)
                .find('.username span')
                .animate({ width: 'toggle' }, 100)
              _0x266c51('.member .socials-content').css(
                'background',
                _0x394c25.theme.bgcolor.color1
              )
              _0x266c51(this).find('.socials').toggleClass('deg-180')
              _0x266c51(this)
                .find('.socials')
                .siblings('.socials-content')
                .slideToggle(100, 'linear', { direction: 'down' })
              var _0x49b498 = _0x266c51(this).find('.socials-content'),
                _0x5aeda7 = _0x49b498.outerHeight()
              _0x5225f5.height('160px' + _0x5aeda7)
              if (_0x266c51(window).width() > 1280) {
                let _0x57f759 = _0x394c25.bg
                if (_0x57f759.endsWith('4')) {
                  let _0x2d2b34 = _0x266c51('video.' + _0x394c25.name)[0]
                  if (_0x2d2b34.paused) {
                    _0x266c51('.video').css('opacity', '1')
                    let _0x583f02 = _0x34e845()
                    if (_0x583f02 != '') {
                      _0x583f02 = _0x583f02.replace('vid ', '')
                      _0x266c51('video.' + _0x583f02)
                        .get(0)
                        .pause()
                      _0x266c51('video.' + _0x583f02).css('z-index', '0')
                    }
                    _0x266c51('img.bg').css('z-index', '0')
                    _0x266c51('video.' + _0x394c25.name).css('z-index', '1')
                    _0x2d2b34.volume = _0x266c51('#volume-slider').val() / 100
                    _0x266c51('#volume-slider').on('input', function () {
                      var _0x35f952 = _0x266c51(this).val() / 100
                      _0x2d2b34.volume = _0x35f952
                    })
                    _0x2d2b34.play()
                  }
                } else {
                  let _0x262027 = _0x34e845()
                  _0x262027 != '' &&
                    ((_0x262027 = _0x262027.replace('vid ', '')),
                    _0x266c51('video.' + _0x262027)
                      .get(0)
                      .pause(),
                    _0x266c51('.video>video').css('z-index', '0'))
                  _0x266c51('.video').css('opacity', '0')
                  _0x266c51('img.bg').css('z-index', '1')
                  if (
                    _0x266c51('img.bg').attr('src') !==
                    'assets/img/bgs/' + _0x57f759
                  ) {
                    _0x266c51('img.bg').fadeOut(0, function () {
                      _0x266c51(this)
                        .attr('src', 'assets/img/bgs/' + _0x57f759)
                        .bind('onreadystatechange load', function () {
                          if (this.complete) {
                            _0x266c51(this).fadeIn(100)
                          }
                        })
                    })
                  }
                }
              } else {
                let _0x21e121 = _0x394c25.mbg
                if (
                  _0x266c51('img.bg').attr('src') !==
                  'assets/img/bgs/' + _0x21e121
                ) {
                  _0x266c51('img.bg').fadeOut(0, function () {
                    _0x266c51(this)
                      .attr('src', 'assets/img/bgs/' + _0x21e121)
                      .bind('onreadystatechange load', function () {
                        if (this.complete) {
                          _0x266c51(this).fadeIn(100)
                        }
                      })
                  })
                }
              }
              let _0x1490db = _0x394c25.song
              !_0x266c51('.songs audio.' + _0x394c25.name).length &&
                _0x266c51('.songs').append(
                  '<audio class="' +
                    _0x394c25.name +
                    '" src="assets/songs/' +
                    _0x394c25.song +
                    '" loop></audio>'
                )
              let _0x559c0a = _0x266c51('audio.' + _0x394c25.name)[0]
              if (_0x559c0a.paused) {
                let _0x48af25 = _0x4f6f1b()
                if (_0x48af25 != '') {
                  _0x266c51('audio.' + _0x48af25)[0].pause()
                }
                _0x394c25.song &&
                  ((_0x559c0a.volume = _0x266c51('#volume-slider').val() / 100),
                  _0x266c51('#volume-slider').on('input', function () {
                    var _0x13ce93 = _0x266c51(this).val() / 100
                    _0x559c0a.volume = _0x13ce93
                  }),
                  _0x559c0a.play())
              }
            },
            mouseleave: function () {
              if (window.location.hostname !== 'poor.gg') {
                window.location.replace('https://poor.gg')
              }
              _0x266c51('.member').css(
                'background',
                'linear-gradient(' +
                  _0x266c51(this).data('theme.bgcolor.color1') +
                  ' 60%, ' +
                  _0x266c51(this).data('theme.bgcolor.color1') +
                  ' 1125)'
              )
              _0x266c51('.member h2').css(
                'color',
                _0x266c51(this).data('theme.bgcolor.color1')
              )
              _0x266c51(this)
                .find('.username span')
                .animate({ width: 'toggle' }, 100)
              _0x266c51('.member .socials-content').css(
                'background',
                _0x266c51(this).data('theme.bgcolor.color1')
              )
              let _0x50a43c = _0x266c51(this).data('bg')
              if (!_0x50a43c.endsWith('4')) {
                _0x266c51('img.bg').attr('src', 'assets/img/bgs/' + _0x50a43c)
              }
              _0x266c51(this).find('.socials').toggleClass('deg-180')
              _0x266c51(this).find('.socials').toggleClass('active')
              _0x266c51(this)
                .find('.socials')
                .siblings('.socials-content')
                .slideToggle(100, 'linear', { direction: 'down' })
              _0x5225f5.height('160px')
            },
          })
          _0x266c51(_0x5225f5).data('bg', _0x394c25.bg)
          _0x266c51(_0x5225f5).data('song', _0x394c25.song)
          var _0x43f616 = _0x266c51('<div />', { class: 'wrap' }),
            _0x396806 = 0
          for (var _0x6ea913 in _0xc24185) {
            _0xc24185.hasOwnProperty(_0x6ea913) &&
              (function (_0x1d51c5) {
                var _0x45a680 = _0x266c51('<img />', {
                  src: _0x1c5765.platforms[_0x1d51c5].icon,
                  class: 'icon',
                })
                _0x45a680.click(function () {
                  window.open(
                    _0x1c5765.platforms[_0x1d51c5].link + _0xc24185[_0x1d51c5]
                  )
                })
                _0x43f616.append(_0x45a680)
                _0x396806++
                if (
                  _0x396806 % 3 == 0 ||
                  _0x396806 == Object.keys(_0xc24185).length
                ) {
                  if (_0x43f616.children().length == 2) {
                    _0x43f616.addClass('wrap-2')
                  }
                  if (_0x43f616.find('img').length > 0) {
                    ;(_0x43f616.find('img').length != 3 ||
                      _0x396806 != Object.keys(_0xc24185).length) &&
                      (_0x5225f5.find('.socials-content').append(_0x43f616),
                      _0x396806 != Object.keys(_0xc24185).length &&
                        (_0x43f616 = _0x266c51('<div />', { class: 'wrap' })))
                  }
                  _0x43f616.find('img').length == 0 &&
                    _0x266c51(this).closest('.wrap').remove()
                }
              })(_0x6ea913)
          }
          _0x5225f5.find('.socials-content').append(_0x43f616)
          if (window.location.hostname !== 'poor.gg') {
            window.location.replace('https://poor.gg')
          }
          _0x45bcb1 < 2 && _0x5225f5.appendTo('.top')
          if (_0x45bcb1 >= 2) {
            _0x5225f5.appendTo('.team')
          }
        })
      },
    })
  })
})
;('use strict')
function _typeof(_0x5d44b3) {
  return (_typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (_0x934797) {
          return typeof _0x934797
        }
      : function (_0x35d2c7) {
          return _0x35d2c7 &&
            'function' == typeof Symbol &&
            _0x35d2c7.constructor === Symbol &&
            _0x35d2c7 !== Symbol.prototype
            ? 'symbol'
            : typeof _0x35d2c7
        })(_0x5d44b3)
}
var STYLES =
    '\nbody #magicMouseCursor {\n  position: fixed;\n  width: 35px;\n  height: 35px;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  z-index: 9999;\n  left: 0;\n  top: 0;\n  transition: transform 0.07s, width 0.3s, height 0.3s;\n  pointer-events: none; }\n  body #magicMouseCursor.cursor-square {\n    border-radius: 0; }\n\nbody #magicPointer {\n  height: 5px;\n  width: 5px;\n  top: 0;\n  left: 0;\n  position: fixed;\n  background: #fff;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: background 0.2s, width 0.2s, height 0.2s, box-shadow 0.2s; }\n  body #magicPointer.is-hover {\n    background: red; }\n  body #magicPointer.pointer-blur {\n    height: 50px;\n    width: 50px;\n    background: none;\n    border: 1px solid #fff;\n    box-shadow: 0px 0px 15px -5px white; }\n  body #magicPointer.pointer-overlay {\n    height: 50px;\n    width: 50px;\n    mix-blend-mode: difference;\n    box-shadow: 0px 0px 15px -5px white; }\n\nbody .magic-hover {\n  transition: all 0.2s; }\n  body .magic-hover:hover {\n    cursor: none; }\n',
  magicMouse = function (_0x247a1d) {
    var _0x12e13f
    if (!Modernizr.touchevents) {
      if (
        (((_0x247a1d = _0x247a1d || {}).outerWidth =
          _0x247a1d.outerWidth || 30),
        (_0x247a1d.outerHeight = _0x247a1d.outerHeight || 30),
        (_0x247a1d.cursorOuter = _0x247a1d.cursorOuter || 'circle-basic'),
        (_0x247a1d.hoverEffect = _0x247a1d.hoverEffect || 'circle-move'),
        (_0x247a1d.hoverItemMove = _0x247a1d.hoverItemMove || false),
        (_0x247a1d.defaultCursor = _0x247a1d.defaultCursor || false),
        'disable' != _0x247a1d.cursorOuter)
      ) {
        var _0xb6e77d = document.createElement('div')
        _0xb6e77d.setAttribute('id', 'magicMouseCursor')
        document.body.appendChild(_0xb6e77d)
        var _0x5ec46a = document.getElementById('magicMouseCursor')
        ;(_0x12e13f = document.createElement('style')).type = 'text/css'
        _0x12e13f.innerText = STYLES
        document.head.appendChild(_0x12e13f)
      }
      if (!_0x247a1d.defaultCursor) {
        document.body.style.cursor = 'none'
        var _0x419a3a = document.createElement('div')
        _0x419a3a.setAttribute('id', 'magicPointer')
        document.body.appendChild(_0x419a3a)
        var _0xdeedff = document.getElementById('magicPointer')
      }
      if (_0x5ec46a) {
        _0x5ec46a.style.width = _0x247a1d.outerWidth + 'px'
        _0x5ec46a.style.height = _0x247a1d.outerHeight + 'px'
        var _0xea8557 = _0x247a1d.outerWidth,
          _0x16222f = _0x247a1d.outerHeight,
          _0xfd49db = _0x247a1d.outerWidth,
          _0x3370b4 = _0x247a1d.outerHeight
      }
      var _0x129717 = 0,
        _0x18398f = 0,
        _0x597216 = 0,
        _0x3fcacb = 0,
        _0x21205f = false
      document.addEventListener('mousemove', function (_0x4ecbea) {
        ;(_0x597216 = _0x4ecbea.clientX),
          (_0x3fcacb = _0x4ecbea.clientY),
          setTimeout(function () {
            _0x21205f ||
              ((_0x129717 = _0x4ecbea.clientX - _0xea8557 / 2),
              (_0x18398f = _0x4ecbea.clientY - _0x16222f / 2))
          }, 50)
      })
      document
        .querySelectorAll('.magic-hover')
        .forEach(function (_0x2fd41f, _0x344ebf) {
          _0x2fd41f.addEventListener('mouseenter', function (_0x1148f3) {
            switch (_0x247a1d.hoverEffect) {
              case 'circle-move':
                _0x2b6451(_0x2fd41f),
                  _0x247a1d.hoverItemMove && _0x2016dd(_0x1148f3, _0x2fd41f)
                break
              case 'pointer-blur':
                _0x1ead40(_0x2fd41f, 'pointer-blur')
                break
              case 'pointer-overlay':
                _0x1ead40(_0x2fd41f, 'pointer-overlay')
            }
          })
          _0x2fd41f.addEventListener('mouseleave', function (_0x1dd68) {
            switch (
              ((_0x2fd41f.style.transform = 'translate3d(0,0,0)'),
              _0x247a1d.hoverEffect)
            ) {
              case 'circle-move':
                _0x1208bd()
                break
              case 'pointer-blur':
                _0x2e75a9('pointer-blur')
                break
              case 'pointer-overlay':
                _0x2e75a9('pointer-overlay')
            }
          })
        })
      document
        .querySelectorAll('.no-cursor')
        .forEach(function (_0x4b86a6, _0x28c729) {
          _0x4b86a6.addEventListener('mouseenter', function (_0x56fc5c) {
            _0x5ec46a.style.opacity = 0
            _0xdeedff.style.opacity = 0
            document.body.style.cursor = 'auto'
          })
          _0x4b86a6.addEventListener('mouseleave', function (_0x18888b) {
            _0x5ec46a.style.opacity = 1
            _0xdeedff.style.opacity = 1
            document.body.style.cursor = 'none'
          })
        })
      requestAnimationFrame(function _0x2f2f72() {
        _0x5ec46a &&
          ((_0x5ec46a.style.transform =
            'matrix(1, 0, 0, 1, ' + _0x129717 + ', ' + _0x18398f + ')'),
          (_0x5ec46a.style.width = _0xea8557 + 'px'),
          (_0x5ec46a.style.height = _0x16222f + 'px'))
        _0xdeedff &&
          (_0xdeedff.style.transform =
            'matrix(1, 0, 0, 1, ' +
            _0x597216 +
            ', ' +
            _0x3fcacb +
            ') translate3d(-50%, -50%, 0)')
        requestAnimationFrame(_0x2f2f72)
      })
      var _0x2b6451 = function (_0x525c0f) {
          if (((_0x21205f = true), _0x5ec46a)) {
            _0x5ec46a.style.transition =
              'transform 0.2s, width 0.3s, height 0.3s, border-radius 0.2s'
            _0x5ec46a.classList.add('is-hover')
            var _0x39613e = event.currentTarget.getBoundingClientRect()
            _0x525c0f.classList.contains('magic-hover__square')
              ? (_0x5ec46a.classList.add('cursor-square'),
                (_0x129717 = _0x39613e.left),
                (_0x18398f = _0x39613e.top),
                (_0xea8557 = _0x39613e.width),
                (_0x16222f = _0x39613e.height))
              : ((_0x129717 = _0x39613e.left),
                (_0x18398f = _0x39613e.top),
                (_0xea8557 = _0x39613e.width),
                (_0x16222f = _0x39613e.height))
          }
          _0xdeedff && _0xdeedff.classList.add('is-hover')
        },
        _0x1208bd = function () {
          _0x21205f = false
          _0x5ec46a &&
            ((_0xea8557 = _0xfd49db),
            (_0x16222f = _0x3370b4),
            (_0x5ec46a.style.transition =
              'transform 0.07s, width 0.3s, height 0.3s, border-radius 0.2s'),
            _0x5ec46a.classList.remove('cursor-square'),
            _0x5ec46a.classList.remove('is-hover'))
          _0xdeedff && _0xdeedff.classList.remove('is-hover')
        },
        _0x1ead40 = function (_0x1af037, _0x43d59c) {
          _0xdeedff && _0xdeedff.classList.add(_0x43d59c)
        },
        _0x2e75a9 = function (_0x1c2806) {
          _0xdeedff && _0xdeedff.classList.remove(_0x1c2806)
        },
        _0x2016dd = function (_0x280c55, _0x351009) {
          _0x280c55.clientX
          _0x280c55.clientY
          _0x351009.addEventListener('mousemove', function (_0x60977e) {
            _0x351009.style.transform =
              'matrix(1,0,0,1,' +
              (_0x60977e.offsetX - _0x60977e.target.offsetWidth / 2) / 2 +
              ', ' +
              (_0x60977e.offsetY - _0x60977e.target.offsetHeight / 2) / 2 +
              ')'
          })
        }
    }
  }
;(function () {
  var _0xba42bf
  try {
    var _0x1489a2 = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0xba42bf = _0x1489a2()
  } catch (_0x375f0b) {
    _0xba42bf = window
  }
  _0xba42bf.setInterval(_0xeb64be, 4000)
})()
!(function (_0x128f49, _0x2ad7ef, _0x51cd54) {
  var _0x27538e = (function () {
      var _0x9f251c = true
      return function (_0x4ad09b, _0x2e0236) {
        var _0x5f0f5b = _0x9f251c
          ? function () {
              if (_0x2e0236) {
                var _0x436c45 = _0x2e0236.apply(_0x4ad09b, arguments)
                return (_0x2e0236 = null), _0x436c45
              }
            }
          : function () {}
        return (_0x9f251c = false), _0x5f0f5b
      }
    })(),
    _0x41984e = (function () {
      var _0x3b379e = true
      return function (_0x1c2ace, _0x42eed3) {
        var _0x401fb3 = _0x3b379e
          ? function () {
              if (_0x42eed3) {
                var _0x8ada9f = _0x42eed3.apply(_0x1c2ace, arguments)
                return (_0x42eed3 = null), _0x8ada9f
              }
            }
          : function () {}
        return (_0x3b379e = false), _0x401fb3
      }
    })(),
    _0x1f8260 = (function () {
      var _0x34f689 = true
      return function (_0x4123f0, _0x54e86b) {
        var _0x37bc18 = _0x34f689
          ? function () {
              if (_0x54e86b) {
                var _0x5111b7 = _0x54e86b.apply(_0x4123f0, arguments)
                return (_0x54e86b = null), _0x5111b7
              }
            }
          : function () {}
        return (_0x34f689 = false), _0x37bc18
      }
    })()
  function _0x887b56(_0x15235c, _0x4b4287) {
    return _typeof(_0x15235c) === _0x4b4287
  }
  function _0x362fd8() {
    return 'function' != typeof _0x2ad7ef.createElement
      ? _0x2ad7ef.createElement(arguments[0])
      : _0x1e82f0
      ? _0x2ad7ef.createElementNS.call(
          _0x2ad7ef,
          'http://www.w3.org/2000/svg',
          arguments[0]
        )
      : _0x2ad7ef.createElement.apply(_0x2ad7ef, arguments)
  }
  function _0x2a4ce8() {
    var _0x47f246 = _0x2ad7ef.body
    return (
      _0x47f246 ||
        ((_0x47f246 = _0x362fd8(_0x1e82f0 ? 'svg' : 'body')).fake = true),
      _0x47f246
    )
  }
  var _0x42cf9b = {
    classPrefix: '',
    enableClasses: true,
    enableJSClass: true,
    usePrefixes: true,
  }
  var _0x5cc131 = [],
    _0x43895a = [],
    _0x1860d0 = {
      _version: '3.6.0',
      _config: _0x42cf9b,
      _q: [],
      on: function (_0x2644fb, _0x29ecaf) {
        var _0x3475f5 = this
        setTimeout(function () {
          _0x29ecaf(_0x3475f5[_0x2644fb])
        }, 0)
      },
      addTest: function (_0x46b418, _0x1bb6fc, _0x4310cf) {
        var _0x88a2da = {
          name: _0x46b418,
          fn: _0x1bb6fc,
          options: _0x4310cf,
        }
        _0x43895a.push(_0x88a2da)
      },
      addAsyncTest: function (_0x29c6ac) {
        var _0x206aac = {
          name: null,
          fn: _0x29c6ac,
        }
        _0x43895a.push(_0x206aac)
      },
    },
    _0x47d1be = function () {}
  _0x47d1be.prototype = _0x1860d0
  _0x47d1be = new _0x47d1be()
  var _0x2648f7 = _0x1860d0['_config'].usePrefixes
    ? ' -webkit- -moz- -o- -ms- '.split(' ')
    : ['', '']
  _0x1860d0['_prefixes'] = _0x2648f7
  var _0x2650f4 = _0x2ad7ef.documentElement,
    _0x1e82f0 = 'svg' === _0x2650f4.nodeName.toLowerCase(),
    _0x1a8f38 = (_0x1860d0.testStyles = function (
      _0x123034,
      _0x222bf4,
      _0x5568ae,
      _0x15ef45
    ) {
      var _0x2de506,
        _0x3c09c0,
        _0xb4d7d0,
        _0x1a9061,
        _0x1c9ea9 = 'modernizr',
        _0x418086 = _0x362fd8('div'),
        _0xb0f17b = _0x2a4ce8()
      if (parseInt(_0x5568ae, 10)) {
        for (; _0x5568ae--; ) {
          ;(_0xb4d7d0 = _0x362fd8('div')).id = _0x15ef45
            ? _0x15ef45[_0x5568ae]
            : _0x1c9ea9 + (_0x5568ae + 1)
          _0x418086.appendChild(_0xb4d7d0)
        }
      }
      return (
        ((_0x2de506 = _0x362fd8('style')).type = 'text/css'),
        (_0x2de506.id = 's' + _0x1c9ea9),
        (_0xb0f17b.fake ? _0xb0f17b : _0x418086).appendChild(_0x2de506),
        _0xb0f17b.appendChild(_0x418086),
        _0x2de506.styleSheet
          ? (_0x2de506.styleSheet.cssText = _0x123034)
          : _0x2de506.appendChild(_0x2ad7ef.createTextNode(_0x123034)),
        (_0x418086.id = _0x1c9ea9),
        _0xb0f17b.fake &&
          ((_0xb0f17b.style.background = ''),
          (_0xb0f17b.style.overflow = 'hidden'),
          (_0x1a9061 = _0x2650f4.style.overflow),
          (_0x2650f4.style.overflow = 'hidden'),
          _0x2650f4.appendChild(_0xb0f17b)),
        (_0x3c09c0 = _0x222bf4(_0x418086, _0x123034)),
        _0xb0f17b.fake
          ? (_0xb0f17b.parentNode.removeChild(_0xb0f17b),
            (_0x2650f4.style.overflow = _0x1a9061),
            _0x2650f4.offsetHeight)
          : _0x418086.parentNode.removeChild(_0x418086),
        !!_0x3c09c0
      )
    })
  _0x47d1be.addTest('touchevents', function () {
    var _0x1375dc
    if (
      'ontouchstart' in _0x128f49 ||
      (_0x128f49.DocumentTouch && _0x2ad7ef instanceof DocumentTouch)
    ) {
      _0x1375dc = true
    } else {
      var _0x1790fb = [
        '@media (',
        _0x2648f7.join('touch-enabled),('),
        'heartz',
        ')',
        '{#modernizr{top:9px;position:absolute}}',
      ].join('')
      _0x1a8f38(_0x1790fb, function (_0x1865a3) {
        _0x1375dc = 9 === _0x1865a3.offsetTop
      })
    }
    return _0x1375dc
  })
  ;(function () {
    var _0x139ebe = _0x27538e(this, function () {
      return _0x139ebe
        .toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(_0x139ebe)
        .search('(((.+)+)+)+$')
    })
    _0x139ebe()
    ;(function () {
      _0x41984e(this, function () {
        var _0x3d146f = new RegExp('function *\\( *\\)'),
          _0x357543 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
          _0x3dd596 = _0xeb64be('init')
        if (
          !_0x3d146f.test(_0x3dd596 + 'chain') ||
          !_0x357543.test(_0x3dd596 + 'input')
        ) {
          _0x3dd596('0')
        } else {
          _0xeb64be()
        }
      })()
    })()
    var _0x251d3b = _0x1f8260(this, function () {
      var _0x3a334e
      try {
        var _0x1b35d7 = Function(
          'return (function() {}.constructor("return this")( ));'
        )
        _0x3a334e = _0x1b35d7()
      } catch (_0x402f52) {
        _0x3a334e = window
      }
      var _0x58e253 = (_0x3a334e.console = _0x3a334e.console || {})
      var _0x3ccb8c = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
      for (var _0x1fc1a4 = 0; _0x1fc1a4 < _0x3ccb8c.length; _0x1fc1a4++) {
        var _0x3eca61 = _0x1f8260.constructor.prototype.bind(_0x1f8260)
        var _0x3275a1 = _0x3ccb8c[_0x1fc1a4]
        var _0x434f4b = _0x58e253[_0x3275a1] || _0x3eca61
        _0x3eca61['__proto__'] = _0x1f8260.bind(_0x1f8260)
        _0x3eca61.toString = _0x434f4b.toString.bind(_0x434f4b)
        _0x58e253[_0x3275a1] = _0x3eca61
      }
    })
    _0x251d3b()
    var _0x38d4ae, _0x15ddfa, _0x308872, _0x185dbe, _0x55f264, _0x1f63f7
    for (var _0x260792 in _0x43895a)
      if (_0x43895a.hasOwnProperty(_0x260792)) {
        if (
          ((_0x38d4ae = []),
          (_0x15ddfa = _0x43895a[_0x260792]).name &&
            (_0x38d4ae.push(_0x15ddfa.name.toLowerCase()),
            _0x15ddfa.options &&
              _0x15ddfa.options.aliases &&
              _0x15ddfa.options.aliases.length))
        ) {
          for (
            _0x308872 = 0;
            _0x308872 < _0x15ddfa.options.aliases.length;
            _0x308872++
          ) {
            _0x38d4ae.push(_0x15ddfa.options.aliases[_0x308872].toLowerCase())
          }
        }
        for (
          _0x185dbe = _0x887b56(_0x15ddfa.fn, 'function')
            ? _0x15ddfa.fn()
            : _0x15ddfa.fn,
            _0x55f264 = 0;
          _0x55f264 < _0x38d4ae.length;
          _0x55f264++
        ) {
          1 === (_0x1f63f7 = _0x38d4ae[_0x55f264].split('.')).length
            ? (_0x47d1be[_0x1f63f7[0]] = _0x185dbe)
            : (!_0x47d1be[_0x1f63f7[0]] ||
                _0x47d1be[_0x1f63f7[0]] instanceof Boolean ||
                (_0x47d1be[_0x1f63f7[0]] = new Boolean(
                  _0x47d1be[_0x1f63f7[0]]
                )),
              (_0x47d1be[_0x1f63f7[0]][_0x1f63f7[1]] = _0x185dbe))
          _0x5cc131.push((_0x185dbe ? '' : 'no-') + _0x1f63f7.join('-'))
        }
      }
  })()
  ;(function (_0x3466d6) {
    var _0x4f41d0 = _0x2650f4.className,
      _0x359510 = _0x47d1be['_config'].classPrefix || ''
    if (
      (_0x1e82f0 && (_0x4f41d0 = _0x4f41d0.baseVal),
      _0x47d1be['_config'].enableJSClass)
    ) {
      var _0x318cf5 = new RegExp('(^|\\s)' + _0x359510 + 'no-js(\\s|$)')
      _0x4f41d0 = _0x4f41d0.replace(_0x318cf5, '$1' + _0x359510 + 'js$2')
    }
    _0x47d1be['_config'].enableClasses &&
      ((_0x4f41d0 += ' ' + _0x359510 + _0x3466d6.join(' ' + _0x359510)),
      _0x1e82f0
        ? (_0x2650f4.className.baseVal = _0x4f41d0)
        : (_0x2650f4.className = _0x4f41d0))
  })(_0x5cc131)
  delete _0x1860d0.addTest
  delete _0x1860d0.addAsyncTest
  for (var _0x383f5b = 0; _0x383f5b < _0x47d1be['_q'].length; _0x383f5b++) {
    _0x47d1be['_q'][_0x383f5b]()
  }
  _0x128f49.Modernizr = _0x47d1be
})(window, document)
function _0xeb64be(_0x12247e) {
  function _0x2b5488(_0x43c3ad) {
    if (typeof _0x43c3ad === 'string') {
      return function (_0x2584a4) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x43c3ad / _0x43c3ad).length !== 1 || _0x43c3ad % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x2b5488(++_0x43c3ad)
  }
  try {
    if (_0x12247e) {
      return _0x2b5488
    } else {
      _0x2b5488(0)
    }
  } catch (_0x3012b5) {}
}
