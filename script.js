const formCep      = document.getElementById('formCep');
const inputCep     = document.getElementById('inputCep');
const divResultCep = document.getElementById('resultCep');

formCep.addEventListener('submit', async function (event) {
  event.preventDefault();

  const cep = inputCep.value.replace(/\D/g, '');

  if (cep.length !== 8) {
    alert('Digite um CEP válido.');
    divResultCep.innerHTML = '';
    return;
  }

  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data     = await response.json();

  if (data.erro) {
    alert('CEP não encontrado.');
    divResultCep.innerHTML = '';
    return;
  }

  const address = `
    <p><strong>CEP:</strong> ${data.cep}</p>
    <p><strong>Logradouro:</strong> ${data.logradouro}</p>
    <p><strong>Bairro:</strong> ${data.bairro}</p>
    <p><strong>Cidade:</strong> ${data.localidade}</p>
    <p><strong>Estado:</strong> ${data.uf}</p>
  `;

  divResultCep.innerHTML = address;
  divResultCep.classList.remove('hidden');
});
