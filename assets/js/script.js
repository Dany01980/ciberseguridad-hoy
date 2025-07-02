$(document).ready(function () {
    $('#contacto').on('submit', function (e) {
        e.preventDefault();
        const nombre = $('#nombre').val().trim();
        const correo = $('#correo').val().trim();
        const mensaje = $('#mensaje').val().trim();

        if (nombre && correo && mensaje) {
            Swal.fire('Mensaje enviado', 'Nos pondremos en contacto pronto', 'success');
            this.reset();
        } else {
            Swal.fire('Error', 'Por favor completa todos los campos', 'error');
        }
    });

    $('#btnTest').on('click', async function () {
    let puntaje = 0;

    const preguntas = [
        {
            titulo: 'Pregunta 1',
            opciones: {
                a: '¿Contraseña123 es segura?',
                b: '¿Una contraseña como G#7lPz9$ es mejor?'
            },
            correcta: 'b'
        },
        {
            titulo: 'Pregunta 2',
            opciones: {
                a: '¿Es seguro compartir contraseñas por correo?',
                b: '¿Nunca debes compartir tus contraseñas?'
            },
            correcta: 'b'
        },
        {
            titulo: 'Pregunta 3',
            opciones: {
                a: '¿Es recomendable mantener actualizado el software?',
                b: '¿No es necesario si todo funciona bien?'
            },
            correcta: 'a'
        },
        {
            titulo: 'Pregunta 4',
            opciones: {
                a: '¿Debo hacer clic en cualquier enlace de correos desconocidos?',
                b: '¿Debo verificar el remitente antes de hacer clic?'
            },
            correcta: 'b'
        },
        {
            titulo: 'Pregunta 5',
            opciones: {
                a: '¿Es útil activar la autenticación en dos pasos?',
                b: '¿No es necesario si tengo una buena contraseña?'
            },
            correcta: 'a'
        }
    ];

    for (let i = 0; i < preguntas.length; i++) {
        const pregunta = preguntas[i];

        const { value: respuesta } = await Swal.fire({
            title: pregunta.titulo,
            input: 'radio',
            inputOptions: pregunta.opciones,
            inputValidator: value => !value && 'Selecciona una opción'
        });

        if (respuesta === pregunta.correcta) {
            puntaje++;
        }
    }

    // Mensaje personalizado según el puntaje
    let mensajeFinal = '';
    let icono = '';

    if (puntaje === 5) {
        mensajeFinal = '¡Excelente! Tienes un gran conocimiento en ciberseguridad.';
        icono = 'success';
    } else if (puntaje >= 3) {
        mensajeFinal = 'Vas por buen camino, pero aún puedes mejorar tus hábitos de seguridad.';
        icono = 'info';
    } else {
        mensajeFinal = '¡Atención! Necesitas reforzar tus conocimientos sobre ciberseguridad.';
        icono = 'warning';
    }

    await Swal.fire({
        title: 'Resultado Final',
        text: `Obtuviste ${puntaje} de 5 respuestas correctas. ${mensajeFinal}`,
        icon: icono
    });
});
});

/*=============== scroll reveal ===============*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.contenido p, .tarjeta1',{ origin: 'left' });
ScrollReveal().reveal('.contenido a, .tarjeta2', { origin: 'right' });

// ========= TYPED.JS ANIMACIÓN DE TEXTO =========

const typed = new Typed("#typed-output", {
    strings: [
    "Bienvenido a Ciberseguridad Hoy",
    "",
    "Bienvenido a la Protección Digital",
    "",
    "Bienvenido a la Seguridad en Línea"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    backDelay: 1500,
    startDelay: 500,
    showCursor: true,
    cursorChar: '|'
    });


