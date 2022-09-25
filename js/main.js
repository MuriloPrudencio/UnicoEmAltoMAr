import Countdown from "./countdown.js";

//DESING
$(document).ready(function() {
    //função para adicionar e remover conteudo com evento hover
    $(".recepcao").mouseover(function() {
        $(".recepcao-img").addClass("none");
        $( ".recepcao-text" ).html( "No seu centro, uma praça e um bar que serve café expresso, doces feitos na hora e o autêntico gelato, é o lugar perfeito para fazer uma pausa." );
    });
    $(".recepcao").mouseout(function() {
        $(".recepcao-img").removeClass("none");
        $( ".recepcao-text" ).html( "RECEPÇÃO" );
    });

    $(".catalano").mouseover(function() {
        $(".catalano-img").addClass("none");
        $( ".catalano-text" ).html( "A piscina com vistas fantásticas, de onde pode realmente esquecer todos os problemas do mundo." );
    });
    $(".catalano").mouseout(function() {
        $(".catalano-img").removeClass("none");
        $( ".catalano-text" ).html( "CATALANO" );
    });

    $(".cabines").mouseover(function() {
        $(".cabines-img").addClass("none");
        $( ".cabines-text" ).html( "Todos nós temos uma ideia própria de conforto. Desfrute da vista de uma estilosa cabine com janela panorâmica vedada ou até uma suíte com varanda privativa." );
    });
    $(".cabines").mouseout(function() {
        $(".cabines-img").removeClass("none");
        $( ".cabines-text" ).html( "CABINES" );
    });

    $(".magrome").mouseover(function() {
        $(".magrome-img").addClass("none");
        $( ".magrome-text" ).html( "4 espaços de piscinas e jacuzzis, incluíndo uma área totalmente coberta." );
    });
    $(".magrome").mouseout(function() {
        $(".magrome-img").removeClass("none");
        $( ".magrome-text" ).html( "AQUA PARK E IL TROPICI" );
    });

    $(".spa").mouseover(function() {
        $(".spa-img").addClass("none");
        $( ".spa-text" ).html( "O MSC Aurea Spa é um luxuoso spa balinês que oferece tratamentos de relaxamento para revitalizar seu corpo e alma." );
    });
    $(".spa").mouseout(function() {
        $(".spa-img").removeClass("none");
        $( ".spa-text" ).html( "MSC AUREA SPA" );
    });

    $(".academia").mouseover(function() {
        $(".academia-img").addClass("none");
        $( ".academia-text" ).html( "Equipada com aparelhos de última gerão Technogym, a academia do MSC Preziosa oferece uma grande variedade de cursos de fitness e de programas de treinamento." );
    });
    $(".academia").mouseout(function() {
        $(".academia-img").removeClass("none");
        $( ".academia-text" ).html( "ACADEMIA" );
    });
});    

//ATRAÇÕES
$(document).ready(function() {
    //função para adicionar e remover conteudo com evento hover
    $(".teatro").mouseover(function() {
        $(".teatro-img").addClass("none");
        $( ".teatro-text" ).html( "Esse incrível teatro com tecnologia de ponta é o local ideal para aproveitar shows ao estilo Broadway, com uma programação variada que oferece entretenimento todas as noites de seu cruzeiro." );
    });
    $(".teatro").mouseout(function() {
        $(".teatro-img").removeClass("none");
        $( ".teatro-text" ).html( "TEATRO I'AVAGUARDIA" );
    });

    $(".cassino").mouseover(function() {
        $(".cassino-img").addClass("none");
        $( ".cassino-text" ).html( "Aberto até altas horas durante a navegação em alto mar oferecendo toda a variedade que pode ser encontrada em terra." );
    });
    $(".cassino").mouseout(function() {
        $(".cassino-img").removeClass("none");
        $( ".cassino-text" ).html( "CASSINO DELLE PALME" );
    });

    $(".f1").mouseover(function() {
        $(".f1-img").addClass("none");
        $( ".f1-text" ).html( "O simulador de F1 permite passar uns momentos de divertimento com muita adrenalina e emoção" );
    });
    $(".f1").mouseout(function() {
        $(".f1-img").removeClass("none");
        $( ".f1-text" ).html( "MSC FORMULA RACER" );
    });

    $(".cinema").mouseover(function() {
        $(".cinema-img").addClass("none");
        $( ".cinema-text" ).html( "Além da imagem realista e divertida do cinema 3D traz muitas sensações, como a cadeira que se movimenta, o vento no rosto e até água que espirra, dependendo do momento do filme." );
    });
    $(".cinema").mouseout(function() {
        $(".cinema-img").removeClass("none");
        $( ".cinema-text" ).html( "CINEMA 4D" );
    });

    $(".teen").mouseover(function() {
        $(".teen-img").addClass("none");
        $( ".teen-text" ).html( "O MSC Fantasia oferece Teens CLUBS, para idades entre 12 a 14 anos e 15 a 17 anos." );
    });
    $(".teen").mouseout(function() {
        $(".teen-img").removeClass("none");
        $( ".teen-text" ).html( "GRAFFITI'S TEENS CLUB" );
    });

    $(".baby").mouseover(function() {
        $(".baby-img").addClass("none");
        $( ".baby-text" ).html( "Equipada com aparelhos de última gerão Technogym, a academia do MSC Preziosa oferece uma grande variedade de cursos de fitness e de programas de treinamento." );
    });
    $(".baby").mouseout(function() {
        $(".baby-img").removeClass("none");
        $( ".baby-text" ).html( "ACADEMIA" );
    });
}); 

//RESTAURANTES
$(document).ready(function() {
    //função para adicionar e remover conteudo com evento hover
    $(".velvet").mouseover(function() {
        $(".velvet-img").addClass("none");
        $( ".velvet-text" ).html( "O Red Velvet distingue-se pela atenção dada aos detalhes do seu mobiliário, desde almofadas de veludo vermelho a lustres de vidro Murano, porcelana requintada a copos de cristal e talheres de prata." );
    });
    $(".velvet").mouseout(function() {
        $(".velvet-img").removeClass("none");
        $( ".velvet-text" ).html( "RED VELVET" );
    });

    $(".doro").mouseover(function() {
        $(".doro-img").addClass("none");
        $( ".doro-text" ).html( "Na popa do navio, apresenta um panorama de tirar o fôlego que inspirou o tema da transparência e da luz usado no design do restaurante. " );
    });
    $(".doro").mouseout(function() {
        $(".doro-img").removeClass("none");
        $( ".doro-text" ).html( "IL CERCHIO D'ORO" );
    });

    $(".butcher").mouseover(function() {
        $(".butcher-img").addClass("none");
        $( ".butcher-text" ).html( "Esta churrascaria de estilo americano serve a seleção angus beef da Linz, padrão ouro na carne angus de alta qualidade, graças à melhor genética da raça." );
    });
    $(".butcher").mouseout(function() {
        $(".butcher-img").removeClass("none");
        $( ".butcher-text" ).html( "BUTCHER'S CUT" );
    });

    $(".letoile").mouseover(function() {
        $(".letoile-img").addClass("none");
        $( ".letoile-text" ).html( "O exclusivo restaurante gourmet flexível do MSC Yacht Club, com capacidade para 100 convidados e vista panorâmica para a piscina com jardim infinito." );
    });
    $(".letoile").mouseout(function() {
        $(".letoile-img").removeClass("none");
        $( ".letoile-text" ).html( "L'ETOILE" );
    });

    $(".sports").mouseover(function() {
        $(".sports-img").addClass("none");
        $( ".sports-text" ).html( "Um menu de inspiração esportiva, com pratos internacionais e lanches criativos, como iguarias de presunto grelhado de Yorkshire ou espetadas de camarão grego." );
    });
    $(".sports").mouseout(function() {
        $(".sports-img").removeClass("none");
        $( ".sports-text" ).html( "SPORTS BAR" );
    });

    $(".piazza").mouseover(function() {
        $(".piazza-img").addClass("none");
        $( ".piazza-text" ).html( "Experimente as delícias da Piazza San Giorgio! Com sua sorveteria, confeitaria e loja de chocolates, um mundo que lembra a fábrica de chocolate de Willy Wonka." );
    });
    $(".piazza").mouseout(function() {
        $(".piazza-img").removeClass("none");
        $( ".piazza-text" ).html( "PIZZA SAN GIORGIO" );
    });
}); 

//Contador regressivo
$(document).ready(function() {
    const tempoParaOWWB = new Countdown("03 December 2022 21:50:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaOWWB.total[index];
  });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);
})