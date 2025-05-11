export default function Link({ text, href = "#" }) {
  return (
    <a
      className="transition-colors duration-200 hover:text-primary"
      href={href}
    >
      {text}
    </a>
  );
}
