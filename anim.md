<!DOCTYPE html>

<html lang="ru">

<head>

&#x20; <meta charset="UTF-8" />

&#x20; <meta name="viewport" content="width=device-width, initial-scale=1.0" />

&#x20; <title>Hero AI Ledger</title>

&#x20; <style>

&#x20;   :root {

&#x20;     --bg: #f5f7fb;

&#x20;     --surface: rgba(255, 255, 255, 0.78);

&#x20;     --surface-strong: #ffffff;

&#x20;     --text: #11203a;

&#x20;     --muted: #5f6b7c;

&#x20;     --line: rgba(32, 63, 122, 0.16);

&#x20;     --line-strong: rgba(43, 90, 196, 0.26);

&#x20;     --primary: #1f4fd7;

&#x20;     --primary-dark: #173da7;

&#x20;     --success: #1f8f63;

&#x20;     --success-bg: rgba(31, 143, 99, 0.08);

&#x20;     --border: rgba(17, 32, 58, 0.08);

&#x20;     --shadow: 0 16px 40px rgba(17, 32, 58, 0.08);

&#x20;     --shadow-soft: 0 10px 25px rgba(17, 32, 58, 0.06);

&#x20;     --radius-xl: 28px;

&#x20;     --radius-lg: 22px;

&#x20;     --radius-md: 18px;

&#x20;     --radius-sm: 14px;

&#x20;     --transition: 260ms cubic-bezier(.2,.8,.2,1);

&#x20;   }



&#x20;   \* {

&#x20;     box-sizing: border-box;

&#x20;   }



&#x20;   html {

&#x20;     scroll-behavior: smooth;

&#x20;   }



&#x20;   body {

&#x20;     margin: 0;

&#x20;     font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

&#x20;     color: var(--text);

&#x20;     background:

&#x20;       radial-gradient(circle at 15% 20%, rgba(31, 79, 215, 0.08), transparent 30%),

&#x20;       radial-gradient(circle at 85% 30%, rgba(31, 143, 99, 0.05), transparent 28%),

&#x20;       linear-gradient(180deg, #f8faff 0%, #f4f7fb 100%);

&#x20;     min-height: 100vh;

&#x20;   }



&#x20;   .hero {

&#x20;     position: relative;

&#x20;     overflow: hidden;

&#x20;     padding: 48px 20px;

&#x20;     min-height: 100vh;

&#x20;     display: flex;

&#x20;     align-items: center;

&#x20;   }



&#x20;   .hero::before {

&#x20;     content: "";

&#x20;     position: absolute;

&#x20;     inset: 0;

&#x20;     background-image:

&#x20;       linear-gradient(rgba(31, 79, 215, 0.03) 1px, transparent 1px),

&#x20;       linear-gradient(90deg, rgba(31, 79, 215, 0.03) 1px, transparent 1px);

&#x20;     background-size: 40px 40px;

&#x20;     mask-image: radial-gradient(circle at center, black 45%, transparent 85%);

&#x20;     pointer-events: none;

&#x20;   }



&#x20;   .hero\_\_inner {

&#x20;     width: 100%;

&#x20;     max-width: 1360px;

&#x20;     margin: 0 auto;

&#x20;     display: grid;

&#x20;     grid-template-columns: 1.02fr 1fr;

&#x20;     gap: 48px;

&#x20;     align-items: center;

&#x20;     position: relative;

&#x20;     z-index: 2;

&#x20;   }



&#x20;   .hero\_\_content {

&#x20;     max-width: 620px;

&#x20;     opacity: 0;

&#x20;     transform: translateY(20px);

&#x20;     animation: fadeUp 0.8s ease forwards;

&#x20;   }



&#x20;   .eyebrow {

&#x20;     display: inline-flex;

&#x20;     align-items: center;

&#x20;     gap: 10px;

&#x20;     padding: 10px 14px;

&#x20;     border-radius: 999px;

&#x20;     background: rgba(255, 255, 255, 0.72);

&#x20;     border: 1px solid rgba(31, 79, 215, 0.10);

&#x20;     box-shadow: var(--shadow-soft);

&#x20;     color: var(--primary);

&#x20;     font-size: 14px;

&#x20;     font-weight: 600;

&#x20;     letter-spacing: 0.01em;

&#x20;     margin-bottom: 20px;

&#x20;     backdrop-filter: blur(12px);

&#x20;   }



&#x20;   .eyebrow\_\_dot {

&#x20;     width: 8px;

&#x20;     height: 8px;

&#x20;     border-radius: 50%;

&#x20;     background: var(--success);

&#x20;     box-shadow: 0 0 0 6px rgba(31, 143, 99, 0.08);

&#x20;     animation: pulseDot 2.6s infinite ease-in-out;

&#x20;   }



&#x20;   .hero h1 {

&#x20;     margin: 0 0 18px;

&#x20;     font-size: clamp(38px, 5vw, 68px);

&#x20;     line-height: 0.98;

&#x20;     letter-spacing: -0.035em;

&#x20;     font-weight: 700;

&#x20;     max-width: 12ch;

&#x20;   }



&#x20;   .hero p {

&#x20;     margin: 0 0 28px;

&#x20;     font-size: clamp(17px, 2vw, 20px);

&#x20;     line-height: 1.65;

&#x20;     color: var(--muted);

&#x20;     max-width: 58ch;

&#x20;   }



&#x20;   .hero\_\_actions {

&#x20;     display: flex;

&#x20;     flex-wrap: wrap;

&#x20;     gap: 14px;

&#x20;     margin-bottom: 28px;

&#x20;   }



&#x20;   .btn {

&#x20;     appearance: none;

&#x20;     border: 0;

&#x20;     border-radius: 18px;

&#x20;     padding: 16px 22px;

&#x20;     font-size: 15px;

&#x20;     font-weight: 600;

&#x20;     cursor: pointer;

&#x20;     transition: transform var(--transition), box-shadow var(--transition), background var(--transition), color var(--transition), border-color var(--transition);

&#x20;     text-decoration: none;

&#x20;     display: inline-flex;

&#x20;     align-items: center;

&#x20;     justify-content: center;

&#x20;     min-height: 54px;

&#x20;   }



&#x20;   .btn--primary {

&#x20;     background: linear-gradient(180deg, var(--primary) 0%, var(--primary-dark) 100%);

&#x20;     color: #fff;

&#x20;     box-shadow: 0 14px 32px rgba(31, 79, 215, 0.22);

&#x20;   }



&#x20;   .btn--primary:hover {

&#x20;     transform: translateY(-2px) scale(1.01);

&#x20;     box-shadow: 0 18px 38px rgba(31, 79, 215, 0.28);

&#x20;   }



&#x20;   .btn--secondary {

&#x20;     background: rgba(255, 255, 255, 0.75);

&#x20;     color: var(--text);

&#x20;     border: 1px solid rgba(17, 32, 58, 0.08);

&#x20;     box-shadow: var(--shadow-soft);

&#x20;     backdrop-filter: blur(12px);

&#x20;   }



&#x20;   .btn--secondary:hover {

&#x20;     transform: translateY(-2px);

&#x20;     box-shadow: 0 14px 30px rgba(17, 32, 58, 0.10);

&#x20;     border-color: rgba(31, 79, 215, 0.18);

&#x20;   }



&#x20;   .hero\_\_trust {

&#x20;     display: flex;

&#x20;     flex-wrap: wrap;

&#x20;     gap: 12px;

&#x20;   }



&#x20;   .trust-chip {

&#x20;     display: inline-flex;

&#x20;     align-items: center;

&#x20;     gap: 8px;

&#x20;     padding: 12px 14px;

&#x20;     border-radius: 16px;

&#x20;     background: rgba(255, 255, 255, 0.7);

&#x20;     border: 1px solid rgba(17, 32, 58, 0.07);

&#x20;     color: var(--muted);

&#x20;     font-size: 14px;

&#x20;     box-shadow: var(--shadow-soft);

&#x20;     backdrop-filter: blur(12px);

&#x20;   }



&#x20;   .trust-chip strong {

&#x20;     color: var(--text);

&#x20;     font-weight: 700;

&#x20;   }



&#x20;   .hero\_\_visual {

&#x20;     position: relative;

&#x20;     min-height: 650px;

&#x20;     opacity: 0;

&#x20;     transform: translateY(20px);

&#x20;     animation: fadeUp 0.95s ease 0.12s forwards;

&#x20;   }



&#x20;   .scene {

&#x20;     position: relative;

&#x20;     width: 100%;

&#x20;     height: 650px;

&#x20;     border-radius: 32px;

&#x20;     background:

&#x20;       linear-gradient(180deg, rgba(255,255,255,0.84) 0%, rgba(255,255,255,0.72) 100%);

&#x20;     border: 1px solid rgba(17, 32, 58, 0.06);

&#x20;     box-shadow: var(--shadow);

&#x20;     backdrop-filter: blur(16px);

&#x20;     overflow: hidden;

&#x20;   }



&#x20;   .scene\_\_glow {

&#x20;     position: absolute;

&#x20;     inset: auto;

&#x20;     width: 340px;

&#x20;     height: 340px;

&#x20;     border-radius: 50%;

&#x20;     background: radial-gradient(circle, rgba(31,79,215,0.12) 0%, rgba(31,79,215,0.05) 40%, transparent 72%);

&#x20;     left: 50%;

&#x20;     top: 50%;

&#x20;     transform: translate(-50%, -50%);

&#x20;     animation: breathe 6s ease-in-out infinite;

&#x20;     pointer-events: none;

&#x20;   }



&#x20;   .scene\_\_grid {

&#x20;     position: absolute;

&#x20;     inset: 0;

&#x20;     background-image:

&#x20;       linear-gradient(rgba(31, 79, 215, 0.035) 1px, transparent 1px),

&#x20;       linear-gradient(90deg, rgba(31, 79, 215, 0.035) 1px, transparent 1px);

&#x20;     background-size: 34px 34px;

&#x20;     opacity: 0.65;

&#x20;     mask-image: radial-gradient(circle at center, black 42%, transparent 88%);

&#x20;   }



&#x20;   .route-svg {

&#x20;     position: absolute;

&#x20;     inset: 0;

&#x20;     width: 100%;

&#x20;     height: 100%;

&#x20;     pointer-events: none;

&#x20;     overflow: visible;

&#x20;   }



&#x20;   .route-path {

&#x20;     fill: none;

&#x20;     stroke: var(--line);

&#x20;     stroke-width: 2.2;

&#x20;     stroke-linecap: round;

&#x20;     stroke-dasharray: 4 10;

&#x20;   }



&#x20;   .route-path--active {

&#x20;     fill: none;

&#x20;     stroke: rgba(31, 79, 215, 0.35);

&#x20;     stroke-width: 2.4;

&#x20;     stroke-linecap: round;

&#x20;     stroke-dasharray: 8 14;

&#x20;     animation: routeFlow 10s linear infinite;

&#x20;   }



&#x20;   .incoming-stack,

&#x20;   .result-stack {

&#x20;     position: absolute;

&#x20;     display: flex;

&#x20;     flex-direction: column;

&#x20;     gap: 14px;

&#x20;     z-index: 2;

&#x20;   }



&#x20;   .incoming-stack {

&#x20;     left: 24px;

&#x20;     top: 50%;

&#x20;     transform: translateY(-50%);

&#x20;     width: 220px;

&#x20;   }



&#x20;   .result-stack {

&#x20;     right: 24px;

&#x20;     top: 50%;

&#x20;     transform: translateY(-50%);

&#x20;     width: 220px;

&#x20;     align-items: stretch;

&#x20;   }



&#x20;   .data-card,

&#x20;   .result-card {

&#x20;     position: relative;

&#x20;     border-radius: 20px;

&#x20;     padding: 16px 16px 14px;

&#x20;     background: rgba(255, 255, 255, 0.86);

&#x20;     border: 1px solid rgba(17, 32, 58, 0.08);

&#x20;     box-shadow: var(--shadow-soft);

&#x20;     backdrop-filter: blur(12px);

&#x20;   }



&#x20;   .data-card {

&#x20;     opacity: 0.55;

&#x20;     transform: scale(0.98);

&#x20;     transition: opacity var(--transition), transform var(--transition), border-color var(--transition), box-shadow var(--transition);

&#x20;   }



&#x20;   .data-card.active {

&#x20;     opacity: 1;

&#x20;     transform: scale(1.02);

&#x20;     border-color: rgba(31, 79, 215, 0.18);

&#x20;     box-shadow: 0 16px 30px rgba(31, 79, 215, 0.10);

&#x20;   }



&#x20;   .data-card\_\_type,

&#x20;   .result-card\_\_type {

&#x20;     font-size: 12px;

&#x20;     color: var(--muted);

&#x20;     letter-spacing: 0.04em;

&#x20;     text-transform: uppercase;

&#x20;     margin-bottom: 8px;

&#x20;     font-weight: 600;

&#x20;   }



&#x20;   .data-card\_\_title,

&#x20;   .result-card\_\_title {

&#x20;     font-size: 16px;

&#x20;     font-weight: 700;

&#x20;     color: var(--text);

&#x20;     margin-bottom: 8px;

&#x20;   }



&#x20;   .data-card\_\_meta {

&#x20;     display: flex;

&#x20;     justify-content: space-between;

&#x20;     gap: 10px;

&#x20;     color: var(--muted);

&#x20;     font-size: 13px;

&#x20;   }



&#x20;   .result-card {

&#x20;     opacity: 0.35;

&#x20;     transform: translateX(8px);

&#x20;     transition: opacity var(--transition), transform var(--transition), border-color var(--transition), box-shadow var(--transition), background var(--transition);

&#x20;   }



&#x20;   .result-card.active {

&#x20;     opacity: 1;

&#x20;     transform: translateX(0);

&#x20;     border-color: rgba(31, 143, 99, 0.18);

&#x20;     background: linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(248, 252, 250, 0.96) 100%);

&#x20;     box-shadow: 0 16px 30px rgba(31, 143, 99, 0.10);

&#x20;   }



&#x20;   .result-card\_\_status {

&#x20;     display: inline-flex;

&#x20;     align-items: center;

&#x20;     gap: 8px;

&#x20;     padding: 8px 10px;

&#x20;     border-radius: 999px;

&#x20;     font-size: 13px;

&#x20;     font-weight: 600;

&#x20;     color: var(--success);

&#x20;     background: var(--success-bg);

&#x20;     width: fit-content;

&#x20;   }



&#x20;   .result-card\_\_status::before {

&#x20;     content: "";

&#x20;     width: 8px;

&#x20;     height: 8px;

&#x20;     border-radius: 50%;

&#x20;     background: var(--success);

&#x20;     box-shadow: 0 0 0 6px rgba(31, 143, 99, 0.08);

&#x20;   }



&#x20;   .core {

&#x20;     position: absolute;

&#x20;     left: 50%;

&#x20;     top: 50%;

&#x20;     width: 250px;

&#x20;     height: 250px;

&#x20;     transform: translate(-50%, -50%);

&#x20;     border-radius: 34px;

&#x20;     z-index: 3;

&#x20;     display: flex;

&#x20;     align-items: center;

&#x20;     justify-content: center;

&#x20;   }



&#x20;   .core\_\_outer,

&#x20;   .core\_\_middle,

&#x20;   .core\_\_inner {

&#x20;     position: absolute;

&#x20;     inset: 0;

&#x20;     border-radius: inherit;

&#x20;   }



&#x20;   .core\_\_outer {

&#x20;     background: linear-gradient(180deg, rgba(31,79,215,0.08) 0%, rgba(23,61,167,0.04) 100%);

&#x20;     border: 1px solid rgba(31, 79, 215, 0.12);

&#x20;     box-shadow: 0 24px 55px rgba(17, 32, 58, 0.10);

&#x20;     animation: pulsePanel 4s ease-in-out infinite;

&#x20;   }



&#x20;   .core\_\_middle {

&#x20;     inset: 18px;

&#x20;     border-radius: 28px;

&#x20;     background: linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(247,250,255,0.85) 100%);

&#x20;     border: 1px solid rgba(17, 32, 58, 0.06);

&#x20;   }



&#x20;   .core\_\_inner {

&#x20;     inset: 42px;

&#x20;     border-radius: 24px;

&#x20;     background:

&#x20;       radial-gradient(circle at 50% 35%, rgba(31,79,215,0.12), transparent 56%),

&#x20;       linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);

&#x20;     border: 1px solid rgba(31, 79, 215, 0.10);

&#x20;     display: flex;

&#x20;     flex-direction: column;

&#x20;     justify-content: center;

&#x20;     align-items: center;

&#x20;   }



&#x20;   .core\_\_label {

&#x20;     font-size: 12px;

&#x20;     letter-spacing: 0.08em;

&#x20;     text-transform: uppercase;

&#x20;     color: var(--primary);

&#x20;     font-weight: 700;

&#x20;     margin-bottom: 10px;

&#x20;   }



&#x20;   .core\_\_title {

&#x20;     font-size: 24px;

&#x20;     line-height: 1.15;

&#x20;     text-align: center;

&#x20;     font-weight: 700;

&#x20;     max-width: 140px;

&#x20;     margin-bottom: 12px;

&#x20;     color: var(--text);

&#x20;   }



&#x20;   .core\_\_status {

&#x20;     min-height: 22px;

&#x20;     font-size: 14px;

&#x20;     color: var(--muted);

&#x20;     font-weight: 600;

&#x20;     text-align: center;

&#x20;   }



&#x20;   .core-ring {

&#x20;     position: absolute;

&#x20;     border-radius: 50%;

&#x20;     border: 1px solid rgba(31, 79, 215, 0.10);

&#x20;     animation: spinSlow 18s linear infinite;

&#x20;   }



&#x20;   .core-ring--1 {

&#x20;     width: 310px;

&#x20;     height: 310px;

&#x20;   }



&#x20;   .core-ring--2 {

&#x20;     width: 360px;

&#x20;     height: 360px;

&#x20;     animation-direction: reverse;

&#x20;     animation-duration: 24s;

&#x20;     border-style: dashed;

&#x20;   }



&#x20;   .node {

&#x20;     position: absolute;

&#x20;     width: 12px;

&#x20;     height: 12px;

&#x20;     border-radius: 50%;

&#x20;     background: #fff;

&#x20;     border: 2px solid rgba(31, 79, 215, 0.45);

&#x20;     box-shadow: 0 8px 18px rgba(31, 79, 215, 0.16);

&#x20;     z-index: 4;

&#x20;   }



&#x20;   .node--1 { top: 150px; left: 250px; animation: floatY 4.8s ease-in-out infinite; }

&#x20;   .node--2 { top: 120px; right: 220px; animation: floatY 5.6s ease-in-out infinite 0.8s; }

&#x20;   .node--3 { bottom: 160px; left: 220px; animation: floatY 5.1s ease-in-out infinite 0.4s; }

&#x20;   .node--4 { bottom: 130px; right: 240px; animation: floatY 6.1s ease-in-out infinite 1s; }



&#x20;   .token {

&#x20;     position: absolute;

&#x20;     width: 14px;

&#x20;     height: 14px;

&#x20;     border-radius: 50%;

&#x20;     background: radial-gradient(circle at 30% 30%, #ffffff 0%, #89aef8 38%, #1f4fd7 100%);

&#x20;     box-shadow: 0 0 0 8px rgba(31, 79, 215, 0.08), 0 6px 16px rgba(31, 79, 215, 0.22);

&#x20;     z-index: 5;

&#x20;     opacity: 0;

&#x20;     transform: translate(-50%, -50%);

&#x20;     transition: opacity 0.18s ease;

&#x20;   }



&#x20;   .token.active {

&#x20;     opacity: 1;

&#x20;   }



&#x20;   @keyframes routeFlow {

&#x20;     from { stroke-dashoffset: 0; }

&#x20;     to { stroke-dashoffset: -160; }

&#x20;   }



&#x20;   @keyframes pulseDot {

&#x20;     0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(31, 143, 99, 0.16); }

&#x20;     50% { transform: scale(1.08); box-shadow: 0 0 0 8px rgba(31, 143, 99, 0.04); }

&#x20;   }



&#x20;   @keyframes fadeUp {

&#x20;     to {

&#x20;       opacity: 1;

&#x20;       transform: translateY(0);

&#x20;     }

&#x20;   }



&#x20;   @keyframes breathe {

&#x20;     0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.9; }

&#x20;     50% { transform: translate(-50%, -50%) scale(1.07); opacity: 1; }

&#x20;   }



&#x20;   @keyframes pulsePanel {

&#x20;     0%, 100% { box-shadow: 0 24px 55px rgba(17, 32, 58, 0.10); transform: scale(1); }

&#x20;     50% { box-shadow: 0 30px 70px rgba(31, 79, 215, 0.14); transform: scale(1.01); }

&#x20;   }



&#x20;   @keyframes spinSlow {

&#x20;     from { transform: translate(-50%, -50%) rotate(0deg); }

&#x20;     to { transform: translate(-50%, -50%) rotate(360deg); }

&#x20;   }



&#x20;   @keyframes floatY {

&#x20;     0%, 100% { transform: translateY(0); }

&#x20;     50% { transform: translateY(-8px); }

&#x20;   }



&#x20;   @media (max-width: 1200px) {

&#x20;     .hero\_\_inner {

&#x20;       grid-template-columns: 1fr;

&#x20;       gap: 34px;

&#x20;     }



&#x20;     .hero\_\_content {

&#x20;       max-width: 100%;

&#x20;     }



&#x20;     .hero h1 {

&#x20;       max-width: 15ch;

&#x20;     }



&#x20;     .hero\_\_visual {

&#x20;       min-height: 600px;

&#x20;     }



&#x20;     .scene {

&#x20;       height: 600px;

&#x20;     }

&#x20;   }



&#x20;   @media (max-width: 840px) {

&#x20;     .hero {

&#x20;       padding: 28px 16px 34px;

&#x20;       min-height: auto;

&#x20;     }



&#x20;     .hero h1 {

&#x20;       font-size: clamp(34px, 10vw, 48px);

&#x20;     }



&#x20;     .hero p {

&#x20;       font-size: 16px;

&#x20;     }



&#x20;     .hero\_\_visual {

&#x20;       min-height: 520px;

&#x20;     }



&#x20;     .scene {

&#x20;       height: 520px;

&#x20;       border-radius: 26px;

&#x20;     }



&#x20;     .incoming-stack,

&#x20;     .result-stack {

&#x20;       width: 170px;

&#x20;     }



&#x20;     .incoming-stack {

&#x20;       left: 14px;

&#x20;     }



&#x20;     .result-stack {

&#x20;       right: 14px;

&#x20;     }



&#x20;     .data-card\_\_title,

&#x20;     .result-card\_\_title {

&#x20;       font-size: 14px;

&#x20;     }



&#x20;     .core {

&#x20;       width: 200px;

&#x20;       height: 200px;

&#x20;     }



&#x20;     .core\_\_middle {

&#x20;       inset: 14px;

&#x20;     }



&#x20;     .core\_\_inner {

&#x20;       inset: 32px;

&#x20;     }



&#x20;     .core\_\_title {

&#x20;       font-size: 19px;

&#x20;       max-width: 110px;

&#x20;     }



&#x20;     .core\_\_status {

&#x20;       font-size: 12px;

&#x20;     }



&#x20;     .core-ring--1 {

&#x20;       width: 255px;

&#x20;       height: 255px;

&#x20;     }



&#x20;     .core-ring--2 {

&#x20;       width: 300px;

&#x20;       height: 300px;

&#x20;     }



&#x20;     .node--1 { top: 130px; left: 190px; }

&#x20;     .node--2 { top: 110px; right: 185px; }

&#x20;     .node--3 { bottom: 130px; left: 175px; }

&#x20;     .node--4 { bottom: 110px; right: 190px; }

&#x20;   }



&#x20;   @media (max-width: 640px) {

&#x20;     .hero\_\_actions {

&#x20;       flex-direction: column;

&#x20;     }



&#x20;     .btn {

&#x20;       width: 100%;

&#x20;     }



&#x20;     .scene {

&#x20;       height: 470px;

&#x20;     }



&#x20;     .incoming-stack,

&#x20;     .result-stack {

&#x20;       width: 142px;

&#x20;       gap: 10px;

&#x20;     }



&#x20;     .data-card,

&#x20;     .result-card {

&#x20;       padding: 12px;

&#x20;       border-radius: 16px;

&#x20;     }



&#x20;     .data-card\_\_type,

&#x20;     .result-card\_\_type {

&#x20;       font-size: 10px;

&#x20;       margin-bottom: 5px;

&#x20;     }



&#x20;     .data-card\_\_title,

&#x20;     .result-card\_\_title {

&#x20;       font-size: 13px;

&#x20;       margin-bottom: 6px;

&#x20;     }



&#x20;     .data-card\_\_meta {

&#x20;       font-size: 11px;

&#x20;     }



&#x20;     .result-card\_\_status {

&#x20;       font-size: 11px;

&#x20;       padding: 6px 8px;

&#x20;     }



&#x20;     .core {

&#x20;       width: 170px;

&#x20;       height: 170px;

&#x20;     }



&#x20;     .core\_\_middle {

&#x20;       inset: 12px;

&#x20;     }



&#x20;     .core\_\_inner {

&#x20;       inset: 24px;

&#x20;     }



&#x20;     .core\_\_label {

&#x20;       font-size: 10px;

&#x20;     }



&#x20;     .core\_\_title {

&#x20;       font-size: 16px;

&#x20;       max-width: 96px;

&#x20;     }



&#x20;     .core\_\_status {

&#x20;       font-size: 11px;

&#x20;       min-height: 18px;

&#x20;     }



&#x20;     .core-ring--1 {

&#x20;       width: 220px;

&#x20;       height: 220px;

&#x20;     }



&#x20;     .core-ring--2 {

&#x20;       width: 255px;

&#x20;       height: 255px;

&#x20;     }



&#x20;     .node {

&#x20;       width: 10px;

&#x20;       height: 10px;

&#x20;     }



&#x20;     .node--1 { top: 116px; left: 155px; }

&#x20;     .node--2 { top: 98px; right: 150px; }

&#x20;     .node--3 { bottom: 118px; left: 145px; }

&#x20;     .node--4 { bottom: 96px; right: 152px; }

&#x20;   }



&#x20;   @media (prefers-reduced-motion: reduce) {

&#x20;     \*, \*::before, \*::after {

&#x20;       animation: none !important;

&#x20;       transition: none !important;

&#x20;     }



&#x20;     .token {

&#x20;       display: none !important;

&#x20;     }

&#x20;   }

&#x20; </style>

</head>

<body>

&#x20; <section class="hero">

&#x20;   <div class="hero\_\_inner">

&#x20;     <div class="hero\_\_content">

&#x20;       <div class="eyebrow">

&#x20;         <span class="eyebrow\_\_dot"></span>

&#x20;         Автоматизация учета и контроль процессов

&#x20;       </div>



&#x20;       <h1>Бухгалтерия, которая работает как система</h1>



&#x20;       <p>

&#x20;         Снижаем ручную нагрузку, выстраиваем контроль сроков и внедряем

&#x20;         понятные инструменты учета для бизнеса. Спокойный процесс, прозрачные данные,

&#x20;         аккуратная автоматизация и меньше ошибок в рутине.

&#x20;       </p>



&#x20;       <div class="hero\_\_actions">

&#x20;         <a href="#contact" class="btn btn--primary">Получить консультацию</a>

&#x20;         <a href="#audit" class="btn btn--secondary">Запросить мини-аудит</a>

&#x20;       </div>



&#x20;       <div class="hero\_\_trust">

&#x20;         <div class="trust-chip"><strong>Контроль</strong> сроков и отчетности</div>

&#x20;         <div class="trust-chip"><strong>Автоматизация</strong> повторяющихся операций</div>

&#x20;         <div class="trust-chip"><strong>Прозрачность</strong> для собственника</div>

&#x20;       </div>

&#x20;     </div>



&#x20;     <div class="hero\_\_visual">

&#x20;       <div class="scene" id="scene">

&#x20;         <div class="scene\_\_glow"></div>

&#x20;         <div class="scene\_\_grid"></div>



&#x20;         <svg class="route-svg" viewBox="0 0 800 650" preserveAspectRatio="none" aria-hidden="true">

&#x20;           <path class="route-path" d="M 190 170 C 290 170, 290 220, 390 220" />

&#x20;           <path class="route-path--active" d="M 190 170 C 290 170, 290 220, 390 220" />



&#x20;           <path class="route-path" d="M 190 255 C 300 255, 300 275, 390 275" />

&#x20;           <path class="route-path--active" d="M 190 255 C 300 255, 300 275, 390 275" />



&#x20;           <path class="route-path" d="M 190 340 C 290 340, 290 325, 390 325" />

&#x20;           <path class="route-path--active" d="M 190 340 C 290 340, 290 325, 390 325" />



&#x20;           <path class="route-path" d="M 190 425 C 280 425, 300 370, 390 370" />

&#x20;           <path class="route-path--active" d="M 190 425 C 280 425, 300 370, 390 370" />



&#x20;           <path class="route-path" d="M 410 220 C 510 220, 520 185, 610 185" />

&#x20;           <path class="route-path--active" d="M 410 220 C 510 220, 520 185, 610 185" />



&#x20;           <path class="route-path" d="M 410 275 C 520 275, 520 260, 610 260" />

&#x20;           <path class="route-path--active" d="M 410 275 C 520 275, 520 260, 610 260" />



&#x20;           <path class="route-path" d="M 410 325 C 515 325, 520 335, 610 335" />

&#x20;           <path class="route-path--active" d="M 410 325 C 515 325, 520 335, 610 335" />



&#x20;           <path class="route-path" d="M 410 370 C 500 370, 520 410, 610 410" />

&#x20;           <path class="route-path--active" d="M 410 370 C 500 370, 520 410, 610 410" />

&#x20;         </svg>



&#x20;         <div class="incoming-stack">

&#x20;           <div class="data-card active" data-index="0">

&#x20;             <div class="data-card\_\_type">Документ</div>

&#x20;             <div class="data-card\_\_title">Счет №145</div>

&#x20;             <div class="data-card\_\_meta">

&#x20;               <span>Поставка</span>

&#x20;               <span>сегодня</span>

&#x20;             </div>

&#x20;           </div>



&#x20;           <div class="data-card" data-index="1">

&#x20;             <div class="data-card\_\_type">Операция</div>

&#x20;             <div class="data-card\_\_title">Платеж от клиента</div>

&#x20;             <div class="data-card\_\_meta">

&#x20;               <span>Банк</span>

&#x20;               <span>14:20</span>

&#x20;             </div>

&#x20;           </div>



&#x20;           <div class="data-card" data-index="2">

&#x20;             <div class="data-card\_\_type">Документ</div>

&#x20;             <div class="data-card\_\_title">Акт выполненных работ</div>

&#x20;             <div class="data-card\_\_meta">

&#x20;               <span>Закрытие</span>

&#x20;               <span>новый</span>

&#x20;             </div>

&#x20;           </div>



&#x20;           <div class="data-card" data-index="3">

&#x20;             <div class="data-card\_\_type">Контроль</div>

&#x20;             <div class="data-card\_\_title">Налоговый срок</div>

&#x20;             <div class="data-card\_\_meta">

&#x20;               <span>Напоминание</span>

&#x20;               <span>скоро</span>

&#x20;             </div>

&#x20;           </div>

&#x20;         </div>



&#x20;         <div class="core">

&#x20;           <div class="core-ring core-ring--1"></div>

&#x20;           <div class="core-ring core-ring--2"></div>



&#x20;           <div class="core\_\_outer"></div>

&#x20;           <div class="core\_\_middle"></div>

&#x20;           <div class="core\_\_inner">

&#x20;             <div class="core\_\_label">AI Control</div>

&#x20;             <div class="core\_\_title">Модуль учета</div>

&#x20;             <div class="core\_\_status" id="coreStatus">Анализ данных</div>

&#x20;           </div>

&#x20;         </div>



&#x20;         <div class="node node--1"></div>

&#x20;         <div class="node node--2"></div>

&#x20;         <div class="node node--3"></div>

&#x20;         <div class="node node--4"></div>



&#x20;         <div class="token" id="token"></div>



&#x20;         <div class="result-stack">

&#x20;           <div class="result-card active" data-index="0">

&#x20;             <div class="result-card\_\_type">Статус</div>

&#x20;             <div class="result-card\_\_title">Проверено</div>

&#x20;             <div class="result-card\_\_status">Данные сопоставлены</div>

&#x20;           </div>



&#x20;           <div class="result-card" data-index="1">

&#x20;             <div class="result-card\_\_type">Контроль</div>

&#x20;             <div class="result-card\_\_title">Сроки под контролем</div>

&#x20;             <div class="result-card\_\_status">Напоминания активны</div>

&#x20;           </div>



&#x20;           <div class="result-card" data-index="2">

&#x20;             <div class="result-card\_\_type">Аналитика</div>

&#x20;             <div class="result-card\_\_title">Ошибки выявлены</div>

&#x20;             <div class="result-card\_\_status">Проверка завершена</div>

&#x20;           </div>



&#x20;           <div class="result-card" data-index="3">

&#x20;             <div class="result-card\_\_type">Результат</div>

&#x20;             <div class="result-card\_\_title">Отчетность готова</div>

&#x20;             <div class="result-card\_\_status">Процесс подтвержден</div>

&#x20;           </div>

&#x20;         </div>

&#x20;       </div>

&#x20;     </div>

&#x20;   </div>

&#x20; </section>



&#x20; <script>

&#x20;   const incomingCards = document.querySelectorAll('.data-card');

&#x20;   const resultCards = document.querySelectorAll('.result-card');

&#x20;   const token = document.getElementById('token');

&#x20;   const coreStatus = document.getElementById('coreStatus');

&#x20;   const scene = document.getElementById('scene');



&#x20;   const statuses = \[

&#x20;     'Анализ данных',

&#x20;     'Проверка сроков',

&#x20;     'Сопоставление операций',

&#x20;     'Контроль отчетности'

&#x20;   ];



&#x20;   const steps = \[

&#x20;     {

&#x20;       incomingIndex: 0,

&#x20;       resultIndex: 0,

&#x20;       start: { x: 190, y: 170 },

&#x20;       mid: { x: 400, y: 250 },

&#x20;       end: { x: 610, y: 185 },

&#x20;       status: statuses\[0]

&#x20;     },

&#x20;     {

&#x20;       incomingIndex: 1,

&#x20;       resultIndex: 1,

&#x20;       start: { x: 190, y: 255 },

&#x20;       mid: { x: 400, y: 285 },

&#x20;       end: { x: 610, y: 260 },

&#x20;       status: statuses\[1]

&#x20;     },

&#x20;     {

&#x20;       incomingIndex: 2,

&#x20;       resultIndex: 2,

&#x20;       start: { x: 190, y: 340 },

&#x20;       mid: { x: 400, y: 320 },

&#x20;       end: { x: 610, y: 335 },

&#x20;       status: statuses\[2]

&#x20;     },

&#x20;     {

&#x20;       incomingIndex: 3,

&#x20;       resultIndex: 3,

&#x20;       start: { x: 190, y: 425 },

&#x20;       mid: { x: 400, y: 355 },

&#x20;       end: { x: 610, y: 410 },

&#x20;       status: statuses\[3]

&#x20;     }

&#x20;   ];



&#x20;   let currentStep = 0;

&#x20;   let rafId = null;



&#x20;   function resetCards() {

&#x20;     incomingCards.forEach(card => card.classList.remove('active'));

&#x20;     resultCards.forEach(card => card.classList.remove('active'));

&#x20;   }



&#x20;   function setTokenPosition(point) {

&#x20;     const rect = scene.getBoundingClientRect();

&#x20;     const scaleX = rect.width / 800;

&#x20;     const scaleY = rect.height / 650;

&#x20;     token.style.left = `${point.x \* scaleX}px`;

&#x20;     token.style.top = `${point.y \* scaleY}px`;

&#x20;   }



&#x20;   function lerp(a, b, t) {

&#x20;     return a + (b - a) \* t;

&#x20;   }



&#x20;   function animateSegment(from, to, duration) {

&#x20;     return new Promise(resolve => {

&#x20;       const startTime = performance.now();

&#x20;       token.classList.add('active');



&#x20;       function frame(now) {

&#x20;         const elapsed = now - startTime;

&#x20;         const t = Math.min(elapsed / duration, 1);

&#x20;         const eased = 1 - Math.pow(1 - t, 3);



&#x20;         setTokenPosition({

&#x20;           x: lerp(from.x, to.x, eased),

&#x20;           y: lerp(from.y, to.y, eased)

&#x20;         });



&#x20;         if (t < 1) {

&#x20;           rafId = requestAnimationFrame(frame);

&#x20;         } else {

&#x20;           resolve();

&#x20;         }

&#x20;       }



&#x20;       rafId = requestAnimationFrame(frame);

&#x20;     });

&#x20;   }



&#x20;   function delay(ms) {

&#x20;     return new Promise(resolve => setTimeout(resolve, ms));

&#x20;   }



&#x20;   async function playStep(step) {

&#x20;     resetCards();

&#x20;     incomingCards\[step.incomingIndex].classList.add('active');

&#x20;     coreStatus.textContent = step.status;



&#x20;     setTokenPosition(step.start);

&#x20;     token.classList.add('active');



&#x20;     await delay(180);

&#x20;     await animateSegment(step.start, step.mid, 950);



&#x20;     coreStatus.textContent = 'Проверка завершена';

&#x20;     await delay(320);



&#x20;     await animateSegment(step.mid, step.end, 950);

&#x20;     resultCards\[step.resultIndex].classList.add('active');



&#x20;     token.classList.remove('active');

&#x20;     await delay(1300);

&#x20;   }



&#x20;   async function loop() {

&#x20;     while (true) {

&#x20;       await playStep(steps\[currentStep]);

&#x20;       currentStep = (currentStep + 1) % steps.length;

&#x20;     }

&#x20;   }



&#x20;   window.addEventListener('resize', () => {

&#x20;     const activeStep = steps\[currentStep] || steps\[0];

&#x20;     setTokenPosition(activeStep.start);

&#x20;   });



&#x20;   if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

&#x20;     setTokenPosition(steps\[0].start);

&#x20;     loop();

&#x20;   } else {

&#x20;     coreStatus.textContent = 'Система активна';

&#x20;   }

&#x20; </script>

</body>

</html>

