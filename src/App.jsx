import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState("landing");
  const [target, setTarget] = useState("");
  const [goal, setGoal] = useState("");
  const [challenge, setChallenge] = useState("");
  const [contact, setContact] = useState({
    email: "",
    name: "",
    company: "",
  });

  const startAnalysis = () => {
    if (!target.trim()) return;
    setStep("loading");

    setTimeout(() => {
      setStep("confirm");
    }, 2200);
  };

  const createReport = () => {
    if (!contact.email.trim()) return;
    setStep("generating");

    setTimeout(() => {
      setStep("report");
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
            <p>{goal || "아직 입력된 목표가 없습니다."}</p>
          </div>

          <p className="description">
            보다 정확한 분석을 위해 몇 가지 질문을 이어가겠습니다.
          </p>

          <div className="button-row">
            <button onClick={() => setStep("interview")}>
              질문을 이어갈게요
            </button>
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
            placeholder="자유롭게 입력해 주세요. 예: 홍보는 하고 있지만 실제 문의나 참여로 이어지지 않습니다."
            value={challenge}
            onChange={(e) => setChallenge(e.target.value)}
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

          <div className="summary-box">
            <p>
              <strong>목표</strong>
              <br />
              {goal || "입력된 목표 없음"}
            </p>
            <br />
            <p>
              <strong>현재 어려움</strong>
              <br />
              {challenge || "입력된 내용 없음"}
            </p>
          </div>

          <input
            className="text-input"
            placeholder="이메일 *"
            value={contact.email}
            onChange={(e) =>
              setContact({ ...contact, email: e.target.value })
            }
          />
          <input
            className="text-input"
            placeholder="이름"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
          <input
            className="text-input"
            placeholder="회사명"
            value={contact.company}
            onChange={(e) =>
              setContact({ ...contact, company: e.target.value })
            }
          />

          <button onClick={createReport}>보고서 생성하기</button>
        </div>
      </div>
    );
  }

  if (step === "generating") {
    return (
      <div className="dark-page">
        <div className="center-content">
          <p className="eyebrow">Insight Navigator Report</p>
          <h1>전략 보고서를 생성하고 있습니다.</h1>
          <p className="subtitle">
            SWOT을 정리하고 핵심 문제와 실행 전략을 도출하고 있습니다.
          </p>
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
              <strong>{target}</strong>의 현재 목표는 다음과 같이 정리됩니다.
              <br />
              {goal || "목표 정보가 충분하지 않습니다."}
            </p>
            <p>
              현재 가장 먼저 검토해야 할 부분은 사용자가 언급한 어려움,
              즉 <strong>{challenge || "핵심 문제 미입력"}</strong>을 전략적으로
              해석하는 것입니다.
            </p>
          </section>

          <section>
            <h2>입력 정보 요약</h2>
            <div className="info-grid">
              <div>
                <span>분석 대상</span>
                <strong>{target}</strong>
              </div>
              <div>
                <span>보고서 수신</span>
                <strong>{contact.email}</strong>
              </div>
              <div>
                <span>이름</span>
                <strong>{contact.name || "미입력"}</strong>
              </div>
              <div>
                <span>회사명</span>
                <strong>{contact.company || "미입력"}</strong>
              </div>
            </div>
          </section>

          <section className="swot-grid">
            <div>
              <h3>Strength</h3>
              <p>
                이미 운영 중인 대상과 목표가 존재하므로, 기존 자산과 경험을
                전략적으로 정리할 수 있습니다.
              </p>
            </div>
            <div>
              <h3>Weakness</h3>
              <p>
                현재 목표와 문제는 확인되었지만, 예산·인력·성과 데이터가
                부족하여 실행 가능성 평가는 제한적입니다.
              </p>
            </div>
            <div>
              <h3>Opportunity</h3>
              <p>
                AI 검색, 콘텐츠 정비, 타깃별 메시지 분리를 통해 새로운 노출과
                협력 기회를 만들 수 있습니다.
              </p>
            </div>
            <div>
              <h3>Threat</h3>
              <p>
                경쟁 대상 증가, 관심 분산, 메시지 불명확성은 향후 성장을
                제한할 수 있는 요인입니다.
              </p>
            </div>
          </section>

          <section>
            <h2>핵심 문제 정의</h2>
            <p>
              현재 문제는 단순히 홍보 부족이라기보다, 목표 고객에게 전달되는
              핵심 메시지와 실행 우선순위가 충분히 정리되지 않은 데 있을
              가능성이 높습니다.
            </p>
          </section>

          <section>
            <h2>추천 전략</h2>
            <ol>
              <li>핵심 타깃과 의사결정자를 분리해서 정의합니다.</li>
              <li>AI와 검색에 잘 노출되는 소개 콘텐츠를 정비합니다.</li>
              <li>이번 달 안에 실행 가능한 홍보·협력 액션을 3개로 줄입니다.</li>
            </ol>
          </section>

          <section>
            <h2>Quick Win</h2>
            <ul>
              <li>이번 주: 공식 소개문과 FAQ를 정리합니다.</li>
              <li>이번 달: 목표별 메시지를 분리합니다.</li>
              <li>3개월: 실행 결과를 바탕으로 재분석합니다.</li>
            </ul>
          </section>

          <section>
            <h2>프로젝트 저장 안내</h2>
            <p>
              이 보고서는 입력하신 이메일로 전달되며, 향후 동일 프로젝트의
              변화 추적과 재분석에 활용될 수 있습니다.
            </p>
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