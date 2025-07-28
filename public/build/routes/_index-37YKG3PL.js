import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-6OSH4ZMH.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1753694479250.6697";
}
function Index() {
  _s();
  const [bingoState, setBingoState] = (0, import_react.useState)({
    maxNumber: 75,
    drawnNumbers: [],
    currentNumber: null,
    isGameStarted: false,
    isGameFinished: false
  });
  const [inputValue, setInputValue] = (0, import_react.useState)("75");
  const [error, setError] = (0, import_react.useState)("");
  const startGame = (0, import_react.useCallback)(() => {
    const maxNum = parseInt(inputValue);
    if (isNaN(maxNum) || maxNum < 1 || maxNum > 1e3) {
      setError("1\u304B\u30891000\u307E\u3067\u306E\u6570\u5B57\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
      return;
    }
    setError("");
    setBingoState({
      maxNumber: maxNum,
      drawnNumbers: [],
      currentNumber: null,
      isGameStarted: true,
      isGameFinished: false
    });
  }, [inputValue]);
  const drawNextNumber = (0, import_react.useCallback)(() => {
    if (bingoState.drawnNumbers.length >= bingoState.maxNumber) {
      setBingoState((prev) => ({
        ...prev,
        isGameFinished: true
      }));
      return;
    }
    const availableNumbers = [];
    for (let i = 1; i <= bingoState.maxNumber; i++) {
      if (!bingoState.drawnNumbers.includes(i)) {
        availableNumbers.push(i);
      }
    }
    if (availableNumbers.length === 0) {
      setBingoState((prev) => ({
        ...prev,
        isGameFinished: true
      }));
      return;
    }
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const newNumber = availableNumbers[randomIndex];
    setBingoState((prev) => ({
      ...prev,
      currentNumber: newNumber,
      drawnNumbers: [...prev.drawnNumbers, newNumber],
      isGameFinished: prev.drawnNumbers.length + 1 >= prev.maxNumber
    }));
  }, [bingoState.drawnNumbers, bingoState.maxNumber]);
  const resetGame = (0, import_react.useCallback)(() => {
    setBingoState({
      maxNumber: 75,
      drawnNumbers: [],
      currentNumber: null,
      isGameStarted: false,
      isGameFinished: false
    });
    setInputValue("75");
    setError("");
  }, []);
  const renderNumbersGrid = () => {
    const numbers = [];
    for (let i = 1; i <= bingoState.maxNumber; i++) {
      numbers.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `number-item ${bingoState.drawnNumbers.includes(i) ? "drawn" : ""}`, children: i }, i, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 93,
        columnNumber: 20
      }, this));
    }
    return numbers;
  };
  if (!bingoState.isGameStarted) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "\u{1F3AF} \u30D3\u30F3\u30B4\u30B2\u30FC\u30E0" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "maxNumber", children: "\u6570\u5B57\u306E\u7BC4\u56F2\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\uFF08\u4F8B\uFF1A39\u30671-39\u306E\u7BC4\u56F2\uFF09" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "maxNumber", type: "number", value: inputValue, onChange: (e) => setInputValue(e.target.value), placeholder: "\u4F8B: 39", min: "1", max: "1000" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this),
        error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "error", children: error }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 107,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: startGame, children: "\u30B2\u30FC\u30E0\u958B\u59CB" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 100,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "\u{1F3AF} \u30D3\u30F3\u30B4\u30B2\u30FC\u30E0" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "game-info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "\u6570\u5B57\u306E\u7BC4\u56F2:" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 116,
          columnNumber: 12
        }, this),
        " 1 \u301C ",
        bingoState.maxNumber
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "\u62BD\u9078\u6E08\u307F:" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 117,
          columnNumber: 12
        }, this),
        " ",
        bingoState.drawnNumbers.length,
        " / ",
        bingoState.maxNumber
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "\u6B8B\u308A:" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 118,
          columnNumber: 12
        }, this),
        " ",
        bingoState.maxNumber - bingoState.drawnNumbers.length
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    bingoState.currentNumber && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "current-number", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "\u5F53\u9078\u756A\u53F7" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "number", children: bingoState.currentNumber }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 123,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 121,
      columnNumber: 36
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      textAlign: "center",
      marginBottom: "20px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: drawNextNumber, disabled: bingoState.isGameFinished, children: bingoState.currentNumber ? "Next" : "\u6700\u521D\u306E\u756A\u53F7\u3092\u62BD\u9078" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: resetGame, children: "\u30EA\u30BB\u30C3\u30C8" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    bingoState.isGameFinished && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      textAlign: "center",
      backgroundColor: "#d4edda",
      color: "#155724",
      padding: "15px",
      borderRadius: "4px",
      margin: "20px 0",
      border: "1px solid #c3e6cb"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "\u{1F389} \u30B2\u30FC\u30E0\u7D42\u4E86\uFF01" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "\u3059\u3079\u3066\u306E\u756A\u53F7\u304C\u62BD\u9078\u3055\u308C\u307E\u3057\u305F\u3002" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 146,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 136,
      columnNumber: 37
    }, this),
    bingoState.drawnNumbers.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "drawn-numbers", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "\u62BD\u9078\u3055\u308C\u305F\u756A\u53F7" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 150,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "numbers-grid", children: renderNumbersGrid() }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 151,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 149,
      columnNumber: 46
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 112,
    columnNumber: 10
  }, this);
}
_s(Index, "UgnQyZXt800fCar0DGPF5KzoSkc=");
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-37YKG3PL.js.map
