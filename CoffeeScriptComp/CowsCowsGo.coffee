location = document.getElementsByClassName('js-search-filters search-filters')[0]
Query = document.getElementById('search_form_input').value
link = document.createElement('a')
link.setAttribute 'href', 'https://swisscows.com/web?culture=en&query=' + Query
link.setAttribute 'target', '_blank'
link.setAttribute 'rel', 'noopener nofollow noreferrer'
link.innerHTML = 'Swisscows'
location.appendChild link
