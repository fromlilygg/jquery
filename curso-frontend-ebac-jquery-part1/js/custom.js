// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function () {

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag

    let itens = $('.featured-item') // class

    let destaques = $('#featured') // id

    // let comprar = $('.single-product.html')
    

    // console.log(titulos.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    // $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')

    

    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    //  $('.featured-item:first h4').css('color', '#f00')


    $('.featured-item h4').dblclick(function () {

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });

    });

    /*
     * Manipulação de eventos
     */
    $('.featured-item a').on('blur', function (event) {

        event.preventDefault();

        alert('Produto esgotado');

    })

    $('h4, h6').css({"display": "flex", "justify-content": "center", "align-items": "center", "padding": "1vh"})

    $('.container-a').css({"display": "flex", "justify-content": "center", "align-items": "center", "height:" : "100vh", "padding-top": "2vh"})

    $('.btn-dark').css({"color": "rgb(2, 97, 198)", "background-color": "whitesmoke"})
    
    
    
})

