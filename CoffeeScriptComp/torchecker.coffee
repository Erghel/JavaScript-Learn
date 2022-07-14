# TODO: 
# - добавить проверку checkbox и только после этого включать Tor Proxy
# - на выключение checkbox возвращать текущие настройки Proxy 

###
    @author: Erghel
    @project: Simple-Tor-connection-checker
###

checktor = ->
  newURL = 'https://check.torproject.org/'
  window.open newURL, 'blank_'
  return

if window.location.host == 'check.torproject.org'
  onion = document.getElementsByTagName('h1')
  if onion[0].classList.contains('on')
    #     let proxySettings = {
    #         proxyType: "manual",
    #         http: "http://127.0.0.1:9050",
    #         socksVersion: 5
    #        };
    #       browser.proxy.settings.set({value: proxySettings});
    #  }
    console.log 1
  else
    console.log 2
document.getElementById('gt').addEventListener 'click', checktor
