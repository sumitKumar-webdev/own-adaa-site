export function scrollToSection(targetId: string) {
  if (typeof document === "undefined") {
    return false;
  }

  if (targetId === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return true;
  }

  const target = document.getElementById(targetId);

  if (!target) {
    return false;
  }

  const header = document.querySelector("header");
  const headerOffset = header instanceof HTMLElement ? header.offsetHeight + 20 : 20;
  const targetTop = window.scrollY + target.getBoundingClientRect().top - headerOffset;

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: "smooth",
  });

  return true;
}
