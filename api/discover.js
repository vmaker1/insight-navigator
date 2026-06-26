import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { target } = req.body;
  if (!target || !target.trim()) {
    return res.status(400).json({ error: "분석 대상이 필요합니다." });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `너는 기업/브랜드/행사/기관/프로젝트 분석 전문가야.
사용자가 입력한 대상에 대해 네가 아는 정보를 바탕으로 개요를 정리해.
반드시 아래 JSON 형식으로만 응답해. 다른 텍스트는 절대 넣지 마.
{
  "summary": "대상에 대한 2~3문장 요약",
  "type": "유형 (예: 기업, 브랜드, 공공기관, 행사, 프로젝트)",
  "industry": "산업군/분야",
  "coreValue": "핵심 가치 한 문장",
  "confidence": 0~100 숫자 (잘 아는 대상일수록 높게)
}`,
        },
        { role: "user", content: `분석 대상: ${target}` },
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const discovery = JSON.parse(completion.choices[0].message.content);
    return res.status(200).json({ discovery });
  } catch (error) {
    console.error("Discover API error:", error);
    return res.status(500).json({ error: "대상 분석 중 오류가 발생했습니다." });
  }
}