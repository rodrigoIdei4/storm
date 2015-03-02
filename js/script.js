$(document).ready(function(){
  
  /* Allan Batista
   * Scroll Suave Abstrato
   * JQuery 1.7.2
   * -----------------------------------------*/
  
  function ScrollSuave(obj){
   
    /* Verifica se as variaveis foram definidas
     * -----------------------------------------*/    
    if(typeof obj == 'undefined'){
      obj = {};
    }    
    
    if(typeof obj.click == 'undefined'){
      console.log("O seletor do elemento de click não foi definido");
      console.log("este elemento é primordial para o funcionamento");
    }
    if(typeof obj.reload == 'undefined'){
      obj.reload = false;
    }
    if(typeof obj.posicao == 'undefined'){
      obj.posicao = 0;
    }
    if(typeof obj.start == 'undefined'){
      obj.start = false;
    }
    
    /* Metodos
     * Definição de parametros
     * Click, reload, positicao e start
     * -----------------------------------------*/
    
    /* Click
     * -----------------------------------------*/
    this.click = function(click){
      if(typeof click == 'undefined'){
        return false;
      }
      obj.click = click;
    }
    
    /* Reload
     * -----------------------------------------*/
    this.reload = function(reload){
      if(typeof reload == 'undefined'){
        reload = true;
      }
      if(reload)
      {
        obj.reload = reload;
      }
    }
    
    /* Posicao
     * Define a distancia entre o topo do elemento
     * e a janela.
     * -----------------------------------------*/
    this.posicao = function(posicao){
      if(typeof posicao == 'undefined'){
        posicao = 0;
      }
      obj.posicao = posicao;
    }
    
    /* Start
     * -----------------------------------------*/
    this.start = function(start){
      if(typeof start == 'undefined'){
        start = true;
      } 
      if(start) {
        this._init();
      }
    }
    
    /* Suave()
     * Anima transição de posição de demento A para elemento B
     * @false
     * -----------------------------------------*/
    this.Suave = function(){

      $(obj.click).on('click', function(event){
       
        var href = $(this).attr('href');

        if($('#'+href).length) {
          event.preventDefault();
          var posicaoTopElemento = $('#'+href).offset().top + (obj.posicao);
          $('html, body').animate({
            scrollTop: posicaoTopElemento
          }, 2000);
        }
      });
    };
    
    /* ReloadPageSuave()
     * Ao fazer reload na pagina,
     * faz com que a pagina faça seu deslocamento
     * para o topo
     * -----------------------------------------*/
    this.ReloadPageSuave = function(a){
      window.onload = function(){
        if(typeof a == 'undefined'){
          a = obj.reload;
        } 
        if(a && $(document).scrollTop() !== 0){
          $('html, body').animate({
            scrollTop: 0
          }, 'fast');
        }
      }
    };
    
    /* Construtor
     * Start os metodos necessário para o 
     * functionamento correto
     */
    
    this._init = function(){
      this.Suave();
      this.ReloadPageSuave();
    }
    
    if(obj.start === true){
      this._init();
    }
  }
 
  var scrollMenu = new ScrollSuave({
    'click': 'a',
    'posicao': -36,
    'start':true
  });
  
});