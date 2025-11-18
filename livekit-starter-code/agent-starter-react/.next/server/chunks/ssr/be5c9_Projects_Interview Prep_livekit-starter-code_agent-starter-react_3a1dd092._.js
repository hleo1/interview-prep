module.exports = [
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/chat-entry.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatEntry",
    ()=>ChatEntry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-ssr] (ecmascript)");
;
;
const ChatEntry = ({ name, locale, timestamp, message, messageOrigin, hasBeenEdited = false, className, ...props })=>{
    const time = new Date(timestamp);
    const title = time.toLocaleTimeString(locale, {
        timeStyle: 'full'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        title: title,
        "data-lk-message-origin": messageOrigin,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('group flex w-full flex-col gap-0.5', className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground flex items-center gap-2 text-sm font-semibold', messageOrigin === 'local' ? 'flex-row-reverse' : 'text-left'),
                children: [
                    name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: [
                            messageOrigin === 'local' ? '🎤 ' : '🤖 ',
                            name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/chat-entry.tsx",
                        lineNumber: 45,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('max-w-4/5 rounded-[20px] shadow-sm', messageOrigin === 'local' ? 'bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 ml-auto p-3 text-foreground' : 'bg-gradient-to-br from-muted to-card border border-muted-foreground/20 mr-auto p-3'),
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
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/chat-transcript.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatTranscript",
    ()=>ChatTranscript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$chat$2d$entry$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/chat-entry.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const MotionContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].create('div');
const MotionChatEntry = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$chat$2d$entry$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatEntry"]);
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
function ChatTranscript({ hidden = false, messages = [], ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: !hidden && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionContainer, {
            ...CONTAINER_MOTION_PROPS,
            ...props,
            children: messages.map((receivedMessage)=>{
                const { id, timestamp, from, message } = receivedMessage;
                const locale = navigator?.language ?? 'en-US';
                const messageOrigin = from?.isLocal ? 'local' : 'remote';
                const hasBeenEdited = receivedMessage.type === 'chatMessage' && !!receivedMessage.editTimestamp;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionChatEntry, {
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
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/shimmer-text.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShimmerText",
    ()=>ShimmerText,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function ShimmerText({ children, className, ref }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('animate-text-shimmer inline-block !bg-clip-text text-transparent', className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/shimmer-text.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ShimmerText;
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/preconnect-message.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PreConnectMessage",
    ()=>PreConnectMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$shimmer$2d$text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/shimmer-text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const MotionMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].create('p');
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
function PreConnectMessage({ className, messages = [] }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionMessage, {
            ...VIEW_MOTION_PROPS,
            "aria-hidden": messages.length > 0,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('pointer-events-none text-center', className),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$shimmer$2d$text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShimmerText"], {
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
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/tile-layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TileLayout",
    ()=>TileLayout,
    "useLocalTrackRef",
    ()=>useLocalTrackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__B__as__BarVisualizer$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/components-CMpq9Z_u.mjs [app-ssr] (ecmascript) <export B as BarVisualizer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__V__as__VideoTrack$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/components-CMpq9Z_u.mjs [app-ssr] (ecmascript) <export V as VideoTrack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-ssr] (ecmascript) <export C as useLocalParticipant>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-ssr] (ecmascript) <export t as useTracks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__X__as__useVoiceAssistant$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-ssr] (ecmascript) <export X as useVoiceAssistant>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const MotionContainer = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].create('div');
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
    const { localParticipant } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__["useLocalParticipant"])();
    const publication = localParticipant.getTrackPublication(source);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>publication ? {
            source,
            participant: localParticipant,
            publication
        } : undefined, [
        source,
        publication,
        localParticipant
    ]);
    return trackRef;
}
function TileLayout({ chatOpen }) {
    const { state: agentState, audioTrack: agentAudioTrack, videoTrack: agentVideoTrack } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__X__as__useVoiceAssistant$3e$__["useVoiceAssistant"])();
    const [screenShareTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare
    ]);
    const cameraTrack = useLocalTrackRef(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Camera);
    const isCameraEnabled = cameraTrack && !cameraTrack.publication.isMuted;
    const isScreenShareEnabled = screenShareTrack && !screenShareTrack.publication.isMuted;
    const hasSecondTile = isCameraEnabled || isScreenShareEnabled;
    const animationDelay = chatOpen ? 0 : 0.15;
    const isAvatar = agentVideoTrack !== undefined;
    const videoWidth = agentVideoTrack?.publication.dimensions?.width ?? 0;
    const videoHeight = agentVideoTrack?.publication.dimensions?.height ?? 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed inset-x-0 top-8 bottom-32 z-50 md:top-12 md:bottom-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mx-auto h-full max-w-2xl px-4 md:px-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(classNames.grid),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])([
                            'grid',
                            !chatOpen && classNames.agentChatClosed,
                            chatOpen && hasSecondTile && classNames.agentChatOpenWithSecondTile,
                            chatOpen && !hasSecondTile && classNames.agentChatOpenWithoutSecondTile
                        ]),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "popLayout",
                            children: [
                                !isAvatar && // Audio Agent
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionContainer, {
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
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-gradient-to-br from-primary/10 to-accent/10 aspect-square h-[90px] rounded-md border border-transparent transition-[border,drop-shadow]', chatOpen && 'border-primary/30 drop-shadow-lg/10 delay-200'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__B__as__BarVisualizer$3e$__["BarVisualizer"], {
                                        barCount: 5,
                                        state: agentState,
                                        options: {
                                            minHeight: 5
                                        },
                                        trackRef: agentAudioTrack,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex h-full items-center justify-center gap-1'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])([
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionContainer, {
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
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('overflow-hidden bg-black drop-shadow-xl/80', chatOpen ? 'h-[90px]' : 'h-auto w-full'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__V__as__VideoTrack$3e$__["VideoTrack"], {
                                        width: videoWidth,
                                        height: videoHeight,
                                        trackRef: agentVideoTrack,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(chatOpen && 'size-[90px] object-cover')
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])([
                            'grid',
                            chatOpen && classNames.secondTileChatOpen,
                            !chatOpen && classNames.secondTileChatClosed
                        ]),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: (cameraTrack && isCameraEnabled || screenShareTrack && isScreenShareEnabled) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionContainer, {
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__V__as__VideoTrack$3e$__["VideoTrack"], {
                                    trackRef: cameraTrack || screenShareTrack,
                                    width: (cameraTrack || screenShareTrack)?.publication.dimensions?.width ?? 0,
                                    height: (cameraTrack || screenShareTrack)?.publication.dimensions?.height ?? 0,
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
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/toggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toggle",
    ()=>Toggle,
    "toggleVariants",
    ()=>toggleVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@radix-ui/react-toggle/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const toggleVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])([
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
function Toggle({ className, variant, size, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "toggle",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(toggleVariants({
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
;
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-toggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrackToggle",
    ()=>TrackToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Microphone$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/Microphone.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$MicrophoneSlash$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/MicrophoneSlash.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$MonitorArrowUp$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/MonitorArrowUp.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Spinner$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/Spinner.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$VideoCamera$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/VideoCamera.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$VideoCameraSlash$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/VideoCameraSlash.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/toggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function getSourceIcon(source, enabled, pending = false) {
    if (pending) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Spinner$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpinnerIcon"];
    }
    switch(source){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Microphone:
            return enabled ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Microphone$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MicrophoneIcon"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$MicrophoneSlash$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MicrophoneSlashIcon"];
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Camera:
            return enabled ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$VideoCamera$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoCameraIcon"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$VideoCameraSlash$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoCameraSlashIcon"];
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$MonitorArrowUp$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MonitorArrowUpIcon"];
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"];
    }
}
function TrackToggle({ source, pressed, pending, className, ...props }) {
    const IconComponent = getSourceIcon(source, pressed ?? false, pending);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toggle"], {
        pressed: pressed,
        "aria-label": `Toggle ${source}`,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                weight: "bold",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(pending && 'animate-spin')
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
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])([
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
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
;
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/chat-input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatInput",
    ()=>ChatInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$PaperPlaneRight$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/PaperPlaneRight.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Spinner$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/Spinner.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/button.tsx [app-ssr] (ecmascript)");
;
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
function ChatInput({ chatOpen, isAgentAvailable = false, onSend = async ()=>{} }) {
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (chatOpen && isAgentAvailable) return;
        // when not disabled refocus on input
        inputRef.current?.focus();
    }, [
        chatOpen,
        isAgentAvailable
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        inert: !chatOpen,
        ...MOTION_PROPS,
        animate: chatOpen ? 'visible' : 'hidden',
        className: "border-input/50 flex w-full items-start overflow-hidden border-b",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "mb-3 flex grow items-end gap-2 rounded-md pl-1 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    size: "icon",
                    type: "submit",
                    disabled: isDisabled,
                    variant: isDisabled ? 'secondary' : 'primary',
                    title: isSending ? 'Sending...' : 'Send',
                    className: "self-start",
                    children: isSending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Spinner$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpinnerIcon"], {
                        className: "animate-spin",
                        weight: "bold"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/chat-input.tsx",
                        lineNumber: 93,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$PaperPlaneRight$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaperPlaneRightIcon"], {
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
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/hooks/use-input-controls.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInputControls",
    ()=>useInputControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-ssr] (ecmascript) <export C as useLocalParticipant>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__x__as__usePersistentUserChoices$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-ssr] (ecmascript) <export x as usePersistentUserChoices>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__h__as__useTrackToggle$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-ssr] (ecmascript) <export h as useTrackToggle>");
;
;
;
function useInputControls({ saveUserChoices = true, onDeviceError } = {}) {
    const { microphoneTrack, localParticipant } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__["useLocalParticipant"])();
    const microphoneToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__h__as__useTrackToggle$3e$__["useTrackToggle"])({
        source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
        onDeviceError: (error)=>onDeviceError?.({
                source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
                error
            })
    });
    const cameraToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__h__as__useTrackToggle$3e$__["useTrackToggle"])({
        source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Camera,
        onDeviceError: (error)=>onDeviceError?.({
                source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Camera,
                error
            })
    });
    const screenShareToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__h__as__useTrackToggle$3e$__["useTrackToggle"])({
        source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare,
        onDeviceError: (error)=>onDeviceError?.({
                source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare,
                error
            })
    });
    const micTrackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return {
            participant: localParticipant,
            source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
            publication: microphoneTrack
        };
    }, [
        localParticipant,
        microphoneTrack
    ]);
    const { saveAudioInputEnabled, saveVideoInputEnabled, saveAudioInputDeviceId, saveVideoInputDeviceId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__x__as__usePersistentUserChoices$3e$__["usePersistentUserChoices"])({
        preventSave: !saveUserChoices
    });
    const handleAudioDeviceChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((deviceId)=>{
        saveAudioInputDeviceId(deviceId ?? 'default');
    }, [
        saveAudioInputDeviceId
    ]);
    const handleVideoDeviceChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((deviceId)=>{
        saveVideoInputDeviceId(deviceId ?? 'default');
    }, [
        saveVideoInputDeviceId
    ]);
    const handleToggleCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (enabled)=>{
        if (screenShareToggle.enabled) {
            screenShareToggle.toggle(false);
        }
        await cameraToggle.toggle(enabled);
        // persist video input enabled preference
        saveVideoInputEnabled(!cameraToggle.enabled);
    }, [
        cameraToggle,
        screenShareToggle,
        saveVideoInputEnabled
    ]);
    const handleToggleMicrophone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (enabled)=>{
        await microphoneToggle.toggle(enabled);
        // persist audio input enabled preference
        saveAudioInputEnabled(!microphoneToggle.enabled);
    }, [
        microphoneToggle,
        saveAudioInputEnabled
    ]);
    const handleToggleScreenShare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (enabled)=>{
        if (cameraToggle.enabled) {
            cameraToggle.toggle(false);
        }
        await screenShareToggle.toggle(enabled);
    }, [
        cameraToggle,
        screenShareToggle
    ]);
    const handleMicrophoneDeviceSelectError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((error)=>onDeviceError?.({
            source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
            error
        }), [
        onDeviceError
    ]);
    const handleCameraDeviceSelectError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((error)=>onDeviceError?.({
            source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Camera,
            error
        }), [
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
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/hooks/use-publish-permissions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePublishPermissions",
    ()=>usePublishPermissions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__A__as__useLocalParticipantPermissions$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-ssr] (ecmascript) <export A as useLocalParticipantPermissions>");
;
;
const trackSourceToProtocol = (source)=>{
    // NOTE: this mapping avoids importing the protocol package as that leads to a significant bundle size increase
    switch(source){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Camera:
            return 1;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Microphone:
            return 2;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare:
            return 3;
        default:
            return 0;
    }
};
function usePublishPermissions() {
    const localPermissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__A__as__useLocalParticipantPermissions$3e$__["useLocalParticipantPermissions"])();
    const canPublishSource = (source)=>{
        return !!localPermissions?.canPublish && (localPermissions.canPublishSources.length === 0 || localPermissions.canPublishSources.includes(trackSourceToProtocol(source)));
    };
    return {
        camera: canPublishSource(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Camera),
        microphone: canPublishSource(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Microphone),
        screenShare: canPublishSource(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare),
        data: localPermissions?.canPublishData ?? false
    };
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretDown$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/CaretDown.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretUp$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/CaretUp.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Check$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/Check.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
function SelectTrigger({ className, size = 'default', children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])([
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretDown$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CaretDownIcon"], {
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
function SelectContent({ className, children, position = 'popper', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])([
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-1', position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
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
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground px-2 py-1.5 text-xs', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])([
            'relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none',
            'cursor-pointer disabled:cursor-not-allowed',
            'focus:bg-accent focus:text-accent-foreground',
            'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            '*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2',
            "[&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
        ], className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Check$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckIcon"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
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
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-border pointer-events-none -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretUp$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CaretUpIcon"], {
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
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretDown$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CaretDownIcon"], {
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
;
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-device-select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrackDeviceSelect",
    ()=>TrackDeviceSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$CjCD4TaH$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__w__as__useMaybeRoomContext$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/contexts-CjCD4TaH.mjs [app-ssr] (ecmascript) <export w as useMaybeRoomContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__useMediaDeviceSelect$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-ssr] (ecmascript) <export e as useMediaDeviceSelect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const selectVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])('w-full rounded-full px-3 py-2 text-sm cursor-pointer disabled:not-allowed', {
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
function TrackDeviceSelect({ kind, track, size = 'default', requestPermissions = false, onMediaDeviceError, onDeviceListChange, onActiveDeviceChange, ...props }) {
    const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$CjCD4TaH$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__w__as__useMaybeRoomContext$3e$__["useMaybeRoomContext"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [requestPermissionsState, setRequestPermissionsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(requestPermissions);
    const { devices, activeDeviceId, setActiveMediaDevice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__useMediaDeviceSelect$3e$__["useMediaDeviceSelect"])({
        room,
        kind,
        track,
        requestPermissions: requestPermissionsState,
        onError: onMediaDeviceError
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onDeviceListChange?.(devices);
    }, [
        devices,
        onDeviceListChange
    ]);
    // When the select opens, ensure that media devices are re-requested in case when they were last
    // requested, permissions were not granted
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (open) {
            setRequestPermissionsState(true);
        }
    }, [
        open
    ]);
    const handleActiveDeviceChange = (deviceId)=>{
        setActiveMediaDevice(deviceId);
        onActiveDeviceChange?.(deviceId);
    };
    const filteredDevices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>devices.filter((d)=>d.deviceId !== ''), [
        devices
    ]);
    if (filteredDevices.length < 2) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
        open: open,
        value: activeDeviceId,
        onOpenChange: setOpen,
        onValueChange: handleActiveDeviceChange,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(selectVariants({
                    size
                }), props.className),
                children: size !== 'sm' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                    className: "font-mono text-sm",
                    placeholder: `Select a ${kind}`
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: filteredDevices.map((device)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
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
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-selector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrackSelector",
    ()=>TrackSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__B__as__BarVisualizer$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/components-CMpq9Z_u.mjs [app-ssr] (ecmascript) <export B as BarVisualizer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$device$2d$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-device-select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-toggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function TrackSelector({ kind, source, pressed, pending, disabled, className, audioTrackRef, onPressedChange, onMediaDeviceError, onActiveDeviceChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-0', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrackToggle"], {
                size: "icon",
                variant: "primary",
                source: source,
                pressed: pressed,
                pending: pending,
                disabled: disabled,
                onPressedChange: onPressedChange,
                className: "peer/track group/track has-[.audiovisualizer]:w-auto has-[.audiovisualizer]:px-3 has-[~_button]:rounded-r-none has-[~_button]:pr-2 has-[~_button]:pl-3",
                children: audioTrackRef && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__B__as__BarVisualizer$3e$__["BarVisualizer"], {
                    barCount: 3,
                    options: {
                        minHeight: 5
                    },
                    trackRef: audioTrackRef,
                    className: "audiovisualizer flex h-6 w-auto items-center justify-center gap-0.5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])([
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "bg-border peer-data-[state=off]/track:bg-destructive/20 relative z-10 -mr-px hidden h-4 w-px border-none has-[~_button]:block"
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-selector.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$device$2d$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrackDeviceSelect"], {
                size: "sm",
                kind: kind,
                requestPermissions: false,
                onMediaDeviceError: onMediaDeviceError,
                onActiveDeviceChange: onActiveDeviceChange,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])([
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
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgentControlBar",
    ()=>AgentControlBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__w__as__useChat$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-ssr] (ecmascript) <export w as useChat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__M__as__useRemoteParticipants$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-ssr] (ecmascript) <export M as useRemoteParticipants>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ChatText$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/ChatText.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$PhoneDisconnect$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/PhoneDisconnect.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-toggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/toggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$chat$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/chat-input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$hooks$2f$use$2d$input$2d$controls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/hooks/use-input-controls.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$hooks$2f$use$2d$publish$2d$permissions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/hooks/use-publish-permissions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/track-selector.tsx [app-ssr] (ecmascript)");
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
;
function AgentControlBar({ controls, saveUserChoices = true, className, isConnectionActive = false, onDisconnect, onDeviceError, onChatOpenChange, ...props }) {
    const { send } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__w__as__useChat$3e$__["useChat"])();
    const participants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__M__as__useRemoteParticipants$3e$__["useRemoteParticipants"])();
    const [chatOpen, setChatOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const publishPermissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$hooks$2f$use$2d$publish$2d$permissions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePublishPermissions"])();
    const { micTrackRef, cameraToggle, microphoneToggle, screenShareToggle, handleAudioDeviceChange, handleVideoDeviceChange, handleMicrophoneDeviceSelectError, handleCameraDeviceSelectError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$hooks$2f$use$2d$input$2d$controls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInputControls"])({
        onDeviceError,
        saveUserChoices
    });
    const handleSendMessage = async (message)=>{
        await send(message);
    };
    const handleToggleTranscript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((open)=>{
        setChatOpen(open);
        onChatOpenChange?.(open);
    }, [
        onChatOpenChange,
        setChatOpen
    ]);
    const visibleControls = {
        leave: controls?.leave ?? true,
        microphone: controls?.microphone ?? publishPermissions.microphone,
        screenShare: controls?.screenShare ?? publishPermissions.screenShare,
        camera: controls?.camera ?? publishPermissions.camera,
        chat: controls?.chat ?? publishPermissions.data
    };
    const isAgentAvailable = participants.some((p)=>p.isAgent);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-label": "Trivia Night controls",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-background border-input/50 dark:border-muted flex flex-col rounded-[31px] border p-3 drop-shadow-md/3 trivia-card', className),
        ...props,
        children: [
            visibleControls.chat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$chat$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatInput"], {
                chatOpen: chatOpen,
                isAgentAvailable: isAgentAvailable,
                onSend: handleSendMessage
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex grow gap-1",
                        children: [
                            visibleControls.microphone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrackSelector"], {
                                kind: "audioinput",
                                "aria-label": "Toggle microphone",
                                source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
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
                            visibleControls.camera && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrackSelector"], {
                                kind: "videoinput",
                                "aria-label": "Toggle camera",
                                source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.Camera,
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
                            visibleControls.screenShare && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrackToggle"], {
                                size: "icon",
                                variant: "secondary",
                                "aria-label": "Toggle screen share",
                                source: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare,
                                pressed: screenShareToggle.enabled,
                                disabled: screenShareToggle.pending,
                                onPressedChange: screenShareToggle.toggle
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toggle"], {
                                size: "icon",
                                variant: "secondary",
                                "aria-label": "Toggle transcript",
                                pressed: chatOpen,
                                onPressedChange: handleToggleTranscript,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ChatText$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatTextIcon"], {
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
                    visibleControls.leave && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "destructive",
                        onClick: onDisconnect,
                        disabled: !isConnectionActive,
                        className: "font-mono font-bold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$PhoneDisconnect$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhoneDisconnectIcon"], {
                                weight: "bold"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden md:inline",
                                children: "🏁 END TRIVIA"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useConnection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectionProvider",
    ()=>ConnectionProvider,
    "useConnection",
    ()=>useConnection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__z__as__SessionProvider$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/components-CMpq9Z_u.mjs [app-ssr] (ecmascript) <export z as SessionProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a3__as__useSession$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-ssr] (ecmascript) <export a3 as useSession>");
'use client';
;
;
;
;
const ConnectionContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    isConnectionActive: false,
    connect: ()=>{},
    startDisconnectTransition: ()=>{},
    onDisconnectTransitionComplete: ()=>{}
});
function useConnection() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ConnectionContext);
    if (!ctx) {
        throw new Error('useConnection must be used within a ConnectionProvider');
    }
    return ctx;
}
function ConnectionProvider({ appConfig, children }) {
    const [isConnectionActive, setIsConnectionActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const tokenSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (typeof process.env.NEXT_PUBLIC_CONN_DETAILS_ENDPOINT === 'string') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenSource"].custom(async ()=>{
                const url = new URL(process.env.NEXT_PUBLIC_CONN_DETAILS_ENDPOINT, window.location.origin);
                try {
                    const res = await fetch(url.toString(), {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Sandbox-Id': appConfig.sandboxId ?? ''
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
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenSource"].endpoint('/api/connection-details');
    }, [
        appConfig
    ]);
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a3__as__useSession$3e$__["useSession"])(tokenSource, appConfig.agentName ? {
        agentName: appConfig.agentName
    } : undefined);
    const { start: startSession, end: endSession } = session;
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return {
            isConnectionActive,
            connect: ()=>{
                setIsConnectionActive(true);
                startSession();
            },
            startDisconnectTransition: ()=>{
                setIsConnectionActive(false);
            },
            onDisconnectTransitionComplete: ()=>{
                endSession();
            }
        };
    }, [
        startSession,
        endSession,
        isConnectionActive
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__z__as__SessionProvider$3e$__["SessionProvider"], {
        session: session,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ConnectionContext.Provider, {
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
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/scroll-area/hooks/useAutoScroll.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAutoScroll",
    ()=>useAutoScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const AUTO_SCROLL_THRESHOLD_PX = 100;
function useAutoScroll(scrollContentContainer) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
            return ()=>resizeObserver.disconnect();
        }
    }, [
        scrollContentContainer
    ]);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/scroll-area/scroll-area.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$scroll$2d$area$2f$hooks$2f$useAutoScroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/scroll-area/hooks/useAutoScroll.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const ScrollArea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function ScrollArea({ className, children }, ref) {
    const scrollContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$scroll$2d$area$2f$hooks$2f$useAutoScroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAutoScroll"])(scrollContentRef.current);
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((node)=>{
        scrollContentRef.current = node;
        if (typeof ref === 'function') {
            ref(node);
        } else if (ref) {
            ref.current = node;
        }
    }, [
        ref
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mergedRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('overflow-y-scroll scroll-smooth', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
});
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-display.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScoreDisplay",
    ()=>ScoreDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$CjCD4TaH$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/contexts-CjCD4TaH.mjs [app-ssr] (ecmascript) <export f as useRoomContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ScoreDisplay({ className }) {
    const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$CjCD4TaH$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__["useRoomContext"])();
    const [scoreData, setScoreData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        score: 0,
        questionsAsked: 0,
        percentage: 0
    });
    const [scoreChanged, setScoreChanged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!room) return;
        const handleData = (payload)=>{
            try {
                const decoder = new TextDecoder();
                const message = JSON.parse(decoder.decode(payload));
                if (message.type === 'score_update') {
                    const newScore = message.score;
                    const oldScore = scoreData.score;
                    setScoreData({
                        score: newScore,
                        questionsAsked: message.questionsAsked,
                        percentage: message.percentage
                    });
                    // Trigger animation if score increased
                    if (newScore > oldScore) {
                        setScoreChanged(true);
                        setTimeout(()=>setScoreChanged(false), 600);
                    }
                }
            } catch (error) {
                console.error('Error parsing score data:', error);
            }
        };
        room.on('dataReceived', handleData);
        return ()=>{
            room.off('dataReceived', handleData);
        };
    }, [
        room,
        scoreData.score
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: -20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('fixed top-4 right-4 md:top-6 md:right-6 z-50 rounded-2xl border border-border bg-background/80 backdrop-blur-lg shadow-2xl px-4 py-3 md:px-6 md:py-4', scoreChanged && 'ring-2 ring-primary/50', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 md:gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs md:text-sm font-medium text-muted-foreground",
                            children: "Score"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-display.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-baseline gap-1 md:gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    mode: "wait",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                        initial: {
                                            scale: 1.5,
                                            color: 'rgb(34, 197, 94)'
                                        },
                                        animate: {
                                            scale: 1,
                                            color: 'var(--primary)'
                                        },
                                        exit: {
                                            scale: 0.8,
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: 0.3
                                        },
                                        className: "text-3xl md:text-4xl font-bold",
                                        children: scoreData.score
                                    }, scoreData.score, false, {
                                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-display.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-display.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl md:text-2xl text-muted-foreground",
                                    children: [
                                        "/ ",
                                        scoreData.questionsAsked
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-display.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-display.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-display.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-12 md:h-16 w-px bg-border"
                }, void 0, false, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-display.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs md:text-sm font-medium text-muted-foreground",
                            children: "Accuracy"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-display.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                            animate: {
                                scale: scoreChanged ? [
                                    1,
                                    1.1,
                                    1
                                ] : 1
                            },
                            transition: {
                                duration: 0.3
                            },
                            className: "text-2xl md:text-3xl font-bold text-primary",
                            children: [
                                scoreData.percentage.toFixed(0),
                                "%"
                            ]
                        }, scoreData.percentage, true, {
                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-display.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-display.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-display.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-display.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScoreHistory",
    ()=>ScoreHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const BACKEND_URL = ("TURBOPACK compile-time value", "http://localhost:3001") || 'http://localhost:3001';
function ScoreHistory({ className }) {
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Log the backend URL for debugging
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log('ScoreHistory component mounted. Backend URL:', BACKEND_URL);
    }, []);
    const fetchHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setIsLoading(true);
        setError(null);
        try {
            console.log('Fetching score history from:', `${BACKEND_URL}/api/trivia/history`);
            const response = await fetch(`${BACKEND_URL}/api/trivia/history`);
            console.log('Response status:', response.status);
            if (!response.ok) {
                throw new Error(`Failed to fetch score history: ${response.status}`);
            }
            const data = await response.json();
            console.log('Score history data:', data);
            // Sort by timestamp, newest first
            const sorted = data.data.sort((a, b)=>new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
            console.log('Sorted history:', sorted.length, 'records');
            setHistory(sorted);
        } catch (err) {
            console.error('Error fetching score history:', err);
            setError(`Unable to load score history: ${err instanceof Error ? err.message : 'Unknown error'}`);
        } finally{
            setIsLoading(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Fetch when panel is opened
        if (isOpen) {
            fetchHistory();
        }
    }, [
        isOpen,
        fetchHistory
    ]);
    const formatDate = (timestamp)=>{
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
        });
    };
    const getScoreColor = (percentage)=>{
        if (percentage >= 80) return 'text-green-500';
        if (percentage >= 60) return 'text-blue-500';
        if (percentage >= 40) return 'text-yellow-500';
        return 'text-red-500';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('fixed top-4 left-4 md:top-6 md:left-6 z-50', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                onClick: ()=>setIsOpen(!isOpen),
                className: "mb-2 backdrop-blur-lg bg-background/80 border border-border shadow-lg",
                variant: "outline",
                children: isOpen ? '✕ Close' : '📊 Past Scores'
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -20,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: -20,
                        scale: 0.95
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "rounded-2xl border border-border bg-background/95 backdrop-blur-lg shadow-2xl overflow-hidden",
                    style: {
                        maxHeight: '70vh',
                        width: '350px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-b border-border bg-background/80",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold",
                                        children: "Score History"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: fetchHistory,
                                        disabled: isLoading,
                                        size: "sm",
                                        variant: "ghost",
                                        children: isLoading ? '⟳' : '↻'
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-y-auto",
                            style: {
                                maxHeight: 'calc(70vh - 80px)'
                            },
                            children: isLoading && history.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 text-center text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-spin text-2xl",
                                        children: "⟳"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2",
                                        children: "Loading..."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                        lineNumber: 126,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                lineNumber: 124,
                                columnNumber: 17
                            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 text-center text-red-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                        lineNumber: 130,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: fetchHistory,
                                        size: "sm",
                                        className: "mt-4",
                                        children: "Retry"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                        lineNumber: 131,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                lineNumber: 129,
                                columnNumber: 17
                            }, this) : history.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 text-center text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl mb-2",
                                        children: "🎮"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                        lineNumber: 137,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "No games played yet!"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                        lineNumber: 138,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm mt-1",
                                        children: "Play a trivia game to see your scores here."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                        lineNumber: 139,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                lineNumber: 136,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-border",
                                children: history.map((record, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: -20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: index * 0.05
                                        },
                                        className: "p-4 hover:bg-muted/50 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-2xl font-bold', getScoreColor(record.percentage)),
                                                                    children: [
                                                                        record.score,
                                                                        "/",
                                                                        record.questions_asked
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: [
                                                                        "(",
                                                                        record.percentage.toFixed(0),
                                                                        "%)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                                                    lineNumber: 157,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-muted-foreground mt-1",
                                                            children: formatDate(record.timestamp)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: [
                                                                "Player: ",
                                                                record.participant_id
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 25
                                                }, this),
                                                record.percentage === 100 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl",
                                                    title: "Perfect Score!",
                                                    children: "🏆"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                            lineNumber: 151,
                                            columnNumber: 23
                                        }, this)
                                    }, record.id, false, {
                                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                        lineNumber: 144,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                                lineNumber: 142,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fade",
    ()=>Fade,
    "SessionView",
    ()=>SessionView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$CjCD4TaH$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__aB__as__useSessionContext$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/contexts-CjCD4TaH.mjs [app-ssr] (ecmascript) <export aB as useSessionContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a6__as__useSessionMessages$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-ssr] (ecmascript) <export a6 as useSessionMessages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$chat$2d$transcript$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/chat-transcript.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$preconnect$2d$message$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/preconnect-message.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$tile$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/tile-layout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$agent$2d$control$2d$bar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/agent-control-bar/agent-control-bar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useConnection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$scroll$2d$area$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/scroll-area/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$score$2d$display$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-display.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$score$2d$history$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx [app-ssr] (ecmascript)");
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
;
const MotionBottom = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].create('div');
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
function Fade({ top = false, bottom = false, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('from-background pointer-events-none h-4 bg-linear-to-b to-transparent', top && 'bg-linear-to-b', bottom && 'bg-linear-to-t', className)
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
const SessionView = ({ appConfig, ...props })=>{
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$CjCD4TaH$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__aB__as__useSessionContext$3e$__["useSessionContext"])();
    const { messages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a6__as__useSessionMessages$3e$__["useSessionMessages"])(session);
    const [chatOpen, setChatOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isConnectionActive, startDisconnectTransition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnection"])();
    const scrollAreaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const controls = {
        leave: true,
        microphone: true,
        chat: appConfig.supportsChatInput,
        camera: appConfig.supportsVideoInput,
        screenShare: appConfig.supportsVideoInput
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const lastMessage = messages.at(-1);
        const lastMessageIsLocal = lastMessage?.from?.isLocal === true;
        if (scrollAreaRef.current && lastMessageIsLocal) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    }, [
        messages
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-background relative z-10 h-full w-full overflow-hidden",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$score$2d$history$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScoreHistory"], {}, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$score$2d$display$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScoreDisplay"], {}, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('fixed inset-0 grid grid-cols-1 grid-rows-1', !chatOpen && 'pointer-events-none'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Fade, {
                        top: true,
                        className: "absolute inset-x-4 top-0 h-40"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$scroll$2d$area$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                        ref: scrollAreaRef,
                        className: "px-4 pt-40 pb-[150px] md:px-6 md:pb-[200px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$chat$2d$transcript$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatTranscript"], {
                            hidden: !chatOpen,
                            messages: messages,
                            className: "mx-auto max-w-2xl space-y-3 transition-opacity duration-300 ease-out"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$tile$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TileLayout"], {
                chatOpen: chatOpen
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionBottom, {
                ...BOTTOM_VIEW_MOTION_PROPS,
                className: "fixed inset-x-3 bottom-0 z-50 md:inset-x-12",
                children: [
                    appConfig.isPreConnectBufferEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$preconnect$2d$message$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PreConnectMessage"], {
                        messages: messages,
                        className: "pb-4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-background relative mx-auto max-w-2xl pb-3 md:pb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Fade, {
                                bottom: true,
                                className: "absolute inset-x-0 top-0 h-4 -translate-y-full"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$agent$2d$control$2d$bar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgentControlBar"], {
                                controls: controls,
                                isConnectionActive: isConnectionActive,
                                onDisconnect: startDisconnectTransition,
                                onChatOpenChange: setChatOpen
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WelcomeView",
    ()=>WelcomeView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$score$2d$history$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/score-history.tsx [app-ssr] (ecmascript)");
;
;
;
function WelcomeImage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "80",
        height: "80",
        viewBox: "0 0 80 80",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "mb-6 size-20 text-primary",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M40 10C36 10 32 12 32 15V20H25C23 20 20 22 20 25V28C20 35 24 40 30 42C32 44 34 45 36 45V50C36 52 34 54 32 54H28C26 54 24 56 24 58V62C24 64 26 66 28 66H52C54 66 56 64 56 62V58C56 56 54 54 52 54H48C46 54 44 52 44 50V45C46 45 48 44 50 42C56 40 60 35 60 28V25C60 22 57 20 55 20H48V15C48 12 44 10 40 10Z",
                fill: "currentColor",
                opacity: "0.2"
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M40 8C35 8 30 10 30 14V18H22C19 18 16 20 16 24V28C16 36 21 42 28 44C30 47 33 48 36 49V52C36 55 33 57 30 57H24C21 57 18 60 18 63V68C18 71 21 74 24 74H56C59 74 62 71 62 68V63C62 60 59 57 56 57H50C47 57 44 55 44 52V49C47 48 50 47 52 44C59 42 64 36 64 28V24C64 20 61 18 58 18H50V14C50 10 45 8 40 8Z",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 15L16 18L19 19L16 20L15 23L14 20L11 19L14 18L15 15Z",
                fill: "currentColor",
                className: "text-secondary"
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M65 15L66 18L69 19L66 20L65 23L64 20L61 19L64 18L65 15Z",
                fill: "currentColor",
                className: "text-secondary"
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M70 50L71 52L73 53L71 54L70 56L69 54L67 53L69 52L70 50Z",
                fill: "currentColor",
                className: "text-accent"
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
const WelcomeView = ({ startButtonText, onStartCall, ref })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$score$2d$history$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScoreHistory"], {}, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-background flex flex-col items-center justify-center text-center px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WelcomeImage, {}, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary mb-4 animate-text-shimmer",
                        children: "🎤 Trivia Night 🎤"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-foreground max-w-prose text-lg md:text-xl leading-7 font-semibold mb-2",
                        children: "Test your knowledge with our AI quiz master!"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground max-w-md text-sm md:text-base leading-6 mb-8",
                        children: "Get ready to answer questions, compete for points, and have a blast! Use your microphone to buzz in and answer."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex gap-4 text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: "⚡ Quick Rounds"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: "🎯 Multiple Categories"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: "🌟 Fun & Interactive"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-5 left-0 flex w-full items-center justify-center px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground max-w-prose pt-1 text-xs leading-5 font-normal text-pretty md:text-sm",
                    children: [
                        "Powered by LiveKit Voice AI •",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "https://docs.livekit.io/agents/start/voice-ai/",
                            className: "underline hover:text-primary transition-colors",
                            children: "Learn more"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/view-controller.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ViewController",
    ()=>ViewController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$session$2d$view$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/session-view.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$welcome$2d$view$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/welcome-view.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useConnection.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const MotionWelcomeView = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$welcome$2d$view$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WelcomeView"]);
const MotionSessionView = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$session$2d$view$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionView"]);
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
function ViewController({ appConfig }) {
    const { isConnectionActive, connect, onDisconnectTransitionComplete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnection"])();
    const handleAnimationComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((definition)=>{
        // manually end the session when the exit animation completes
        if (definition === 'hidden') {
            onDisconnectTransitionComplete();
        }
    }, [
        onDisconnectTransitionComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "wait",
        children: [
            !isConnectionActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionWelcomeView, {
                ...VIEW_MOTION_PROPS,
                startButtonText: appConfig.startButtonText,
                onStartCall: connect
            }, "welcome", false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/view-controller.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this),
            isConnectionActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionSessionView, {
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
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/toaster.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Warning$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/Warning.es.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Toaster({ ...props }) {
    const { theme = 'system' } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        position: "top-center",
        icons: {
            warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Warning$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WarningIcon"], {
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
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])([
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
function Alert({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
function AlertTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function AlertDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert-toast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertToast",
    ()=>AlertToast,
    "toastAlert",
    ()=>toastAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Warning$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@phosphor-icons/react/dist/ssr/Warning.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function toastAlert(toast) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].custom((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertToast, {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert"], {
        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].dismiss(id),
        className: "bg-accent w-full md:w-[364px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Warning$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WarningIcon"], {
                weight: "bold"
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert-toast.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertTitle"], {
                children: title
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert-toast.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDescription"], {
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
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useAgentErrors.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAgentErrors",
    ()=>useAgentErrors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__useAgent$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/hooks-CA8cirWq.mjs [app-ssr] (ecmascript) <export S as useAgent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$alert$2d$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/alert-toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useConnection.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
function useAgentErrors() {
    const agent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA8cirWq$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__useAgent$3e$__["useAgent"])();
    const { isConnectionActive, startDisconnectTransition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnection"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isConnectionActive && agent.state === 'failed') {
            const reasons = agent.failureReasons;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$alert$2d$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toastAlert"])({
                title: 'Session ended',
                description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        reasons.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-inside list-disc",
                            children: reasons.map((reason)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: reason
                                }, reason, false, {
                                    fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useAgentErrors.tsx",
                                    lineNumber: 21,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useAgentErrors.tsx",
                            lineNumber: 19,
                            columnNumber: 15
                        }, this),
                        reasons.length === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "w-full",
                            children: reasons[0]
                        }, void 0, false, {
                            fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useAgentErrors.tsx",
                            lineNumber: 25,
                            columnNumber: 38
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
    }, [
        agent,
        isConnectionActive,
        startDisconnectTransition
    ]);
}
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useDebug.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebugMode",
    ()=>useDebugMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$CjCD4TaH$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/contexts-CjCD4TaH.mjs [app-ssr] (ecmascript) <export f as useRoomContext>");
;
;
;
const useDebugMode = (options = {})=>{
    const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$CjCD4TaH$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__["useRoomContext"])();
    const logLevel = options.logLevel ?? 'debug';
    const enabled = options.enabled ?? true;
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!enabled) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLogLevel"])('silent');
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLogLevel"])(logLevel ?? 'debug');
        // @ts-expect-error this is a global variable
        window.__lk_room = room;
        return ()=>{
            // @ts-expect-error this is a global variable
            window.__lk_room = undefined;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLogLevel"])('silent');
        };
    }, [
        room,
        enabled,
        logLevel
    ]);
};
}),
"[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/app.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "App",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomAudioRenderer$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/components-CMpq9Z_u.mjs [app-ssr] (ecmascript) <export R as RoomAudioRenderer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__q__as__StartAudio$3e$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/node_modules/@livekit/components-react/dist/components-CMpq9Z_u.mjs [app-ssr] (ecmascript) <export q as StartAudio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$view$2d$controller$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/view-controller.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$toaster$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/livekit/toaster.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useAgentErrors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useAgentErrors.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useConnection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useDebug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/hooks/useDebug.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const IN_DEVELOPMENT = ("TURBOPACK compile-time value", "development") !== 'production';
function AppSetup() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useDebug$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebugMode"])({
        enabled: IN_DEVELOPMENT
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useAgentErrors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAgentErrors"])();
    return null;
}
function App({ appConfig }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$hooks$2f$useConnection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectionProvider"], {
        appConfig: appConfig,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AppSetup, {}, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/app.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "grid h-svh grid-cols-1 place-content-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$app$2f$view$2d$controller$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewController"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__q__as__StartAudio$3e$__["StartAudio"], {
                label: "Start Audio"
            }, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/app.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$CMpq9Z_u$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomAudioRenderer$3e$__["RoomAudioRenderer"], {}, void 0, false, {
                fileName: "[project]/Documents/Coding_Projects/Interview Prep/livekit-starter-code/agent-starter-react/components/app/app.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Coding_Projects$2f$Interview__Prep$2f$livekit$2d$starter$2d$code$2f$agent$2d$starter$2d$react$2f$components$2f$livekit$2f$toaster$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
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
}),
];

//# sourceMappingURL=be5c9_Projects_Interview%20Prep_livekit-starter-code_agent-starter-react_3a1dd092._.js.map