import React, { useState } from "react";

export default function App() {
  const [step, setStep] = useState("landing");
  const [target, setTarget] = useState("");

  const startAnalysis = () => {
    if (!target.trim()) return;
    setStep("loading");

    setTimeout(() => {
      setStep("confirm");
    }, 2500);
  };

  if (step === "loading") {
    return (
      <div className="hero">
        <div className="content">
          <p className="eyebrow">Insight Navigator</p>
          <h1>분석 중입니다.</h1>
          <p className="subtitle">대상 정보를 확인하고 있습니다.</p>
        </div>
      </div>
    );
  }

  if (step === "confirm") {
    return (
      <div className="page light">
        <div className="report-card">
          <p className="eyebrow dark">Discovery</p>
          <h2>AI가 찾은 분석 대상</h2>

          <h1 className="target-title">{target}</h1>

          <p className="description">
            입력하신 대상을 기준으로 공개 자료와 기본 정보를 바탕으로
            현재 포지션을 정리했습니다.
          </p>

          <div className="info-grid">
            <div>
              <span>유형</span>
              <strong>브랜드 / 프로젝트</strong>
            </div>
            <div>
              <span>분석 방향</span>
              <strong>전략 진단</strong>
            </div>
            <div>
              <span>핵심 가치</span>
              <strong>추가 확인 필요</strong>
            </div>
            <div>
              <span>분석 신뢰도</span>
              <strong>62%</strong>
            </div>
          </div>

          <div className="button-row">
            <button onClick={() => setStep("goal")}>맞습니다</button>
            <button className="secondary" onClick={() => setStep("landing")}>
              수정할게요
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === "goal") {
    return (
      <div className="page light">
        <div className="report-card">
          <p className="eyebrow dark">Goal Setting</p>
          <h2>현재 가장 중요하게 생각하는 목표는 무엇인가요?</h2>

          <textarea
            className="goal-input"
            placeholder="예: 참가자를 늘리고 싶습니다. 후원사를 확보하고 싶습니다. 브랜드 인지도를 높이고 싶습니다."
          />

          <button>다음</button>
        </div>
      </div>
    );
  }

  return (
    <div className="hero">
      <div className="content">
        <p className="eyebrow">Powered by AI Facilitator</p>

        <h1>
          모든 답은
          <br />
          질문에서 시작됩니다.
        </h1>

        <p className="subtitle">더 나은 질문은 더 나은 전략을 만듭니다.</p>

        <div className="search-box">
          <input
            type="text"
            placeholder="어떤 대상을 분석해 드릴까요?"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") startAnalysis();
            }}
          />
          <button onClick={startAnalysis}>분석 시작</button>
        </div>

        <p className="examples">기업 · 브랜드 · 행사 · 기관 · 프로젝트</p>
      </div>
    </div>
  );
}