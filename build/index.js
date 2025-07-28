var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "ja", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("title", { children: "\u30D3\u30F3\u30B4\u30B2\u30FC\u30E0" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("style", { dangerouslySetInnerHTML: {
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
      } }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2("div", { className: "container", children: /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 135,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { useState, useCallback } from "react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Index() {
  let [bingoState, setBingoState] = useState({
    maxNumber: 75,
    drawnNumbers: [],
    currentNumber: null,
    isGameStarted: !1,
    isGameFinished: !1
  }), [inputValue, setInputValue] = useState("75"), [error, setError] = useState(""), startGame = useCallback(() => {
    let maxNum = parseInt(inputValue);
    if (isNaN(maxNum) || maxNum < 1 || maxNum > 1e3) {
      setError("1\u304B\u30891000\u307E\u3067\u306E\u6570\u5B57\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
      return;
    }
    setError(""), setBingoState({
      maxNumber: maxNum,
      drawnNumbers: [],
      currentNumber: null,
      isGameStarted: !0,
      isGameFinished: !1
    });
  }, [inputValue]), drawNextNumber = useCallback(() => {
    if (bingoState.drawnNumbers.length >= bingoState.maxNumber) {
      setBingoState((prev) => ({ ...prev, isGameFinished: !0 }));
      return;
    }
    let availableNumbers = [];
    for (let i = 1; i <= bingoState.maxNumber; i++)
      bingoState.drawnNumbers.includes(i) || availableNumbers.push(i);
    if (availableNumbers.length === 0) {
      setBingoState((prev) => ({ ...prev, isGameFinished: !0 }));
      return;
    }
    let randomIndex = Math.floor(Math.random() * availableNumbers.length), newNumber = availableNumbers[randomIndex];
    setBingoState((prev) => ({
      ...prev,
      currentNumber: newNumber,
      drawnNumbers: [...prev.drawnNumbers, newNumber],
      isGameFinished: prev.drawnNumbers.length + 1 >= prev.maxNumber
    }));
  }, [bingoState.drawnNumbers, bingoState.maxNumber]), resetGame = useCallback(() => {
    setBingoState({
      maxNumber: 75,
      drawnNumbers: [],
      currentNumber: null,
      isGameStarted: !1,
      isGameFinished: !1
    }), setInputValue("75"), setError("");
  }, []), renderNumbersGrid = () => {
    let numbers = [];
    for (let i = 1; i <= bingoState.maxNumber; i++)
      numbers.push(
        /* @__PURE__ */ jsxDEV3(
          "div",
          {
            className: `number-item ${bingoState.drawnNumbers.includes(i) ? "drawn" : ""}`,
            children: i
          },
          i,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 85,
            columnNumber: 9
          },
          this
        )
      );
    return numbers;
  };
  return bingoState.isGameStarted ? /* @__PURE__ */ jsxDEV3("div", { children: [
    /* @__PURE__ */ jsxDEV3("h1", { children: "\u{1F3AF} \u30D3\u30F3\u30B4\u30B2\u30FC\u30E0" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "game-info", children: [
      /* @__PURE__ */ jsxDEV3("p", { children: [
        /* @__PURE__ */ jsxDEV3("strong", { children: "\u6570\u5B57\u306E\u7BC4\u56F2:" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 125,
          columnNumber: 12
        }, this),
        " 1 \u301C ",
        bingoState.maxNumber
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("p", { children: [
        /* @__PURE__ */ jsxDEV3("strong", { children: "\u62BD\u9078\u6E08\u307F:" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 126,
          columnNumber: 12
        }, this),
        " ",
        bingoState.drawnNumbers.length,
        " / ",
        bingoState.maxNumber
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("p", { children: [
        /* @__PURE__ */ jsxDEV3("strong", { children: "\u6B8B\u308A:" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 127,
          columnNumber: 12
        }, this),
        " ",
        bingoState.maxNumber - bingoState.drawnNumbers.length
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this),
    bingoState.currentNumber && /* @__PURE__ */ jsxDEV3("div", { className: "current-number", children: [
      /* @__PURE__ */ jsxDEV3("h2", { children: "\u5F53\u9078\u756A\u53F7" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "number", children: bingoState.currentNumber }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 133,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { style: { textAlign: "center", marginBottom: "20px" }, children: [
      /* @__PURE__ */ jsxDEV3(
        "button",
        {
          onClick: drawNextNumber,
          disabled: bingoState.isGameFinished,
          children: bingoState.currentNumber ? "Next" : "\u6700\u521D\u306E\u756A\u53F7\u3092\u62BD\u9078"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 138,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3("button", { onClick: resetGame, children: "\u30EA\u30BB\u30C3\u30C8" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this),
    bingoState.isGameFinished && /* @__PURE__ */ jsxDEV3("div", { style: {
      textAlign: "center",
      backgroundColor: "#d4edda",
      color: "#155724",
      padding: "15px",
      borderRadius: "4px",
      margin: "20px 0",
      border: "1px solid #c3e6cb"
    }, children: [
      /* @__PURE__ */ jsxDEV3("h3", { children: "\u{1F389} \u30B2\u30FC\u30E0\u7D42\u4E86\uFF01" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 157,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("p", { children: "\u3059\u3079\u3066\u306E\u756A\u53F7\u304C\u62BD\u9078\u3055\u308C\u307E\u3057\u305F\u3002" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 158,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 148,
      columnNumber: 9
    }, this),
    bingoState.drawnNumbers.length > 0 && /* @__PURE__ */ jsxDEV3("div", { className: "drawn-numbers", children: [
      /* @__PURE__ */ jsxDEV3("h3", { children: "\u62BD\u9078\u3055\u308C\u305F\u756A\u53F7" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 164,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "numbers-grid", children: renderNumbersGrid() }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 165,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 163,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 121,
    columnNumber: 5
  }, this) : /* @__PURE__ */ jsxDEV3("div", { children: [
    /* @__PURE__ */ jsxDEV3("h1", { children: "\u{1F3AF} \u30D3\u30F3\u30B4\u30B2\u30FC\u30E0" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "input-group", children: [
      /* @__PURE__ */ jsxDEV3("label", { htmlFor: "maxNumber", children: "\u6570\u5B57\u306E\u7BC4\u56F2\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\uFF08\u4F8B\uFF1A39\u30671-39\u306E\u7BC4\u56F2\uFF09" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(
        "input",
        {
          id: "maxNumber",
          type: "number",
          value: inputValue,
          onChange: (e) => setInputValue(e.target.value),
          placeholder: "\u4F8B: 39",
          min: "1",
          max: "1000"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 104,
          columnNumber: 11
        },
        this
      ),
      error && /* @__PURE__ */ jsxDEV3("div", { className: "error", children: error }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 113,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3("button", { onClick: startGame, children: "\u30B2\u30FC\u30E0\u958B\u59CB" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 115,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 98,
    columnNumber: 7
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-OPGY2UYO.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-7CDMXWTQ.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-6OSH4ZMH.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-W3FKVKDV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-FNXOWENN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "8dfcaa68", hmr: { runtime: "/build/_shared/chunk-6OSH4ZMH.js", timestamp: 1753695397848 }, url: "/build/manifest-8DFCAA68.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
