roskomnadzorSosatb = ->
  [
    'container'
    'wrapper'
  ].forEach (id) ->
    document.getElementById('age-verification-' + id).outerHTML = ''
    return
  return
