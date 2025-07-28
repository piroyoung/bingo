import { useState, useCallback } from "react";

interface BingoState {
  maxNumber: number;
  drawnNumbers: number[];
  currentNumber: number | null;
  isGameStarted: boolean;
  isGameFinished: boolean;
}

export default function Index() {
  const [bingoState, setBingoState] = useState<BingoState>({
    maxNumber: 75,
    drawnNumbers: [],
    currentNumber: null,
    isGameStarted: false,
    isGameFinished: false,
  });
  
  const [inputValue, setInputValue] = useState("75");
  const [error, setError] = useState("");

  const startGame = useCallback(() => {
    const maxNum = parseInt(inputValue);
    if (isNaN(maxNum) || maxNum < 1 || maxNum > 1000) {
      setError("1から1000までの数字を入力してください");
      return;
    }
    
    setError("");
    setBingoState({
      maxNumber: maxNum,
      drawnNumbers: [],
      currentNumber: null,
      isGameStarted: true,
      isGameFinished: false,
    });
  }, [inputValue]);

  const drawNextNumber = useCallback(() => {
    if (bingoState.drawnNumbers.length >= bingoState.maxNumber) {
      setBingoState(prev => ({ ...prev, isGameFinished: true }));
      return;
    }

    const availableNumbers = [];
    for (let i = 1; i <= bingoState.maxNumber; i++) {
      if (!bingoState.drawnNumbers.includes(i)) {
        availableNumbers.push(i);
      }
    }

    if (availableNumbers.length === 0) {
      setBingoState(prev => ({ ...prev, isGameFinished: true }));
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const newNumber = availableNumbers[randomIndex];

    setBingoState(prev => ({
      ...prev,
      currentNumber: newNumber,
      drawnNumbers: [...prev.drawnNumbers, newNumber],
      isGameFinished: prev.drawnNumbers.length + 1 >= prev.maxNumber,
    }));
  }, [bingoState.drawnNumbers, bingoState.maxNumber]);

  const resetGame = useCallback(() => {
    setBingoState({
      maxNumber: 75,
      drawnNumbers: [],
      currentNumber: null,
      isGameStarted: false,
      isGameFinished: false,
    });
    setInputValue("75");
    setError("");
  }, []);

  const renderNumbersGrid = () => {
    const numbers = [];
    for (let i = 1; i <= bingoState.maxNumber; i++) {
      numbers.push(
        <div
          key={i}
          className={`number-item ${bingoState.drawnNumbers.includes(i) ? 'drawn' : ''}`}
        >
          {i}
        </div>
      );
    }
    return numbers;
  };

  if (!bingoState.isGameStarted) {
    return (
      <div>
        <h1>🎯 ビンゴゲーム</h1>
        <div className="input-group">
          <label htmlFor="maxNumber">
            数字の範囲を入力してください（例：39で1-39の範囲）
          </label>
          <input
            id="maxNumber"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="例: 39"
            min="1"
            max="1000"
          />
          {error && <div className="error">{error}</div>}
        </div>
        <button onClick={startGame}>ゲーム開始</button>
      </div>
    );
  }

  return (
    <div>
      <h1>🎯 ビンゴゲーム</h1>
      
      <div className="game-info">
        <p><strong>数字の範囲:</strong> 1 〜 {bingoState.maxNumber}</p>
        <p><strong>抽選済み:</strong> {bingoState.drawnNumbers.length} / {bingoState.maxNumber}</p>
        <p><strong>残り:</strong> {bingoState.maxNumber - bingoState.drawnNumbers.length}</p>
      </div>

      {bingoState.currentNumber && (
        <div className="current-number">
          <h2>当選番号</h2>
          <div className="number">{bingoState.currentNumber}</div>
        </div>
      )}

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button
          onClick={drawNextNumber}
          disabled={bingoState.isGameFinished}
        >
          {bingoState.currentNumber ? 'Next' : '最初の番号を抽選'}
        </button>
        <button onClick={resetGame}>リセット</button>
      </div>

      {bingoState.isGameFinished && (
        <div style={{ 
          textAlign: 'center', 
          backgroundColor: '#d4edda', 
          color: '#155724',
          padding: '15px',
          borderRadius: '4px',
          margin: '20px 0',
          border: '1px solid #c3e6cb'
        }}>
          <h3>🎉 ゲーム終了！</h3>
          <p>すべての番号が抽選されました。</p>
        </div>
      )}

      {bingoState.drawnNumbers.length > 0 && (
        <div className="drawn-numbers">
          <h3>抽選された番号</h3>
          <div className="numbers-grid">
            {renderNumbersGrid()}
          </div>
        </div>
      )}
    </div>
  );
}