function create() {
   let main = document.createElement('main');
   let div = document.createElement('div');
   let p = document.createElement('p');

   p.textContent = "First";

   main.appendChild(div);
   div.appendChild(p);

   document.body.appendChild(main);
}