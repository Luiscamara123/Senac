/*JavaScript
    No arquivo script.js:
        1. Capturar todos os elementos da interface com document.querySelector e document.querySelectorAll
        2. Criar um objeto contendo todos os preços
           Exemplo:
               const precos = {
                   prato: { nomePrato: 10.00, ... },
                   bebida: { nomeBebida: 10.00, ... },
                   adicionais: { nomeAdicional: 10.00, ... }
               }

        3. Criar a função calcular(), que deve:
            Validar se o prato foi selecionado
            Validar se a bebida foi selecionada
            Se houver erro, mostrar mensagem na div erro e não continuar
            Somar:
                O valor do prato escolhido
                O valor da bebida
                Todos os adicionais marcados
            Exibir o resumo dentro da section #resultado
            Esconder o formulário
            Criar o botão "Novo Pedido"

        4. Criar a função resetar(), que:
            Deve limpar o formulário
            Restaurar selects e checkboxes
            Esconder o resultado
            Mostrar novamente o formulário

        5. Adicionar os eventos com addEventListener:
            Botão calcular chama calcular()
            Botão novo pedido chama resetar()

5) Regras adicionais
    Não permitir calcular sem prato ou bebida escolhidos
    Mostrar erros na tela apenas quando necessário
    O resultado deve aparecer somente depois que o cálculo for concluído
    Não usar estilos inline */
