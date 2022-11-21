
class Aluno {
    nome;
    matricula;
    nota1;
    nota2; 
    nota3;
  
     constructor(nome, matricula, nota1, nota2, nota3) {  
       this.nome = nome;  
       this.matricula = matricula; 
       this.nota1 = nota1;  
       this.nota2 = nota2;  
       this.nota3 = nota3;
       this.arrayAlunos = [];
    }
  
    // Este método serve para adicionar os dados do aluno no array
    addAluno() {
        //alert("Salvando os dados do aluno!");
        let aluno = this.lerDados();
        // o valor da variável "aluno" foi alocado dentro do "arrayAlunos"
        this.arrayAlunos.push(aluno);
        
    }

    salvandoAluno() {
        // jogando os dados digitados dentro da variável aluno
        let aluno = this.lerDados();
        // chamando o método "addAluno" para jogar o valor da variável "aluno" dentro
        // do método "addAluno" continua no método "addAluno" =>>
        this.addAluno(aluno);
        //console.log(this.arrayAlunos);
        this.listTabelas();
        this.cancelar();
    }
    
    // Este método está lendo e retornando o valor dos dados digitados nos campos da tela
    lerDados() {
        let arrayAluno = {}
        aluno.nome = document.getElementById('nome').value;
        aluno.matricula = document.getElementById('matricula').value;
        aluno.nota1 = parseFloat(document.getElementById('nota1').value);
        aluno.nota2 = parseFloat(document.getElementById('nota2').value);
        aluno.nota3 = parseFloat(document.getElementById('nota3').value);

        arrayAluno.nome = aluno.nome;
        arrayAluno.matricula = aluno.matricula;
        arrayAluno.nota1 = aluno.nota1;
        arrayAluno.nota2 = aluno.nota2;
        arrayAluno.nota3 = aluno.nota3;
        arrayAluno.media = aluno.calculaMedia();
    
        return arrayAluno;
    }

    // Neste método é criado um "for" para percorrer os elementos do "arrayAlunos"...
    // criando a linha e suas colunas
    listTabelas() {
        // pegando o id da tabela que será criada e jogando numa variável
        let criandoTabela = document.getElementById('tabelas');
        //
        criandoTabela.innerText = '';
        // Fazendo for para criar linha e adicionar colunas
        for(let i = 0; i < this.arrayAlunos.length; i++) {
            // usando a função "insertRow" que basicamente cria uma linha dentro da tabel
            let tr = criandoTabela.insertRow();

            // agora vou criar as colunas e associalas a cada atributo do aluno
            let td_nome = tr.insertCell();
            let td_matricula = tr.insertCell();
            let td_nota1 = tr.insertCell();
            let td_nota2 = tr.insertCell();
            let td_nota3 = tr.insertCell();
            let td_media = tr.insertCell();
            let td_excluir = tr.insertCell();

            td_nome.innerText = this.arrayAlunos[i].nome;
            td_matricula.innerText = this.arrayAlunos[i].matricula;
            td_nota1.innerText = this.arrayAlunos[i].nota1;
            td_nota2.innerText = this.arrayAlunos[i].nota2;
            td_nota3.innerText = this.arrayAlunos[i].nota3;
            td_media.innerText = this.arrayAlunos[i].media;
            //tdExcluir.innerText = this.arrayAlunos[i];

             //Criar o elemento para imagem da lixeira e executar o delete;

             let imgExcluirAluno = document.createElement('img');
             imgExcluirAluno.src = 'images/lixeira.svg';
             // Função "setAttribute('evento', ação) - " 
             imgExcluirAluno.setAttribute("onclick", "aluno.excluir("+ this.arrayAlunos[i].matricula +")");
             //Adiciona a imagem dentro do 'td_excluir' =>> <td><img></td>;
             td_excluir.appendChild(imgExcluirAluno);

        }
    }


    cancelar() {
        aluno.nome = document.getElementById('nome').value = '';
        aluno.matricula = document.getElementById('matricula').value = '';
        aluno.nota1 = document.getElementById('nota1').value = '';
        aluno.nota2 = document.getElementById('nota2').value = '';
        aluno.nota3 = document.getElementById('nota3').value = '';
    }

    excluir(matricula) {
        let tbody = document.getElementById('tabelas');
        
        for (let i = 0; i < this.arrayAlunos.length; i++) {
            if(this.arrayAlunos[i].matricula == matricula) {
                this.arrayAlunos.splice(i, 1);
                tbody.deleteRow(i);
            }
        }
        console.log(this.arrayAlunos);
    }

    exibeInfo() {
    return `Aluno: ${this.nome} - mat: ${this.matricula}
    Notas: N1: ${this.nota1} - N2: ${this.nota2} - N3: ${this.nota3}
    Média:${this.calculaMedia()}`;
    }
  
    calculaMedia() { 
    return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
    }
  
  }

  var aluno = new Aluno();