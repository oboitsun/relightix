export default function ContactUsButton({ useDark = true }) {
  const dark = useDark ? `dark:bg-white dark:text-black` : ``
  return (
    <button
      className={`h-14 rounded-full w-full sm:w-auto px-8 uppercase bg-black   text-white  text-base ${dark}`}>
      Contact us
    </button>
  )
}
