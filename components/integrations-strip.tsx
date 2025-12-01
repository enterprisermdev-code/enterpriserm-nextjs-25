export function IntegrationsStrip() {
  const logos = ['aws','azure','gcp','jira','servicenow','slack'];
  return (
    <section className="py-14 bg-white" id="integrations">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
          {logos.map(l => (
            <div key={l} className="h-10 flex items-center">
              <div className="text-sm font-semibold text-gray-600 tracking-wide uppercase">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
