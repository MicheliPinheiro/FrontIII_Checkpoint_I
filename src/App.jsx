import { useState } from 'react'
import { Card } from '../src/Card'
import { professors } from './database/professors'

// Aqui você irá criar os Estados para manipular os Inputs
function App() {
  const [professorName, setProfessorName] = useState('')
  const [course, setCourse] = useState('')
  const [professorPhoto, setProfessorPhoto] = useState('')
  const [formsError, setFormsError] = useState(false)
  const [allProfessors, setAllProfessors] = useState(professors)

  function registerProfessor(event) {
    event.preventDefault()

    let newId = allProfessors.length + 1;

    const newRegisteredProfessor = {
      id: newId,
      name: professorName,
      course: course,
      picture: professorPhoto
    }

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
    
  if ((professorName.trim().length < 3) || (course.trim().length < 6) || (!/[0-9]/.test(professorPhoto)) || (professorPhoto.trim().length < 9)) {
      setFormsError(true)
    } else {
      setFormsError(false)

      setAllProfessors([...allProfessors, newRegisteredProfessor])

      setProfessorName('')
      course('')
      professorPhoto('')
    }
  }

  return (
    <main className="component">
      <div className="tittle-wrapper">
        <h1>Indicação de Professores para Aulão</h1>
        <h2>Indique no formulário abaixo o nome do professor que você gostaria que ministrasse o Aulão!</h2>
      </div>

      <form
        className={formsError ? 'form-error' : ''}
        onSubmit={event => registerProfessor(event)}
      >
        <div>
          <label htmlFor="professorName">Nome: </label>
          <input
            id="professorName"
            type="text"
            value={professorName}
            placeholder="Escreva o nome do professor"
            onChange={event => setProfessorName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="course">Curso: </label>
          <input
            id="course"
            type="text"
            value={course}
            placeholder="Escreva o nome da disciplina que esse professor ministra"
            onChange={event => setCourse(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="professorPhoto">Link da Foto: </label>
          <input
            id="professorPhoto"
            type="text"
            value={professorPhoto}
            placeholder="Adicione o lind de uma imagem para esse professor"
            onChange={event => setProfessorPhoto(event.target.value)}
          />
        </div>

        <button type="submit">Indicar</button>
      </form>

      {formsError ? <span>Por favor, verifique os dados inseridos no formulário.</span> : null}

      <section className="professors">
        {allProfessors.map(({ id, name, course, picture }) => {
          return <Card key={id} name={name} position={course} picture={picture} />
        })}
      </section>
    </main>
  )
}

export default App