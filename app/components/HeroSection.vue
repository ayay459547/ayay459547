<script setup lang="ts"></script>

<template>
  <section
    class="relative min-h-screen flex items-center pt-20 overflow-hidden"
  >
    <!-- Background Assets -->
    <div class="hero-bg-mask"></div>
    <div class="hero-gradient-overlay"></div>
    <div class="halo-1"></div>
    <div class="halo-2"></div>
    <canvas id="three-canvas"></canvas>

    <div
      class="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center"
    >
      <!-- Hero Text -->
      <div class="hero-content space-y-8 max-w-2xl">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-100 bg-white/80 text-brand-700 text-sm font-medium animate-fade-in-up"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-brand-500"
            ></span>
          </span>
          開放新工作機會 | 尋找前端職位
        </div>

        <h1
          class="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900"
        >
          建構具備商業價值的<br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500"
          >
            現代化前端應用
          </span>
        </h1>

        <p class="text-lg text-slate-600 leading-relaxed font-light">
          專注於前端開發工程。擁有
          <strong class="font-medium text-slate-900">
            物流業、製造業與金融保險業
          </strong>
          的深厚實戰經驗，擅長運用 Vue, React
          等現代化技術棧，為複雜業務邏輯打造極致流暢的使用者體驗。
        </p>

        <div class="flex flex-wrap gap-4 pt-4">
          <a
            href="#projects"
            class="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white transition-all bg-brand-600 rounded-full hover:bg-brand-700 hover:shadow-glow hover:-translate-y-1"
          >
            查看過往專案
            <IconifyIcon icon="ph:arrow-right-bold" class="ml-2"></IconifyIcon>
          </a>
          <a
            href="#contact"
            class="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-slate-700 transition-all bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:text-brand-600 hover:-translate-y-1 shadow-sm"
          >
            下載完整履歷
            <IconifyIcon
              icon="ph:download-simple-bold"
              class="ml-2"
            ></IconifyIcon>
          </a>
        </div>
      </div>

      <!-- Hero Visual / Floating Card -->
      <div class="hidden lg:block relative hero-visual perspective-1000">
        <div
          class="glass-card rounded-2xl p-6 transform rotate-y-[-10deg] rotate-x-[5deg] shadow-soft relative overflow-hidden group"
        >
          <div
            class="absolute inset-0 bg-gradient-to-tr from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>
          <div class="flex items-center justify-between mb-6">
            <div class="flex space-x-2">
              <div class="w-3 h-3 rounded-full bg-red-400"></div>
              <div class="w-3 h-3 rounded-full bg-amber-400"></div>
              <div class="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div class="text-xs text-slate-400 font-mono">portfolio.ts</div>
          </div>
          <div class="space-y-4 font-mono text-sm text-slate-600">
            <p>
              <span class="text-pink-500">const</span>
              <span class="text-blue-500 pl-2">engineer</span> = {
            </p>
            <p class="pl-4">
              name: <span class="text-green-600">'Chen Chan Hsieh'</span>,
            </p>
            <p class="pl-4">
              role: <span class="text-green-600">'Frontend Developer'</span>,
            </p>
            <p class="pl-4">
              domains: [<span class="text-green-600">'Logistics'</span>,
              <span class="text-green-600">'Manufacturing'</span>,
              <span class="text-green-600">'Finance'</span>],
            </p>
            <p class="pl-4">
              stack: [<span class="text-green-600">'Vue'</span>,
              <span class="text-green-600">'React'</span>,
              <span class="text-green-600">'Vite'</span>,
              <span class="text-green-600">'Scss'</span>,
              <span class="text-green-600">'TS'</span>],
            </p>
            <p class="pl-4">
              deliverValue: <span class="text-blue-500">function</span>() {
            </p>
            <p class="pl-8 text-slate-400">
              // Transforming complex logic into
            </p>
            <p class="pl-8 text-slate-400">
              // clean, scalable, and intuitive UI
            </p>
            <p class="pl-8">
              <span class="text-pink-500">return</span>&nbsp;
              <span class="text-purple-500">Success</span>;
            </p>
            <p class="pl-4">}</p>
            <p>}</p>
          </div>
        </div>

        <!-- Floating badges -->
        <div
          class="absolute -right-6 top-1/4 glass px-4 py-2 rounded-xl text-sm font-medium text-slate-700 shadow-soft flex items-center gap-2 animate-[bounce_4s_infinite]"
        >
          <IconifyIcon icon="logos:vue" class="text-lg"></IconifyIcon> Vue
          Expert
        </div>
        <div
          class="absolute -left-8 bottom-1/4 glass px-4 py-2 rounded-xl text-sm font-medium text-slate-700 shadow-soft flex items-center gap-2 animate-[bounce_5s_infinite_0.5s]"
        >
          <IconifyIcon icon="logos:react" class="text-lg"></IconifyIcon> React
          Ready
        </div>
      </div>
    </div>

    <!-- SVG Wave Divider -->
    <div class="svg-wave">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </section>
</template>

<style lang="sass" scoped></style>
