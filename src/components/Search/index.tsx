export function Search() {
  return (
    <div className="mx-auto w-full flex flex-col ">
      <div className="flex justify-between">
        <strong className="text-base-subtitle font-bold mb-3 text-lg ">
          Publicações
        </strong>
        <span className="text-base-span text-sm">6 publicações</span>
      </div>
      <input
        className="bg-base-input text-base-text placeholder:text-base-label border border-base-border focus:outline-none focus:border-blue rounded-md p-3 px-4 flex flex-1 gap-2"
        type="search"
        placeholder="Buscar conteúdo"
      />
    </div>
  )
}
