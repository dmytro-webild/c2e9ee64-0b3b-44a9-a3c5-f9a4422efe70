import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    {
      "name": "Sobre",
      "href": "#about"
    },
    {
      "name": "Serviços",
      "href": "#services"
    },
    {
      "name": "Como Funciona",
      "href": "#how-it-works"
    },
    {
      "name": "Depoimentos",
      "href": "#testimonials"
    },
    {
      "name": "Contato",
      "href": "#contact"
    }
  ];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
          logo="MELAV Express"
          ctaButton={{
            text: "WhatsApp",
            href: "https://wa.me/5541988538503",
          }}
          navItems={navItems}
        />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
          columns={[
            {
              title: "MELAV Express",
              items: [
                {
                  label: "Sobre Nós",
                  href: "#about",
                },
                {
                  label: "Nossos Serviços",
                  href: "#services",
                },
                {
                  label: "Como Funciona",
                  href: "#how-it-works",
                },
              ],
            },
            {
              title: "Redes Sociais",
              items: [
                {
                  label: "Instagram @melav.lavanderia",
                  href: "https://www.instagram.com/melav.lavanderia",
                },
                {
                  label: "WhatsApp (41) 98853-8503",
                  href: "https://wa.me/5541988538503",
                },
              ],
            },
            {
              title: "Localização",
              items: [
                {
                  label: "Av. Brasil, 1569 - Fazenda Rio Grande - PR",
                  href: "#contact",
                },
                {
                  label: "Aberto até 01:00",
                  href: "#contact",
                },
              ],
            },
          ]}
          leftText="© 2024 MELAV Lavanderia Express."
          rightText="Todos os direitos reservados."
        />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
