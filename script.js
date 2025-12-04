// --- CONSTANTES DE STORAGE ---
const STORAGE = {
  EXPENSES: "accounting_pro_expenses_v1",
  BUDGET: "accounting_pro_budget_v1",
  PROFILE: "accounting_pro_profile_v1",
  LANGUAGE: "accounting_pro_language_v1",
  LOGGED_IN: "accounting_pro_logged_in_v1",
};

// --- ESTADO GLOBAL ---
let expenses = [];
let budgetItems = [];
let profile = null;
let currentLanguage = "es";
let isLoggedIn = false;

// --- TEXTOS PARA I18N ---
const i18nTexts = {
  es: {
    appName: "Accounting Pro",
    slogan: "Eleva tus finanzas al próximo nivel",
    languageLabel: "Idioma",
    tabDashboard: "Resumen",
    tabExpenses: "Gastos diarios",
    tabBudget: "Presupuesto mensual",
    tabProfile: "Perfil",
    dashboardTitle: "Resumen general",
    dashboardSubtitle: "Un vistazo rápido a tus finanzas actuales.",
    summaryIncome: "Ingresos del mes",
    summaryExpenses: "Gastos del mes",
    summaryBalance: "Balance",
    summaryBudget: "Presupuesto fijo",
    dashboardHintTitle: "Consejo rápido",
    dashboardHintText:
      "Registra tus gastos todos los días y revisa tu presupuesto fijo una vez al mes.",
    expensesTitle: "Gastos diarios",
    expensesSubtitle:
      "Lleva un registro detallado de tus gastos e ingresos día a día.",
    expensesFormTitle: "Agregar movimiento",
    fieldDate: "Fecha",
    fieldDescription: "Descripción",
    placeholderDescription: "Ej: Gasolina, comida, peaje",
    fieldCategory: "Categoría",
    placeholderCategory: "Ej: Transporte, Comida",
    fieldType: "Tipo",
    fieldTypeSelect: "Selecciona...",
    fieldTypeIncome: "Ingreso",
    fieldTypeExpense: "Gasto",
    fieldAmount: "Monto",
    placeholderAmount: "Ej: 150.75",
    btnSaveMovement: "Guardar movimiento",
    btnClearExpenses: "Borrar todos los movimientos",
    expensesListTitle: "Historial",
    expensesStorageNote:
      "Los datos se guardan solo en este dispositivo (navegador).",
    colDate: "Fecha",
    colDescription: "Descripción",
    colCategory: "Categoría",
    colType: "Tipo",
    colAmount: "Monto",
    budgetTitle: "Presupuesto mensual",
    budgetSubtitle:
      "Define tus gastos fijos para tener claridad de cuánto necesitas cada mes.",
    budgetFormTitle: "Agregar gasto fijo",
    fieldBudgetName: "Nombre del gasto",
    placeholderBudgetName: "Ej: Renta, Seguro del camión",
    fieldBudgetAmount: "Monto mensual",
    placeholderBudgetAmount: "Ej: 800.00",
    btnAddBudgetItem: "Agregar al presupuesto",
    btnClearBudget: "Borrar presupuesto",
    budgetListTitle: "Gastos fijos",
    budgetTotalLabel: "Total del presupuesto mensual:",
    colBudgetName: "Gasto",
    colBudgetAmount: "Monto",
    profileTitle: "Perfil y registro",
    profileSubtitle:
      "Registra tus datos para personalizar tu experiencia en Accounting Pro.",
    profileFormTitle: "Datos personales",
    fieldName: "Nombre completo",
    placeholderName: "Ej: Farlin Encarnación",
    fieldEmail: "Correo electrónico",
    placeholderEmail: "ejemplo@email.com",
    fieldPassword: "Contraseña",
    placeholderPassword: "Mínimo 6 caracteres",
    fieldBirthdate: "Fecha de nacimiento",
    fieldOccupation: "Ocupación",
    placeholderOccupation: "Ej: Truck driver, emprendedor",
    fieldCountry: "País / Ciudad",
    placeholderCountry: "Ej: Elizabeth, NJ - USA",
    btnSaveProfile: "Guardar perfil",
    profileSecurityNote:
      "Esta versión guarda tus datos solo en este dispositivo. No se envían a ningún servidor.",
    profileSummaryTitle: "Resumen de tu perfil",
    profileEmpty:
      "Aún no has guardado tu perfil. Completa el formulario para verlo aquí.",
    profileNameLabel: "Nombre:",
    profileEmailLabel: "Correo:",
    profileBirthLabel: "Fecha de nacimiento:",
    profileOccupationLabel: "Ocupación:",
    profileCountryLabel: "País / Ciudad:",
    expensesEmpty: "No hay movimientos registrados.",
    budgetEmpty: "No hay gastos fijos en el presupuesto.",
    deleteRow: "Eliminar",
  },
  en: {
    appName: "Accounting Pro",
    slogan: "Take your finances to the next level",
    languageLabel: "Language",
    tabDashboard: "Dashboard",
    tabExpenses: "Daily expenses",
    tabBudget: "Monthly budget",
    tabProfile: "Profile",
    dashboardTitle: "Overview",
    dashboardSubtitle: "A quick view of your current finances.",
    summaryIncome: "Monthly income",
    summaryExpenses: "Monthly expenses",
    summaryBalance: "Balance",
    summaryBudget: "Fixed budget",
    dashboardHintTitle: "Quick tip",
    dashboardHintText:
      "Record your expenses every day and review your fixed budget once a month.",
    expensesTitle: "Daily expenses",
    expensesSubtitle:
      "Keep a detailed record of your daily expenses and income.",
    expensesFormTitle: "Add transaction",
    fieldDate: "Date",
    fieldDescription: "Description",
    placeholderDescription: "E.g. Gas, food, tolls",
    fieldCategory: "Category",
    placeholderCategory: "E.g. Transport, Food",
    fieldType: "Type",
    fieldTypeSelect: "Select...",
    fieldTypeIncome: "Income",
    fieldTypeExpense: "Expense",
    fieldAmount: "Amount",
    placeholderAmount: "E.g. 150.75",
    btnSaveMovement: "Save transaction",
    btnClearExpenses: "Delete all transactions",
    expensesListTitle: "History",
    expensesStorageNote: "Data is stored only on this device (browser).",
    colDate: "Date",
    colDescription: "Description",
    colCategory: "Category",
    colType: "Type",
    colAmount: "Amount",
    budgetTitle: "Monthly budget",
    budgetSubtitle:
      "Define your fixed expenses to know how much you need each month.",
    budgetFormTitle: "Add fixed expense",
    fieldBudgetName: "Expense name",
    placeholderBudgetName: "E.g. Rent, Truck insurance",
    fieldBudgetAmount: "Monthly amount",
    placeholderBudgetAmount: "E.g. 800.00",
    btnAddBudgetItem: "Add to budget",
    btnClearBudget: "Clear budget",
    budgetListTitle: "Fixed expenses",
    budgetTotalLabel: "Total monthly budget:",
    colBudgetName: "Expense",
    colBudgetAmount: "Amount",
    profileTitle: "Profile & registration",
    profileSubtitle:
      "Register your data to personalize your experience in Accounting Pro.",
    profileFormTitle: "Personal data",
    fieldName: "Full name",
    placeholderName: "E.g. Farlin Encarnación",
    fieldEmail: "Email",
    placeholderEmail: "example@email.com",
    fieldPassword: "Password",
    placeholderPassword: "At least 6 characters",
    fieldBirthdate: "Birth date",
    fieldOccupation: "Occupation",
    placeholderOccupation: "E.g. Truck driver, entrepreneur",
    fieldCountry: "Country / City",
    placeholderCountry: "E.g. Elizabeth, NJ - USA",
    btnSaveProfile: "Save profile",
    profileSecurityNote:
      "This version stores your data only on this device. It is not sent to any server.",
    profileSummaryTitle: "Your profile summary",
    profileEmpty:
      "You haven't saved your profile yet. Complete the form to see it here.",
    profileNameLabel: "Name:",
    profileEmailLabel: "Email:",
    profileBirthLabel: "Birth date:",
    profileOccupationLabel: "Occupation:",
    profileCountryLabel: "Country / City:",
    expensesEmpty: "No transactions registered.",
    budgetEmpty: "No fixed expenses in your budget.",
    deleteRow: "Delete",
  },
};

// --- UTILIDADES ---
function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

function saveToStorage() {
  localStorage.setItem(STORAGE.EXPENSES, JSON.stringify(expenses));
  localStorage.setItem(STORAGE.BUDGET, JSON.stringify(budgetItems));
  localStorage.setItem(STORAGE.PROFILE, JSON.stringify(profile));
  localStorage.setItem(STORAGE.LANGUAGE, currentLanguage);
  localStorage.setItem(STORAGE.LOGGED_IN, JSON.stringify(isLoggedIn));
}

function loadFromStorage() {
  const exp = localStorage.getItem(STORAGE.EXPENSES);
  const bud = localStorage.getItem(STORAGE.BUDGET);
  const prof = localStorage.getItem(STORAGE.PROFILE);
  const lang = localStorage.getItem(STORAGE.LANGUAGE);
  const logged = localStorage.getItem(STORAGE.LOGGED_IN);

  expenses = exp ? JSON.parse(exp) : [];
  budgetItems = bud ? JSON.parse(bud) : [];
  profile = prof ? JSON.parse(prof) : null;
  currentLanguage = lang || "es";
  isLoggedIn = logged ? JSON.parse(logged) : false;
}

// --- I18N ---
function applyLanguage(lang) {
  currentLanguage = lang;
  const dict = i18nTexts[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.placeholder = dict[key];
  });

  if (lang === "es") {
    document.title = "Accounting Pro - Eleva tus finanzas al próximo nivel";
  } else {
    document.title = "Accounting Pro - Take your finances to the next level";
  }

  renderExpensesTable();
  renderBudgetTable();
  renderProfileSummary();
  saveToStorage();
}

// --- PANTALLAS (AUTH / APP) ---
function showApp() {
  const authScreen = document.getElementById("auth-screen");
  const appScreen = document.getElementById("app-screen");
  authScreen.classList.add("hidden");
  appScreen.classList.remove("hidden");
  isLoggedIn = true;
  saveToStorage();
  renderDashboard();
}

function showAuthStart() {
  const authScreen = document.getElementById("auth-screen");
  const appScreen = document.getElementById("app-screen");
  appScreen.classList.add("hidden");
  authScreen.classList.remove("hidden");
  authScreen.classList.remove("mode-login", "mode-signup");
  authScreen.classList.add("mode-start");
  isLoggedIn = false;
  saveToStorage();
}

// --- PESTAÑAS APP ---
function setupTabs() {
  const buttons = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");

      buttons.forEach((b) => b.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(tab).classList.add("active");
    });
  });
}

// --- DASHBOARD ---
function renderDashboard() {
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();

  let incomeMonth = 0;
  let expenseMonth = 0;

  expenses.forEach((e) => {
    const d = e.date ? new Date(e.date) : null;
    const sameMonth = d && d.getMonth() === month && d.getFullYear() === year;
    if (sameMonth) {
      if (e.type === "income") incomeMonth += e.amount;
      if (e.type === "expense") expenseMonth += e.amount;
    }
  });

  const budgetTotal = budgetItems.reduce((acc, item) => acc + item.amount, 0);
  const balance = incomeMonth - expenseMonth - budgetTotal;

  document.getElementById("dash-income").textContent = formatCurrency(incomeMonth);
  document.getElementById("dash-expenses").textContent = formatCurrency(expenseMonth);
  document.getElementById("dash-budget").textContent = formatCurrency(budgetTotal);

  const balanceEl = document.getElementById("dash-balance");
  balanceEl.textContent = formatCurrency(balance);
  balanceEl.classList.remove("positive", "negative");
  if (balance > 0) balanceEl.classList.add("positive");
  if (balance < 0) balanceEl.classList.add("negative");
}

// --- GASTOS DIARIOS ---
function renderExpensesTable() {
  const tbody = document.getElementById("expenses-body");
  const dict = i18nTexts[currentLanguage];
  tbody.innerHTML = "";

  if (!expenses.length) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 6;
    td.style.textAlign = "center";
    td.style.opacity = "0.7";
    td.textContent = dict.expensesEmpty;
    tr.appendChild(td);
    tbody.appendChild(tr);
    return;
  }

  expenses.forEach((e) => {
    const tr = document.createElement("tr");

    const tdDate = document.createElement("td");
    tdDate.textContent = e.date || "-";

    const tdDesc = document.createElement("td");
    tdDesc.textContent = e.description;

    const tdCat = document.createElement("td");
    tdCat.textContent = e.category || "-";

    const tdType = document.createElement("td");
    tdType.innerHTML =
      e.type === "income"
        ? `<span class="badge-income">${dict.fieldTypeIncome}</span>`
        : `<span class="badge-expense">${dict.fieldTypeExpense}</span>`;

    const tdAmount = document.createElement("td");
    tdAmount.classList.add("amount-cell");
    tdAmount.textContent = formatCurrency(e.amount);

    const tdAction = document.createElement("td");
    const btnDel = document.createElement("button");
    btnDel.className = "link-button";
    btnDel.textContent = dict.deleteRow;
    btnDel.addEventListener("click", () => deleteExpense(e.id));
    tdAction.appendChild(btnDel);

    tr.appendChild(tdDate);
    tr.appendChild(tdDesc);
    tr.appendChild(tdCat);
    tr.appendChild(tdType);
    tr.appendChild(tdAmount);
    tr.appendChild(tdAction);

    tbody.appendChild(tr);
  });
}

function deleteExpense(id) {
  expenses = expenses.filter((e) => e.id !== id);
  saveToStorage();
  renderExpensesTable();
  renderDashboard();
}

function setupExpensesForm() {
  const form = document.getElementById("expense-form");
  const clearBtn = document.getElementById("clear-expenses");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const date = document.getElementById("exp-date").value;
    const description = document.getElementById("exp-description").value.trim();
    const category = document.getElementById("exp-category").value.trim();
    const type = document.getElementById("exp-type").value;
    const amountValue = parseFloat(document.getElementById("exp-amount").value);

    if (!description || !type || isNaN(amountValue) || amountValue <= 0) {
      alert(
        currentLanguage === "es"
          ? "Completa todos los campos obligatorios con valores válidos."
          : "Please fill in all required fields with valid values."
      );
      return;
    }

    const newExp = {
      id: Date.now(),
      date,
      description,
      category,
      type,
      amount: amountValue,
    };

    expenses.unshift(newExp);
    form.reset();
    saveToStorage();
    renderExpensesTable();
    renderDashboard();
  });

  clearBtn.addEventListener("click", () => {
    if (
      expenses.length &&
      confirm(
        currentLanguage === "es"
          ? "¿Seguro que quieres borrar todos los movimientos?"
          : "Are you sure you want to delete all transactions?"
      )
    ) {
      expenses = [];
      saveToStorage();
      renderExpensesTable();
      renderDashboard();
    }
  });
}

// --- PRESUPUESTO ---
function renderBudgetTable() {
  const tbody = document.getElementById("budget-body");
  const totalEl = document.getElementById("budget-total");
  const dict = i18nTexts[currentLanguage];
  tbody.innerHTML = "";

  if (!budgetItems.length) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 3;
    td.style.textAlign = "center";
    td.style.opacity = "0.7";
    td.textContent = dict.budgetEmpty;
    tr.appendChild(td);
    tbody.appendChild(tr);
    totalEl.textContent = formatCurrency(0);
    return;
  }

  let total = 0;

  budgetItems.forEach((item) => {
    total += item.amount;
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = item.name;

    const tdAmount = document.createElement("td");
    tdAmount.classList.add("amount-cell");
    tdAmount.textContent = formatCurrency(item.amount);

    const tdAction = document.createElement("td");
    const btnDel = document.createElement("button");
    btnDel.className = "link-button";
    btnDel.textContent = dict.deleteRow;
    btnDel.addEventListener("click", () => deleteBudgetItem(item.id));
    tdAction.appendChild(btnDel);

    tr.appendChild(tdName);
    tr.appendChild(tdAmount);
    tr.appendChild(tdAction);

    tbody.appendChild(tr);
  });

  totalEl.textContent = formatCurrency(total);
}

function deleteBudgetItem(id) {
  budgetItems = budgetItems.filter((b) => b.id !== id);
  saveToStorage();
  renderBudgetTable();
  renderDashboard();
}

function setupBudgetForm() {
  const form = document.getElementById("budget-form");
  const clearBtn = document.getElementById("clear-budget");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("bud-name").value.trim();
    const amountValue = parseFloat(document.getElementById("bud-amount").value);

    if (!name || isNaN(amountValue) || amountValue <= 0) {
      alert(
        currentLanguage === "es"
          ? "Ingresa un nombre de gasto y un monto válido."
          : "Enter a valid expense name and amount."
      );
      return;
    }

    const newItem = {
      id: Date.now(),
      name,
      amount: amountValue,
    };

    budgetItems.push(newItem);
    form.reset();
    saveToStorage();
    renderBudgetTable();
    renderDashboard();
  });

  clearBtn.addEventListener("click", () => {
    if (
      budgetItems.length &&
      confirm(
        currentLanguage === "es"
          ? "¿Seguro que quieres borrar todo el presupuesto?"
          : "Are you sure you want to clear the entire budget?"
      )
    ) {
      budgetItems = [];
      saveToStorage();
      renderBudgetTable();
      renderDashboard();
    }
  });
}

// --- PERFIL ---
function renderProfileSummary() {
  const container = document.getElementById("profile-summary");
  const dict = i18nTexts[currentLanguage];

  container.innerHTML = "";

  if (!profile) {
    const p = document.createElement("p");
    p.textContent = dict.profileEmpty;
    container.appendChild(p);
    return;
  }

  const dl = document.createElement("dl");

  function addRow(label, value) {
    if (!value) return;
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = label;
    dd.textContent = value;
    dl.appendChild(dt);
    dl.appendChild(dd);
  }

  addRow(dict.profileNameLabel, profile.name);
  addRow(dict.profileEmailLabel, profile.email);
  addRow(dict.profileBirthLabel, profile.birth);
  addRow(dict.profileOccupationLabel, profile.occupation);
  addRow(dict.profileCountryLabel, profile.country);

  container.appendChild(dl);
}

function setupProfileForm() {
  const form = document.getElementById("profile-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("prof-name").value.trim();
    const email = document.getElementById("prof-email").value.trim();
    const password = document.getElementById("prof-password").value.trim();
    const birth = document.getElementById("prof-birth").value;
    const occupation = document.getElementById("prof-occupation").value.trim();
    const country = document.getElementById("prof-country").value.trim();

    if (!name || !email || !password || password.length < 6) {
      alert(
        currentLanguage === "es"
          ? "Ingresa nombre, correo y una contraseña de al menos 6 caracteres."
          : "Enter name, email and a password with at least 6 characters."
      );
      return;
    }

    profile = { name, email, password, birth, occupation, country };
    saveToStorage();
    renderProfileSummary();

    alert(
      currentLanguage === "es"
        ? "Perfil guardado correctamente."
        : "Profile saved successfully."
    );
  });
}

// --- AUTENTICACIÓN: SIGN UP + LOGIN + LOGOUT ---
function setupAuth() {
  const authScreen = document.getElementById("auth-screen");

  const btnShowLogin = document.getElementById("btn-show-login");
  const btnShowSignup = document.getElementById("btn-show-signup");
  const btnBackLogin = document.getElementById("btn-back-from-login");
  const btnBackSignup = document.getElementById("btn-back-from-signup");

  btnShowLogin.addEventListener("click", () => {
    authScreen.classList.remove("mode-start", "mode-signup");
    authScreen.classList.add("mode-login");
  });

  btnShowSignup.addEventListener("click", () => {
    authScreen.classList.remove("mode-start", "mode-login");
    authScreen.classList.add("mode-signup");
  });

  btnBackLogin.addEventListener("click", () => {
    authScreen.classList.remove("mode-login");
    authScreen.classList.add("mode-start");
  });

  btnBackSignup.addEventListener("click", () => {
    authScreen.classList.remove("mode-signup");
    authScreen.classList.add("mode-start");
  });

  // SIGN UP
  const signupForm = document.getElementById("signup-form");
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("su-name").value.trim();
    const email = document.getElementById("su-email").value.trim();
    const password = document.getElementById("su-password").value.trim();
    const birth = document.getElementById("su-birth").value;
    const occupation = document.getElementById("su-occupation").value.trim();
    const country = document.getElementById("su-country").value.trim();

    if (!name || !email || !password || password.length < 6) {
      alert(
        currentLanguage === "es"
          ? "Completa nombre, email y una contraseña de al menos 6 caracteres."
          : "Fill in name, email and a password with at least 6 characters."
      );
      return;
    }

    profile = { name, email, password, birth, occupation, country };
    isLoggedIn = true;
    saveToStorage();
    showApp();
    renderProfileSummary();
    renderDashboard();
  });

  // LOGIN
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    if (!profile || profile.email !== email || profile.password !== password) {
      alert(
        currentLanguage === "es"
          ? "Credenciales incorrectas o usuario no registrado."
          : "Incorrect credentials or user not registered."
      );
      return;
    }

    isLoggedIn = true;
    saveToStorage();
    showApp();
    renderProfileSummary();
    renderDashboard();
  });

  // LOGOUT
  const btnLogout = document.getElementById("btn-logout");
  btnLogout.addEventListener("click", () => {
    showAuthStart();
  });
}

// --- INICIO ---
document.addEventListener("DOMContentLoaded", () => {
  loadFromStorage();

  setupAuth();
  setupTabs();
  setupExpensesForm();
  setupBudgetForm();
  setupProfileForm();

  const langSelect = document.getElementById("language-select");
  langSelect.value = currentLanguage;
  langSelect.addEventListener("change", (e) => {
    applyLanguage(e.target.value);
  });

  applyLanguage(currentLanguage);
  renderExpensesTable();
  renderBudgetTable();
  renderProfileSummary();
  renderDashboard();

  if (isLoggedIn && profile) {
    showApp();
  } else {
    showAuthStart();
  }
});
