import { ReactComponent } from '../CHANGELOG.md';

function App() {
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <header className="flex items-center justify-center">
        <h1 className="leading-normal font-bold text-slate-900 text-4xl py-1.5">
          Auto ChangeLog
        </h1>
      </header>
      <div className="flex items-center justify-center py-8 bg-slate-100">
        <div className="max-w-prose">
          <ReactComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
