import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-7CDMXWTQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-6OSH4ZMH.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
  import.meta.hot.lastModified = "1753694450306.763";
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "ja", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: "\u30D3\u30F3\u30B4\u30B2\u30FC\u30E0" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { dangerouslySetInnerHTML: {
        __html: `
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
              margin: 0;
              padding: 20px;
              background-color: #f5f5f5;
            }
            .container {
              max-width: 800px;
              margin: 0 auto;
              background: white;
              border-radius: 8px;
              padding: 30px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            h1 {
              text-align: center;
              color: #333;
              margin-bottom: 30px;
            }
            .input-group {
              margin-bottom: 20px;
            }
            label {
              display: block;
              margin-bottom: 5px;
              font-weight: bold;
              color: #555;
            }
            input {
              width: 100%;
              padding: 10px;
              border: 2px solid #ddd;
              border-radius: 4px;
              font-size: 16px;
              box-sizing: border-box;
            }
            input:focus {
              outline: none;
              border-color: #007bff;
            }
            button {
              background-color: #007bff;
              color: white;
              border: none;
              padding: 12px 24px;
              font-size: 16px;
              border-radius: 4px;
              cursor: pointer;
              margin-right: 10px;
              margin-bottom: 10px;
            }
            button:hover {
              background-color: #0056b3;
            }
            button:disabled {
              background-color: #ccc;
              cursor: not-allowed;
            }
            .current-number {
              text-align: center;
              margin: 30px 0;
            }
            .current-number .number {
              font-size: 72px;
              font-weight: bold;
              color: #007bff;
              border: 4px solid #007bff;
              border-radius: 50%;
              width: 150px;
              height: 150px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto;
              background-color: #f8f9fa;
            }
            .drawn-numbers {
              margin-top: 30px;
            }
            .drawn-numbers h3 {
              color: #333;
              margin-bottom: 15px;
            }
            .numbers-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
              gap: 5px;
            }
            .number-item {
              background-color: #e9ecef;
              padding: 8px;
              text-align: center;
              border-radius: 4px;
              font-weight: bold;
            }
            .number-item.drawn {
              background-color: #28a745;
              color: white;
            }
            .game-info {
              background-color: #f8f9fa;
              padding: 15px;
              border-radius: 4px;
              margin-bottom: 20px;
            }
            .error {
              color: #dc3545;
              margin-top: 10px;
            }
          `
      } }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 146,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = App;
var _c;
$RefreshReg$(_c, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default
};
//# sourceMappingURL=/build/root-SCF4QKUC.js.map
