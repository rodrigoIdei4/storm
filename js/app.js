var App = angular.module('app', ['ui.router']);
App.config(function($stateProvider){
    $stateProvider
        .state('index', {
            url: "",
            views:{
                "noticia-destaque"  : {templateUrl: "pages/noticia2.html"},
                "controles"         : {templateUrl: "pages/controls-noticia2.html"},
                "lista"    : {templateUrl: "pages/lista-noticias-2.html"}
            }
        })
        .state('noticia1', {
            url: "/noticia1",
            views:{
                "noticia-destaque"  : {templateUrl: "pages/noticia1.html"},
                "controles"         : {templateUrl: "pages/controls-noticia1.html"},
                "lista"    : {templateUrl: "pages/lista-noticias-1.html"}
            }
        })
        .state('noticia2', {
            url: "/noticia2",
            views:{
                "noticia-destaque"  : {templateUrl: "pages/noticia2.html"},
                "controles"         : {templateUrl: "pages/controls-noticia2.html"},
                "lista"    : {templateUrl: "pages/lista-noticias-2.html"}
            }
        })
});
