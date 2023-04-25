import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Breadcrumb from "primevue/breadcrumb";
import Checkbox from "primevue/checkbox";
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import Toast from "primevue/toast";
import TabMenu from "primevue/tabmenu";
import DataTable from "primevue/datatable";
import DataView from "primevue/dataview";
import Column from "primevue/column";
import Avatar from "primevue/avatar";
import MultiSelect from "primevue/multiselect";
import ProgressSpinner from "primevue/progressspinner";
import Chart from "primevue/chart";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Breadcrumb", Breadcrumb);
  nuxtApp.vueApp.component("Checkbox", Checkbox);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("Card", Card);
  nuxtApp.vueApp.component("Toast", Toast);
  nuxtApp.vueApp.component("TabMenu", TabMenu);
  nuxtApp.vueApp.component("DataTable", DataTable);
  nuxtApp.vueApp.component("DataView", DataView);
  nuxtApp.vueApp.component("Column", Column);
  nuxtApp.vueApp.component("Avatar", Avatar);
  nuxtApp.vueApp.component("MultiSelect", MultiSelect);
  nuxtApp.vueApp.component("ProgressSpinner", ProgressSpinner);
  nuxtApp.vueApp.component("Chart", Chart);

  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.use(ConfirmationService);
});
