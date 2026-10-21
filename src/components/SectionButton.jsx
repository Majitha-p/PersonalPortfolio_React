export const SectionButton = ({ sectionId, children, onClick, ...props }) => (
  <button
    {...props}
    type="button"
    onClick={(event) => {
      onClick?.(event);
      if (event.defaultPrevented) return;
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior });
      } else {
        window.scrollTo({ top: 0, behavior });
      }
      if (window.location.href.includes('#')) {
        window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search);
      }
    }}
  >
    {children}
  </button>
);
