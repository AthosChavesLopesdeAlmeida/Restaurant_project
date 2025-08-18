export function aboutPageLoad() {
  const content = document.getElementById("content");
  content.className = "content"
  content.innerHTML = ""

  const header = document.createElement('h1');
  header.innerHTML = "About Us";
  content.appendChild(header)

  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'lorem ipsum dolor sit amet consectetur adipisicing elit. At consequatur possimus placeat architecto? Provident, deserunt tenetur aliquam autem eaque ducimus assumenda nesciunt, impedit accusamus laboriosam voluptate itaque blanditiis beatae. Nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequatur.';
  content.appendChild(paragraph)
}