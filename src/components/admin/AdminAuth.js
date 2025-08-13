'use client';
import React, { useState } from 'react';

const AdminAuth = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password check - you can change this password
    if (password === 'studysure2024') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">StudySure Admin</h1>
            <p className="text-gray-600">Enter password to access dashboard</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#034833] focus:border-transparent"
                required
              />
            </div>
            
            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}
            
            <button
              type="submit"
              className="w-full bg-[#034833] text-white py-3 rounded-lg hover:bg-[#023529] transition-colors"
            >
              Login to Dashboard
            </button>
          </form>
          
          <div className="mt-4 text-xs text-gray-500 text-center">
            Default password: studysure2024
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default AdminAuth;
