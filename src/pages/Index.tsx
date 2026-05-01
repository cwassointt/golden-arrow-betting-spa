import { TopBanner } from "@/components/landing/TopBanner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
/* Importa SocialProof si creaste el archivo de los "100,000 miembros" */
import { SocialProof } from "@/components/landing/SocialProof";
import { Features } from "@/components/landing/Features";
import { Results } from "@/components/landing/Results";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
    return (
        <main className="min-h-screen bg-background relative">
            {/* 1. Carrusel fijo en la parte superior */}
            <TopBanner />

            {/* 2. Navegación flotante */}
            <Navbar />

            {/* 3. Sección principal (Degradado rosado) */}
            <Hero />

            {/* 4. Prueba Social (Blanco - Opcional si usaste el archivo) */}
            <SocialProof />

            {/* 5. Por qué mi método es diferente (Fondo crema/blanco) */}
            <Features />

            {/* 6. Resultados (Degradado rosado) */}
            <Results />

            {/* 7. Preguntas Frecuentes (Blanco - Crea la separación simétrica perfecta) */}
            <FAQ />

            {/* 8. Llamada a la acción final (Degradado rosado intenso) */}
            <FinalCTA />

            {/* 9. Pie de página (Oscuro/Negro para cerrar) */}
            <Footer />
        </main>
    );
};

export default Index;