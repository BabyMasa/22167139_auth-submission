import React, { useState } from 'react';

function AuthForm({ isLogin }) {
  return (
    <div style={{
      padding: 20,
      maxWidth: 400,
      margin: 'auto',
      background: '#fff',
      borderRadius: 10,
      boxShadow: '0 0 10px #ccc'
    }}>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <input placeholder="Username" style={{ display: 'block', marginBottom: 10, width: '100%', padding: 8 }} />
      <input placeholder="Password" type="password" style={{ display: 'block', marginBottom: 10, width: '100%', padding: 8 }} />
      <button style={{ padding: '10px 20px', backgroundColor: '#2c3e50', color: '#fff', border: 'none', borderRadius: 5 }}>
        {isLogin ? "Login" : "Sign Up"}
      </button>
    </div>
  );
}

export default function App() {
  const [loginMode, setLoginMode] = useState(true);
  return (
    <div style={{ background: '#eee', height: '100vh', paddingTop: 100 }}>
      <AuthForm isLogin={loginMode} />
      <p style={{ textAlign: 'center', marginTop: 20 }}>
        {loginMode ? "No account?" : "Already have an account?"}
        <button onClick={() => setLoginMode(!loginMode)} style={{ marginLeft: 8, background: 'none', border: 'none', color: '#007bff', cursor: 'pointer' }}>
          {loginMode ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}
