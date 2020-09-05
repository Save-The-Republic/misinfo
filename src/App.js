/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createMisInfo } from './graphql/mutations'
import { listMisInfos } from './graphql/queries'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [misInfos, setMisInfos] = useState([])

  useEffect(() => {
    fetchMisInfos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchMisInfos() {
    try {
      const misInfoData = await API.graphql(graphqlOperation(listMisInfos))
      const misInfos = misInfoData.data.listMisInfos.items
      setMisInfos(misInfos)
    } catch (err) { console.log('error fetching misinformation') }
  }

  async function addMisInfo() {
    try {
      if (!formState.name || !formState.description) return
      const misInfo = { ...formState }
      setMisInfos([...misInfos, misInfo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createMisInfo, {input: misInfo}))
    } catch (err) {
      console.log('error creating misinformation:', err)
    }
  }

  return (
    <div style={styles.container}>
      <h2>MisInfo</h2>
      <input
        onChange={event => setInput('fullname', event.target.value)}
        style={styles.input}
        value={formState.fullname} 
        placeholder="Full Name"
      />
      <input
        onChange={event => setInput('email', event.target.value)}
        style={styles.input}
        value={formState.email}
        placeholder="Email"
      /> 
      <input
        onChange={event => setInput('url', event.target.value)}
        style={styles.input}
        value={formState.url}
        placeholder="URL"
      />            
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addMisInfo}>Create Misinformation</button>
      {
        misInfos.map((misInfo, index) => (
          <div key={misInfo.id ? misInfo.id : index} style={styles.misInfo}>
            <p style={styles.misInfoFullName}>{misInfo.fullName}</p>
            <p style={styles.misInfoDescription}>{misInfo.description}</p>
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  misInfo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  misInfoFullName: { fontSize: 20, fontWeight: 'bold' },
  misInfoUrl: { fontSize: 20, fontWeight: 'bold' },
  misInfoEmail: { fontSize: 20, fontWeight: 'bold' },
  misInfoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App