'use client';

import Image from 'next/image';
import Chat from './components/Chat';

export default function Home() {
  return (
    <main className="App">
      <div className='container'>
        <div className='logoBox'>
          <Image src="/2.gif" alt="SuperViral.ai logo" width="200" height="90" />
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <p className='logoText'>This is an interface to talk to <span style={{color: 'gold', fontWeight: 'bold', backgroundColor: 'black', padding: '2px 5px'}}>Mr. Donald Trump.</span> Ask him anything you want unless you are a <span style={{color: 'red', fontStyle: 'italic', textDecoration: 'underline'}}>COMMIE</span>.</p>
            <Image src="/trump.jpg" alt="Icon" width="20" height="20" />
          </div>
        </div>
        <Chat />
      </div>
    </main>
  )
}
