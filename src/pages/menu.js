export function menuPageLoad() {
  const content = document.getElementById('content')
  content.className = 'content' 
  content.innerHTML = ""

  const header = document.createElement('h1')
  header.innerHTML = "Our Menu"
  content.appendChild(header)

  const item1 = document.createElement('h2')
  item1.innerHTML = 'Lorem'
  content.appendChild(item1)

  const desc1 = document.createElement('p')
  desc1.innerHTML = 'Lorem ipsum dolor - 90'
  content.appendChild(desc1)

  const item2 = document.createElement('h2')
  item2.innerHTML = 'Lorem'
  content.appendChild(item2)

  const desc2 = document.createElement('p')
  desc2.innerHTML = 'Lorem ipsum dolor - 80'
  content.appendChild(desc2)

  const item3 = document.createElement('h2')
  item3.innerHTML = 'Lorem'
  content.appendChild(item3)

  const desc3 = document.createElement('p')
  desc3.innerHTML = 'Lorem ipsum dolor - 100'
  content.appendChild(desc3)

  const item4 = document.createElement('h2')
  item4.innerHTML = 'Lorem'
  content.appendChild(item4)

  const desc4 = document.createElement('p')
  desc4.innerHTML = 'Lorem ipsum dolor - 75'
  content.appendChild(desc4)

  const item5 = document.createElement('h2')
  item5.innerHTML = 'Lorem'
  content.appendChild(item5)

  const desc5 = document.createElement('p')
  desc5.innerHTML = 'Lorem ipsum dolor - 85'
  content.appendChild(desc5)

  const item6 = document.createElement('h2')
  item6.innerHTML = 'Lorem'
  content.appendChild(item6)

  const desc6 = document.createElement('p')
  desc6.innerHTML = 'Lorem ipsum dolor - 90'
  content.appendChild(desc6)
}