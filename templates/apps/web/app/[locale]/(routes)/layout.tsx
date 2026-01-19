import { ReactNode } from 'react';
import { Nav } from '@/app/components/layout/Nav.component';
import { Footer } from '@/app/components/layout/Footer.component';

export default function RoutesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
