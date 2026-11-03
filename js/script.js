const gallery = document.getElementById("gallery");

// 1. CARGAR ROTULACIONES (23 fotos)
for (let i = 1; i <= 23; i++) {
    const card = document.createElement("div");
    card.classList.add("work-card");
    card.dataset.category = "rotulaciones";

    card.innerHTML = `
        <a href="assets/images/rotulaciones/rotulo-${i}.jpeg" target="_blank" id="link-rotulo-${i}">
            <img
                class="work-photo"
                src="assets/images/rotulaciones/rotulo-${i}.jpeg"
                alt="Rotulación comercial ${i}"
                loading="lazy"
                onerror="this.onerror=null; this.src='assets/images/rotulaciones/rotulo-${i}.jpg'; document.getElementById('link-rotulo-${i}').href='assets/images/rotulaciones/rotulo-${i}.jpg';"
            >
        </a>
        <h3>Rotulación ${i}</h3>
        <p>Trabajo de rotulación comercial.</p>
    `;

    gallery.appendChild(card);
}

// 2. CARGAR RETRATOS (Cámbialo al número total de fotos que tengas, por ejemplo 23 o 24 si empieza desde el 0)
// Nota: Si tus fotos van de 0 a 23, dime si quieres que empiece desde el 0 o el 1. Aquí lo ponemos hasta 23.
const totalRetratos = 23; 

for (let i = 1; i <= totalRetratos; i++) {
    const card = document.createElement("div");
    card.classList.add("work-card");
    card.dataset.category = "retratos";

    card.innerHTML = `
        <a href="assets/images/retratos/retrato-${i}.jpg" target="_blank" id="link-retrato-${i}">
            <img
                class="work-photo"
                src="assets/images/retratos/retrato-${i}.jpg"
                alt="Retrato realista ${i}"
                loading="lazy"
                onerror="this.onerror=null; this.src='assets/images/retratos/retrato-${i}.jpeg'; document.getElementById('link-retrato-${i}').href='assets/images/retratos/retrato-${i}.jpeg';"
            >
        </a>
        <h3>Retrato realista ${i}</h3>
        <p>Retratos con técnicas monocromáticas y a color.</p>
    `;

    gallery.appendChild(card);
}

// 3. CARGAR MURALES (Lo dejamos en 0 temporalmente hasta que subas tus fotos para evitar errores)
const totalMurales = 0; 

for (let i = 1; i <= totalMurales; i++) {
    const card = document.createElement("div");
    card.classList.add("work-card");
    card.dataset.category = "murales";

    card.innerHTML = `
        <a href="assets/images/murales/mural-${i}.jpg" target="_blank" id="link-mural-${i}">
            <img
                class="work-photo"
                src="assets/images/murales/mural-${i}.jpg"
                alt="Mural artístico ${i}"
                loading="lazy"
            >
        </a>
        <h3>Mural artístico ${i}</h3>
        <p>Arte y creatividad en paredes.</p>
    `;

    gallery.appendChild(card);
}


// FILTROS DE CATEGORÍAS
const buttons = document.querySelectorAll(".category");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

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