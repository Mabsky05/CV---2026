function About() {
  return (
    <div className = "flex flex-col h-full mt-24 items-center justify-center gap-3.5" >
      <h1 className="flex flex-row items-baseline justify-center gap-3.5 p-4">
        <h2 className="text-5xl">A tiny folio website.</h2> 
        <h2 className="text-4xl text-gray-500">React / Vite / TailwindCSS.</h2>
      </h1>
      <h2 className="text-3xl">Pieces of personal and professional work collected and recorded over time.</h2>
      <h2 className="text-3xl">Perhaps to be edited.</h2>
      <h2 className="text-4xl p-4">Other Links:</h2>
      <h3 className="text-4xl text-gray-500">
        <a href="https://github.com/Mabsky05"
        target="_blank"
        rel="noopener noreferrer">Git
        </a>
      </h3>
      <h3 className="text-4xl text-gray-500">
        <a href="https://www.linkedin.com/in/miguel-afable-91191b26/?isSelfProfile=true"
        target="_blank"
        rel="noopener noreferrer">LinkedIn</a>
      </h3>
    </div>
  )
}

export default About
