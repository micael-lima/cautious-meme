import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Login from './Components/Login';
import ChatRoom from './Components/ChatRoom';

firebase.initializeApp({
  apiKey: 'AIzaSyDT-mJUv508vk6t67QJ0PXgwwKiBR8wfLU',
  authDomain: 'firechat-d647b.firebaseapp.com',
  databaseURL: 'https://firechat-d647b.firebaseio.com',
  projectId: 'firechat-d647b',
  storageBucket: 'firechat-d647b.appspot.com',
  messagingSenderId: '1071219460948',
  appId: '1:1071219460948:web:7e301581fc21f73da996c1',
  measurementId: 'G-8T8Q9BKN3K',
});

function App() {
  const [user, loading, error] = useAuthState(firebase.auth());

  const messagesRef = firebase.firestore().collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const loginWithGoogle = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  const logout = () => {
    firebase.auth().signOut();
  }

  const sendMessage = async (text) => {
    const { uid, photoURL } = firebase.auth().currentUser;

    await messagesRef.add({
      uid,
      photoURL,
      text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  if (loading) {
    return (
      <div>
        <p>Inicializando Usuário...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Erro: {error}</p>
      </div>
    );
  }

  if (user) return <ChatRoom 
                    user={ user } 
                    messages={ messages }
                    logout={ logout }
                    sendMessage={ sendMessage } />;

  return <Login loginWithGoogle={ loginWithGoogle } />;
}

export default App;
