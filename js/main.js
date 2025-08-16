$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true,
            },
        },
            messages: {
                nome: {
                    required: 'Por favor, insira o seu nome',
                },
                email: {
                    required: 'Por favor, insira o seu email',
                },
                mensagem: {
                    required: 'Por favor, insira o sua mensagem',
                    }    
            },
            sudmitHandler: function(form){
                console.log(form)
            },
            invalidHandler: function(evento, validador){
                let camposincorretos = validador.numberOfInvalids();
                if (camposincorretos){
                    alert(`Existem ${camposincorretos} campos incorretos`)
                } else {
                        alert(`Mensagem enviada com sucesso`)
                    }

                }
        })
})