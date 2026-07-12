import { useEffect } from "react";

const PREFOOTER_BG_PARALLAX = 0.12;

export function usePrefooterParallax(sectionRef) {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let rafId = null;

    const resetMotionVar = () => {
      section.style.setProperty("--prefooter-bg-parallax", "0px");
    };

    const updateParallax = () => {
      if (reducedMotionQuery.matches) {
        resetMotionVar();
        return;
      }

      const sectionRect = section.getBoundingClientRect();
      const viewportScroll = Math.max(0, window.innerHeight - sectionRect.top);
      const maxOffset = section.offsetHeight * 0.18;
      const parallax = -Math.min(
        viewportScroll * PREFOOTER_BG_PARALLAX,
        maxOffset,
      );

      section.style.setProperty("--prefooter-bg-parallax", `${parallax}px`);
    };

    const tick = () => {
      updateParallax();
      rafId = requestAnimationFrame(tick);
    };

    const stopLoop = () => {
      if (rafId === null) return;
      cancelAnimationFrame(rafId);
      rafId = null;
    };

    const onMotionPreferenceChange = () => {
      if (reducedMotionQuery.matches) {
        resetMotionVar();
        stopLoop();
        return;
      }

      if (rafId === null) {
        rafId = requestAnimationFrame(tick);
      }
    };

    if (reducedMotionQuery.matches) {
      resetMotionVar();
    } else {
      rafId = requestAnimationFrame(tick);
    }

    reducedMotionQuery.addEventListener("change", onMotionPreferenceChange);

    return () => {
      stopLoop();
      reducedMotionQuery.removeEventListener(
        "change",
        onMotionPreferenceChange,
      );
    };
  }, [sectionRef]);
}
