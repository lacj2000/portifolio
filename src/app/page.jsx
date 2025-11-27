

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold">Bem-vindo ao meu Portifólio (Next.js)</h1>
      <p className="mt-3 text-lg">Estrutura: <code>src/app/</code>, <code>src/app/api/</code>, <code>public/</code>.</p>
      <p className="mt-3">
        API exemplo: <a className="text-blue-600 underline" href="/api/hello">/api/hello</a>
      </p>
    </main>
  )
}


export default Home;