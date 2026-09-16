export default function Container({ as: Element = "div", className = "", children }) {
  return (
    <Element
      className={`mx-auto w-full max-w-[1664px] px-5 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </Element>
  );
}
