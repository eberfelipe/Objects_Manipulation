// Criação do objeto endereco
const endereco = {
    rua: "Rua dos Bobos",
    numero: 0,
    complemento: "Apartamento 1",
    bairro: "Centro",
    cep: "12345-678",
    cidade: "Cidade Exemplo",
    estado: "Estado Exemplo",
    pais: "País Exemplo"
};

// Criação do objeto usuario, incluindo o objeto endereco
const usuario = {
    nome: "João Silva",
    email: "joao.silva@example.com",
    telefone: "(12) 3456-7890",
    data_nascimento: "1990-01-01",
    endereco: endereco // Atribuindo o objeto endereco à propriedade endereco do objeto usuario
};

// Exibindo os objetos no console para verificação
console.log("Endereco:", endereco);
console.log("Usuario:", usuario);

