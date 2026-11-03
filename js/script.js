const gallery = document.getElementById("gallery");

// 1. CARGAR ROTULACIONES (23 fotos)
for (let i = 1; i <= 23; i++) {
    const card = document.createElement("div");
    card.classList.add("work-card");
    card.dataset.category = "rotulaciones";

    const ruta = `assets/images/rotulaciones/rotulo-${i}.jpg`; // Cambiado a .jpg (si tus rotulaciones son .jpeg cámbialo a .jpeg)

    card.innerHTML = `
        <a href="${ruta}" target="_blank">
            <img
                class="work-photo"
                src="${ruta}"
                alt="Rotulación comercial ${i}"
                loading="lazy"
                onerror="console.error('Error cargando rotulacion:', this.src)"
            >
        </a>
        <h3>Rotulación ${i}</h3>
        <p>Trabajo de rotulación comercial.</p>
    `;

    gallery.appendChild(card);
}

// 2. CARGAR RETRATOS
const totalRetratos = 5; 

for (let i = 1; i <= totalRetratos; i++) {
    const card = document.createElement("div");
    card.classList.add("work-card");
    card.dataset.category = "retratos";

    const ruta = `assets/images/retratos/retrato-${i}.jpg`;

    card.innerHTML = `
        <a href="${ruta}" target="_blank">
            <img
                class="work-photo"
                src="${ruta}"
                alt="Retrato realista ${i}"
                loading="lazy"
                onerror="console.error('Error cargando retrato:', this.src)"
            >
        </a>
        <h3>Retrato realista ${i}</h3>
        <p>Retratos con técnicas monocromáticas y a color.</p>
    `;

    gallery.appendChild(card);
}

// 3. CARGAR MURALES
const totalMurales = 5; 

for (let i = 1; i <= totalMurales; i++) {
    const card = document.createElement("div");
    card.classList.add("work-card");
    card.dataset.category = "murales";

    const ruta = `assets/images/murales/mural-${i}.jpg`;

    card.innerHTML = `
        <a href="${ruta}" target="_blank">
            <img
                class="work-photo"
                src="${ruta}"
                alt="Mural artístico ${i}"
                loading="lazy"
                onerror="console.error('Error cargando mural:', this.src)"
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