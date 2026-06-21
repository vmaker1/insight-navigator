import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { target, goal, challenge, resources, attempts, successCriteria } = req.body;

    const prompt = `
당신은 전략 컨설턴트이자 AI 퍼실리테이터입니다.
아래 사용자의 입력을 바탕으로 한국어 전략 분석 보고서를 작성하세요.

분석 대상: ${target}
목표: ${goal}
현재 어려움: ${challenge}
보유 자원: ${resources}
기존 시도: ${attempts}
성공 기준: ${successCriteria}

반드시 아래 JSON 형식으로만 답하세요.

{
  "summary": "Executive Summary 문단",
  "diagnosis": "핵심 진단",
  "problem": "핵심 문제 정의",
  "swot": {
    "strength": "강점",
    "weakness": "약점",
    "opportunity": "기회",
    "threat": "위협"
  },
  "strategies": [
    "추천 전략 1",
    "추천 전략 2",
    "추천 전략 3"
  ],
  "quickWins": [
    "이번 주 실행 과제",
    "이번 달 실행 과제",
    "3개월 실행 과제"
  ]
}
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.4,
    });

    const text = completion.choices[0].message.content;
    const report = JSON.parse(text);

    return res.status(200).json({ report });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "AI 분석 오류" });
  }
}