<script setup lang="ts"></script>

<template>
  <section id="expertise" class="py-24 relative bg-white">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center max-w-2xl mx-auto mb-16 js-fade-up">
        <h2
          class="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3"
        >
          領域專長與價值
        </h2>
        <h3 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          不只是寫程式，更專注於解決商業痛點
        </h3>
        <p class="text-slate-600">
          透過前端技術整合複雜的後端服務，為不同產業打造直覺且高效的系統介面。
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div
          class="tilt-card glass-card rounded-2xl p-1 overflow-hidden group js-fade-up"
        >
          <div
            class="bg-white rounded-xl h-full p-6 relative z-10 transition-colors group-hover:bg-slate-50/50"
          >
            <div class="tilt-content">
              <div class="h-48 rounded-lg overflow-hidden mb-6 relative">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                  alt="Logistics and Manufacturing"
                  class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"
                ></div>
                <div
                  class="absolute bottom-4 left-4 text-white font-medium flex gap-2"
                >
                  <span
                    class="bg-brand-500/80 backdrop-blur-sm px-2 py-1 rounded text-xs"
                  >
                    物流業
                  </span>
                  <span
                    class="bg-indigo-500/80 backdrop-blur-sm px-2 py-1 rounded text-xs"
                  >
                    製造業
                  </span>
                </div>
              </div>
              <h4 class="text-xl font-bold text-slate-900 mb-2">
                跨領域業務系統整合
              </h4>
              <p class="text-slate-600 text-sm leading-relaxed">
                深入理解物流追蹤、倉儲管理與製造業 ERP
                系統邏輯，將龐雜的數據轉化為使用者友善的操作介面，提升內部作業效率與精準度。
              </p>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="tilt-card glass-card rounded-2xl p-1 overflow-hidden group js-fade-up delay-100"
        >
          <div
            class="bg-white rounded-xl h-full p-6 relative z-10 transition-colors group-hover:bg-slate-50/50"
          >
            <div class="tilt-content">
              <div class="h-48 rounded-lg overflow-hidden mb-6 relative">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
                  alt="Finance and Insurance"
                  class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"
                ></div>
                <div
                  class="absolute bottom-4 left-4 text-white font-medium flex gap-2"
                >
                  <span
                    class="bg-emerald-500/80 backdrop-blur-sm px-2 py-1 rounded text-xs"
                  >
                    金融保險業
                  </span>
                </div>
              </div>
              <h4 class="text-xl font-bold text-slate-900 mb-2">
                嚴謹的金融保險平台
              </h4>
              <p class="text-slate-600 text-sm leading-relaxed">
                具備處理高敏感數據與複雜表單狀態的經驗，確保金融與保險申報流程的安全、穩定及合規性，打造高信賴感的使用體驗。
              </p>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="tilt-card glass-card rounded-2xl p-1 overflow-hidden group js-fade-up delay-200"
        >
          <div
            class="bg-white rounded-xl h-full p-6 relative z-10 transition-colors group-hover:bg-slate-50/50"
          >
            <div class="tilt-content">
              <div class="h-48 rounded-lg overflow-hidden mb-6 relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                  alt="Modern Tech Stack"
                  class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"
                ></div>
                <div
                  class="absolute bottom-4 left-4 text-white font-medium flex gap-2"
                >
                  <span
                    class="bg-sky-500/80 backdrop-blur-sm px-2 py-1 rounded text-xs"
                  >
                    效能優化
                  </span>
                  <span
                    class="bg-purple-500/80 backdrop-blur-sm px-2 py-1 rounded text-xs"
                  >
                    現代化架構
                  </span>
                </div>
              </div>
              <h4 class="text-xl font-bold text-slate-900 mb-2">
                高效能的前端架構
              </h4>
              <p class="text-slate-600 text-sm leading-relaxed">
                善用 Vite 建置工具、模組化開發與 TypeScript
                型別保護，不僅交付高品質產品，更為團隊帶來易於維護與擴展的程式碼基底。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped></style>
