$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })

    $('#tel').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome!',
            email: 'Esse campo é obrigatório!',
            telefone: 'Esse campo é obrigatório!'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
            if (camposIncorretos > 1) {
                alert(`Existem ${camposIncorretos} campos que precisam ser preenchidos!`)
            } else if ( 0 < camposIncorretos < 2){
                alert(`Existe ${camposIncorretos} campo que precisa ser preenchido!`)
            }
        }
    })
})