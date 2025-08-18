 export function homePageLoad (){
  const content = document.getElementById("content");
  content.className = "content"
  content.innerHTML = ""

  const header = document.createElement('h1')
  header.innerHTML = "Welcome to Our Restaurant"
  content.appendChild(header)

  const para1 = document.createElement('p')
  para1.innerHTML = 'lorem ipsum dolor sit amet'
  content.appendChild(para1)

  const sub1 = document.createElement('h2')
  sub1.innerHTML = 'lorem'
  content.appendChild(sub1)

  const para2 = document.createElement('p')
  para2.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consequatur possimus placeat architecto? Provident, deserunt tenetur aliquam autem eaque ducimus assumenda nesciunt, impedit accusamus laboriosam voluptate itaque blanditiis beatae. Nisi.'
  content.appendChild(para2)
}