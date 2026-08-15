import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesBorderGlow from '@/components/sections/features/FeaturesBorderGlow';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroSplitVerticalMarquee from '@/components/sections/hero/HeroSplitVerticalMarquee';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';
import { Globe, Layout, MessageSquare } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitVerticalMarquee
      tag="Inovação para seu negócio"
      title="Menos demanda pra sua empresa, inteligência pro seu negócio."
      description="Transformamos processos complexos em conversas ágeis. Conecte-se com seu cliente de forma inteligente e automática."
      primaryButton={{
        text: "Fale no WhatsApp",
        href: "https://wa.me/5500000000000",
      }}
      secondaryButton={{
        text: "Conheça mais",
        href: "#about",
      }}
      leftItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-background-with-low-poly-network-communications-design_1048-15812.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-particle-background_1048-11982.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-abstract-particle-design-space-nebula-background_1048-13250.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-network-communications-design-background-with-shallow-depth-field_1048-14612.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-digital-technology-background-with-lcd-design_1048-15284.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-background-with-flowing-waves-particles_1048-18061.jpg",
        },
      ]}
      rightItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/artistic-blurry-colorful-wallpaper-background_58702-10129.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-background-with-low-poly-plexus-design_1048-15841.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-geometric-shapes_23-2150979717.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/green-abstract-background_23-2151820772.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-flowing-particles-science-background-with-shallow-depth-field_1048-14039.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/create-website-layout-blank-banner_53876-132284.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="Nossa missão é impulsionar sua eficiência."
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesBorderGlow
      tag="Especialidades"
      title="Soluções que geram resultados"
      description="Tecnologia de ponta para empresas que buscam automação real e presença digital memorável."
      features={[
        {
          icon: Globe,
          title: "Criação de Sites",
          description: "Sites modernos, rápidos e focados em alta conversão.",
        },
        {
          icon: MessageSquare,
          title: "Automação WhatsApp",
          description: "Atendimento automático 24/7 que converte leads em vendas.",
        },
        {
          icon: Layout,
          title: "Landing Pages",
          description: "Páginas otimizadas para capturar e converter seus visitantes.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="portfolio" data-section="portfolio">
    <SectionErrorBoundary name="portfolio">
          <FeaturesRevealCardsBento
      tag="Portfólio"
      title="Projetos de impacto"
      description="Veja como ajudamos empresas a transformar sua presença digital."
      items={[
        {
          title: "Site Corporativo",
          description: "Portal completo para indústria.",
          href: "#",
          imageSrc: "https://images.pexels.com/photos/7654168/pexels-photo-7654168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940&id=7654168",
        },
        {
          title: "Processo automatizado de leads.",
          description: "Automação integrada ao sistema.",
          href: "#",
          imageSrc: "https://images.pexels.com/photos/9784240/pexels-photo-9784240.jpeg?auto=compress&cs=tinysrgb&h=650&w=940&id=9784240",
        },
        {
          title: "Landing Page SaaS",
          description: "Alta conversão para leads.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/female-web-designer-office_23-2149749873.jpg",
        },
        {
          title: "E-commerce Premium",
          description: "Loja virtual de alta performance.",
          href: "#",
          imageSrc: "https://images.pexels.com/photos/5560606/pexels-photo-5560606.jpeg?auto=compress&cs=tinysrgb&h=650&w=940&id=5560606",
        },
        {
          title: "Portal de Serviços",
          description: "Gestão de agendamentos.",
          href: "#",
          imageSrc: "https://images.pexels.com/photos/8439002/pexels-photo-8439002.jpeg?auto=compress&cs=tinysrgb&h=650&w=940&id=8439002",
        },
        {
          title: "Blog Tech",
          description: "Conteúdo especializado e moderno.",
          href: "#",
          imageSrc: "https://images.pexels.com/photos/4389465/pexels-photo-4389465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940&id=4389465",
        },
        {
          title: "Dashboard Analítico",
          description: "Visualização de dados automatizada.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/research-analysis-ideas-strategy-information-concept_53876-123886.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="how-it-works" data-section="how-it-works">
    <SectionErrorBoundary name="how-it-works">
          <FaqSplitMedia
      tag="Processo"
      title="Como trabalhamos"
      description="Simples, rápido e eficiente para o seu sucesso."
      items={[
        {
          question: "1. Diagnóstico",
          answer: "Entendemos seu modelo de negócio e principais gargalos.",
        },
        {
          question: "2. Desenvolvimento",
          answer: "Implementamos seu site ou sistema de automação.",
        },
        {
          question: "3. Otimização",
          answer: "Testamos e refinamos para máxima performance.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/joyful-businesswoman-talking-with-remote-friend-online-videocall_482257-77662.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialRatingCards
      tag="Depoimentos"
      title="O que dizem sobre nós"
      description="Resultados reais para empresas que confiam na nossa automação."
      testimonials={[
        {
          name: "Wendryll Moraes",
          role: "CEO",
          quote: "A automação dobrou nossos leads.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/picture-attractive-caucasian-man-with-money-pocket_176420-7260.jpg",
        },
        {
          name: "João Mello Souza",
          role: "Marketing",
          quote: "O site ficou impecável e muito rápido.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-smiling-stylish-hipster-lambersexual-modelsexy-modern-man-dressed-elegant-suit-fashion-male-posing-studio-near-blue-wall_158538-21048.jpg",
        },
        {
          name: "Carlos Lima",
          role: "Founder",
          quote: "Atendimento nota 10, muito ágeis.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-bearded-african-american-businessman-brown-classic-jacket-isolated-dark-background_613910-6551.jpg",
        },
        {
          name: "Beatriz Reis",
          role: "Gerente",
          quote: "Processo transparente e muito eficiente.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-businessman-suit-looking-camera-meeting_1163-4654.jpg",
        },
        {
          name: "Pedro Santos",
          role: "Engenheiro",
          quote: "Excelente entrega de tecnologia.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Inicie a conversa"
      text="Pronto para automatizar seu atendimento e elevar sua presença digital?"
      primaryButton={{
        text: "Chamar no WhatsApp",
        href: "https://wa.me/5500000000000",
      }}
      secondaryButton={{
        text: "Fale por Email",
        href: "mailto:contato@esqipi.com.br",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
