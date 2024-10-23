import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

interface ApiKeyManagerProps {
  userId: number;
}

const API_BASE_URL = 'http://localhost:8080/api/auth'; // 인증 서버 URL

const ApiKeyManager: React.FC<ApiKeyManagerProps> = ({ userId }) => {
  const [apiKey, setApiKey] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // API 키 발급 함수
  const generateApiKey = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/generate-key/${userId}`);
      setApiKey(response.data);
      setMessage('API 키가 발급되었습니다.');
    } catch (error) {
      console.error('API 키 발급 오류:', error);
      setMessage('API 키 발급에 실패했습니다.');
    }
  };

  // API 키 재발급 함수
  const regenerateApiKey = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/regenerate-key/${userId}`);
      setApiKey(response.data);
      setMessage('API 키가 재발급되었습니다.');
    } catch (error) {
      console.error('API 키 재발급 오류:', error);
      setMessage('API 키 재발급에 실패했습니다.');
    }
  };

  // API 키 유효성 검증 함수
  const validateApiKey = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/validate-key`, {
        params: { apiKey },
      });
      setMessage(response.data ? 'API 키가 유효합니다.' : 'API 키가 유효하지 않습니다.');
    } catch (error) {
      console.error('API 키 검증 오류:', error);
      setMessage('API 키 검증에 실패했습니다.');
    }
  };

  // API 키 입력 핸들러
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  return (
    <div className="api-key-manager">
      <h1>API 키 관리</h1>

      <div>
        <button onClick={generateApiKey}>API 키 발급</button>
        <button onClick={regenerateApiKey}>API 키 재발급</button>
      </div>

      <div>
        <input
          type="text"
          value={apiKey}
          onChange={handleInputChange}
          placeholder="API 키를 입력하세요"
          style={{ width: '300px' }}
        />
        <button onClick={validateApiKey}>API 키 검증</button>
      </div>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ApiKeyManager;
