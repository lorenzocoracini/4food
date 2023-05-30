export function Header() {
  return (
    <div className="bg-red-600 w-full h-16 flex items-center justify-between px-8">
      <h2>4FOOD</h2>
      <div>
        <ul className="flex w-72 justify-between">
          <li>Cardápio</li>
          <li>Localização</li>
          <li>Contato</li>
        </ul>
      </div>
    </div>
  );
}
