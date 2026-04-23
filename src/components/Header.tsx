function Header(){
  return (
    <header className="rounded-2xl border border-slate-800/80 bg-slate-900/75 px-6 py-5 shadow-xl shadow-slate-950/30 backdrop-blur">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Smart Task Dashboard
        </h1>
        <p className="text-sm text-slate-400 sm:text-base">
          Organize your daily tasks in a clean, modern workspace.
        </p>
      </div>
    </header>
  )
}

export default Header