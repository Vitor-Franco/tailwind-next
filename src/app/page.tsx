export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center bg-slate-50 p-6 text-center text-slate-900 dark:bg-slate-900 dark:text-slate-50">
      <div className="max-w-2xl">
        <h1 className="text-slate-900text-center text-3xl font-bold sm:text-5xl">
          Hello world
        </h1>

        <p className="mt-4 dark:text-slate-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nostrum
          magni ipsum expedita, earum fugiat enim dicta! Vero cupiditate,
          necessitatibus in, deleniti non, eum doloremque hic magni quisquam
          nobis fuga.
        </p>

        <button className="text-md mt-4 rounded-md bg-sky-600 px-4 py-2 font-medium text-white enabled:hover:bg-blue-950 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-sky-400 dark:text-sky-950">
          Sign in
        </button>
      </div>
    </div>
  )
}
