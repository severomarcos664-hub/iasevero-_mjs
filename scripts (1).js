// IASevero — scripts principais
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click', function(e){
    var id = a.getAttribute('href').slice(1);
    var el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  });
});

// Form mailto
var form = document.getElementById('form-cadastro');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var to = form.getAttribute('data-mailto') || 'admin@iasevero.com';
    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var projeto = document.getElementById('projeto').value.trim();
    var desc = document.getElementById('descricao').value.trim();
    var assunto = encodeURIComponent('Cadastro IASevero — ' + projeto);
    var corpo = encodeURIComponent(
      'Nome: ' + nome + '\n' +
      'E-mail: ' + email + '\n' +
      'Projeto: ' + projeto + '\n' +
      'Descrição:\n' + desc
    );
    window.location.href = 'mailto:' + to + '?subject=' + assunto + '&body=' + corpo;
  });
}
