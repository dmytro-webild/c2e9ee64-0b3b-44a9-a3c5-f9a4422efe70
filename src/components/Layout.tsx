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
    "name": "Portfólio",
    "href": "#portfolio"
  },
  {
    "name": "Contato",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "How It Works",
    "href": "#how-it-works"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  }
];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="ESQIPI"
      ctaButton={{
        text: "WhatsApp",
        href: "https://wa.me/5500000000000",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Empresa",
          items: [
            {
              label: "Sobre",
              href: "#about",
            },
            {
              label: "Serviços",
              href: "#services",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "LinkedIn",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Política de Privacidade",
              href: "#",
            },
          ],
        },
      ]}
      leftText="© 2024 ESQIPI Tecnologia."
      rightText="Todos os direitos reservados."
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
