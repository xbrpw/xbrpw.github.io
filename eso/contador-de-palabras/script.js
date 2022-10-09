function countWords(){
  var text = document.querySelector('textarea').value
  var div = document.getElementById('output')

  if (text !== '') {
  
    div.innerHTML = ''

    var dictionary = {}

    text.replace(/\S+/g,function(word){
      word = word.split('.')[0]
      word = word.split(',')[0]
      word = word.toLowerCase()
      if (dictionary[word] == undefined){
        dictionary[word] = 1
      } else {
        dictionary[word]++
      }
    })

    var message = '<table data-theme="zebra dark"><thead><tr><th>Palabra<th>Contadas</thead></tr><tbody>'

    for (word in dictionary) {
      message += '<tr><td>' + word + '<td>' + dictionary[word] + '</tr>'
    }

    message += '</tbody></table>'

    div.innerHTML = message

    $('table').DataTable({
      "order":[[1,'desc']]
    })

  } else {
  
    notification('Please enter at least one word', 'error', 5)

  }

}

document.querySelector('[type=button]').addEventListener('click', countWords)