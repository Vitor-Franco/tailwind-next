export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen p-6 text-center dark:bg-slate-900 dark:text-slate-50 bg-slate-50 text-slate-900">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold sm:text-5xl text-slate-900text-center">
          Hello world
        </h1>

        <p className="mt-4 dark:text-slate-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nostrum
          magni ipsum expedita, earum fugiat enim dicta! Vero cupiditate,
          necessitatibus in, deleniti non, eum doloremque hic magni quisquam
          nobis fuga.
        </p>

        <button className="px-4 py-2 mt-4 font-medium text-white rounded-md bg-sky-600 dark:bg-sky-400 text-md dark:text-sky-950 enabled:hover:bg-blue-950 disabled:opacity-60 disabled:cursor-not-allowed">
          Sign in
        </button>
      </div>
    </div>
  );
}
