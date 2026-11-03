const gallery = document.getElementById("gallery");

// Cargar las 23 fotografías de rotulaciones
for (let i = 1; i <= 23; i++) {

    const card = document.createElement("div");

    card.classList.add("work-card");

    card.dataset.category = "rotulaciones";

    // Se añadió la etiqueta <a> con href hacia la misma imagen y target="_blank"
    card.innerHTML = `
        <a href="assets/images/rotulaciones/rotulo-${i}.jpeg" target="_blank">
            <img
                class="work-photo"
                src="assets/images/rotulaciones/rotulo-${i}.jpeg"
                alt="Rotulación comercial ${i}"
                loading="lazy"
            >
        </a>

        <h3>Rotulación ${i}</h3>

        <p>Trabajo de rotulación comercial.</p>
    `;

    // Agregar fotografía a la galería
    gallery.insertBefore(card, gallery.firstChild);

}


// FILTROS DE CATEGORÍAS

const buttons = document.querySelectorAll(".category");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // Quitar selección anterior
        buttons.forEach(item => {
            item.classList.remove("active");
        });

        // Activar botón seleccionado
        button.classList.add("active");

        const filter = button.dataset.filter;

        // Mostrar trabajos correspondientes
        document.querySelectorAll(".work-card").forEach(card => {

            if (
                filter === "todos" ||
                card.dataset.category === filter
            ) {

                card.hidden = false;

            } else {

                card.hidden = true;

            }

        });

    });

});