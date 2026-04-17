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
  media: {
    unoptimizedImages: true,
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
      label: "DM to Order",
      href: "https://instagram.com/m/ownadaa.in",
    },
    whatsapp: {
      label: "Order on WhatsApp",
      href: "https://api.whatsapp.com/send/?phone=919217728660&text=Hi+I+want+to+place+an+order&type=phone_number&app_absent=0",
    },
  },
  footer: {
    orderLine: "Place your order on WhatsApp or send us a DM on Instagram.",
    closingLine: "Designed with a sharper editorial finish.",
  },
} as const;
