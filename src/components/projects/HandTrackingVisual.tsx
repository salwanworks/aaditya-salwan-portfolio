/**
 * Illustration of the Fruit Ninja controller's webcam view:
 * 640×480 frame, 100-px calibration margin, 21 MediaPipe hand landmarks,
 * landmark 8 (index fingertip) driving the cursor, gesture trail and HUD.
 * This is a drawn illustration, not a screenshot.
 */
const L: [number, number][] = [
  [300, 410], // 0 wrist
  [258, 380], [228, 345], [208, 315], [192, 288], // thumb 1-4
  [280, 305], [276, 255], [273, 220], [270, 186], // index 5-8
  [312, 298], [314, 244], [316, 207], [317, 174], // middle 9-12
  [342, 305], [350, 258], [355, 225], [359, 197], // ring 13-16
  [368, 322], [383, 287], [393, 262], [401, 240], // pinky 17-20
];
const E: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [5, 9], [9, 10], [10, 11], [11, 12],
  [9, 13], [13, 14], [14, 15], [15, 16],
  [13, 17], [17, 18], [18, 19], [19, 20], [0, 17],
];

export default function HandTrackingVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      role="img"
      aria-label="Illustration: webcam frame with 21 hand landmarks; the index fingertip, landmark 8, controls the cursor inside a calibrated area with a 100-pixel margin."
    >
      <defs>
        <pattern id="ht-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="rgba(148,163,184,0.07)" />
        </pattern>
        <linearGradient id="ht-trail" x1="0" x2="1">
          <stop offset="0" stopColor="#2DD4BF" stopOpacity="0" />
          <stop offset="1" stopColor="#2DD4BF" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id="ht-vig" cx="50%" cy="50%" r="70%">
          <stop offset="0.6" stopColor="#080B12" stopOpacity="0" />
          <stop offset="1" stopColor="#080B12" stopOpacity="0.8" />
        </radialGradient>
      </defs>
      <rect width="640" height="480" fill="#0B1019" />
      <rect width="640" height="480" fill="url(#ht-grid)" />

      {/* calibration region: 100px margin */}
      <rect x="100" y="100" width="440" height="280" fill="none" stroke="#818CF8" strokeOpacity=".55" strokeDasharray="6 6" />
      <text x="106" y="94" fill="#818CF8" fillOpacity=".8" fontFamily="ui-monospace,monospace" fontSize="12">calibrated area · 100px margin</text>

      {/* gesture trail */}
      <path className="flow" d="M520 340 C 470 240, 380 140, 270 186" fill="none" stroke="url(#ht-trail)" strokeWidth="5" strokeLinecap="round" />

      {/* hand skeleton */}
      <g stroke="#94A3B8" strokeOpacity=".75" strokeWidth="2.2" strokeLinecap="round">
        {E.map(([a, b], i) => (
          <line key={i} x1={L[a][0]} y1={L[a][1]} x2={L[b][0]} y2={L[b][1]} />
        ))}
      </g>
      <g>
        {L.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 8 ? 0 : 4} fill="#E2E8F0" />
        ))}
      </g>

      {/* landmark 8 */}
      <circle cx="270" cy="186" r="16" fill="none" stroke="#2DD4BF" strokeOpacity=".5">
        <animate attributeName="r" values="10;20;10" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values=".7;0;.7" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="270" cy="186" r="6.5" fill="#2DD4BF" />
      <line x1="276" y1="180" x2="335" y2="138" stroke="#2DD4BF" strokeOpacity=".7" />
      <rect x="335" y="122" width="138" height="26" rx="5" fill="#0B1019" stroke="#2DD4BF" strokeOpacity=".5" />
      <text x="345" y="140" fill="#5EEAD4" fontFamily="ui-monospace,monospace" fontSize="12.5">LM 8 → cursor</text>

      <rect width="640" height="480" fill="url(#ht-vig)" />

      {/* HUD */}
      <g fontFamily="ui-monospace,monospace" fontSize="13">
        <rect x="16" y="16" width="196" height="54" rx="7" fill="#080B12" fillOpacity=".85" stroke="rgba(255,255,255,.1)" />
        <text x="30" y="38" fill="#94A3B8">MODE</text>
        <text x="80" y="38" fill="#F8FAFC">AUTO SLICE</text>
        <text x="30" y="58" fill="#94A3B8">FPS</text>
        <text x="80" y="58" fill="#5EEAD4">~30</text>
      </g>
      <g fontFamily="ui-monospace,monospace" fontSize="12" fill="#64748B">
        <text x="624" y="34" textAnchor="end">640×480</text>
        <text x="624" y="464" textAnchor="end">21 landmarks · EMA α=0.25</text>
        <circle cx="22" cy="459" r="4" fill="#F97066" className="blink" />
        <text x="32" y="464">webcam</text>
      </g>
    </svg>
  );
}
