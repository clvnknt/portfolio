import Container from "@/components/ui/container";

const footerLinks = ["About", "Privacy Policy", "Licensing", "Contact"];

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:text-foreground">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((label) => (
            <li key={label}>
              <a href="#" className="hover:text-foreground">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
