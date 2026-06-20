import React from "react";

export default function App() {
  return (
    <div className="hero">
      <div className="overlay" />

      <div className="content">
        <p className="eyebrow">Powered by AI Facilitator</p>

        <h1>
          모든 답은
          <br />
          질문에서 시작됩니다.
        </h1>

        <p className="subtitle">
          더 나은 질문은 더 나은 전략을 만듭니다.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="어떤 대상을 분석해 드릴까요?"
          />
          <button>분석 시작</button>
        </div>

        <p className="examples">
          기업 · 브랜드 · 행사 · 기관 · 프로젝트
        </p>
      </div>
    </div>
  );
}