import { TopBanner } from "@/components/landing/TopBanner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";

const Index = () => {
    return (
        <main className="min-h-screen bg-background relative">
            <TopBanner />
            <Navbar />

            <Hero />

            {/* Código anterior conservado como referencia:
            import { SocialProof } from "@/components/landing/SocialProof";
            import { Features } from "@/components/landing/Features";
            import { Results } from "@/components/landing/Results";
            import { FAQ } from "@/components/landing/FAQ";
            import { FinalCTA } from "@/components/landing/FinalCTA";
            import { Footer } from "@/components/landing/Footer";

            <SocialProof />
            <Features />
            <Results />
            <FAQ />
            <FinalCTA />
            <Footer />
            */}
        </main>
    );
};

export default Index;