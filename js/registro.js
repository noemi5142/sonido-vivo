document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-registro");
    if (!form) return;

    const region = document.getElementById("reg-region");
    const comuna = document.getElementById("reg-comuna");

    const regiones = {
        arica:["Arica","Camarones","Putre","General Lagos"],
        tarapaca:["Iquique","Alto Hospicio","Pozo Almonte","Camiña","Colchane","Huara","Pica"],
        antofagasta:["Antofagasta","Mejillones","Sierra Gorda","Taltal","Calama","Ollagüe","San Pedro de Atacama","Tocopilla","María Elena"],
        atacama:["Copiapó","Caldera","Tierra Amarilla","Chañaral","Diego de Almagro","Vallenar","Alto del Carmen","Freirina","Huasco"],
        coquimbo:["La Serena","Coquimbo","Andacollo","La Higuera","Paihuano","Vicuña","Illapel","Canela","Los Vilos","Salamanca","Ovalle","Combarbalá","Monte Patria","Punitaqui","Río Hurtado"],
        valparaiso:["Valparaíso","Viña del Mar","Concón","Quintero","Puchuncaví","Casablanca","Juan Fernández","San Antonio","Cartagena","El Quisco","El Tabo","Algarrobo","Santo Domingo","Quillota","La Calera","Hijuelas","La Cruz","Nogales","Limache","Olmué","Villa Alemana","Quilpué","Cabildo","La Ligua","Papudo","Petorca","Zapallar","Los Andes","Calle Larga","Rinconada","San Esteban","San Felipe","Catemu","Llaillay","Panquehue","Putaendo","Santa María"],
        metropolitana:["Santiago","Cerrillos","Cerro Navia","Conchalí","El Bosque","Estación Central","Huechuraba","Independencia","La Cisterna","La Florida","La Granja","La Pintana","La Reina","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Macul","Maipú","Ñuñoa","Pedro Aguirre Cerda","Peñalolén","Providencia","Pudahuel","Quilicura","Quinta Normal","Recoleta","Renca","San Joaquín","San Miguel","San Ramón","Vitacura","Puente Alto","Pirque","San José de Maipo","Colina","Lampa","Tiltil","Buin","Calera de Tango","Paine","San Bernardo","Alhué","Curacaví","María Pinto","Melipilla","San Pedro","Talagante","El Monte","Isla de Maipo","Padre Hurtado","Peñaflor"],
        ohiggins:["Rancagua","Codegua","Coinco","Coltauco","Doñihue","Graneros","Las Cabras","Machalí","Malloa","Mostazal","Olivar","Peumo","Pichidegua","Quinta de Tilcoco","Rengo","Requínoa","San Vicente","La Estrella","Litueche","Marchigüe","Navidad","Paredones","Pichilemu","Chépica","Chimbarongo","Lolol","Nancagua","Palmilla","Peralillo","Placilla","Pumanque","San Fernando","Santa Cruz"],
        maule:["Talca","Constitución","Curepto","Empedrado","Maule","Pelarco","Pencahue","Río Claro","San Clemente","San Rafael","Cauquenes","Chanco","Pelluhue","Curicó","Hualañé","Licantén","Molina","Rauco","Romeral","Sagrada Familia","Teno","Vichuquén","Linares","Colbún","Longaví","Parral","Retiro","San Javier","Villa Alegre","Yerbas Buenas"],
        nuble:["Chillán","Chillán Viejo","Bulnes","Cobquecura","Coelemu","Coihueco","El Carmen","Ninhue","Ñiquén","Pemuco","Pinto","Portezuelo","Quillón","Quirihue","Ránquil","San Carlos","San Fabián","San Ignacio","San Nicolás","Treguaco","Yungay"],
        biobio:["Concepción","Coronel","Chiguayante","Florida","Hualqui","Lota","Penco","San Pedro de la Paz","Santa Juana","Talcahuano","Tomé","Hualpén","Arauco","Cañete","Contulmo","Curanilahue","Lebu","Los Álamos","Tirúa","Alto Biobío","Antuco","Cabrero","Laja","Los Ángeles","Mulchén","Nacimiento","Negrete","Quilaco","Quilleco","San Rosendo","Santa Bárbara","Tucapel","Yumbel"],
        araucania:["Temuco","Carahue","Cholchol","Cunco","Curarrehue","Freire","Galvarino","Gorbea","Lautaro","Loncoche","Melipeuco","Nueva Imperial","Padre Las Casas","Perquenco","Pitrufquén","Pucón","Saavedra","Teodoro Schmidt","Toltén","Vilcún","Villarrica","Angol","Collipulli","Curacautín","Ercilla","Lonquimay","Los Sauces","Lumaco","Purén","Renaico","Traiguén","Victoria"],
        rios:["Valdivia","Corral","Lanco","Los Lagos","Máfil","Mariquina","Paillaco","Panguipulli","La Unión","Futrono","Lago Ranco","Río Bueno"],
        lagos:["Puerto Montt","Calbuco","Cochamó","Fresia","Frutillar","Los Muermos","Llanquihue","Maullín","Puerto Varas","Castro","Ancud","Chonchi","Curaco de Vélez","Dalcahue","Puqueldón","Queilén","Quellón","Quemchi","Quinchao","Osorno","Puerto Octay","Purranque","Puyehue","Río Negro","San Juan de la Costa","San Pablo","Chaitén","Futaleufú","Hualaihué","Palena"],
        aysen:["Coyhaique","Lago Verde","Aysén","Cisnes","Guaitecas","Cochrane","O'Higgins","Tortel","Chile Chico","Río Ibáñez"],
        magallanes:["Punta Arenas","Laguna Blanca","Río Verde","San Gregorio","Cabo de Hornos","Antártica","Porvenir","Primavera","Timaukel","Puerto Natales","Torres del Paine"]
    };

    region.addEventListener("change", () => {
        comuna.innerHTML = '<option value="">Selecciona una comuna</option>';
        comuna.disabled = !region.value;
        (regiones[region.value] || []).forEach(c => comuna.add(new Option(c,c)));
    });

    form.addEventListener("submit", e => {
        e.preventDefault();
        let valido = true;

        document.getElementById("mensaje-registro").style.display = "none";
        document.querySelectorAll(".error-texto").forEach(x => x.textContent = "");
        document.querySelectorAll(".input-error").forEach(x => x.classList.remove("input-error"));

        const error = (id, msg) => {
            document.getElementById("error-reg-" + id).textContent = msg;
            document.getElementById("reg-" + id).classList.add("input-error");
            valido = false;
        };

        const run = document.getElementById("reg-run");
        const nombre = document.getElementById("reg-nombre");
        const apellidos = document.getElementById("reg-apellidos");
        const email = document.getElementById("reg-email");
        const direccion = document.getElementById("reg-direccion");
        const password = document.getElementById("reg-password");
        const confirmar = document.getElementById("reg-password-confirm");

        if (!/^\d{7,8}[0-9Kk]$/.test(run.value.trim())) error("run","Ingresa un RUN válido.");
        if (nombre.value.trim().length < 2) error("nombre","Ingresa tu nombre.");
        if (apellidos.value.trim().length < 2) error("apellidos","Ingresa tus apellidos.");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) error("email","Ingresa un correo válido.");
        if (!region.value) error("region","Selecciona una región.");
        if (!comuna.value) error("comuna","Selecciona una comuna.");
        if (direccion.value.trim().length < 5) error("direccion","Ingresa una dirección válida.");
        if (password.value.length < 8) error("password","La contraseña debe tener al menos 8 caracteres.");
        if (confirmar.value !== password.value) error("password-confirm","Las contraseñas no coinciden.");

        if (valido) {
            const mensaje = document.getElementById("mensaje-registro");
            mensaje.textContent = "¡Registro realizado correctamente!";
            mensaje.style.display = "block";
            form.reset();
            comuna.innerHTML = '<option value="">Primero selecciona región</option>';
            comuna.disabled = true;
        }
    });
});