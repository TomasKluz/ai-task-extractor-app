import AnalysisForm from "./components/AnalysisForm";

function App() {
  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header>
          <p className="text-sm font-medium text-blue-400">
            AI Workflow Assistant
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-100">
            AI Task Extractor
          </h1>

          <p className="mt-2 max-w-2xl text-slate-400">
            Analyze meeting notes, extract actionable tasks, detect events and keep a searchable history.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.0fr_0.9fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-black/20">
            New Analysis
            <div className="mt-4">
              <AnalysisForm />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-black/20">
            History
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-black/20">
          Analysis Detail
        </section>
      </div>
    </main>
  );
}

export default App;