import React, { useState } from 'react'
import { LogIn, UserPlus, Eye, EyeOff, User } from 'lucide-react'
import '../styles.css'

function SistemaAutenticacion() {
  const [activeTab, setActiveTab] = useState('login')
  const [mostrarPassword, setMostrarPassword] = useState(false)
  const [mensaje, setMensaje] = useState(null)
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.correo || !formData.password) {
      setMensaje({ tipo: 'error', texto: 'Por favor, completa todos los campos.' })
      return
    }

    if (activeTab === 'login') {
      setMensaje({ tipo: 'exito', texto: `Bienvenido de nuevo, ${formData.correo}` })
    } else {
      if (!formData.nombre) {
        setMensaje({ tipo: 'error', texto: 'El nombre es obligatorio para registrarse.' })
        return
      }
      setMensaje({ tipo: 'exito', texto: `Usuario registrado: ${formData.nombre}` })
    }

    // Limpia el formulario
    setFormData({ nombre: '', correo: '', password: '' })
  }

  return (
    <div className="main-container">
      <div className="auth-container">
        {/* PANEL LATERAL */}
        <div className="side-panel">
          <h1>SKY</h1>
          <p>BIENVENIDO</p>

          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">💜</div>
              <span>Diseño moderno</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <span>Seguridad garantizada</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <span>Rendimiento optimizado con Vite</span>
            </div>
          </div>
        </div>

        {/* PANEL DE FORMULARIO */}
        <div className="form-panel">
          <div className="tabs">
            <button
              className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Iniciar Sesión
            </button>
            <button
              className={`tab-button ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Registrarse
            </button>
          </div>

          {mensaje && (
            <div className={`mensaje ${mensaje.tipo}`}>
              {mensaje.texto}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {activeTab === 'register' && (
              <div className="form-group">
                <label className="form-label">Nombre completo</label>
                <div className="input-wrapper">
                  <User className="input-icon" size={18} />
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="input-field"
                  />
                </div>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Correo electrónico</label>
              <div className="input-wrapper">
                <LogIn className="input-icon" size={18} />
                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="ejemplo@correo.com"
                  className="input-field"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Contraseña</label>
              <div className="input-wrapper">
                <input
                  type={mostrarPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="input-field input-with-toggle"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setMostrarPassword(!mostrarPassword)}
                >
                  {mostrarPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              {activeTab === 'login' ? 'Ingresar' : 'Registrarse'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SistemaAutenticacion

