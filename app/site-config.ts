export const siteConfig = {
  brand: {
    name: "Own Adaa",
    homeLabel: "Own Adaa home",
    logoAlt: "Own Adaa logo",
    tagline: "Indian designer wear",
    description:
      "Indo-Western womenswear shaped through craft, sharper silhouettes, and a more editorial point of view.",
    copyright: "© 2026 Own Adaa",
  },
  metadata: {
    title: "Own Adaa | Crafted Elegance",
    description:
      "Own Adaa is an Indian designer wear label shaping handcrafted silhouettes into an editorial digital boutique experience.",
  },
  navigation: [
    ["Story", "/#story"],
    ["Collection", "/#collection"],
    ["Atelier", "/#atelier"],
    ["Shop", "/coming-soon"],
  ] as const,
  cta: {
    label: "View Collection",
    href: "/#collection",
  },
  social: {
    instagram: {
      label: "Instagram",
      href: "https://www.instagram.com/ownadaa.in/",
    },
    whatsapp: {
      label: "WhatsApp",
      href: "https://wa.me/?text=Hi%20Own%20Adaa%2C%20I%20want%20to%20explore%20the%20collection.",
    },
  },
  footer: {
    closingLine: "Designed with a sharper editorial finish.",
  },
} as const;
