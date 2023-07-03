"use strict";

// List of currency shorthands, country shorthands and currency symbols

const currencyList = [
  { shorthand: "AED", name: "ae", symbol: "AED" },
  { shorthand: "AFN", name: "af", symbol: "؋" },
  { shorthand: "ALL", name: "al", symbol: "L" },
  { shorthand: "AMD", name: "am", symbol: "֏" },
  { shorthand: "ANG", name: "nl", symbol: "ƒ" },
  { shorthand: "AOA", name: "ao", symbol: "Kz" },
  { shorthand: "ARS", name: "ar", symbol: "$" },
  { shorthand: "AUD", name: "au", symbol: "A$" },
  { shorthand: "AWG", name: "aw", symbol: "ƒ" },
  { shorthand: "AZN", name: "az", symbol: "₼" },
  { shorthand: "BAM", name: "ba", symbol: "KM" },
  { shorthand: "BBD", name: "bb", symbol: "$" },
  { shorthand: "BDT", name: "bd", symbol: "৳" },
  { shorthand: "BGN", name: "bg", symbol: "лв" },
  { shorthand: "BHD", name: "bh", symbol: ".د.ب" },
  { shorthand: "BIF", name: "bi", symbol: "FBu" },
  { shorthand: "BMD", name: "bm", symbol: "$" },
  { shorthand: "BND", name: "bn", symbol: "B$" },
  { shorthand: "BOB", name: "bo", symbol: "Bs" },
  { shorthand: "BRL", name: "br", symbol: "R$" },
  { shorthand: "BSD", name: "bs", symbol: "B$" },
  { shorthand: "BTC", symbol: "₿" },
  { shorthand: "BWP", name: "bw", symbol: "P" },
  { shorthand: "BYN", name: "by", symbol: "Br" },
  { shorthand: "BZD", name: "bz", symbol: "BZ$" },
  { shorthand: "CAD", name: "ca", symbol: "CA$" },
  { shorthand: "CDF", name: "cd", symbol: "FC" },
  { shorthand: "CHF", name: "ch", symbol: "CHF" },
  { shorthand: "CLP", name: "cl", symbol: "$" },
  { shorthand: "CNY", name: "cn", symbol: "¥" },
  { shorthand: "COP", name: "co", symbol: "$" },
  { shorthand: "CRC", name: "cr", symbol: "₡" },
  { shorthand: "CUP", name: "cu", symbol: "CUC$" },
  { shorthand: "CVE", name: "cv", symbol: "CVE" },
  { shorthand: "CZK", name: "cz", symbol: "Kč" },
  { shorthand: "DJF", name: "dj", symbol: "Fdj" },
  { shorthand: "DKK", name: "dk", symbol: "kr" },
  { shorthand: "DOP", name: "do", symbol: "RD$" },
  { shorthand: "DZD", name: "dz", symbol: "دج" },
  { shorthand: "EGP", name: "eg", symbol: "E£" },
  { shorthand: "ERN", name: "er", symbol: "Nkf" },
  { shorthand: "ETB", name: "et", symbol: "Br" },
  { shorthand: "ETH", symbol: "Ξ" },
  { shorthand: "EUR", name: "eu", symbol: "€" },
  { shorthand: "FJD", name: "fj", symbol: "" },
  { shorthand: "FKP", name: "fk", symbol: "FK£" },
  { shorthand: "GBP", name: "gb", symbol: "£" },
  { shorthand: "GEL", name: "ge", symbol: "₾" },
  { shorthand: "GHS", name: "gh", symbol: "GH₵" },
  { shorthand: "GIP", name: "gi", symbol: "" },
  { shorthand: "GMD", name: "gm", symbol: "D" },
  { shorthand: "GNF", name: "gn", symbol: "FG" },
  { shorthand: "GTQ", name: "gt", symbol: "Q" },
  { shorthand: "GYD", name: "gy", symbol: "G$" },
  { shorthand: "HKD", name: "hk", symbol: "HK$" },
  { shorthand: "HNL", name: "hn", symbol: "L" },
  { shorthand: "HRK", name: "hr", symbol: "kn" },
  { shorthand: "HTG", name: "ht", symbol: "G" },
  { shorthand: "HUF", name: "hu", symbol: "ft" },
  { shorthand: "IDR", name: "id", symbol: "Rp" },
  { shorthand: "ILS", name: "il", symbol: "₪" },
  { shorthand: "INR", name: "in", symbol: "₹" },
  { shorthand: "IRR", name: "ir", symbol: "﷼" },
  { shorthand: "ISK", name: "is", symbol: "kr" },
  { shorthand: "IQD", name: "iq", symbol: "ع.د" },
  { shorthand: "JMD", name: "jm", symbol: "J$" },
  { shorthand: "JOD", name: "jo", symbol: "ينار" },
  { shorthand: "JPY", name: "jp", symbol: "¥" },
  { shorthand: "KES", name: "ke", symbol: "KSh" },
  { shorthand: "KGS", name: "kg", symbol: "som" },
  { shorthand: "KHR", name: "kh", symbol: "៛" },
  { shorthand: "KMF", name: "km", symbol: "CF" },
  { shorthand: "KRW", name: "kr", symbol: "₩" },
  { shorthand: "KWD", name: "kw", symbol: "ك" },
  { shorthand: "KYD", name: "ky", symbol: "CI$" },
  { shorthand: "KZT", name: "kz", symbol: "₸" },
  { shorthand: "LAK", name: "la", symbol: "₭" },
  { shorthand: "LBP", name: "lb", symbol: "ل.ل" },
  { shorthand: "LKR", name: "lk", symbol: "Rs" },
  { shorthand: "LRD", name: "lr", symbol: "LD$" },
  { shorthand: "LSL", name: "ls", symbol: "L" },
  { shorthand: "LTC", symbol: "Ł" },
  { shorthand: "LYD", name: "ly", symbol: "LD" },
  { shorthand: "MAD", name: "ma", symbol: "DH" },
  { shorthand: "MDL", name: "md", symbol: "L" },
  { shorthand: "MGA", name: "mg", symbol: "Ar" },
  { shorthand: "MKD", name: "mk", symbol: "ден" },
  { shorthand: "MMK", name: "mm", symbol: "K" },
  { shorthand: "MNT", name: "mn", symbol: "₮" },
  { shorthand: "MOP", name: "mo", symbol: "MOP$" },
  { shorthand: "MRO", name: "mr", symbol: "UM" },
  { shorthand: "MUR", name: "mu", symbol: "Rs" },
  { shorthand: "MVR", name: "mv", symbol: "MRf" },
  { shorthand: "MWK", name: "mw", symbol: "K" },
  { shorthand: "MXN", name: "mx", symbol: "$" },
  { shorthand: "MYR", name: "my", symbol: "RM" },
  { shorthand: "MZN", name: "mz", symbol: "MT" },
  { shorthand: "NAD", name: "na", symbol: "N$" },
  { shorthand: "NGN", name: "ng", symbol: "₦" },
  { shorthand: "NIO", name: "ni", symbol: "C$" },
  { shorthand: "NOK", name: "no", symbol: "kr" },
  { shorthand: "NPR", name: "np", symbol: "RS" },
  { shorthand: "NZD", name: "nz", symbol: "$" },
  { shorthand: "OMR", name: "om", symbol: "ر.ع" },
  { shorthand: "PAB", name: "pa", symbol: "B/." },
  { shorthand: "PEN", name: "pe", symbol: "S/." },
  { shorthand: "PGK", name: "pg", symbol: "K" },
  { shorthand: "PHP", name: "ph", symbol: "₱" },
  { shorthand: "PKR", name: "pk", symbol: "Rs." },
  { shorthand: "PLN", name: "pl", symbol: "zł" },
  { shorthand: "PYG", name: "py", symbol: "₲" },
  { shorthand: "QAR", name: "qa", symbol: "ر.ق" },
  { shorthand: "RON", name: "ro", symbol: "lei" },
  { shorthand: "RSD", name: "rs", symbol: "RSD" },
  { shorthand: "RUB", name: "ru", symbol: "₽" },
  { shorthand: "RWF", name: "rw", symbol: "R₣" },
  { shorthand: "SAR", name: "sa", symbol: "SR" },
  { shorthand: "SBD", name: "sb", symbol: "$" },
  { shorthand: "SCR", name: "sc", symbol: "SR" },
  { shorthand: "SDG", name: "sd", symbol: "SDG" },
  { shorthand: "SEK", name: "se", symbol: "kr" },
  { shorthand: "SGD", name: "sg", symbol: "S$" },
  { shorthand: "SHP", name: "sh", symbol: "£" },
  { shorthand: "SLL", name: "sl", symbol: "Le" },
  { shorthand: "SOS", name: "so", symbol: "S" },
  { shorthand: "SRD", name: "sr", symbol: "Sr$" },
  { shorthand: "STD", name: "st", symbol: "Db" },
  { shorthand: "SYP", name: "sy", symbol: "£S" },
  { shorthand: "SZL", name: "sz", symbol: "L" },
  { shorthand: "THB", name: "th", symbol: "฿" },
  { shorthand: "TJS", name: "tj", symbol: "TJS" },
  { shorthand: "TND", name: "tn", symbol: "د.ت" },
  { shorthand: "TOP", name: "to", symbol: "T$" },
  { shorthand: "TRY", name: "tr", symbol: "₺" },
  { shorthand: "TTD", name: "tt", symbol: "TT$" },
  { shorthand: "TWD", name: "tw", symbol: "NT$" },
  { shorthand: "TZS", name: "tz", symbol: "TSh" },
  { shorthand: "UAH", name: "ua", symbol: "₴" },
  { shorthand: "UGX", name: "ug", symbol: "USh" },
  { shorthand: "USD", name: "us", symbol: "$" },
  { shorthand: "USDT", symbol: "₮" },
  { shorthand: "UYU", name: "uy", symbol: "$U" },
  { shorthand: "UZS", name: "uz", symbol: "som" },
  { shorthand: "VND", name: "vn", symbol: "₫" },
  { shorthand: "VUV", name: "vu", symbol: "Vt" },
  { shorthand: "WST", name: "ws", symbol: "WS$" },
  { shorthand: "XAF", name: "cm", symbol: "FCFA" },
  { shorthand: "XCD", name: "ai", symbol: "$" },
  { shorthand: "XOF", name: "bj", symbol: "CFA" },
  { shorthand: "XPF", name: "pf", symbol: "F" },
  { shorthand: "YER", name: "ye", symbol: "﷼" },
  { shorthand: "ZAR", name: "za", symbol: "R" },
  { shorthand: "XMR", symbol: "ɱ" },
  { shorthand: "XRP", symbol: "XRP" },
  { shorthand: "ZMK", name: "zm", symbol: "" },
  { shorthand: "ZMW", name: "zm", symbol: "" },
];

// List of amounts for the conversion columns

const amountList = [1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000, 100000];

// Selecting HTML elements

const toList = document.querySelector(".to-box");
const fromList = document.querySelector(".from-box");
const listContainers = document.querySelectorAll(".list-container");
const inputContainers = document.querySelectorAll(".input-transform");
const amountField = document.querySelector(".input-amount");
const topDiv = document.querySelector(".top-div");
const convertContainer = document.querySelector(".convert-container");
const resultContainer = document.querySelector(".result-container");
const currencyPrefix = document.querySelector(".currency-prefix");
const reverseButton = document.querySelector(".reverse-button");
const convertButton = document.querySelector(".convert-button");
const fromChartColumn = document.querySelector(".from-body");
const toChartColumn = document.querySelector(".to-body");
const fromHeader = document.querySelector(".from-header");
const toHeader = document.querySelector(".to-header");
const options = document.querySelectorAll("option");
const styleSelect = document.getElementById("style");
const body = document.querySelector("body");

// Declaring variables

let currencyArray;
let toCurrency;
let fromCurrency;
let amount = amountField.value;
let convertActive = false;
let style = "standard";

// Populating the search result list

function callBackPopulate(array, currency) {
  array.insertAdjacentHTML(
    `${
      currency.shorthand == "usd" ||
      currency.shorthand == "eur" ||
      currency.shorthand == "gbp" ||
      currency.shorthand == "chf" ||
      currency.shorthand == "nok" ||
      currency.shorthand == "sek" ||
      currency.shorthand == "dkk" ||
      currency.shorthand == "jpy" ||
      currency.shorthand == "cny" ||
      currency.shorthand == "cad" ||
      currency.shorthand == "aud"
        ? "afterbegin"
        : "beforeend"
    }`,
    `<div class="country-wrapper" data-currency="${
      currency.shorthand
    }" data-fullname="${currency.fullName}"
    }" data-symbol="${currency.symbol}">
  <img class="flag-image" src="${currency.flag}" alt="">
  <span class="shorthand">
  ${currency.shorthand} </span>
  <span>${currency.fullName || currency.shorthand}</span></div>`
  );
}

// The convert function

async function currencyConvert(to, from, amount) {
  console.log(to, from, amount);
  if (!to || !from || !amount || !convertActive) return;
  let response;
  let json;

  try {
    response = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`
    );
    if (response) json = response.json();
  } catch (error) {
    console.log(`There was an error (${error}), attempting fallback address`);
  }

  if (!response || !response.ok) {
    try {
      response = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.min.json`
      );
      if (response) json = response.json();
    } catch (error) {
      alert(`There was an error fetching conversion (${error})`);
    }
  }
  json.then((data) => {
    const oneUnit = data[`${to}`];
    resultContainer.innerHTML = "";
    resultContainer.insertAdjacentHTML(
      "afterbegin",
      `<span>${parseFloat(amount).toLocaleString("en-US", {
        maximumFractionDigits: 5,
        minimumFractionDigits: 2,
      })} ${from.toUpperCase()} equals ${(
        oneUnit * parseFloat(amount)
      ).toLocaleString("en-US", {
        maximumFractionDigits: 5,
        minimumFractionDigits: 2,
      })} ${to.toUpperCase()}</span>`
    );

    [fromHeader, toHeader, fromChartColumn, toChartColumn].forEach(
      (col) => (col.innerHTML = "")
    );

    fromHeader.insertAdjacentHTML(
      "afterbegin",
      `<span>Converting from ${
        fromList.closest(".input-exchange").querySelector(".country-wrapper")
          .dataset.fullname
      } to ${
        toList.closest(".input-exchange").querySelector(".country-wrapper")
          .dataset.fullname
      }</span>`
    );

    toHeader.insertAdjacentHTML(
      "afterbegin",
      `<span>Converting from ${
        toList.closest(".input-exchange").querySelector(".country-wrapper")
          .dataset.fullname
      } to ${
        fromList.closest(".input-exchange").querySelector(".country-wrapper")
          .dataset.fullname
      }</span>`
    );

    amountList.forEach((number) =>
      fromChartColumn.insertAdjacentHTML(
        "beforeend",
        `<div class="chart-item flex-space"><span class="item-span">${number} ${from.toUpperCase()}</span>
        <span class="item-span"> ${(
          oneUnit * parseFloat(number)
        ).toLocaleString("en-US", {
          maximumFractionDigits: 5,
          minimumFractionDigits: 2,
        })} ${to.toUpperCase()}</span></div>`
      )
    );

    amountList.forEach((number) =>
      toChartColumn.insertAdjacentHTML(
        "beforeend",
        `<div class="chart-item flex-space"><span class="item-span">${number} ${to.toUpperCase()}</span><span class="item-span">${(
          (1 / oneUnit) *
          parseFloat(number)
        ).toLocaleString("en-US", {
          maximumFractionDigits: 5,
          minimumFractionDigits: 2,
        })} ${from.toUpperCase()}</span class="item-span"></div>`
      )
    );
  });
}

// Function to fetch the currency array

async function fetchCurrencyArray() {
  let response;
  let json;

  try {
    response = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`
    );
    if (response) json = response.json();
  } catch (error) {
    console.log(`There was an error (${error}), attempting fallback address`);
  }

  if (!response || !response.ok) {
    try {
      response = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json`
      );
      if (response) json = response.json();
    } catch (error) {
      alert(`There was an error fetching conversion (${error})`);
    }
  }
  json.then((data) => {
    console.log(data);
    currencyArray = Object.keys(data).map(function (key) {
      return {
        shorthand: key,
        fullName: data[key],
      };
    });
    currencyArray.forEach((arrayItem) => {
      currencyList.forEach((listItem) => {
        if (
          listItem.shorthand.toLowerCase() === arrayItem.shorthand.toLowerCase()
        ) {
          arrayItem.symbol = listItem.symbol;
          arrayItem.name = listItem.name;
        }
      });
      if (!arrayItem.symbol) arrayItem.symbol = "";
      if (!arrayItem.name) arrayItem.name = "";
      arrayItem.name == ""
        ? (arrayItem.flag = `flag/generic.png`)
        : (arrayItem.flag = `flag/${arrayItem.name}.png`);
    });

    currencyArray.forEach((currency) => {
      callBackPopulate(toList, currency);
      callBackPopulate(fromList, currency);
    });
  });
}

// Search function

function searchFunction(event) {
  const currencyBox = event.target
    .closest(".input-exchange")
    .querySelector(".currency-list");
  const searchString = event.target.value.toLowerCase();
  currencyBox.innerHTML = "";
  currencyArray.forEach((currency) => {
    if (
      currency.shorthand.toLowerCase().includes(searchString) ||
      currency.fullName.toLowerCase().includes(searchString)
    )
      callBackPopulate(currencyBox, currency);
  });
}

// Debounce function

function debounce(func, timeout = 200) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

// Calling convert and search functions debounced

const searchDebounced = debounce((event) => searchFunction(event));
const convertDebounced = debounce((a, b, c) => currencyConvert(a, b, c));

// Calling convert function on updated amount

function updateAmount(event) {
  amount = event.target.value;
  convertDebounced(toCurrency, fromCurrency, amount);
}

// Initiate search function, focus input field and make visible search result field

function inputField(event) {
  const outputContainer = event.target
    .closest(".input-exchange")
    .querySelector(".list-container");
  const container = event.target.closest(".input-field-container");
  container.innerHTML = `<input type="text" class="input-field input-style"></input>`;
  const inputField = container.querySelector(".input-field");
  outputContainer.style.visibility = "visible";
  inputField.focus();
  container
    .querySelector(".input-field")
    .addEventListener("input", searchDebounced);
  container
    .querySelector(".input-field")
    .dispatchEvent(new Event("input", { bubbles: true }));
}

// Removing search field, adding clicked country and running convert function

function populateField(event) {
  console.log(this == "toList");
  const list = event.target.closest(".list-container");
  const target = event.target.closest(".country-wrapper");
  const field = event.target
    .closest(".input-exchange")
    .querySelector(".input-field-container");
  if (this == "toList") {
    toCurrency = target.dataset.currency.toLowerCase();
  } else {
    fromCurrency = target.dataset.currency.toLowerCase();
    currencyPrefix.textContent = "";
    currencyPrefix.textContent = target.dataset.symbol;
  }
  field.innerHTML = target.outerHTML;
  list.style.visibility = "hidden";
  convertDebounced(toCurrency, fromCurrency, amount);
}

// Handling the reverse input button

function reverseInput() {
  const toInput = toList
    .closest(".input-exchange")
    .querySelector(".input-field-container");
  const fromInput = fromList
    .closest(".input-exchange")
    .querySelector(".input-field-container");
  const toContent = toInput.innerHTML;
  const fromContent = fromInput.innerHTML;
  toInput.innerHTML = fromContent;
  fromInput.innerHTML = toContent;
  toCurrency = "";
  fromCurrency = "";
  currencyPrefix.textContent = "";
  listContainers.forEach(
    (container) => (container.style.visibility = "hidden")
  );

  if (toInput.querySelector(".country-wrapper")) {
    toCurrency = toInput.querySelector(".country-wrapper").dataset.currency;
  }

  if (fromInput.querySelector(".country-wrapper")) {
    const fromObject = fromInput.querySelector(".country-wrapper");
    fromCurrency = fromObject.dataset.currency;
    const element = currencyList.find(
      (list) =>
        list.shorthand.toLowerCase() ==
        fromObject.dataset.currency.toLowerCase()
    );
    currencyPrefix.textContent = element.symbol;
  }

  if (!toCurrency || !fromCurrency) return;
  convertDebounced(toCurrency, fromCurrency, amount);
}

// Handling style change button

function styleSelectFunc(e) {
  style = e.target.value;
  const bColor = window.getComputedStyle(body, "").backgroundColor;
  [body, convertContainer, ...options, ...listContainers].forEach((element) => {
    element.classList.remove("standard", "dark", "light", "silly");
    element.classList.add(`${style}`);
  });
  const el = document.querySelector(`.${style}`);
  el.style.setProperty("--b", `${bColor}`);
}

// Event listeners

toList.addEventListener("click", populateField.bind("toList"));
fromList.addEventListener("click", populateField.bind("fromList"));

inputContainers.forEach((container) =>
  container.addEventListener("click", inputField)
);

amountField.addEventListener("input", updateAmount);
reverseButton.addEventListener("click", reverseInput);
convertButton.addEventListener("click", () => {
  if (!toCurrency || !fromCurrency || !amount) return;
  convertActive = true;
  convertDebounced(toCurrency, fromCurrency, amount);
});

styleSelect.addEventListener("change", styleSelectFunc);

// Fetching currency array on page load

fetchCurrencyArray();
