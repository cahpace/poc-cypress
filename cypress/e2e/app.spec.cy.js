//cenario; acima do cenario pode ser descrito tambem a feature

//pode colocar dentro do mesmo describe todos os testes que testam a mesma funcionalidade

//cenarios dessa pagina inicial: 
/*
*testar se carregou
*testar se dá erro ao tentar adicionar com os campos vazios
*testar se cria o elemento adicionado
*/
//criar ja uma classe com os selecionando os elementos
class RegisterForm {
  elements = {
    nameItemInput: () => cy.get('#name_item'),
    quantityItemInput: () => cy.get('#quantity_item'),
    addBtn: () => cy.get('#add_item')
  }
}

const registerForm = new RegisterForm();

describe('cenario, pode-se dividir em cenarios com erros e cenarios sem erros', () => {
  it('load home page', () => {
    cy.visit('/')
  });
  it('should show the title', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'MEU FORM');
  });
  it('should add an item correctly', () => {
    cy.get('#name_item').type('fermento');
    cy.get('#quantity_item').type('2');
    cy.get('#add_item').click();
    cy.get('div', { timeout: 1 }).should('be.visible');  // Aguarda até 10 segundos se necessário
    //cy.get('.item').should('contain.text', 'fermento');
  })
})
