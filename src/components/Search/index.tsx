export function Search() {
  return (
    <div className="mx-auto w-full flex flex-col ">
      <div className="flex justify-between">
        <strong className="text-base-subtitle font-bold text-lg ">
          Publicações
        </strong>
        <span className="text-base-span text-sm">6 publicações</span>
      </div>
      <input
        className="bg-base-input text-base-text placeholder:text-base-label mt-3 border border-base-border rounded-md p-3 px-4 flex flex-1 gap-2"
        type="search"
        placeholder="Buscar conteúdo"
      />
    </div>
  )
}
