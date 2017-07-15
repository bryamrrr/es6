function cualquierCosa() {
  this
};

// <button class="botonEnviar">Ver Barcelona VS Real Madrid</button>
// <button class="botonEnviar">Ver Chelsea VS United</button>
// <button class="botonEnviar">Ver Alianza VS Comerciantes unidos</button>
// <button class="botonEnviar">Ver Combate</button>

$('.botonEnviar').click(function () {
  let queCosaQuiereVer = $(this).text();

  const cambiarTexto = () => {
    $(this).text('Detener video');
  };

  cambiarTexto();
});