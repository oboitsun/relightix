export default function Logo() {
  const items = [
    'bg-yellow-400 rounded-10',
    'bg-purple-700 rounded-tr-100 rounded-10 ',
    'bg-green-500 rounded-10',
    'bg-blue-500 rounded-10',
    'bg-yellow-500 rounded-10 rounded-br-100',
    'bg-blue-500 rounded-10',
    'bg-green-500 rounded-10',
    'bg-purple-700 rounded-10 rounded-bl-100',
    'bg-yellow-400 rounded-10 rounded-bl-100',
  ]

  return (
    <div className='w-full h-full auto-cols-fr auto-rows-fr grid grid-cols-3 grid-rows-3 gap-10p'>
      {items.map(
        (it, i) =>
          i < items.length && (
            <div key={i} className={`flex justify-center items-center ${it} shadow-md `}></div>
          )
      )}
    </div>
  )
}
