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

        <section className="executive-summary">
          <h2>Executive Summary</h2>

          <div className="summary-highlight">
            <h3>현재 종합 진단</h3>
            <p>
              <strong>{target}</strong>은 현재 명확한 분석 목표를 가지고 있으나,
              이를 실제 성과로 연결하기 위해서는 목표 고객, 메시지, 실행 우선순위를
              더 구체적으로 정리할 필요가 있습니다.
            </p>
          </div>

          <div className="summary-grid">
            <div>
              <span>분석 목표</span>
              <p>{goal || "목표 정보가 충분하지 않습니다."}</p>
            </div>

            <div>
              <span>현재 어려움</span>
              <p>{challenge || "현재 어려움에 대한 입력이 부족합니다."}</p>
            </div>

            <div>
              <span>핵심 문제</span>
              <p>
                단순한 홍보 부족이라기보다, 누구에게 어떤 가치를 전달할 것인지에
                대한 전략 메시지가 충분히 정리되지 않은 상태로 보입니다.
              </p>
            </div>

            <div>
              <span>핵심 기회</span>
              <p>
                AI 검색 노출, 공식 소개 콘텐츠 정비, 타깃별 메시지 분리를 통해
                더 넓은 고객과 협력 기회를 만들 수 있습니다.
              </p>
            </div>
          </div>

          <div className="strategy-rank">
            <h3>우선 실행 전략</h3>
            <ol>
              <li>
                <strong>핵심 타깃 재정의</strong>
                <p>참여자, 고객, 후원자, 협력자를 구분해 각각 다른 메시지를 설계합니다.</p>
              </li>
              <li>
                <strong>AI 검색 친화 콘텐츠 구축</strong>
                <p>홈페이지 소개문, FAQ, 블로그형 설명 콘텐츠를 정리해 AI와 검색엔진이 이해하기 쉽게 만듭니다.</p>
              </li>
              <li>
                <strong>실행 가능한 홍보 액션 압축</strong>
                <p>당장 실행 가능한 과제를 3개 이내로 줄여 실행력을 높입니다.</p>
              </li>
            </ol>
          </div>
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

        <section className="score-section">
          <h2>진단 점수</h2>
          <div className="score-grid">
            <div><span>시장성</span><strong>78</strong></div>
            <div><span>브랜드 신뢰도</span><strong>82</strong></div>
            <div><span>AI 노출도</span><strong>54</strong></div>
            <div><span>차별화 메시지</span><strong>61</strong></div>
            <div><span>실행 준비도</span><strong>68</strong></div>
            <div><span>기회 가능성</span><strong>84</strong></div>
          </div>
        </section>

        <section className="swot-grid">
          <div>
            <h3>Strength</h3>
            <p>기존 자산과 경험을 전략적으로 정리할 수 있는 기반이 있습니다.</p>
          </div>
          <div>
            <h3>Weakness</h3>
            <p>핵심 메시지와 실행 우선순위가 더 명확하게 정리될 필요가 있습니다.</p>
          </div>
          <div>
            <h3>Opportunity</h3>
            <p>AI 검색, 콘텐츠 정비, 협력 네트워크 확장 가능성이 있습니다.</p>
          </div>
          <div>
            <h3>Threat</h3>
            <p>경쟁 증가와 관심 분산에 대응하기 위한 차별화 전략이 필요합니다.</p>
          </div>
        </section>

        <section>
          <h2>핵심 문제 정의</h2>
          <p>
            현재 문제는 단순히 더 많이 알리는 것이 아니라, 누구에게 어떤 이유로
            선택되어야 하는지를 명확히 만드는 데 있습니다.
          </p>
        </section>

        <section>
          <h2>Quick Win</h2>
          <ul>
            <li>이번 주: 공식 소개문과 FAQ를 정리합니다.</li>
            <li>이번 달: 목표별 메시지를 분리합니다.</li>
            <li>3개월: 실행 결과를 바탕으로 재분석합니다.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}