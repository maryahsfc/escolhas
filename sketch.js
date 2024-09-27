let suaidade;
let corpo;
let gênero;
let titulo;
let ação;
let terror;
let comedia;
let filmes={
  menor10:{
  comedia:"minions",
  ação:"os incriveis",
  terror:"a noiva cadaver" 
 },
  entre10e14:{
    comedia:"divertidamente",
    ação :"maze runer",
    terror:"coraline"
  },
  entre14e16:{
  comedia:"as branquelas",
  ação:"vingadores",
  terror:"panico"
},
    
    entre16e18:{
      comedia:"gente grande",
        ação:"john wick",
          terror:"invocação do mal"
    },
      maior18:{
        comedia:"todo mundo em panico",
          ação:"até o hultimo homem",
            terror:"jogos mortais",
      }
};

let botao

function setup() {
  createCanvas(850, 400).position(100,100);
  título = "Bungee Shade";
  corpo = "Amatic SC";
  gênero = "Bebas Neue";
  createSpan("qual a sua idade?👾").position(580,530).addClass("esconde");
  suaidade = createInput("").position(590,585);
  ação = createCheckbox("você gosta de filmes de ação?😎").position(100,600).addClass("esconde");
  terror = createCheckbox("você gosta de filmes de terror?🖤").position(100,650).addClass("esconde");
  comedia = createCheckbox("você gosta de filmes de comédia?🤣").position(100,700).addClass("esconde");
  
  botao = createButton("aperta meu botao😳").position(width/2,520);
  botao.mousePressed(bota);
  botao.addClass("botao");
}

function bota(){
  selectAll('.esconde').forEach((el) => el.removeClass('esconde'));
  botao.hide();
}

function draw() {
  background("rgb(255,0,205)");
  let idade = parseInt(suaidade.value());
  let checkação =ação.checked();
  let checkterror =terror.checked();
 let checkcomedia =comedia.checked();
  let jogo = "Insira suas preferencias";
  if (suaidade.value() !== ""){
  filme = mostrafilme(idade, checkação, checkterror, checkcomédia);
  }
 fill("purple");
  textAlign(CENTER,CENTER);
  textSize(30);
  text("melhor indicador de filmes 2024",width/2,30);
  textFont(corpo)
  
  fill("black");
  stroke("purple");
  textAlign(CENTER,CENTER);
  textSize(40);
  text(jogo, width/2,height/2);
  textFont(título);
}
    function mostrafilme (idade, checkação, checkterror, checkcomédia){
      if(isNaN(idade)){
      return "Idade Invalida"
      }
      if (idade<5){
        return "sai daqui,você é uma criança"
      
      }else
        if (idade>120){
          return "você é o Eduard de crepusculo?"
        }
      if (idade>= 5 && idade < 10){
        if (checkação){
          return filmes["menor10"]["ação"];
        }
        if (checkterror){
          return filmes["menor10"]["terror"];
        }
        if (checkcomedia){
          return filmes["menor10"]["comedia"];
        }
      }
      
      
    
else if (idade>= 10 && idade < 14){
        if (checkação){
          return filmes["entre10e14"]["ação"];
        }
        if (checkterror){
          return filmes["entre10e14"]["terror"];
        }
        if (checkcomedia){
          return filmes["entre10e14"]["comedia"];
        }
      }
    else  if (idade>= 14 && idade < 16){
        if (checkação){
          return filmes["entre14e16"]["ação"];
        }
        if (checkterror){
          return filmes["entre14e16"]["terror"];
        }
        if (checkcomedia){
          return filmes["entre14e16"]["comedia"];
        }
      }
     else if (idade>= 16 && idade < 18){
        if (checkação){
          return filmes["entre16e18"]["ação"];
        }
        if (checkterror){
          return filmes["entre16e18"]["terror"];
        }
        if (checkcomedia){
          return filmes["entre16e18"]["comedia"];
        }
      }
        else if (idade>=  18){
        if (checkação){
          return filmes["maior18"]["ação"];
        }18
        if (checkterror){
          return filmes["maior18"]["terror"];
        }
        if (checkcomedia){
          return filmes["maior18"]["comedia"];
    }
      } return "coloca alguma coisa";
      
    }