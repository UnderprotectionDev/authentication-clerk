export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-24">
      <div className="container flex items-center justify-center">
        {children}
      </div>
    </section>
  );
}
