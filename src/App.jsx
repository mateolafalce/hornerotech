import React from "react";

/**
 * Landing estática — "Somos Hornero Tech"
 * - Sin navbar
 * - React + Tailwind (1 solo archivo)
 * - Diseño moderno: glass + gradientes suaves + hovers
 * - Sin framer-motion
 */

export default function App() {
  const equipo = [
    { nombre: "Mateo Lafalce", linkedin: "https://www.linkedin.com/in/mateo-lafalce-243291379/" },
    { nombre: "Solange Rodrigo", linkedin: "https://www.linkedin.com/in/solange-rodrigo/" },
    { nombre: "Martin Simon", linkedin: "https://www.linkedin.com/in/martinsimon08/" },
    { nombre: "Ignacio Benitez", linkedin: "https://www.linkedin.com/in/ignacio-benitez04/" },
    { nombre: "Sixto Javier Castro Cope", linkedin: "https://www.linkedin.com/in/sixto-javier-castro-cope-06b027370/" },
    { nombre: "Augusto Roman", linkedin: "https://www.linkedin.com/in/augusto-roman-624405295/" },
    { nombre: "Maximiliano Octavio Orellana", linkedin: "https://www.linkedin.com/in/maxi-orellana-2796ba254/" },
    { nombre: "Nicolás Ojeda", linkedin: "https://www.linkedin.com/in/nicol%C3%A1s-ojeda-20a372239/" },
  ];

  const features = [
    { title: "Huerto vertical modular", body: "Estructura liviana, extensible; pared o azotea.", icon: LeafIcon },
    { title: "Materiales recuperados", body: "Paneles con Tetra Pak y macetas/canaletas PET.", icon: RecycleIcon },
    { title: "Riego por gravedad", body: "Captación de lluvia + filtrado natural, sin energía.", icon: DropIcon },
  ];

  return (
    <div className="relative min-h-screen overflow-x-clip bg-gradient-to-b from-amber-50 via-white to-amber-50 text-gray-900">
      <BackgroundDecor />

      {/* HERO */}
      <header className="relative mx-auto max-w-5xl px-4 pt-16 sm:pt-20">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-amber-600" />
              Rally Latinoamericano de Innovación 2025
            </div>

            <a
              href="https://www.instagram.com/hornerotech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-xs font-medium text-amber-700 shadow-sm backdrop-blur transition-colors hover:text-amber-800 hover:border-amber-300"
            >
              Contacto: @hornerotech
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Somos <span className="text-amber-700">Hornero Tech</span>
          </h1>

          <p className="mt-4 text-pretty text-[15px] leading-relaxed text-gray-700 sm:text-base">
            Propuesta simple, accesible y replicable para <b>agricultura vertical</b> urbana, usando
            <b> materiales reciclados</b> y <b>riego por gravedad</b>. Buscamos que familias y comunidades
            produzcan alimentos frescos con bajo costo y mantenimiento.
          </p>

          {/* Sobre nosotros (glass) */}
          <div className="mt-6 rounded-2xl border border-amber-100 bg-white/70 p-5 shadow-lg shadow-amber-100/40 backdrop-blur-sm">
            <h2 className="text-lg font-semibold tracking-tight">Sobre nosotros</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-gray-700">
              Nacimos con espíritu maker y comunitario: prototipamos, documentamos en abierto y enseñamos a construir
              con lo que hay. Diseñamos soluciones <b>de bajo costo</b>, <b>modulares</b> y <b>sostenibles</b>,
              aprovechando <b>Tetra Pak</b> y <b>PET</b> como insumos.
            </p>
          </div>

          {/* Video de presentación */}
          <div className="mt-6 rounded-2xl border border-amber-100 bg-white/70 p-5 shadow-lg shadow-amber-100/40 backdrop-blur-sm">
            <h2 className="text-lg font-semibold tracking-tight">Video de presentación</h2>
            <p className="mt-2 mb-4 text-[15px] text-gray-700">
              Conoce más sobre nuestro proyecto en este video:
            </p>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/1oSJ8qxPIyU?rel=0&modestbranding=1"
                title="Hornero Tech - Presentación"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Si no ves el video, ábrelo en YouTube:{" "}
              <a
                href="https://youtu.be/1oSJ8qxPIyU?si=pPRKujpZBHxjTlSU"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-amber-700 hover:text-amber-800"
              >
                https://youtu.be/1oSJ8qxPIyU
              </a>
            </p>
          </div>
        </div>
      </header>

      {/* CUERPO */}
      <main className="relative mx-auto max-w-5xl px-4 pb-20 pt-10">
        {/* Propuesta */}
        <Section title="Nuestra propuesta en 3 puntos">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-amber-100 bg-white/80 p-5 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-md supports-[backdrop-filter]:bg-white/60"
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-amber-100 blur-2xl opacity-60 transition-opacity group-hover:opacity-80" />
                <div className="flex items-start gap-3">
                  <IconWrap>
                    <f.icon className="h-5 w-5" />
                  </IconWrap>
                  <div>
                    <h3 className="font-semibold tracking-tight">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-700">{f.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Badges items={["Bajo costo", "Manual abierto", "Escalable", "Sin electricidad", "Enfoque educativo"]} />
        </Section>

        {/* Problemática */}
        <Section title="Problemática que abordamos">
          <p className="text-[15px] leading-relaxed text-gray-800">
            En entornos urbanos falta <b>espacio cultivable</b> y se gestiona mal el <b>agua</b>. Las familias
            dependen de alimentos caros y poco frescos, mientras abundan residuos difíciles de recuperar. Apostamos por
            la <b>verticalidad</b> y el <b>reciclaje</b> para aumentar la producción local con mínima infraestructura.
          </p>
        </Section>

        {/* Diferencial */}
        <Section title="¿Qué lo hace diferente?">
          <p className="text-[15px] leading-relaxed text-gray-800">
            Combinamos <b>modularidad</b>, <b>materiales recuperados</b> y <b>riego por gravedad</b> con
            documentación abierta. No requiere bombas ni controladores; es <b>simple de montar</b>, <b>reparable</b>
            y <b>replicable</b>.
          </p>
        </Section>

        {/* Impacto */}
        <Section title="Impacto esperado">
          <ul className="ml-4 list-disc space-y-2 text-[15px] leading-relaxed">
            <li><b>Ambiental:</b> menos residuos (Tetra Pak, PET) y menor huella hídrica/energética.</li>
            <li><b>Social:</b> talleres en escuelas, comedores y unidades penitenciarias para formar y producir.</li>
            <li><b>Económico:</b> reduce gasto en verdura/hierbas y habilita microemprendimientos locales.</li>
          </ul>
        </Section>

        {/* Equipo */}
        <Section title="Equipo (8 integrantes)">
          <p className="text-[15px] leading-relaxed">Presentamos nuestra propuesta como <b>Hornero Tech</b>:</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {equipo.map((miembro, i) => (
              <li key={i}>
                <a
                  href={miembro.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-amber-100 bg-white/70 px-3 py-2 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-2 text-sm">
                    <span className="text-gray-800 group-hover:text-amber-800">{miembro.nombre}</span>
                    <LinkedInIcon className="h-4 w-4 text-gray-500 group-hover:text-amber-700" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      {/* Footer */}
      <footer className="relative border-t bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Hornero Tech — Rally Latinoamericano de Innovación.
        </div>
      </footer>
    </div>
  );
}

/* ——— Componentes ——— */
function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 text-lg font-semibold tracking-tight">{title}</h2>
      <div className="text-gray-800">{children}</div>
    </section>
  );
}

function Badges({ items = [] }) {
  return (
    <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((text, i) => (
        <li
          key={i}
          className="inline-flex items-center gap-2 rounded-md border border-amber-100 bg-white px-2.5 py-1.5 text-xs text-gray-800 shadow-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
          {text}
        </li>
      ))}
    </ul>
  );
}

function IconWrap({ children }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 text-amber-700 shadow-sm">
      {children}
    </div>
  );
}

/* ——— Fondos decorativos ——— */
function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-[-6rem] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-amber-200 opacity-40 blur-3xl" />
      <div className="absolute right-[-8rem] top-[14rem] h-[18rem] w-[18rem] rounded-full bg-rose-200 opacity-40 blur-3xl" />
      <div className="absolute bottom-[-8rem] left-[-6rem] h-[20rem] w-[20rem] rounded-full bg-lime-200 opacity-40 blur-3xl" />
    </div>
  );
}

/* ——— Iconos inline ——— */
function LeafIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21s5-5 9-9 9-9 9-9c0 0 0 9-9 18-3 3-9 0-9 0Z" />
    </svg>
  );
}

function RecycleIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7.5 7 4 12l3.5 5M16.5 7 20 12l-3.5 5M9 20h6M9 4h6" />
    </svg>
  );
}

function DropIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 8.98h3.96V21H3V8.98ZM10.48 8.98H14.3v1.66h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.77 2.65 4.77 6.09V21H19v-5.27c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.38-2.03 2.8V21h-3.73V8.98Z" />
    </svg>
  );
}

function ArrowUpRight({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}
