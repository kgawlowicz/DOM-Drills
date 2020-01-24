document.addEventListener("DOMContentLoaded", function(){
  console.log('DOM fully loaded and parsed');

  let container = document.createElement("div");
  container.className = "header-container";
  document.body.appendChild(container);
  
  let h1 = document.createElement("h1");
  h1.className = "H1";
  let h1Text = document.createTextNode("This is a H1");
  h1.appendChild(h1Text);
  container.appendChild(h1);
  
  let h2 = document.createElement("h2");
  h2.className = "H2"
  let h2Text = document.createTextNode("This is a H2");
  h2.appendChild(h2Text);
  container.appendChild(h2);
  
  let h3 = document.createElement("h3");
  h3.className = "H3"
  let h3Text = document.createTextNode("This is a H3");
  h3.appendChild(h3Text);
  container.appendChild(h3);
  
  let h4 = document.createElement("h4");
  h4.className = "H4"
  let h4Text = document.createTextNode("This is a H4");
  h4.appendChild(h4Text);
  container.appendChild(h4);
  
  let h5 = document.createElement("h5");
  h5.className = "H5"
  let h5Text = document.createTextNode("This is a H5");
  h5.appendChild(h5Text);
  container.appendChild(h5);
  
  let h6 = document.createElement("h6");
  h6.className = "H6"
  let h6Text = document.createTextNode("This is a H6");
  h6.appendChild(h6Text);
  container.appendChild(h6);
  
  let headers = [h1,h2,h3,h4,h5,h6];
  let colors = ["Blue","Green","Red","Orange","Violet","Indigo","Yellow","Black"];
  headers.forEach(function(h){
      h.addEventListener("dblclick", function() {
          let randomNum = Math.floor((Math.random() * 7) + 1);
          let randomColor = colors[randomNum];
          h.style.color = randomColor;
      });
  })
  
  let i = 1;
  let button = document.getElementsByClassName("myButton");
  //getElementsByClassName will create an array, so have to use the brackets below
  button[0].addEventListener('click', function(){
    insList()
    i++
  });
  
  function insList(){
      let li = document.createElement("li");
      let textLi = document.createTextNode("This is list item " +i);
      li.appendChild(textLi);
      document.body.appendChild(li);

      //add random text color when list is clicked
      li.addEventListener('click', function(){
        let randomNum = Math.floor((Math.random() * 7) + 1);
        let randomColor = colors[randomNum];
        li.style.color = randomColor;
        });

        li.addEventListener('dblclick', function(e){
            li.remove();
        });
    };
});