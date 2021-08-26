document.querySelector('.koodausDiv').addEventListener('', e =>{
  e.preventDefault();
  console.log(document.querySelector('#nimi').value);

  document.querySelector('.ilmoitus').innerHTML = "täytä kaikki kentät" + document.querySelector('#lisää tieto').value + "</b>";

  setTimeout(() => document.querySelector('.ilmoitus').innerHTML='', 3000);
})

document.querySelector('.merkinta').addEventListener('click', e =>{
  e.preventDefault();
  console.log("nappi toimii");
  if(document.querySelector('#teht_a').checked){
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" checked>HTML on nyt tehty</li>';
  }
  else{
     document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a">Tehtävä A</li>';
  }

  if(document.querySelector('#teht_b').checked){
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" checked>CSS on nyt tehty</li>';
  }
  else{
     document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b">Tehtävä B</li>';
  }

  if(document.querySelector('#teht_c').checked){
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_c" checked>JavaScript on nyt tehty</li>';
  }
  else{
     document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_c">Tehtävä C</li>';
  }
  
  if(document.querySelector('#teht_d').checked){
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_d" checked>CI/CD on nyt tehty</li>';
  }
  else{
     document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_d">Tehtävä C</li>';
  }
});