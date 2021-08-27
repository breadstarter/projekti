document.querySelector('.merkinta').addEventListener('click', e =>{
  e.preventDefault();
  
if(document.querySelector('#nimi').value==""||document.querySelector('#tieto').value==""){ 

 document.querySelector('.ilmoitus').innerHTML = "täytä kaikki kentät" 

 setTimeout(() => document.querySelector('.ilmoitus').innerHTML='', 3000);
}
else {
  document.querySelector('.ilmoitus').innerHTML= document.querySelector('#nimi').value + " " + document.querySelector('#tieto').value;

}
});

document.querySelector('.merkkaa').addEventListener('click', e =>{
  e.preventDefault();
  console.log("nappi toimii");
  if(document.querySelector('#teht_a').checked){
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" checked>HTML on nyt tehty</li>';
  }
  else{
     document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a">HTML</li>';
  }

  if(document.querySelector('#teht_b').checked){
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" checked>CSS on nyt tehty</li>';
  }
  else{
     document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b">CSS</li>';
  }

  if(document.querySelector('#teht_c').checked){
    document.querySelector('.boksit').children[2].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_c" checked>JavaScript on nyt tehty</li>';
  }
  else{
     document.querySelector('.boksit').children[2].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_c">JavaScript</li>';
  }
  
  if(document.querySelector('#teht_d').checked){
    document.querySelector('.boksit').children[3].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_d" checked>CI/CD on nyt tehty</li>';
  }
  else{
     document.querySelector('.boksit').children[3].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_d">CI/CD</li>';
  }
});
