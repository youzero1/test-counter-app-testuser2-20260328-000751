import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Counter App</h1>
      <div style={styles.countDisplay}>{count}</div>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button style={styles.button} onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333',
  },
  countDisplay: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#2c3e50',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
}

export default App
