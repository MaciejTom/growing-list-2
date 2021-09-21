const listEl = document.createElement("li");
const list = document.createElement("ul");
const btn = document.createElement("button");

document.body.appendChild(btn);
btn.innerText = "kliknij"

document.body.appendChild(list);


let elements = 1;

addList = () => {    
    
    for (i = 0; i < 10; i++) {
              
        const listEl = document.createElement("li");
        listEl.innerText = `element ${[elements]}` 
        document.body.appendChild(listEl);
        listEl.style.fontSize = `${elements++}px`
       
    }
}

btn.addEventListener("click", addList);