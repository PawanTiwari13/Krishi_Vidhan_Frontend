import { Sprout, ShieldCheck, Truck, Layers } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Top Navbar */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-krishi-600 flex items-center justify-center text-white">
              <Sprout className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              Krishi Vidhan
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
            <span className="px-2.5 py-1 rounded-full bg-krishi-50 text-krishi-700 border border-krishi-100 text-xs font-semibold">
              Phase 1 Foundation Active
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-krishi-900 to-krishi-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-krishi-100 text-xs font-medium backdrop-blur-sm">
            Next-Gen Agricultural Multi-Sided Marketplace
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
            Empowering Farmers with Verified Inputs &amp; Direct Market Access
          </h1>
          <p className="text-krishi-100 max-w-2xl mx-auto text-base sm:text-lg">
            Built on a decoupled Modular Monolith architecture with NestJS,
            Next.js 15, Prisma ORM, and PostgreSQL.
          </p>
        </div>
      </section>

      {/* Architecture Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-krishi-50 text-krishi-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-slate-900">
              Zero-Trust Security &amp; RBAC
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Stateless JWT claims, strict DTO validation pipes, and server-side
              ownership verification eliminating IDOR and privilege escalation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-krishi-50 text-krishi-700 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-slate-900">
              Optimistic Inventory Locking
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Atomic PostgreSQL transactions with version counters prevent
              negative inventory race conditions and restore stock on order
              cancellation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-krishi-50 text-krishi-700 flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-slate-900">
              Regional Discovery &amp; Settlement
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Hierarchical State and Division filtering with tamper-proof
              Razorpay payment verification and idempotent webhook handlers.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

