import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState("landing");
  const [target, setTarget] = useState("");
  const [goal, setGoal] = useState("");

  const startAnalysis = () => {
    if (!target.trim()) return;
    setStep("loading");

    setTimeout(() => {
      setStep("confirm");
    }, 2200);
  };

  if (step === "loading") {
    return (
      <div className="dark-page">
        <div className="center-content">
          <p className="eyebrow">Insight Navigator</p>
          <h1>분석 중입니다.</h1>
          <p className="subtitle">대상 정보를 확인하고 있습니다.</p>
        </div>
      </div>
    );
  }

  if (step === "confirm") {
    return (
      <div className="light-page">
        <div className="card">
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
      <div className="light-page">
        <div className="card">
          <p className="eyebrow dark">Goal Setting</p>
          <h2>현재 가장 중요하게 생각하는 목표는 무엇인가요?</h2>

          <textarea
            className="goal-input"
            placeholder="예: 참가자를 늘리고 싶습니다. 후원사를 확보하고 싶습니다. 브랜드 인지도를 높이고 싶습니다."
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />

          <button onClick={() => setStep("goalSummary")}>다음</button>
        </div>
      </div>
    );
  }

  if (step === "goalSummary") {
    return (
      <div className="light-page">
        <div className="card">
          <p className="eyebrow dark">AI Facilitator</p>
          <h2>제가 이해한 목표는 다음과 같습니다.</h2>

          <div className="summary-box">
            <p>{goal}</p>
          </div>

          <p className="description">
            보다 정확한 분석을 위해 몇 가지 질문을 이어가겠습니다.
          </p>

          <div className="button-row">
            <button onClick={() => setStep("interview")}>질문을 이어갈게요</button>
            <button className="secondary" onClick={() => setStep("goal")}>
              수정할게요
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === "interview") {
    return (
      <div className="light-page">
        <div className="card">
          <p className="eyebrow dark">Interview</p>
          <h2>현재 가장 어려운 부분은 무엇인가요?</h2>

          <textarea
            className="goal-input"
            placeholder="자유롭게 입력해 주세요."
          />

          <p className="accuracy">현재 분석 정확도 72%</p>

          <button onClick={() => setStep("email")}>다음</button>
        </div>
      </div>
    );
  }

  if (step === "email") {
    return (
      <div className="light-page">
        <div className="card">
          <p className="eyebrow dark">Report</p>
          <h2>분석 보고서를 생성할 준비가 되었습니다.</h2>

          <div className="info-grid">
            <div>
              <span>분석 대상</span>
              <strong>{target}</strong>
            </div>
            <div>
              <span>분석 정확도</span>
              <strong>82%</strong>
            </div>
          </div>

          <input className="text-input" placeholder="이메일 *" />
          <input className="text-input" placeholder="이름" />
          <input className="text-input" placeholder="회사명" />

          <button onClick={() => setStep("report")}>보고서 생성하기</button>
        </div>
      </div>
    );
  }

  if (step === "report") {
    return (
      <div className="report-page">
        <div className="report-container">
          <p className="eyebrow dark">Insight Navigator Report</p>
          <h1>{target} 전략 분석 보고서</h1>

          <section>
            <h2>Executive Summary</h2>
            <p>
              현재 가장 중요한 과제는 목표를 명확히 하고, 이를 실행 가능한
              전략으로 전환하는 것입니다.
            </p>
          </section>

          <section className="swot-grid">
            <div><h3>Strength</h3><p>기존 자산과 신뢰 기반을 활용할 수 있습니다.</p></div>
            <div><h3>Weakness</h3><p>핵심 메시지와 실행 우선순위가 더 명확해야 합니다.</p></div>
            <div><h3>Opportunity</h3><p>AI 검색, 콘텐츠, 협력 네트워크 확장 가능성이 있습니다.</p></div>
            <div><h3>Threat</h3><p>경쟁 증가와 관심 분산에 대응해야 합니다.</p></div>
          </section>

          <section>
            <h2>핵심 문제 정의</h2>
            <p>
              현재 문제는 단순 홍보 부족보다, 목표 고객에게 전달되는 메시지와
              실행 구조가 충분히 정리되지 않은 데 있을 가능성이 높습니다.
            </p>
          </section>

          <section>
            <h2>추천 전략</h2>
            <ol>
              <li>핵심 타깃을 다시 정의합니다.</li>
              <li>AI와 검색에 잘 노출되는 소개 콘텐츠를 정비합니다.</li>
              <li>바로 실행 가능한 협력·홍보 액션을 정리합니다.</li>
            </ol>
          </section>

          <section>
            <h2>Quick Win</h2>
            <ul>
              <li>이번 주: 소개문과 FAQ 정리</li>
              <li>이번 달: 핵심 타깃별 메시지 분리</li>
              <li>3개월: 실행 결과를 바탕으로 재분석</li>
            </ul>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="dark-page">
      <div className="center-content">
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