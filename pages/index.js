import { useState } from 'react'
import styles from '../styles/Home.module.css'

import Pdf from '../components/Pdf'
import { PDFViewer } from '@react-pdf/renderer'

export default function Home() {
  const [firstName, setFirstName] = useState("");

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="first_name">First name:</label>
        &nbsp;
        <input type="text" name="first_name" onChange={e => setFirstName(e.target.value)}/>
      </div>
      {
        typeof window !== 'undefined' && (
          <PDFViewer style={{ width: '100%', height: '800px' }}>
            <Pdf firstName={firstName} />
          </PDFViewer>
        )
      }
    </div>
  )
}
