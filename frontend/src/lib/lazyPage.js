import { lazy, Suspense } from "react";

/**
 * Client builds get a real code-split chunk. Prerender sets
 * globalThis.__DOI_SYNC_PAGES__ and renders that component instead, because
 * Node's babel loader does not resolve dynamic import() of JSX.
 */
export function lazyPage(id, loader) {
  const LazyComp = lazy(loader);

  function BoundPage(props) {
    const registry = globalThis.__DOI_SYNC_PAGES__;
    const sync = registry && registry[id];
    if (sync) {
      const Sync = sync.default || sync;
      return <Sync {...props} />;
    }
    return (
      <Suspense fallback={<p className="px-4 py-10 text-slate-600">Loading…</p>}>
        <LazyComp {...props} />
      </Suspense>
    );
  }

  BoundPage.displayName = `LazyPage(${id})`;
  return BoundPage;
}
