(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/chat-entry.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatEntry",
    ()=>ChatEntry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-client] (ecmascript)");
;
;
const ChatEntry = (param)=>{
    let { name, locale, timestamp, message, messageOrigin, hasBeenEdited = false, className, ...props } = param;
    const time = new Date(timestamp);
    const title = time.toLocaleTimeString(locale, {
        timeStyle: 'full'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        title: title,
        "data-lk-message-origin": messageOrigin,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group flex w-full flex-col gap-0.5', className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground flex items-center gap-2 text-sm font-semibold', messageOrigin === 'local' ? 'flex-row-reverse' : 'text-left'),
                children: [
                    name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: [
                            messageOrigin === 'local' ? '🎤 ' : '🤖 ',
                            name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/chat-entry.tsx",
                        lineNumber: 45,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-xs opacity-0 transition-opacity ease-linear group-hover:opacity-100",
                        children: [
                            hasBeenEdited && '*',
                            time.toLocaleTimeString(locale, {
                                timeStyle: 'short'
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/chat-entry.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/chat-entry.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('max-w-4/5 rounded-[20px] shadow-sm', messageOrigin === 'local' ? 'bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 ml-auto p-3 text-foreground' : 'bg-gradient-to-br from-muted to-card border border-muted-foreground/20 mr-auto p-3'),
                children: message
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/chat-entry.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/chat-entry.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ChatEntry;
var _c;
__turbopack_context__.k.register(_c, "ChatEntry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/chat-transcript.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatTranscript",
    ()=>ChatTranscript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$chat$2d$entry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/chat-entry.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const MotionContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create('div');
_c = MotionContainer;
const MotionChatEntry = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$chat$2d$entry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatEntry"]);
_c1 = MotionChatEntry;
const CONTAINER_MOTION_PROPS = {
    variants: {
        hidden: {
            opacity: 0,
            transition: {
                ease: 'easeOut',
                duration: 0.3,
                staggerChildren: 0.1,
                staggerDirection: -1
            }
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                ease: 'easeOut',
                duration: 0.3,
                stagerDelay: 0.2,
                staggerChildren: 0.1,
                staggerDirection: 1
            }
        }
    },
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden'
};
const MESSAGE_MOTION_PROPS = {
    variants: {
        hidden: {
            opacity: 0,
            translateY: 10
        },
        visible: {
            opacity: 1,
            translateY: 0
        }
    }
};
function ChatTranscript(param) {
    let { hidden = false, messages = [], ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: !hidden && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionContainer, {
            ...CONTAINER_MOTION_PROPS,
            ...props,
            children: messages.map((receivedMessage)=>{
                var _navigator;
                const { id, timestamp, from, message } = receivedMessage;
                var _navigator_language;
                const locale = (_navigator_language = (_navigator = navigator) === null || _navigator === void 0 ? void 0 : _navigator.language) !== null && _navigator_language !== void 0 ? _navigator_language : 'en-US';
                const messageOrigin = (from === null || from === void 0 ? void 0 : from.isLocal) ? 'local' : 'remote';
                const hasBeenEdited = receivedMessage.type === 'chatMessage' && !!receivedMessage.editTimestamp;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionChatEntry, {
                    locale: locale,
                    timestamp: timestamp,
                    message: message,
                    messageOrigin: messageOrigin,
                    hasBeenEdited: hasBeenEdited,
                    ...MESSAGE_MOTION_PROPS
                }, id, false, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/chat-transcript.tsx",
                    lineNumber: 73,
                    columnNumber: 15
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/chat-transcript.tsx",
            lineNumber: 64,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/chat-transcript.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c2 = ChatTranscript;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MotionContainer");
__turbopack_context__.k.register(_c1, "MotionChatEntry");
__turbopack_context__.k.register(_c2, "ChatTranscript");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/shimmer-text.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShimmerText",
    ()=>ShimmerText,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-client] (ecmascript)");
;
;
function ShimmerText(param) {
    let { children, className, ref } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('animate-text-shimmer inline-block !bg-clip-text text-transparent', className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/shimmer-text.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = ShimmerText;
const __TURBOPACK__default__export__ = ShimmerText;
var _c;
__turbopack_context__.k.register(_c, "ShimmerText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/preconnect-message.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PreConnectMessage",
    ()=>PreConnectMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$shimmer$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/shimmer-text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const MotionMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create('p');
_c = MotionMessage;
const VIEW_MOTION_PROPS = {
    variants: {
        visible: {
            opacity: 1,
            transition: {
                ease: 'easeIn',
                duration: 0.5,
                delay: 0.8
            }
        },
        hidden: {
            opacity: 0,
            transition: {
                ease: 'easeIn',
                duration: 0.5,
                delay: 0
            }
        }
    },
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden'
};
function PreConnectMessage(param) {
    let { className, messages = [] } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionMessage, {
            ...VIEW_MOTION_PROPS,
            "aria-hidden": messages.length > 0,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('pointer-events-none text-center', className),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$shimmer$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShimmerText"], {
                className: "text-sm font-semibold",
                children: '🎯 Quiz Master is ready! Say "Start" to begin the trivia...'
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/preconnect-message.tsx",
                lineNumber: 48,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/preconnect-message.tsx",
            lineNumber: 43,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/preconnect-message.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c1 = PreConnectMessage;
var _c, _c1;
__turbopack_context__.k.register(_c, "MotionMessage");
__turbopack_context__.k.register(_c1, "PreConnectMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/tile-layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TileLayout",
    ()=>TileLayout,
    "useLocalTrackRef",
    ()=>useLocalTrackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__B__as__BarVisualizer$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/components-CMpq9Z_u.mjs [app-client] (ecmascript) <export B as BarVisualizer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__V__as__VideoTrack$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/components-CMpq9Z_u.mjs [app-client] (ecmascript) <export V as VideoTrack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-client] (ecmascript) <export C as useLocalParticipant>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-client] (ecmascript) <export t as useTracks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__X__as__useVoiceAssistant$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-client] (ecmascript) <export X as useVoiceAssistant>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
const MotionContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create('div');
_c = MotionContainer;
const ANIMATION_TRANSITION = {
    type: 'spring',
    stiffness: 675,
    damping: 75,
    mass: 1
};
const classNames = {
    // GRID
    // 2 Columns x 3 Rows
    grid: [
        'h-full w-full',
        'grid gap-x-2 place-content-center',
        'grid-cols-[1fr_1fr] grid-rows-[90px_1fr_90px]'
    ],
    // Agent
    // chatOpen: true,
    // hasSecondTile: true
    // layout: Column 1 / Row 1
    // align: x-end y-center
    agentChatOpenWithSecondTile: [
        'col-start-1 row-start-1',
        'self-center justify-self-end'
    ],
    // Agent
    // chatOpen: true,
    // hasSecondTile: false
    // layout: Column 1 / Row 1 / Column-Span 2
    // align: x-center y-center
    agentChatOpenWithoutSecondTile: [
        'col-start-1 row-start-1',
        'col-span-2',
        'place-content-center'
    ],
    // Agent
    // chatOpen: false
    // layout: Column 1 / Row 1 / Column-Span 2 / Row-Span 3
    // align: x-center y-center
    agentChatClosed: [
        'col-start-1 row-start-1',
        'col-span-2 row-span-3',
        'place-content-center'
    ],
    // Second tile
    // chatOpen: true,
    // hasSecondTile: true
    // layout: Column 2 / Row 1
    // align: x-start y-center
    secondTileChatOpen: [
        'col-start-2 row-start-1',
        'self-center justify-self-start'
    ],
    // Second tile
    // chatOpen: false,
    // hasSecondTile: false
    // layout: Column 2 / Row 2
    // align: x-end y-end
    secondTileChatClosed: [
        'col-start-2 row-start-3',
        'place-content-end'
    ]
};
function useLocalTrackRef(source) {
    _s();
    const { localParticipant } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__["useLocalParticipant"])();
    const publication = localParticipant.getTrackPublication(source);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useLocalTrackRef.useMemo[trackRef]": ()=>publication ? {
                source,
                participant: localParticipant,
                publication
            } : undefined
    }["useLocalTrackRef.useMemo[trackRef]"], [
        source,
        publication,
        localParticipant
    ]);
    return trackRef;
}
_s(useLocalTrackRef, "ObPNTkQSJCMovei9bDU6MvKcbDY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__["useLocalParticipant"]
    ];
});
function TileLayout(param) {
    let { chatOpen } = param;
    var _agentVideoTrack_publication_dimensions, _agentVideoTrack_publication_dimensions1, _publication_dimensions, _this, _publication_dimensions1, _this1;
    _s1();
    const { state: agentState, audioTrack: agentAudioTrack, videoTrack: agentVideoTrack } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__X__as__useVoiceAssistant$3e$__["useVoiceAssistant"])();
    const [screenShareTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare
    ]);
    const cameraTrack = useLocalTrackRef(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera);
    const isCameraEnabled = cameraTrack && !cameraTrack.publication.isMuted;
    const isScreenShareEnabled = screenShareTrack && !screenShareTrack.publication.isMuted;
    const hasSecondTile = isCameraEnabled || isScreenShareEnabled;
    const animationDelay = chatOpen ? 0 : 0.15;
    const isAvatar = agentVideoTrack !== undefined;
    var _agentVideoTrack_publication_dimensions_width;
    const videoWidth = (_agentVideoTrack_publication_dimensions_width = agentVideoTrack === null || agentVideoTrack === void 0 ? void 0 : (_agentVideoTrack_publication_dimensions = agentVideoTrack.publication.dimensions) === null || _agentVideoTrack_publication_dimensions === void 0 ? void 0 : _agentVideoTrack_publication_dimensions.width) !== null && _agentVideoTrack_publication_dimensions_width !== void 0 ? _agentVideoTrack_publication_dimensions_width : 0;
    var _agentVideoTrack_publication_dimensions_height;
    const videoHeight = (_agentVideoTrack_publication_dimensions_height = agentVideoTrack === null || agentVideoTrack === void 0 ? void 0 : (_agentVideoTrack_publication_dimensions1 = agentVideoTrack.publication.dimensions) === null || _agentVideoTrack_publication_dimensions1 === void 0 ? void 0 : _agentVideoTrack_publication_dimensions1.height) !== null && _agentVideoTrack_publication_dimensions_height !== void 0 ? _agentVideoTrack_publication_dimensions_height : 0;
    var _publication_dimensions_width, _publication_dimensions_height;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed inset-x-0 top-8 bottom-32 z-50 md:top-12 md:bottom-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mx-auto h-full max-w-2xl px-4 md:px-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(classNames.grid),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])([
                            'grid',
                            !chatOpen && classNames.agentChatClosed,
                            chatOpen && hasSecondTile && classNames.agentChatOpenWithSecondTile,
                            chatOpen && !hasSecondTile && classNames.agentChatOpenWithoutSecondTile
                        ]),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "popLayout",
                            children: [
                                !isAvatar && // Audio Agent
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionContainer, {
                                    layoutId: "agent",
                                    initial: {
                                        opacity: 0,
                                        scale: 0
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: chatOpen ? 1 : 5
                                    },
                                    transition: {
                                        ...ANIMATION_TRANSITION,
                                        delay: animationDelay
                                    },
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-gradient-to-br from-primary/10 to-accent/10 aspect-square h-[90px] rounded-md border border-transparent transition-[border,drop-shadow]', chatOpen && 'border-primary/30 drop-shadow-lg/10 delay-200'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__B__as__BarVisualizer$3e$__["BarVisualizer"], {
                                        barCount: 5,
                                        state: agentState,
                                        options: {
                                            minHeight: 5
                                        },
                                        trackRef: agentAudioTrack,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex h-full items-center justify-center gap-1'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])([
                                                'bg-muted min-h-2.5 w-2.5 rounded-full',
                                                'origin-center transition-colors duration-250 ease-linear',
                                                'data-[lk-highlighted=true]:bg-gradient-to-t data-[lk-highlighted=true]:from-primary data-[lk-highlighted=true]:to-accent data-[lk-muted=true]:bg-muted'
                                            ])
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/tile-layout.tsx",
                                            lineNumber: 137,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/tile-layout.tsx",
                                        lineNumber: 130,
                                        columnNumber: 19
                                    }, this)
                                }, "agent", false, {
                                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/tile-layout.tsx",
                                    lineNumber: 110,
                                    columnNumber: 17
                                }, this),
                                isAvatar && // Avatar Agent
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionContainer, {
                                    layoutId: "avatar",
                                    initial: {
                                        scale: 1,
                                        opacity: 1,
                                        maskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) 20px, transparent 20px)',
                                        filter: 'blur(20px)'
                                    },
                                    animate: {
                                        maskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) 500px, transparent 500px)',
                                        filter: 'blur(0px)',
                                        borderRadius: chatOpen ? 6 : 12
                                    },
                                    transition: {
                                        ...ANIMATION_TRANSITION,
                                        delay: animationDelay,
                                        maskImage: {
                                            duration: 1
                                        },
                                        filter: {
                                            duration: 1
                                        }
                                    },
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('overflow-hidden bg-black drop-shadow-xl/80', chatOpen ? 'h-[90px]' : 'h-auto w-full'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__V__as__VideoTrack$3e$__["VideoTrack"], {
                                        width: videoWidth,
                                        height: videoHeight,
                                        trackRef: agentVideoTrack,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(chatOpen && 'size-[90px] object-cover')
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/tile-layout.tsx",
                                        lineNumber: 181,
                                        columnNumber: 19
                                    }, this)
                                }, "avatar", false, {
                                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/tile-layout.tsx",
                                    lineNumber: 150,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/tile-layout.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/tile-layout.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])([
                            'grid',
                            chatOpen && classNames.secondTileChatOpen,
                            !chatOpen && classNames.secondTileChatClosed
                        ]),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: (cameraTrack && isCameraEnabled || screenShareTrack && isScreenShareEnabled) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionContainer, {
                                layout: "position",
                                layoutId: "camera",
                                initial: {
                                    opacity: 0,
                                    scale: 0
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0
                                },
                                transition: {
                                    ...ANIMATION_TRANSITION,
                                    delay: animationDelay
                                },
                                className: "drop-shadow-lg/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__V__as__VideoTrack$3e$__["VideoTrack"], {
                                    trackRef: cameraTrack || screenShareTrack,
                                    width: (_publication_dimensions_width = (_this = cameraTrack || screenShareTrack) === null || _this === void 0 ? void 0 : (_publication_dimensions = _this.publication.dimensions) === null || _publication_dimensions === void 0 ? void 0 : _publication_dimensions.width) !== null && _publication_dimensions_width !== void 0 ? _publication_dimensions_width : 0,
                                    height: (_publication_dimensions_height = (_this1 = cameraTrack || screenShareTrack) === null || _this1 === void 0 ? void 0 : (_publication_dimensions1 = _this1.publication.dimensions) === null || _publication_dimensions1 === void 0 ? void 0 : _publication_dimensions1.height) !== null && _publication_dimensions_height !== void 0 ? _publication_dimensions_height : 0,
                                    className: "bg-muted aspect-square w-[90px] rounded-md object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/tile-layout.tsx",
                                    lineNumber: 224,
                                    columnNumber: 19
                                }, this)
                            }, "camera", false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/tile-layout.tsx",
                                lineNumber: 202,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/tile-layout.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/tile-layout.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/tile-layout.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/tile-layout.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/tile-layout.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s1(TileLayout, "OAyISiYhaAUEXALRjOmkeYC+SyE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__X__as__useVoiceAssistant$3e$__["useVoiceAssistant"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"],
        useLocalTrackRef
    ];
});
_c1 = TileLayout;
var _c, _c1;
__turbopack_context__.k.register(_c, "MotionContainer");
__turbopack_context__.k.register(_c1, "TileLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toggle",
    ()=>Toggle,
    "toggleVariants",
    ()=>toggleVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@radix-ui/react-toggle/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const toggleVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])([
    'inline-flex items-center justify-center gap-2 rounded-full',
    'text-sm font-medium whitespace-nowrap',
    'cursor-pointer outline-none transition-[color,box-shadow,background-color]',
    'hover:bg-muted hover:text-muted-foreground',
    'disabled:pointer-events-none disabled:opacity-50',
    'data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
    'focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:border-ring',
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0"
], {
    variants: {
        variant: {
            default: 'bg-transparent',
            primary: 'bg-muted data-[state=on]:bg-muted hover:text-foreground text-destructive hover:text-foreground hover:bg-foreground/10 hover:data-[state=on]:bg-foreground/10',
            secondary: 'bg-muted data-[state=on]:bg-muted hover:text-foreground hover:bg-foreground/10 hover:data-[state=on]:bg-foreground/10 data-[state=on]:bg-blue-500/20 data-[state=on]:hover:bg-blue-500/30 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300',
            outline: 'border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 px-6 has-[>svg]:px-4',
            icon: 'size-9'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Toggle(param) {
    let { className, variant, size, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "toggle",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(toggleVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/toggle.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Toggle;
;
var _c;
__turbopack_context__.k.register(_c, "Toggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrackToggle",
    ()=>TrackToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Microphone$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/Microphone.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$MicrophoneSlash$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/MicrophoneSlash.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$MonitorArrowUp$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/MonitorArrowUp.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Spinner$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/Spinner.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$VideoCamera$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/VideoCamera.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$VideoCameraSlash$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/VideoCameraSlash.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function getSourceIcon(source, enabled) {
    let pending = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (pending) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Spinner$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpinnerIcon"];
    }
    switch(source){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone:
            return enabled ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Microphone$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MicrophoneIcon"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$MicrophoneSlash$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MicrophoneSlashIcon"];
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera:
            return enabled ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$VideoCamera$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoCameraIcon"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$VideoCameraSlash$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoCameraSlashIcon"];
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$MonitorArrowUp$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MonitorArrowUpIcon"];
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"];
    }
}
function TrackToggle(param) {
    let { source, pressed, pending, className, ...props } = param;
    const IconComponent = getSourceIcon(source, pressed !== null && pressed !== void 0 ? pressed : false, pending);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
        pressed: pressed,
        "aria-label": "Toggle ".concat(source),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                weight: "bold",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(pending && 'animate-spin')
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-toggle.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            props.children
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-toggle.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = TrackToggle;
var _c;
__turbopack_context__.k.register(_c, "TrackToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])([
    'text-xs font-bold tracking-wider uppercase whitespace-nowrap',
    'inline-flex items-center justify-center gap-2 shrink-0 rounded-full cursor-pointer outline-none transition-colors duration-300',
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
    'disabled:pointer-events-none disabled:opacity-50',
    'aria-invalid:ring-destructive/20 aria-invalid:border-destructive dark:aria-invalid:ring-destructive/40 ',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0"
], {
    variants: {
        variant: {
            default: 'bg-muted text-foreground hover:bg-muted focus:bg-muted hover:bg-foreground/10',
            destructive: [
                'bg-destructive/10 text-destructive',
                'hover:bg-destructive/20 focus:bg-destructive/20 focus-visible:ring-destructive/20',
                'dark:focus-visible:ring-destructive/40'
            ],
            outline: [
                'border border-input bg-background',
                'hover:bg-accent hover:text-accent-foreground',
                'dark:bg-input/30 dark:border-input dark:hover:bg-input/50'
            ],
            primary: 'bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground hover:shadow-lg hover:scale-105 focus:scale-105 transition-all duration-300',
            secondary: 'bg-foreground/15 text-secondary-foreground hover:bg-foreground/20',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 px-6 has-[>svg]:px-4',
            icon: 'size-9'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/button.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/chat-input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatInput",
    ()=>ChatInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$PaperPlaneRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/PaperPlaneRight.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Spinner$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/Spinner.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const MOTION_PROPS = {
    variants: {
        hidden: {
            height: 0,
            opacity: 0,
            marginBottom: 0
        },
        visible: {
            height: 'auto',
            opacity: 1,
            marginBottom: 12
        }
    },
    initial: 'hidden',
    transition: {
        duration: 0.3,
        ease: 'easeOut'
    }
};
function ChatInput(param) {
    let { chatOpen, isAgentAvailable = false, onSend = async ()=>{} } = param;
    _s();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setIsSending(true);
            await onSend(message);
            setMessage('');
        } catch (error) {
            console.error(error);
        } finally{
            setIsSending(false);
        }
    };
    const isDisabled = isSending || !isAgentAvailable || message.trim().length === 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            var // when not disabled refocus on input
            _inputRef_current;
            if (chatOpen && isAgentAvailable) return;
            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
        }
    }["ChatInput.useEffect"], [
        chatOpen,
        isAgentAvailable
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        inert: !chatOpen,
        ...MOTION_PROPS,
        animate: chatOpen ? 'visible' : 'hidden',
        className: "border-input/50 flex w-full items-start overflow-hidden border-b",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "mb-3 flex grow items-end gap-2 rounded-md pl-1 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    autoFocus: true,
                    ref: inputRef,
                    type: "text",
                    value: message,
                    disabled: !chatOpen,
                    placeholder: "Type your answer or ask a question...",
                    onChange: (e)=>setMessage(e.target.value),
                    className: "h-8 flex-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                }, void 0, false, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/chat-input.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    size: "icon",
                    type: "submit",
                    disabled: isDisabled,
                    variant: isDisabled ? 'secondary' : 'primary',
                    title: isSending ? 'Sending...' : 'Send',
                    className: "self-start",
                    children: isSending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Spinner$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpinnerIcon"], {
                        className: "animate-spin",
                        weight: "bold"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/chat-input.tsx",
                        lineNumber: 93,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$PaperPlaneRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaperPlaneRightIcon"], {
                        weight: "bold"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/chat-input.tsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/chat-input.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/chat-input.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/chat-input.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(ChatInput, "CCoBPS1baX6Ux642PInMHn3Lu4A=");
_c = ChatInput;
var _c;
__turbopack_context__.k.register(_c, "ChatInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/hooks/use-input-controls.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInputControls",
    ()=>useInputControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-client] (ecmascript) <export C as useLocalParticipant>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__usePersistentUserChoices$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-client] (ecmascript) <export x as usePersistentUserChoices>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__useTrackToggle$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-client] (ecmascript) <export h as useTrackToggle>");
var _s = __turbopack_context__.k.signature();
;
;
;
function useInputControls() {
    let { saveUserChoices = true, onDeviceError } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const { microphoneTrack, localParticipant } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__["useLocalParticipant"])();
    const microphoneToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__useTrackToggle$3e$__["useTrackToggle"])({
        source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
        onDeviceError: {
            "useInputControls.useTrackToggle[microphoneToggle]": (error)=>onDeviceError === null || onDeviceError === void 0 ? void 0 : onDeviceError({
                    source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
                    error
                })
        }["useInputControls.useTrackToggle[microphoneToggle]"]
    });
    const cameraToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__useTrackToggle$3e$__["useTrackToggle"])({
        source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera,
        onDeviceError: {
            "useInputControls.useTrackToggle[cameraToggle]": (error)=>onDeviceError === null || onDeviceError === void 0 ? void 0 : onDeviceError({
                    source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera,
                    error
                })
        }["useInputControls.useTrackToggle[cameraToggle]"]
    });
    const screenShareToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__useTrackToggle$3e$__["useTrackToggle"])({
        source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare,
        onDeviceError: {
            "useInputControls.useTrackToggle[screenShareToggle]": (error)=>onDeviceError === null || onDeviceError === void 0 ? void 0 : onDeviceError({
                    source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare,
                    error
                })
        }["useInputControls.useTrackToggle[screenShareToggle]"]
    });
    const micTrackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useInputControls.useMemo[micTrackRef]": ()=>{
            return {
                participant: localParticipant,
                source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
                publication: microphoneTrack
            };
        }
    }["useInputControls.useMemo[micTrackRef]"], [
        localParticipant,
        microphoneTrack
    ]);
    const { saveAudioInputEnabled, saveVideoInputEnabled, saveAudioInputDeviceId, saveVideoInputDeviceId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__usePersistentUserChoices$3e$__["usePersistentUserChoices"])({
        preventSave: !saveUserChoices
    });
    const handleAudioDeviceChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInputControls.useCallback[handleAudioDeviceChange]": (deviceId)=>{
            saveAudioInputDeviceId(deviceId !== null && deviceId !== void 0 ? deviceId : 'default');
        }
    }["useInputControls.useCallback[handleAudioDeviceChange]"], [
        saveAudioInputDeviceId
    ]);
    const handleVideoDeviceChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInputControls.useCallback[handleVideoDeviceChange]": (deviceId)=>{
            saveVideoInputDeviceId(deviceId !== null && deviceId !== void 0 ? deviceId : 'default');
        }
    }["useInputControls.useCallback[handleVideoDeviceChange]"], [
        saveVideoInputDeviceId
    ]);
    const handleToggleCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInputControls.useCallback[handleToggleCamera]": async (enabled)=>{
            if (screenShareToggle.enabled) {
                screenShareToggle.toggle(false);
            }
            await cameraToggle.toggle(enabled);
            // persist video input enabled preference
            saveVideoInputEnabled(!cameraToggle.enabled);
        }
    }["useInputControls.useCallback[handleToggleCamera]"], [
        cameraToggle,
        screenShareToggle,
        saveVideoInputEnabled
    ]);
    const handleToggleMicrophone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInputControls.useCallback[handleToggleMicrophone]": async (enabled)=>{
            await microphoneToggle.toggle(enabled);
            // persist audio input enabled preference
            saveAudioInputEnabled(!microphoneToggle.enabled);
        }
    }["useInputControls.useCallback[handleToggleMicrophone]"], [
        microphoneToggle,
        saveAudioInputEnabled
    ]);
    const handleToggleScreenShare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInputControls.useCallback[handleToggleScreenShare]": async (enabled)=>{
            if (cameraToggle.enabled) {
                cameraToggle.toggle(false);
            }
            await screenShareToggle.toggle(enabled);
        }
    }["useInputControls.useCallback[handleToggleScreenShare]"], [
        cameraToggle,
        screenShareToggle
    ]);
    const handleMicrophoneDeviceSelectError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInputControls.useCallback[handleMicrophoneDeviceSelectError]": (error)=>onDeviceError === null || onDeviceError === void 0 ? void 0 : onDeviceError({
                source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
                error
            })
    }["useInputControls.useCallback[handleMicrophoneDeviceSelectError]"], [
        onDeviceError
    ]);
    const handleCameraDeviceSelectError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInputControls.useCallback[handleCameraDeviceSelectError]": (error)=>onDeviceError === null || onDeviceError === void 0 ? void 0 : onDeviceError({
                source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera,
                error
            })
    }["useInputControls.useCallback[handleCameraDeviceSelectError]"], [
        onDeviceError
    ]);
    return {
        micTrackRef,
        cameraToggle: {
            ...cameraToggle,
            toggle: handleToggleCamera
        },
        microphoneToggle: {
            ...microphoneToggle,
            toggle: handleToggleMicrophone
        },
        screenShareToggle: {
            ...screenShareToggle,
            toggle: handleToggleScreenShare
        },
        handleAudioDeviceChange,
        handleVideoDeviceChange,
        handleMicrophoneDeviceSelectError,
        handleCameraDeviceSelectError
    };
}
_s(useInputControls, "CTGF/aNuBloyUvWF/9th28kdihg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__["useLocalParticipant"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__useTrackToggle$3e$__["useTrackToggle"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__useTrackToggle$3e$__["useTrackToggle"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__useTrackToggle$3e$__["useTrackToggle"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__usePersistentUserChoices$3e$__["usePersistentUserChoices"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/hooks/use-publish-permissions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePublishPermissions",
    ()=>usePublishPermissions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useLocalParticipantPermissions$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-client] (ecmascript) <export A as useLocalParticipantPermissions>");
var _s = __turbopack_context__.k.signature();
;
;
const trackSourceToProtocol = (source)=>{
    // NOTE: this mapping avoids importing the protocol package as that leads to a significant bundle size increase
    switch(source){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera:
            return 1;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone:
            return 2;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare:
            return 3;
        default:
            return 0;
    }
};
function usePublishPermissions() {
    _s();
    const localPermissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useLocalParticipantPermissions$3e$__["useLocalParticipantPermissions"])();
    const canPublishSource = (source)=>{
        return !!(localPermissions === null || localPermissions === void 0 ? void 0 : localPermissions.canPublish) && (localPermissions.canPublishSources.length === 0 || localPermissions.canPublishSources.includes(trackSourceToProtocol(source)));
    };
    var _localPermissions_canPublishData;
    return {
        camera: canPublishSource(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera),
        microphone: canPublishSource(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone),
        screenShare: canPublishSource(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare),
        data: (_localPermissions_canPublishData = localPermissions === null || localPermissions === void 0 ? void 0 : localPermissions.canPublishData) !== null && _localPermissions_canPublishData !== void 0 ? _localPermissions_canPublishData : false
    };
}
_s(usePublishPermissions, "Odic0X/xsfsczbWjAGq7cvB4uRU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useLocalParticipantPermissions$3e$__["useLocalParticipantPermissions"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretDown$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/CaretDown.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretUp$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/CaretUp.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Check$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/Check.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Select(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_c1 = SelectGroup;
function SelectValue(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger(param) {
    let { className, size = 'default', children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])([
            'flex w-fit cursor-pointer items-center justify-between gap-2',
            'rounded-full px-3 py-2 text-sm whitespace-nowrap',
            'bg-muted transition-[color,border,background-color]',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'focus-visible:border-ring focus-visible:ring-ring/50 hover:bg-foreground/10 focus:bg-foreground/10 outline-none focus-visible:ring-[3px]',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
            'data-[placeholder]:text-muted-foreground',
            'data-[size=default]:h-9 data-[size=sm]:h-8',
            '*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2',
            "[&:not([class*='text-'])_svg:not([class*='text-'])]:text-muted-foreground",
            "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
        ], className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretDown$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaretDownIcon"], {
                    weight: "bold",
                    className: "size-4 transition-colors"
                }, void 0, false, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent(param) {
    let { className, children, position = 'popper', ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])([
                'bg-popover text-popover-foreground relative z-50 overflow-x-hidden overflow-y-auto rounded-md border drop-shadow-xl/5',
                'max-h-(--radix-select-content-available-height) min-w-[8rem]',
                'origin-(--radix-select-content-transform-origin)',
                'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
                'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
                'data-[side=top]:slide-in-from-bottom-2',
                'data-[side=right]:slide-in-from-left-2',
                'data-[side=bottom]:slide-in-from-top-2',
                'data-[side=left]:slide-in-from-right-2'
            ], position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1', className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-1', position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground px-2 py-1.5 text-xs', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])([
            'relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none',
            'cursor-pointer disabled:cursor-not-allowed',
            'focus:bg-accent focus:text-accent-foreground',
            'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            '*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2',
            "[&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
        ], className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Check$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckIcon"], {
                        className: "size-4",
                        weight: "bold"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-border pointer-events-none -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretUp$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaretUpIcon"], {
            className: "size-4",
            weight: "bold"
        }, void 0, false, {
            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
            lineNumber: 167,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretDown$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaretDownIcon"], {
            className: "size-4",
            weight: "bold"
        }, void 0, false, {
            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
            lineNumber: 182,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-device-select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrackDeviceSelect",
    ()=>TrackDeviceSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$CjCD4TaH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useMaybeRoomContext$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/contexts-CjCD4TaH.mjs [app-client] (ecmascript) <export w as useMaybeRoomContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__useMediaDeviceSelect$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-client] (ecmascript) <export e as useMediaDeviceSelect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const selectVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('w-full rounded-full px-3 py-2 text-sm cursor-pointer disabled:not-allowed', {
    variants: {
        size: {
            default: 'w-[180px]',
            sm: 'w-auto'
        }
    },
    defaultVariants: {
        size: 'default'
    }
});
function TrackDeviceSelect(param) {
    let { kind, track, size = 'default', requestPermissions = false, onMediaDeviceError, onDeviceListChange, onActiveDeviceChange, ...props } = param;
    _s();
    const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$CjCD4TaH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useMaybeRoomContext$3e$__["useMaybeRoomContext"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [requestPermissionsState, setRequestPermissionsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(requestPermissions);
    const { devices, activeDeviceId, setActiveMediaDevice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__useMediaDeviceSelect$3e$__["useMediaDeviceSelect"])({
        room,
        kind,
        track,
        requestPermissions: requestPermissionsState,
        onError: onMediaDeviceError
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrackDeviceSelect.useEffect": ()=>{
            onDeviceListChange === null || onDeviceListChange === void 0 ? void 0 : onDeviceListChange(devices);
        }
    }["TrackDeviceSelect.useEffect"], [
        devices,
        onDeviceListChange
    ]);
    // When the select opens, ensure that media devices are re-requested in case when they were last
    // requested, permissions were not granted
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "TrackDeviceSelect.useLayoutEffect": ()=>{
            if (open) {
                setRequestPermissionsState(true);
            }
        }
    }["TrackDeviceSelect.useLayoutEffect"], [
        open
    ]);
    const handleActiveDeviceChange = (deviceId)=>{
        setActiveMediaDevice(deviceId);
        onActiveDeviceChange === null || onActiveDeviceChange === void 0 ? void 0 : onActiveDeviceChange(deviceId);
    };
    const filteredDevices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TrackDeviceSelect.useMemo[filteredDevices]": ()=>devices.filter({
                "TrackDeviceSelect.useMemo[filteredDevices]": (d)=>d.deviceId !== ''
            }["TrackDeviceSelect.useMemo[filteredDevices]"])
    }["TrackDeviceSelect.useMemo[filteredDevices]"], [
        devices
    ]);
    if (filteredDevices.length < 2) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
        open: open,
        value: activeDeviceId,
        onOpenChange: setOpen,
        onValueChange: handleActiveDeviceChange,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(selectVariants({
                    size
                }), props.className),
                children: size !== 'sm' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                    className: "font-mono text-sm",
                    placeholder: "Select a ".concat(kind)
                }, void 0, false, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-device-select.tsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-device-select.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: filteredDevices.map((device)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                        value: device.deviceId,
                        className: "font-mono text-xs",
                        children: device.label
                    }, device.deviceId, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-device-select.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-device-select.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-device-select.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(TrackDeviceSelect, "E+buNOuz+Ui5zQlfRq7iZZV1LRc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$CjCD4TaH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useMaybeRoomContext$3e$__["useMaybeRoomContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__useMediaDeviceSelect$3e$__["useMediaDeviceSelect"]
    ];
});
_c = TrackDeviceSelect;
var _c;
__turbopack_context__.k.register(_c, "TrackDeviceSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-selector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrackSelector",
    ()=>TrackSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__B__as__BarVisualizer$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/components-CMpq9Z_u.mjs [app-client] (ecmascript) <export B as BarVisualizer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$device$2d$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-device-select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function TrackSelector(param) {
    let { kind, source, pressed, pending, disabled, className, audioTrackRef, onPressedChange, onMediaDeviceError, onActiveDeviceChange } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-0', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackToggle"], {
                size: "icon",
                variant: "primary",
                source: source,
                pressed: pressed,
                pending: pending,
                disabled: disabled,
                onPressedChange: onPressedChange,
                className: "peer/track group/track has-[.audiovisualizer]:w-auto has-[.audiovisualizer]:px-3 has-[~_button]:rounded-r-none has-[~_button]:pr-2 has-[~_button]:pl-3",
                children: audioTrackRef && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__B__as__BarVisualizer$3e$__["BarVisualizer"], {
                    barCount: 3,
                    options: {
                        minHeight: 5
                    },
                    trackRef: audioTrackRef,
                    className: "audiovisualizer flex h-6 w-auto items-center justify-center gap-0.5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])([
                            'h-full w-0.5 origin-center rounded-2xl',
                            'group-data-[state=on]/track:bg-foreground group-data-[state=off]/track:bg-destructive',
                            'data-lk-muted:bg-muted'
                        ])
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-selector.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-selector.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-selector.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "bg-border peer-data-[state=off]/track:bg-destructive/20 relative z-10 -mr-px hidden h-4 w-px border-none has-[~_button]:block"
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-selector.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$device$2d$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackDeviceSelect"], {
                size: "sm",
                kind: kind,
                requestPermissions: false,
                onMediaDeviceError: onMediaDeviceError,
                onActiveDeviceChange: onActiveDeviceChange,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])([
                    'rounded-l-none pl-2',
                    'peer-data-[state=off]/track:text-destructive',
                    'hover:text-foreground focus:text-foreground',
                    'hover:peer-data-[state=off]/track:text-foreground',
                    'focus:peer-data-[state=off]/track:text-destructive'
                ])
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-selector.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-selector.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = TrackSelector;
var _c;
__turbopack_context__.k.register(_c, "TrackSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgentControlBar",
    ()=>AgentControlBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useChat$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-client] (ecmascript) <export w as useChat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__M__as__useRemoteParticipants$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-client] (ecmascript) <export M as useRemoteParticipants>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ChatText$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/ChatText.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$PhoneDisconnect$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/PhoneDisconnect.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$chat$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/chat-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$hooks$2f$use$2d$input$2d$controls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/hooks/use-input-controls.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$hooks$2f$use$2d$publish$2d$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/hooks/use-publish-permissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-selector.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function AgentControlBar(param) {
    let { controls, saveUserChoices = true, className, isConnectionActive = false, onDisconnect, onDeviceError, onChatOpenChange, ...props } = param;
    _s();
    const { send } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useChat$3e$__["useChat"])();
    const participants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__M__as__useRemoteParticipants$3e$__["useRemoteParticipants"])();
    const [chatOpen, setChatOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const publishPermissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$hooks$2f$use$2d$publish$2d$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublishPermissions"])();
    const { micTrackRef, cameraToggle, microphoneToggle, screenShareToggle, handleAudioDeviceChange, handleVideoDeviceChange, handleMicrophoneDeviceSelectError, handleCameraDeviceSelectError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$hooks$2f$use$2d$input$2d$controls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInputControls"])({
        onDeviceError,
        saveUserChoices
    });
    const handleSendMessage = async (message)=>{
        await send(message);
    };
    const handleToggleTranscript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AgentControlBar.useCallback[handleToggleTranscript]": (open)=>{
            setChatOpen(open);
            onChatOpenChange === null || onChatOpenChange === void 0 ? void 0 : onChatOpenChange(open);
        }
    }["AgentControlBar.useCallback[handleToggleTranscript]"], [
        onChatOpenChange,
        setChatOpen
    ]);
    var _controls_leave, _controls_microphone, _controls_screenShare, _controls_camera, _controls_chat;
    const visibleControls = {
        leave: (_controls_leave = controls === null || controls === void 0 ? void 0 : controls.leave) !== null && _controls_leave !== void 0 ? _controls_leave : true,
        microphone: (_controls_microphone = controls === null || controls === void 0 ? void 0 : controls.microphone) !== null && _controls_microphone !== void 0 ? _controls_microphone : publishPermissions.microphone,
        screenShare: (_controls_screenShare = controls === null || controls === void 0 ? void 0 : controls.screenShare) !== null && _controls_screenShare !== void 0 ? _controls_screenShare : publishPermissions.screenShare,
        camera: (_controls_camera = controls === null || controls === void 0 ? void 0 : controls.camera) !== null && _controls_camera !== void 0 ? _controls_camera : publishPermissions.camera,
        chat: (_controls_chat = controls === null || controls === void 0 ? void 0 : controls.chat) !== null && _controls_chat !== void 0 ? _controls_chat : publishPermissions.data
    };
    const isAgentAvailable = participants.some((p)=>p.isAgent);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-label": "Trivia Night controls",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background border-input/50 dark:border-muted flex flex-col rounded-[31px] border p-3 drop-shadow-md/3 trivia-card', className),
        ...props,
        children: [
            visibleControls.chat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$chat$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatInput"], {
                chatOpen: chatOpen,
                isAgentAvailable: isAgentAvailable,
                onSend: handleSendMessage
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex grow gap-1",
                        children: [
                            visibleControls.microphone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackSelector"], {
                                kind: "audioinput",
                                "aria-label": "Toggle microphone",
                                source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
                                pressed: microphoneToggle.enabled,
                                disabled: microphoneToggle.pending,
                                audioTrackRef: micTrackRef,
                                onPressedChange: microphoneToggle.toggle,
                                onMediaDeviceError: handleMicrophoneDeviceSelectError,
                                onActiveDeviceChange: handleAudioDeviceChange
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            visibleControls.camera && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackSelector"], {
                                kind: "videoinput",
                                "aria-label": "Toggle camera",
                                source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera,
                                pressed: cameraToggle.enabled,
                                pending: cameraToggle.pending,
                                disabled: cameraToggle.pending,
                                onPressedChange: cameraToggle.toggle,
                                onMediaDeviceError: handleCameraDeviceSelectError,
                                onActiveDeviceChange: handleVideoDeviceChange
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            visibleControls.screenShare && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackToggle"], {
                                size: "icon",
                                variant: "secondary",
                                "aria-label": "Toggle screen share",
                                source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare,
                                pressed: screenShareToggle.enabled,
                                disabled: screenShareToggle.pending,
                                onPressedChange: screenShareToggle.toggle
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                size: "icon",
                                variant: "secondary",
                                "aria-label": "Toggle transcript",
                                pressed: chatOpen,
                                onPressedChange: handleToggleTranscript,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ChatText$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatTextIcon"], {
                                    weight: "bold"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    visibleControls.leave && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "destructive",
                        onClick: onDisconnect,
                        disabled: !isConnectionActive,
                        className: "font-mono font-bold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$PhoneDisconnect$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneDisconnectIcon"], {
                                weight: "bold"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden md:inline",
                                children: "🏁 END TRIVIA"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline md:hidden",
                                children: "🏁 END"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(AgentControlBar, "Le8f7aQ9WvXXe3XIIzbBrYCR67Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useChat$3e$__["useChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__M__as__useRemoteParticipants$3e$__["useRemoteParticipants"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$hooks$2f$use$2d$publish$2d$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublishPermissions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$hooks$2f$use$2d$input$2d$controls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInputControls"]
    ];
});
_c = AgentControlBar;
var _c;
__turbopack_context__.k.register(_c, "AgentControlBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useConnection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectionProvider",
    ()=>ConnectionProvider,
    "useConnection",
    ()=>useConnection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__SessionProvider$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/components-CMpq9Z_u.mjs [app-client] (ecmascript) <export z as SessionProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a3__as__useSession$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-client] (ecmascript) <export a3 as useSession>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const ConnectionContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    isConnectionActive: false,
    connect: ()=>{},
    startDisconnectTransition: ()=>{},
    onDisconnectTransitionComplete: ()=>{}
});
function useConnection() {
    _s();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ConnectionContext);
    if (!ctx) {
        throw new Error('useConnection must be used within a ConnectionProvider');
    }
    return ctx;
}
_s(useConnection, "/dMy7t63NXD4eYACoT93CePwGrg=");
function ConnectionProvider(param) {
    let { appConfig, children } = param;
    _s1();
    const [isConnectionActive, setIsConnectionActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const tokenSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ConnectionProvider.useMemo[tokenSource]": ()=>{
            if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONN_DETAILS_ENDPOINT === 'string') {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenSource"].custom({
                    "ConnectionProvider.useMemo[tokenSource]": async ()=>{
                        const url = new URL(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONN_DETAILS_ENDPOINT, window.location.origin);
                        try {
                            var _appConfig_sandboxId;
                            const res = await fetch(url.toString(), {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'X-Sandbox-Id': (_appConfig_sandboxId = appConfig.sandboxId) !== null && _appConfig_sandboxId !== void 0 ? _appConfig_sandboxId : ''
                                },
                                body: JSON.stringify({
                                    room_config: appConfig.agentName ? {
                                        agents: [
                                            {
                                                agent_name: appConfig.agentName
                                            }
                                        ]
                                    } : undefined
                                })
                            });
                            return await res.json();
                        } catch (error) {
                            console.error('Error fetching connection details:', error);
                            throw new Error('Error fetching connection details!');
                        }
                    }
                }["ConnectionProvider.useMemo[tokenSource]"]);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenSource"].endpoint('/api/connection-details');
        }
    }["ConnectionProvider.useMemo[tokenSource]"], [
        appConfig
    ]);
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a3__as__useSession$3e$__["useSession"])(tokenSource, appConfig.agentName ? {
        agentName: appConfig.agentName
    } : undefined);
    const { start: startSession, end: endSession } = session;
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ConnectionProvider.useMemo[value]": ()=>{
            return {
                isConnectionActive,
                connect: ({
                    "ConnectionProvider.useMemo[value]": ()=>{
                        setIsConnectionActive(true);
                        startSession();
                    }
                })["ConnectionProvider.useMemo[value]"],
                startDisconnectTransition: ({
                    "ConnectionProvider.useMemo[value]": ()=>{
                        setIsConnectionActive(false);
                    }
                })["ConnectionProvider.useMemo[value]"],
                onDisconnectTransitionComplete: ({
                    "ConnectionProvider.useMemo[value]": ()=>{
                        endSession();
                    }
                })["ConnectionProvider.useMemo[value]"]
            };
        }
    }["ConnectionProvider.useMemo[value]"], [
        startSession,
        endSession,
        isConnectionActive
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__SessionProvider$3e$__["SessionProvider"], {
        session: session,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConnectionContext.Provider, {
            value: value,
            children: children
        }, void 0, false, {
            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useConnection.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useConnection.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s1(ConnectionProvider, "6uDTf1xhidd09bOELBE5/d5eFxo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a3__as__useSession$3e$__["useSession"]
    ];
});
_c = ConnectionProvider;
var _c;
__turbopack_context__.k.register(_c, "ConnectionProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/scroll-area/hooks/useAutoScroll.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAutoScroll",
    ()=>useAutoScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const AUTO_SCROLL_THRESHOLD_PX = 100;
function useAutoScroll(scrollContentContainer) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAutoScroll.useEffect": ()=>{
            function scrollToBottom() {
                if (!scrollContentContainer) return;
                const distanceFromBottom = scrollContentContainer.scrollHeight - scrollContentContainer.clientHeight - scrollContentContainer.scrollTop;
                if (distanceFromBottom < AUTO_SCROLL_THRESHOLD_PX) {
                    scrollContentContainer.scrollTop = scrollContentContainer.scrollHeight;
                }
            }
            if (scrollContentContainer && scrollContentContainer.firstElementChild) {
                const resizeObserver = new ResizeObserver(scrollToBottom);
                resizeObserver.observe(scrollContentContainer.firstElementChild);
                scrollToBottom();
                return ({
                    "useAutoScroll.useEffect": ()=>resizeObserver.disconnect()
                })["useAutoScroll.useEffect"];
            }
        }
    }["useAutoScroll.useEffect"], [
        scrollContentContainer
    ]);
}
_s(useAutoScroll, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/scroll-area/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$scroll$2d$area$2f$hooks$2f$useAutoScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/scroll-area/hooks/useAutoScroll.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ScrollArea = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function ScrollArea(param, ref) {
    let { className, children } = param;
    _s();
    const scrollContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$scroll$2d$area$2f$hooks$2f$useAutoScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAutoScroll"])(scrollContentRef.current);
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScrollArea.ScrollArea.useCallback[mergedRef]": (node)=>{
            scrollContentRef.current = node;
            if (typeof ref === 'function') {
                ref(node);
            } else if (ref) {
                ref.current = node;
            }
        }
    }["ScrollArea.ScrollArea.useCallback[mergedRef]"], [
        ref
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mergedRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('overflow-y-scroll scroll-smooth', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: children
        }, void 0, false, {
            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/scroll-area/scroll-area.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/scroll-area/scroll-area.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}, "j9OR0l/hsrpX0tNHnqgzojtdvz8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$scroll$2d$area$2f$hooks$2f$useAutoScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAutoScroll"]
    ];
})), "j9OR0l/hsrpX0tNHnqgzojtdvz8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$scroll$2d$area$2f$hooks$2f$useAutoScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAutoScroll"]
    ];
});
_c1 = ScrollArea;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrollArea$forwardRef");
__turbopack_context__.k.register(_c1, "ScrollArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fade",
    ()=>Fade,
    "SessionView",
    ()=>SessionView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$CjCD4TaH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__aB__as__useSessionContext$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/contexts-CjCD4TaH.mjs [app-client] (ecmascript) <export aB as useSessionContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__useSessionMessages$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-client] (ecmascript) <export a6 as useSessionMessages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$chat$2d$transcript$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/chat-transcript.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$preconnect$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/preconnect-message.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$tile$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/tile-layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$agent$2d$control$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useConnection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$scroll$2d$area$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/scroll-area/scroll-area.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const MotionBottom = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create('div');
_c = MotionBottom;
const BOTTOM_VIEW_MOTION_PROPS = {
    variants: {
        visible: {
            opacity: 1,
            translateY: '0%'
        },
        hidden: {
            opacity: 0,
            translateY: '100%'
        }
    },
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden',
    transition: {
        duration: 0.3,
        delay: 0.5,
        ease: 'easeOut'
    }
};
function Fade(param) {
    let { top = false, bottom = false, className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('from-background pointer-events-none h-4 bg-linear-to-b to-transparent', top && 'bg-linear-to-b', bottom && 'bg-linear-to-t', className)
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c1 = Fade;
const SessionView = (param)=>{
    let { appConfig, ...props } = param;
    _s();
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$CjCD4TaH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__aB__as__useSessionContext$3e$__["useSessionContext"])();
    const { messages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__useSessionMessages$3e$__["useSessionMessages"])(session);
    const [chatOpen, setChatOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isConnectionActive, startDisconnectTransition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"])();
    const scrollAreaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const controls = {
        leave: true,
        microphone: true,
        chat: appConfig.supportsChatInput,
        camera: appConfig.supportsVideoInput,
        screenShare: appConfig.supportsVideoInput
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SessionView.useEffect": ()=>{
            var _lastMessage_from;
            const lastMessage = messages.at(-1);
            const lastMessageIsLocal = (lastMessage === null || lastMessage === void 0 ? void 0 : (_lastMessage_from = lastMessage.from) === null || _lastMessage_from === void 0 ? void 0 : _lastMessage_from.isLocal) === true;
            if (scrollAreaRef.current && lastMessageIsLocal) {
                scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
            }
        }
    }["SessionView.useEffect"], [
        messages
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-background relative z-10 h-full w-full overflow-hidden",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed inset-0 grid grid-cols-1 grid-rows-1', !chatOpen && 'pointer-events-none'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Fade, {
                        top: true,
                        className: "absolute inset-x-4 top-0 h-40"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$scroll$2d$area$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                        ref: scrollAreaRef,
                        className: "px-4 pt-40 pb-[150px] md:px-6 md:pb-[200px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$chat$2d$transcript$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatTranscript"], {
                            hidden: !chatOpen,
                            messages: messages,
                            className: "mx-auto max-w-2xl space-y-3 transition-opacity duration-300 ease-out"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$tile$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayout"], {
                chatOpen: chatOpen
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionBottom, {
                ...BOTTOM_VIEW_MOTION_PROPS,
                className: "fixed inset-x-3 bottom-0 z-50 md:inset-x-12",
                children: [
                    appConfig.isPreConnectBufferEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$preconnect$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreConnectMessage"], {
                        messages: messages,
                        className: "pb-4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-background relative mx-auto max-w-2xl pb-3 md:pb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Fade, {
                                bottom: true,
                                className: "absolute inset-x-0 top-0 h-4 -translate-y-full"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$agent$2d$control$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentControlBar"], {
                                controls: controls,
                                isConnectionActive: isConnectionActive,
                                onDisconnect: startDisconnectTransition,
                                onChatOpenChange: setChatOpen
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SessionView, "RNwesVJIBfoGPiuhREUvkCS6x9M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$CjCD4TaH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__aB__as__useSessionContext$3e$__["useSessionContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__useSessionMessages$3e$__["useSessionMessages"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"]
    ];
});
_c2 = SessionView;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MotionBottom");
__turbopack_context__.k.register(_c1, "Fade");
__turbopack_context__.k.register(_c2, "SessionView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WelcomeView",
    ()=>WelcomeView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/button.tsx [app-client] (ecmascript)");
;
;
function WelcomeImage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "80",
        height: "80",
        viewBox: "0 0 80 80",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "mb-6 size-20 text-primary",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M40 10C36 10 32 12 32 15V20H25C23 20 20 22 20 25V28C20 35 24 40 30 42C32 44 34 45 36 45V50C36 52 34 54 32 54H28C26 54 24 56 24 58V62C24 64 26 66 28 66H52C54 66 56 64 56 62V58C56 56 54 54 52 54H48C46 54 44 52 44 50V45C46 45 48 44 50 42C56 40 60 35 60 28V25C60 22 57 20 55 20H48V15C48 12 44 10 40 10Z",
                fill: "currentColor",
                opacity: "0.2"
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M40 8C35 8 30 10 30 14V18H22C19 18 16 20 16 24V28C16 36 21 42 28 44C30 47 33 48 36 49V52C36 55 33 57 30 57H24C21 57 18 60 18 63V68C18 71 21 74 24 74H56C59 74 62 71 62 68V63C62 60 59 57 56 57H50C47 57 44 55 44 52V49C47 48 50 47 52 44C59 42 64 36 64 28V24C64 20 61 18 58 18H50V14C50 10 45 8 40 8Z",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 15L16 18L19 19L16 20L15 23L14 20L11 19L14 18L15 15Z",
                fill: "currentColor",
                className: "text-secondary"
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M65 15L66 18L69 19L66 20L65 23L64 20L61 19L64 18L65 15Z",
                fill: "currentColor",
                className: "text-secondary"
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M70 50L71 52L73 53L71 54L70 56L69 54L67 53L69 52L70 50Z",
                fill: "currentColor",
                className: "text-accent"
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = WelcomeImage;
const WelcomeView = (param)=>{
    let { startButtonText, onStartCall, ref } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-background flex flex-col items-center justify-center text-center px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WelcomeImage, {}, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary mb-4 animate-text-shimmer",
                        children: "🎤 Trivia Night 🎤"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-foreground max-w-prose text-lg md:text-xl leading-7 font-semibold mb-2",
                        children: "Test your knowledge with our AI quiz master!"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground max-w-md text-sm md:text-base leading-6 mb-8",
                        children: "Get ready to answer questions, compete for points, and have a blast! Use your microphone to buzz in and answer."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "primary",
                        size: "lg",
                        onClick: onStartCall,
                        className: "mt-2 px-8 py-6 text-lg font-bold font-mono shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
                        children: [
                            "🏆 ",
                            startButtonText,
                            " 🏆"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex gap-4 text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: "⚡ Quick Rounds"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: "🎯 Multiple Categories"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: "🌟 Fun & Interactive"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-5 left-0 flex w-full items-center justify-center px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground max-w-prose pt-1 text-xs leading-5 font-normal text-pretty md:text-sm",
                    children: [
                        "Powered by LiveKit Voice AI •",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "https://docs.livekit.io/agents/start/voice-ai/",
                            className: "underline hover:text-primary transition-colors",
                            children: "Learn more"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = WelcomeView;
var _c, _c1;
__turbopack_context__.k.register(_c, "WelcomeImage");
__turbopack_context__.k.register(_c1, "WelcomeView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/view-controller.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ViewController",
    ()=>ViewController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$session$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$welcome$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useConnection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const MotionWelcomeView = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$welcome$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WelcomeView"]);
_c = MotionWelcomeView;
const MotionSessionView = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$session$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionView"]);
_c1 = MotionSessionView;
const VIEW_MOTION_PROPS = {
    variants: {
        visible: {
            opacity: 1
        },
        hidden: {
            opacity: 0
        }
    },
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden',
    transition: {
        duration: 0.5,
        ease: 'linear'
    }
};
function ViewController(param) {
    let { appConfig } = param;
    _s();
    const { isConnectionActive, connect, onDisconnectTransitionComplete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"])();
    const handleAnimationComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ViewController.useCallback[handleAnimationComplete]": (definition)=>{
            // manually end the session when the exit animation completes
            if (definition === 'hidden') {
                onDisconnectTransitionComplete();
            }
        }
    }["ViewController.useCallback[handleAnimationComplete]"], [
        onDisconnectTransitionComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "wait",
        children: [
            !isConnectionActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionWelcomeView, {
                ...VIEW_MOTION_PROPS,
                startButtonText: appConfig.startButtonText,
                onStartCall: connect
            }, "welcome", false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/view-controller.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this),
            isConnectionActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionSessionView, {
                ...VIEW_MOTION_PROPS,
                appConfig: appConfig,
                onAnimationComplete: handleAnimationComplete
            }, "session-view", false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/view-controller.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/view-controller.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(ViewController, "OnoHzQksExFbPcML8x7M9DBo2TM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"]
    ];
});
_c2 = ViewController;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MotionWelcomeView");
__turbopack_context__.k.register(_c1, "MotionSessionView");
__turbopack_context__.k.register(_c2, "ViewController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/toaster.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Warning$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/Warning.es.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Toaster(param) {
    let { ...props } = param;
    _s();
    const { theme = 'system' } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        position: "top-center",
        icons: {
            warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Warning$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WarningIcon"], {
                weight: "bold"
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/toaster.tsx",
                lineNumber: 16,
                columnNumber: 18
            }, void 0)
        },
        style: {
            '--normal-bg': 'var(--popover)',
            '--normal-text': 'var(--popover-foreground)',
            '--normal-border': 'var(--border)'
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/toaster.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(Toaster, "bbCbBsvL7+LiaR8ofHlkcwveh/Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Toaster;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>Alert,
    "AlertDescription",
    ()=>AlertDescription,
    "AlertTitle",
    ()=>AlertTitle,
    "alertVariants",
    ()=>alertVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])([
    'relative w-full rounded-lg border px-4 py-3 text-sm grid grid-cols-[0_1fr] gap-y-0.5 items-start',
    'has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current'
], {
    variants: {
        variant: {
            default: 'bg-card text-card-foreground',
            destructive: [
                'text-destructive bg-destructive/10 border-destructive/20',
                '[&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90'
            ]
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Alert(param) {
    let { className, variant, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Alert;
function AlertTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c1 = AlertTitle;
function AlertDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c2 = AlertDescription;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Alert");
__turbopack_context__.k.register(_c1, "AlertTitle");
__turbopack_context__.k.register(_c2, "AlertDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert-toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertToast",
    ()=>AlertToast,
    "toastAlert",
    ()=>toastAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Warning$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/Warning.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function toastAlert(toast) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].custom((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertToast, {
            id: id,
            title: toast.title,
            description: toast.description
        }, void 0, false, {
            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert-toast.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, this), {
        duration: 10_000
    });
}
function AlertToast(props) {
    const { title, description, id } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(id),
        className: "bg-accent w-full md:w-[364px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Warning$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WarningIcon"], {
                weight: "bold"
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert-toast.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                children: title
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert-toast.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                children: description
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert-toast.tsx",
                lineNumber: 28,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert-toast.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = AlertToast;
var _c;
__turbopack_context__.k.register(_c, "AlertToast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useAgentErrors.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAgentErrors",
    ()=>useAgentErrors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__useAgent$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-client] (ecmascript) <export S as useAgent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$alert$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert-toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useConnection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useAgentErrors() {
    _s();
    const agent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__useAgent$3e$__["useAgent"])();
    const { isConnectionActive, startDisconnectTransition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAgentErrors.useEffect": ()=>{
            if (isConnectionActive && agent.state === 'failed') {
                const reasons = agent.failureReasons;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$alert$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toastAlert"])({
                    title: 'Session ended',
                    description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            reasons.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-inside list-disc",
                                children: reasons.map({
                                    "useAgentErrors.useEffect": (reason)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: reason
                                        }, reason, false, {
                                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useAgentErrors.tsx",
                                            lineNumber: 21,
                                            columnNumber: 19
                                        }, this)
                                }["useAgentErrors.useEffect"])
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useAgentErrors.tsx",
                                lineNumber: 19,
                                columnNumber: 15
                            }, this),
                            reasons.length === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "w-full",
                                children: reasons[0]
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useAgentErrors.tsx",
                                lineNumber: 25,
                                columnNumber: 38
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: "https://docs.livekit.io/agents/start/voice-ai/",
                                        className: "whitespace-nowrap underline",
                                        children: "See quickstart guide"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useAgentErrors.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useAgentErrors.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                });
                startDisconnectTransition();
            }
        }
    }["useAgentErrors.useEffect"], [
        agent,
        isConnectionActive,
        startDisconnectTransition
    ]);
}
_s(useAgentErrors, "TjEiXufqzeQyYkGoq72/HKGx2yI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__useAgent$3e$__["useAgent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useDebug.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebugMode",
    ()=>useDebugMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$CjCD4TaH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/contexts-CjCD4TaH.mjs [app-client] (ecmascript) <export f as useRoomContext>");
var _s = __turbopack_context__.k.signature();
;
;
;
const useDebugMode = function() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$CjCD4TaH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__["useRoomContext"])();
    var _options_logLevel;
    const logLevel = (_options_logLevel = options.logLevel) !== null && _options_logLevel !== void 0 ? _options_logLevel : 'debug';
    var _options_enabled;
    const enabled = (_options_enabled = options.enabled) !== null && _options_enabled !== void 0 ? _options_enabled : true;
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useDebugMode.useEffect": ()=>{
            if (!enabled) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLogLevel"])('silent');
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLogLevel"])(logLevel !== null && logLevel !== void 0 ? logLevel : 'debug');
            // @ts-expect-error this is a global variable
            window.__lk_room = room;
            return ({
                "useDebugMode.useEffect": ()=>{
                    // @ts-expect-error this is a global variable
                    window.__lk_room = undefined;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLogLevel"])('silent');
                }
            })["useDebugMode.useEffect"];
        }
    }["useDebugMode.useEffect"], [
        room,
        enabled,
        logLevel
    ]);
};
_s(useDebugMode, "2NV+dXnyamrPK9LXoGRflc+bZfU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$CjCD4TaH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__["useRoomContext"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/app.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "App",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomAudioRenderer$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/components-CMpq9Z_u.mjs [app-client] (ecmascript) <export R as RoomAudioRenderer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__q__as__StartAudio$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/components-CMpq9Z_u.mjs [app-client] (ecmascript) <export q as StartAudio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$view$2d$controller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/view-controller.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$toaster$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/toaster.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useAgentErrors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useAgentErrors.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useConnection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useDebug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useDebug.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const IN_DEVELOPMENT = ("TURBOPACK compile-time value", "development") !== 'production';
function AppSetup() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useDebug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugMode"])({
        enabled: IN_DEVELOPMENT
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useAgentErrors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAgentErrors"])();
    return null;
}
_s(AppSetup, "/u370Sw5A430MZjHVaeNnEIbyvc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useDebug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugMode"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useAgentErrors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAgentErrors"]
    ];
});
_c = AppSetup;
function App(param) {
    let { appConfig } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionProvider"], {
        appConfig: appConfig,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppSetup, {}, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/app.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "grid h-svh grid-cols-1 place-content-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$view$2d$controller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewController"], {
                    appConfig: appConfig
                }, void 0, false, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/app.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/app.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__q__as__StartAudio$3e$__["StartAudio"], {
                label: "Start Audio"
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/app.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomAudioRenderer$3e$__["RoomAudioRenderer"], {}, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/app.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$toaster$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/app.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/app.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = App;
var _c, _c1;
__turbopack_context__.k.register(_c, "AppSetup");
__turbopack_context__.k.register(_c1, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=be5c9_Projects_Interview%20Prep_livekit-starter-code_agent-starter-react_32cb81cb._.js.map