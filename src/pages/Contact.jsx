import { useEffect, useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name:'', email:'', type:'propun', title:'', message:''
  })
  const [status, setStatus] = useState('idle')

useEffect(() => {
  const saved = localStorage.getItem('lastContact')
  if (!saved) return
  try {
    const parsed = JSON.parse(saved)
    setForm(f => ({ ...f, ...parsed }))
  } catch (err) {
    console.warn('lastContact parse failed:', err)
  }
}, [])


  const isFilled = Boolean(
    form.name.trim() &&
    form.email.trim() &&
    form.message.trim() &&
    (form.type !== 'propun' || form.title.trim())
  )

  function onChange(e){
    const { name, value } = e.target
    setForm(f => ({...f, [name]: value}))
  }

  function onSubmit(e){
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      localStorage.setItem('lastContact', JSON.stringify(form))
      setStatus('success')
    }, 600)
  }

  return (
    <>
      <h1>Trimite o rețetă sau cere una</h1>
      {status==='success' && <p className="success">Mulțumim! Ți-am înregistrat mesajul.</p>}

      <form className="form" onSubmit={onSubmit} noValidate>
        <label>Nume<input name="name" value={form.name} onChange={onChange} /></label>
        <label>Email<input name="email" /* poate rămâne */ type="email" value={form.email} onChange={onChange} /></label>
        <label>Tip cerere
          <select name="type" value={form.type} onChange={onChange}>
            <option value="propun">Propun o rețetă</option>
            <option value="cer">Cere o rețetă</option>
          </select>
        </label>
        {form.type==='propun' && (
          <label>Titlu rețetă
            <input name="title" value={form.title} onChange={onChange}/>
          </label>
        )}
        <label>Mesaj<textarea name="message" rows="5" value={form.message} onChange={onChange} /></label>

        <button className="btn" disabled={status==='submitting' || !isFilled}>
          {status==='submitting' ? 'Se trimite…' : 'Trimite'}
        </button>
      </form>
    </>
  )
}
