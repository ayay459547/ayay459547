<script setup lang="ts">
import WorkSvg from '~/assets/svg/Work-Experience.svg?url'

</script>

<template>
  <div class="work-page">
    <h3>工作經驗 Work Experience</h3>

    <pre>
    前端工程師 - 析數智匯股份有限公司
    台北市內湖區
    2023/3~2025/5 (2年3個月)

    實戰技能：
    負責維護以 JSP 撰寫的 APS 系統畫面
    導入前端框架(Vue3 + TypeScript + SCSS)，全面翻新系統 UI提升使用者體驗與維護效率
    規劃前端開發架構，負責模組化設計、部署流程(Vite)及單元測試(Vitest)建置

    -- 工作內容 --

    製造業排程系統 (APS)：

    維護參數設定：
      排程運作的邏輯是不完全是 Hard Code 的，可依照不同客戶的需求，設定不同的排程邏輯。
    顯示排程結果：
      使用表格顯示，由於排程會定期變動(也可手動馬上排程)，會定期重新查詢最新結果。
      也可使用甘特圖的方式，從時間軸的角度顯示排程結果。
    維護基本資料：
      雖然資料大多會經由資料交換進到資料庫，也可使用 excel 上傳，或透過UI介面維護。
    優化表格 filter + sorting：
      前端提供多元搜尋方式，再加上多個欄位排序(有使用數字標示順序)。
    系統支援 繁體中文/簡體中文/英文：
      使用 excel 表格維護並自動轉成 json 檔，提供給 Vue 引用。
    資料校驗：
      檢驗使用者輸入的資料是否正確，例如不要有特殊符號。
    文件撰寫：
      寫開發文件，開發目的及需求，API格式，架構設計。
    </pre>

    <hr />
    <br />

    <pre>
    軟體工程師 - 大禾資訊有限公司
    桃園市桃園區
    2021/7~2022/8 (1年2個月)

    實戰技能：
    使用 adobeXD 設計畫面
    前端使用 Vue CLI, Vue2, SCSS 開發介面
    後端使用 PHP, mariadb 開發API

    -- 工作內容 --

    物流業ERP系統：

    基本資料維護：
      依照現有的系統架構，開發新頁面。
    討論 UI/UX 設計：
      客戶需求下來時，與部門的同事一起討倫功能的介面設計，功能操作流程。
    報表製作：
      透過API取得後端工程師運算的資料，顯示於頁面。
      (資產負債表、現金流量表、損益表......等)
    功能修正：
      修正測試人員回報的功能錯誤。
    </pre>

    <img :src="WorkSvg" alt="svg" />
  </div>
</template>

<style lang="scss" scoped>
.work-page {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  padding: 2rem;
  font-size: 1.3rem;

  img {
    width: 240px;
    height: auto;
    position: absolute;
    bottom: 1rem;
    right: 1rem;

    @media screen and (max-width: 768px) {
      width: 160px;
    }
  }
}
</style>

