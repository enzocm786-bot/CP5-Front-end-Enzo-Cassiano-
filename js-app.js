const preferenciaSistema = window.matchMedia('(prefers-color-scheme: dark)');

function aplicarTema(tema) {

  const escuro = tema === 'dark' || (tema === 'system' && preferenciaSistema.matches);
  document.documentElement.classList.toggle('dark', escuro);
}

const temaSalvo = localStorage.getItem('tema') || 'system';
aplicarTema(temaSalvo);

document.querySelectorAll('input[name="tema"]').forEach((opcao) => {
  opcao.checked = opcao.value === temaSalvo;

  opcao.addEventListener('change', () => {
    localStorage.setItem('tema', opcao.value); 
    aplicarTema(opcao.value);
  });
});

preferenciaSistema.addEventListener('change', () => {
  if ((localStorage.getItem('tema') || 'system') === 'system') {
    aplicarTema('system');
  }
});
const sidebar = document.getElementById('sidebar');

document.getElementById('abrir-menu').addEventListener('click', () => {
  sidebar.classList.remove('-translate-x-full'); 
});

document.getElementById('fechar-menu').addEventListener('click', () => {
  sidebar.classList.add('-translate-x-full'); 
});

const botaoUsuario = document.getElementById('btn-usuario');
const menuUsuario = document.getElementById('menu-usuario');

botaoUsuario.addEventListener('click', (evento) => {
  evento.stopPropagation(); 
  menuUsuario.classList.toggle('hidden');
});

document.addEventListener('click', () => {
  menuUsuario.classList.add('hidden');
});

document.getElementById('busca').addEventListener('input', (evento) => {
  const texto = evento.target.value.toLowerCase();

  document.querySelectorAll('.projeto').forEach((card) => {
    const achou = card.textContent.toLowerCase().includes(texto);
    card.classList.toggle('hidden', !achou);
  });
});

const modal = document.getElementById('modal');
const formulario = document.getElementById('formulario');
const botaoSalvar = document.getElementById('salvar');

function abrirModal() {
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function fecharModal() {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  limparFormulario();
}

document.getElementById('abrir-modal').addEventListener('click', abrirModal);
document.getElementById('fechar-modal').addEventListener('click', fecharModal);
document.getElementById('cancelar').addEventListener('click', fecharModal);

let jaTentouEnviar = false;

function validar(id, estaCerto, mensagem) {
  const campo = document.getElementById(id);
  const aviso = document.getElementById('erro-' + id);

  campo.classList.toggle('sucesso', estaCerto);
  campo.classList.toggle('erro', !estaCerto);

  aviso.textContent = mensagem;
  aviso.classList.toggle('hidden', estaCerto);

  return estaCerto;
}

function validarPrioridade() {
  const escolhida = formulario.querySelector('input[name="prioridade"]:checked');
  const aviso = document.getElementById('erro-prioridade');

  aviso.textContent = 'Escolha uma prioridade.';
  aviso.classList.toggle('hidden', escolhida !== null);

  return escolhida !== null;
}

function validarTudo() {
  const hoje = new Date().toISOString().slice(0, 10); 

  const resultados = [
    validar('nome', document.getElementById('nome').value.trim().length >= 3, 'Digite pelo menos 3 letras.'),
    validar('responsavel', document.getElementById('responsavel').value !== '', 'Escolha um responsável.'),
    validar('categoria', document.getElementById('categoria').value !== '', 'Escolha uma categoria.'),
    validarPrioridade(),
    validar('prazo', document.getElementById('prazo').value >= hoje && document.getElementById('prazo').value !== '', 'Escolha uma data de hoje em diante.'),
    validar('descricao', document.getElementById('descricao').value.trim().length >= 20, 'Escreva pelo menos 20 caracteres.'),
  ];

  return resultados.every((certo) => certo);
}

function limparFormulario() {
  formulario.reset();
  jaTentouEnviar = false;

  document.querySelectorAll('.campo').forEach((campo) => campo.classList.remove('erro', 'sucesso'));
  formulario.querySelectorAll('[id^="erro-"]').forEach((aviso) => aviso.classList.add('hidden'));
  document.getElementById('sucesso').classList.add('hidden');

  botaoSalvar.disabled = false;
  botaoSalvar.textContent = 'Salvar projeto';
}

formulario.addEventListener('input', () => {
  if (jaTentouEnviar) validarTudo();
});

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); 
  jaTentouEnviar = true;

  if (!validarTudo()) return; 

  botaoSalvar.disabled = true;
  botaoSalvar.textContent = 'Salvando...';
  document.getElementById('sucesso').classList.remove('hidden');

  setTimeout(fecharModal, 1500);
});
