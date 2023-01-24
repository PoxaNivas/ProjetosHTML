var quantidade = $('div#testemunhos ul').length;
var limite  = (quantidade * 336)* -1;
var largura =limite +336;
var view_largura =$('section#Depoimentos div#testemunha-centro').width();

$('div#testemunhos').css('width',limite * -1);
$('div#teste').html(limite);

$('div#testemunha-direita').click( function(){
    posicao_atual = $('div#testemunhos').position().left;
    nova_position = posicao_atual - view_largura
  

    if( limite < posicao_atual - view_largura){
        $('div#testemunhos').animate({left:nova_position},1500);
        
    }
    
    if( limite > (nova_position - view_largura)){
        $('div#testemunha-direita img').css('opacity',0.5);
        $('div#testemunha-direita img').css('cursor','not-allowed');
        
    }

    $('div#testemunha-esquerda img').css('opacity',1);
    $('div#testemunha-esquerda img').css('cursor','pointer');

})


//códigos de clique para assinar//
$('div.planos-bottom').click(function(){
    alert('Clicou')
})




/*max width 257.031 
limite do elemento -2016
*/



///////////////////////////////////////////
//////////////Navegação////////////////////

$('nav div').click(function(){
    $('html,body').animate({scrollTop:$('div#topo').offset().top},1000);
})

$('header div').click(function(){
    $('html,body').animate({scrollTop:$('section#Sobre-nos').offset().top},1000);
})

$('nav ul li:eq(0)').click(function(){
    $('html,body').animate({scrollTop:$('section#Sobre-nos').offset().top},1000);
})


$('nav ul li:eq(1)').click(function(){
    $('html,body').animate({scrollTop:$('section#Projetos').offset().top},1000);
})

$('nav ul li:eq(2)').click(function(){
    $('html,body').animate({scrollTop:$('section#Depoimentos').offset().top},1000);
})

$('nav ul li:eq(3)').click(function(){
    $('html,body').animate({scrollTop:$('section#Plano-principal').offset().top},1000);
})

$('nav ul li:eq(4)').click(function(){
    $('html,body').animate({scrollTop:$('footer').offset().top},1000);
})



///////////////////////////////////////////
//////////////Sobre nós////////////////////
$('section#Sobre-nos').waypoint( function(direcao){
    if ( direcao == "down"){
        $('img#Icons1,img#Icons2,img#Icons3').addClass('Transicao-nos');
   
    }
    if (direcao == "up"){
        $('img#Icons1,img#Icons2,img#Icons3').removeClass('Transicao-nos');
    }

},{
    offset:'200px;'
})






////////////////////////////////////////////////////
//////////////  Depoimentos     ////////////////////

//Galeria de depoimentos//



$('div#testemunha-esquerda').click( function(){
    posicao_atual = $('div#testemunhos').position().left;

    if( posicao_atual +view_largura <=0 ) {
        nova_position = posicao_atual + view_largura;
        $('div#testemunhos').animate({left:nova_position},1500); 
    }

    
    if (nova_position ==0){
        $('div#testemunha-esquerda img').css('cursor','pointer');

    }

    $('div#testemunha-esquerda img').css('opacity',0.5);
    $('div#testemunha-esquerda img').css('cursor','not-allowed');


    $('div#testemunha-direita img').css('opacity',1);
    $('div#testemunha-direita img').css('cursor','pointer');

})


//Ovelhas//
$('section#Depoimentos').waypoint( function(direcao){
    if ( direcao == "down"){
        $('div#decoracao1').addClass('Transicao-plano');
        $('div#decoracao3').addClass('Transicao-plano');
    }
    if (direcao == "up"){
        $('div#decoracao1').removeClass('Transicao-plano');
        $('div#decoracao3').removeClass('Transicao-plano');
    }

},{
    offset:'200px;'
})






////////////////////////////////////////////////////
//////////////  Projetos   ////////////////////

$('section#Projetos').waypoint( function(direcao){
    if ( direcao == "down"){
        $('img#Planta-gemea, img#Conhece-a-ti').addClass('rotate-scale-up');
   
    }
    if (direcao == "up"){
        $('img#Planta-gemea, img#Conhece-a-ti').removeClass('rotate-scale-up');
    }

},{
    offset:'200px;'
})






////////////////////////////////////////////////////
//////////////  Redes sociais     ////////////////////
$('img#instagram').click(function(){
    window.open("https://www.instagram.com/poxa_nivas/","_blank")

})
$('img#linkedin').click(function(){
    window.open("https://www.linkedin.com/in/nivaldo-gomes-da-silva/","_blank")

})
$('img#github').click(function(){
    window.open("https://github.com/PoxaNivas","_blank")

})
$('img#google').click(function(){
    window.open("mailto:nivaldo.gomesdasilva02@gmail.com","_blank")

})
