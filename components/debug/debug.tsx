"use client";

import { useEffect, useRef, useState } from "react";
import Stats from "stats.js";

const DEBUG_STORAGE_KEY = "debug-enabled";
const PERF_STORAGE_KEY = "debug-perf-enabled";

const Debug = () => {
  // Main debug panel
  const [enabled, setEnabled] = useState(false);
  // Grid overlay
  const [visible, setVisible] = useState(false);
  // Performance overlay
  const [showPerf, setShowPerf] = useState(false);
  const statsRef = useRef<Stats | null>(null);

  // Load persisted states
  useEffect(() => {
    const storedDebug = localStorage.getItem(DEBUG_STORAGE_KEY);
    let debugTimeout: NodeJS.Timeout;
    let perfTimeout: NodeJS.Timeout;
    if (storedDebug === "true") debugTimeout = setTimeout(() => setEnabled(true), 0);

    const storedPerf = localStorage.getItem(PERF_STORAGE_KEY);
    if (storedPerf === "true") perfTimeout = setTimeout(() => setShowPerf(true), 0);

    return () => {
      clearTimeout(debugTimeout);
      clearTimeout(perfTimeout);
    };
  }, []);

  // Persist main debug panel
  useEffect(() => {
    localStorage.setItem(DEBUG_STORAGE_KEY, String(enabled));
  }, [enabled]);

  // Persist performance panel
  useEffect(() => {
    localStorage.setItem(PERF_STORAGE_KEY, String(showPerf));
  }, [showPerf]);

  // Keyboard shortcut: Cmd/Ctrl + O
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isCmdOrCtrl = e.metaKey || e.ctrlKey;
      if (isCmdOrCtrl && e.key.toLowerCase() === "o") {
        e.preventDefault();
        setEnabled(prev => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Initialize stats.js
  useEffect(() => {
    if (showPerf && !statsRef.current) {
      const stats = new Stats();
      stats.showPanel(0); // 0 = fps, 1 = ms, 2 = memory
      stats.dom.style.position = "fixed";
      stats.dom.style.top = "0px";
      stats.dom.style.left = "0px";
      stats.dom.style.zIndex = "100000";
      document.body.appendChild(stats.dom);
      statsRef.current = stats;

      const loop = () => {
        stats.begin();
        stats.end();
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    }

    // Remove stats if hidden
    if (!showPerf && statsRef.current) {
      document.body.removeChild(statsRef.current.dom);
      statsRef.current = null;
    }
  }, [showPerf]);

  // -------------------
  // Clear functions
  // -------------------
  const clearCache = async () => {
    if ("caches" in window) {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map(name => caches.delete(name)));
      alert("Cache cleared successfully!");
    } else {
      alert("Cache API not supported in this browser");
    }
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    alert("Local storage cleared successfully!");
  };

  const clearCookies = () => {
    document.cookie.split(";").forEach(cookie => {
      const name = cookie.split("=")[0].trim();
      document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Lax;`;
    });
    alert("Cookies cleared successfully! Refresh the page to see the cookie consent again.");
  };

  const clearAll = async () => {
    if ("caches" in window) {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map(name => caches.delete(name)));
    }
    localStorage.clear();
    document.cookie.split(";").forEach(cookie => {
      const name = cookie.split("=")[0].trim();
      document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Lax;`;
    });
    alert("Everything cleared! Refresh the page.");
  };

  // -------------------
  // Render
  // -------------------
  if (!enabled) return null;

  return (
    <>
      {/* Grid overlay */}
      {visible && (
        <div className="grid-12 pointer-events-none fixed top-0 z-[99999] h-screen w-full px-[var(--container-px)]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-full w-full bg-red-500/20" />
          ))}
        </div>
      )}

      {/* Control buttons */}
      <div className="fixed top-4 right-4 z-[99999] flex flex-col gap-2">
        <button
          onClick={() => setVisible(prev => !prev)}
          className="rounded-xs bg-black px-3 py-2 text-sm text-white transition hover:bg-black/90"
        >
          {visible ? "Hide Grid" : "Show Grid"}
        </button>

        <button
          onClick={clearCache}
          className="rounded-xs bg-blue-600 px-3 py-2 text-sm text-white transition hover:bg-blue-700"
        >
          Clear Cache
        </button>

        <button
          onClick={clearLocalStorage}
          className="rounded-xs bg-purple-600 px-3 py-2 text-sm text-white transition hover:bg-purple-700"
        >
          Clear Local Storage
        </button>

        <button
          onClick={clearCookies}
          className="rounded-xs bg-orange-600 px-3 py-2 text-sm text-white transition hover:bg-orange-700"
        >
          Clear Cookies
        </button>

        <button
          onClick={clearAll}
          className="rounded-xs bg-red-600 px-3 py-2 text-sm text-white transition hover:bg-red-700"
        >
          Clear All
        </button>

        <button
          onClick={() => setShowPerf(prev => !prev)}
          className="rounded-xs bg-emerald-600 px-3 py-2 text-sm text-white transition hover:bg-emerald-700"
        >
          {showPerf ? "Hide Performance" : "Show Performance"}
        </button>
      </div>
    </>
  );
};

export default Debug;
