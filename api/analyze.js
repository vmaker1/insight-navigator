import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { target, goal, challenge, resources, attempts, successCriteria } = req.body;
  if (!target || !target.trim()) {
    return res.status(400).json({ error: "분석 대상이 필요합니다." });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `너는 친절한 퍼실리테이터이자 설득력 있는 전략 컨설턴트야.
대상과 인터뷰 답변을 바탕으로 "와, 진짜 조사했네" 소리가 나올 만큼 구체적이고 대상 특화된 전략 보고서를 써.
일반론·뻔한 SWOT 금지. 반드시 아래 JSON 형식으로만 응답하고 다른 텍스트는 넣지 마.
{
  "summary": "현재 종합 진단 3~4문장",
  "insights": ["AI 핵심 발견 5개, 각각 구체적인 한 문장"],
  "risks": ["AI 위험 신호 3개, 각각 짧은 구절"],
  "scores": {
    "market": 0~100, "brand": 0~100, "aiVisibility": 0~100,
    "differentiation": 0~100, "readiness": 0~100, "opportunity": 0~100
  },
  "swot": {
    "strength": "2~3문장", "weakness": "2~3문장",
    "opportunity": "2~3문장", "threat": "2~3문장"
  },
  "problem": "핵심 문제 정의 3~4문장",
  "strategies": ["추천 전략 3개"],
  "quickWins": ["이번 주 / 이번 달 / 3개월 단위 실행 과제 3개"]
}
점수는 입력의 구체성·완성도를 반영해 현실적으로 매겨.`,
        },
        {
          role: "user",
          content: `분석 대상: ${target}
목표: ${goal || "(미입력)"}
현재 어려운 문제: ${challenge || "(미입력)"}
활용 가능한 자원: ${resources || "(미입력)"}
지금까지 시도한 방법: ${attempts || "(미입력)"}
성공 기준: ${successCriteria || "(미입력)"}`,
        },
      ],
      response_format: { type: "json_object" },
      temperature: 0.8,
    });

    const report = JSON.parse(completion.choices[0].message.content);
    return res.status(200).json({ report });
  } catch (error) {
    console.error("Analyze API error:", error);
    return res.status(500).json({ error: "AI 분석 중 오류가 발생했습니다." });
  }
}